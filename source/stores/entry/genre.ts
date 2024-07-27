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
    const value = (data as Genre[]).at(0);
    return value;
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
    const value = (data as Genre[]).at(0);
    return value;
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

  return {
    genres,
    getGenres,
    searchGenres,
    defaultGenre,
    createGenre,
    updateGenre,
    deleteGenre,
  };
});
