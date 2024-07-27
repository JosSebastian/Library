import { type Entry } from "~/stores/entry/entry";

export type Genre = {
  genre_id: string | undefined;
  user_id: string | undefined;
  genre_name: string | undefined;
};

export const useGenresStore = defineStore("genres", () => {
  const clientstore = useClientStore();
  const client = clientstore.client;

  const userstore = useUserStore();
  const user = computed(() => userstore.user);

  const genres = useState<Genre[]>();
  const getGenres = async () => {
    const { data, error } = await client
      .from("genres")
      .select("*")
      .order("genre_name", { ascending: true });
    if (error) {
      throw error;
    }
    genres.value = data as Genre[];
    return genres.value;
  };

  const searchGenres = async (search: string) => {
    const { data, error } = await client
      .from("genres")
      .select("*")
      .order("genre_name", { ascending: true })
      .ilike("genre_name", `%${search}%`);
    if (error) {
      throw error;
    }
    return data as Genre[];
  };

  const defaultGenre = () => {
    return {
      genre_id: undefined,
      user_id: undefined,
      genre_name: undefined,
    } as Genre;
  };

  const createGenre = async (genre: Genre) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("genres")
      .insert([
        {
          user_id: user.value.id,
          genre_name: genre.genre_name,
        },
      ])
      .select();
    if (error) {
      throw error;
    }
    return (data as Genre[]).at(0);
  };

  const updateGenre = async (genre: Genre) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("genres")
      .update({
        genre_name: genre.genre_name,
      })
      .eq("genre_id", genre.genre_id)
      .select();
    if (error) {
      throw error;
    }
    return (data as Genre[]).at(0);
  };

  const deleteGenre = async (genre: Genre) => {
    if (user.value == null) return;

    const { error } = await client
      .from("genres")
      .delete()
      .eq("genre_id", genre.genre_id);
    if (error) {
      throw error;
    }
    return defaultGenre();
  };

  const getGenreEntries = async (entry: Entry) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("genres_entries")
      .select(
        `
        genre_id,
        genres (*)
        `
      )
      .eq("entry_id", entry.entry_id);
    if (error) {
      throw error;
    }
    return data.map((data) => data.genres) as unknown as Genre[];
  };

  const createGenresEntries = async (genre: Genre[], entry: Entry) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("genres_entries")
      .insert(
        genre.map((genre) => {
          return {
            genre_id: genre.genre_id,
            entry_id: entry.entry_id,
            user_id: user.value?.id,
          };
        })
      )
      .select();
    if (error) {
      throw error;
    }
    data;
    return genre;
  };

  const updateGenresEntries = async (genre: Genre[], entry: Entry) => {
    if (user.value == null) return;

    await deleteGenresEntries(genre, entry);
    await createGenresEntries(genre, entry);
    return genre;
  };

  const deleteGenresEntries = async (genre: Genre[], entry: Entry) => {
    if (user.value == null) return;

    const { error } = await client
      .from("genres_entries")
      .delete()
      .eq("entry_id", entry.entry_id);
    if (error) {
      throw error;
    }
    return genre;
  };

  return {
    genres,
    getGenres,
    searchGenres,
    defaultGenre,
    createGenre,
    updateGenre,
    deleteGenre,
    getGenreEntries,
    createGenresEntries,
    updateGenresEntries,
    deleteGenresEntries,
  };
});
