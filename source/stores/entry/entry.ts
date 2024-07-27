export type Entry = {
  entry_id: string | undefined;
  user_id: string | undefined;
  entry_name: string | undefined;
  entry_description: string | undefined;
  entry_time_first: string | undefined;
  entry_time_last: string | undefined;
};

export const useEntriesStore = defineStore("entries", () => {
  const clientstore = useClientStore();
  const client = clientstore.client;

  const userstore = useUserStore();
  const user = computed(() => userstore.user);

  const entries = useState<Entry[]>();
  const getEntries = async () => {
    const { data, error } = await client
      .from("entries")
      .select("*")
      .order("entry_name", { ascending: true });
    if (error) {
      throw error;
    }
    entries.value = data as Entry[];
    return entries.value;
  };

  const searchEntries = async (search: string) => {
    const { data, error } = await client
      .from("entries")
      .select("*")
      .order("entry_name", { ascending: true })
      .ilike("entry_name", `%${search}%`);
    if (error) {
      throw error;
    }
    return data as Entry[];
  };

  const defaultEntry = () => {
    return {
      entry_id: undefined,
      user_id: undefined,
      entry_name: undefined,
      entry_description: undefined,
      entry_time_first: undefined,
      entry_time_last: undefined,
    } as Entry;
  };

  const createEntry = async (entry: Entry) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("entries")
      .insert([
        {
          user_id: user.value.id,
          entry_name: entry.entry_name,
          entry_description: entry.entry_description,
          entry_time_first: new Date().toISOString(),
          entry_time_last: new Date().toISOString(),
        },
      ])
      .select();
    if (error) {
      throw error;
    }
    return (data as Entry[]).at(0);
  };

  const updateEntry = async (entry: Entry) => {
    if (user.value == null) return;

    const { data, error } = await client
      .from("entries")
      .update({
        entry_name: entry.entry_name,
        entry_description: entry.entry_description,
        entry_time_first: entry.entry_time_first,
        entry_time_last: new Date().toISOString(),
      })
      .eq("entry_id", entry.entry_id)
      .select();
    if (error) {
      throw error;
    }
    return (data as Entry[]).at(0);
  };

  const deleteEntry = async (entry: Entry) => {
    if (user.value == null) return;

    const { error } = await client
      .from("entries")
      .delete()
      .eq("entry_id", entry.entry_id);
    if (error) {
      throw error;
    }
    return defaultEntry();
  };

  return {
    entries,
    getEntries,
    searchEntries,
    defaultEntry,
    createEntry,
    updateEntry,
    deleteEntry,
  };
});
