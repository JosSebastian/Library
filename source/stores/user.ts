import type { User } from "@supabase/supabase-js";

export const useUserStore = defineStore("user", () => {
  const clientstore = useClientStore();
  const client = clientstore.client;

  const user = useState<User | undefined>();
  const getUser = async () => {
    const { data, error } = await client.auth.getSession();
    if (error) {
      throw error;
    }
    user.value = data?.session?.user ?? undefined;
    return user.value;
  };
  getUser();

  const creadentials = useState<{
    name: { first: string; last: string };
    email: string;
    password: string;
    error: string | null;
  }>(() => {
    return {
      name: { first: "", last: "" },
      email: "",
      password: "",
      error: null,
    };
  });
  const getCreadentials = () => {
    creadentials.value = {
      name: { first: "", last: "" },
      email: "",
      password: "",
      error: null,
    };
  };
  getCreadentials();

  const signUp = async () => {
    try {
      const { data, error } = await client.auth.signUp({
        email: creadentials.value.email,
        password: creadentials.value.password,
        options: {
          data: {
            name: creadentials.value.name,
          },
        },
      });
      if (error) {
        creadentials.value.password = "";
        creadentials.value.error = error.message;
        throw error;
      }
      user.value = data?.user ?? undefined;
      getCreadentials();
      return user.value;
    } catch (error) {
      console.error(error);
    }
  };
  const signIn = async () => {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: creadentials.value.email,
        password: creadentials.value.password,
      });
      if (error) {
        creadentials.value.password = "";
        creadentials.value.error = error.message;
        throw error;
      }
      user.value = data?.user ?? undefined;
      getCreadentials();
      return user.value;
    } catch (error) {
      console.error(error);
    }
  };
  const signOut = async () => {
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        throw error;
      }
      user.value = undefined;
      return user.value;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    getUser,
    creadentials,
    getCreadentials,
    signUp,
    signIn,
    signOut,
  };
});
