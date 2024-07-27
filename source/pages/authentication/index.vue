<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const userstore = useUserStore();

const creadentials = computed(() => userstore.creadentials);
const show = useState<boolean>(() => false);

const signs = ["up", "in", "out"];
const sign = computed(() => {
  const sign = route.query.sign as (typeof signs)[0];
  const valid = signs.includes(sign);
  return valid ? sign : signs[0];
});

const toggleSign = () => {
  switch (sign.value) {
    case "up":
      router.push({
        query: {
          sign: "in",
        },
      });
      break;
    case "in":
      router.push({
        query: {
          sign: "up",
        },
      });
      break;
  }
};

const handleCancel = () => {
  userstore.creadentials = {
    name: {
      first: "",
      last: "",
    },
    email: "",
    password: "",
    error: null,
  };
  router.push({
    path: "/",
  });
};
const handleConfirm = async () => {
  let user = userstore.user;
  switch (sign.value) {
    case "up":
      user = await userstore.signUp();
      if (user) {
        router.push({ path: "/authentication/confirmation" });
      }
      break;
    case "in":
      user = await userstore.signIn();
      if (user) {
        router.push({
          path: "/app",
        });
      }
      break;
    case "out":
      user = await userstore.signOut();
      if (!user) {
        router.push({
          path: "/",
        });
      }
      break;
  }
};
</script>

<template>
  <div class="w-full h-full m-0 p-3 flex-grow flex flex-col gap-3">
    <!-- Header -->
    <header class="w-full h-fit m-0 px-3 py-0">
      <HomeHeader />
    </header>

    <UDivider />

    <!-- Body -->
    <main
      class="w-full h-full m-0 p-3 grow flex flex-col justify-center items-center gap-6"
    >
      <!-- Section #1 -->
      <section class="w-full h-full grow flex justify-center">
        <div
          class="max-w-96 max-h-none grow flex flex-col justify-center items-center gap-6"
        >
          <!-- Top -->
          <div class="w-full h-fit">
            <p
              class="text-3xl text-center text-violet-600 dark:text-violet-400"
            >
              Sign {{ sign.at(0)?.toUpperCase() + sign.slice(1) }}
            </p>
          </div>

          <!-- Middle -->
          <div v-if="sign != 'out'" class="w-full h-fit flex flex-col gap-3">
            <div v-if="sign != 'in'" class="flex gap-3">
              <div class="w-full h-fit">
                <p>First Name</p>
                <UInput v-model="creadentials.name.first" />
              </div>

              <div class="w-full h-fit">
                <p>Last Name</p>
                <UInput v-model="creadentials.name.last" />
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <div>
                <p>Email</p>
                <UInput v-model="creadentials.email" type="email" />
              </div>

              <div>
                <p>Password</p>
                <div class="flex gap-3">
                  <UInput
                    v-model="creadentials.password"
                    :type="show ? 'text' : 'password'"
                    class="grow"
                  />
                  <UButton
                    :icon="show ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
                    @click="show = !show"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom -->
          <div class="flex flex-col gap-3">
            <div class="flex gap-3">
              <UButton size="lg" variant="outline" @click="handleCancel"
                >Cancel
              </UButton>
              <UButton size="lg" variant="solid" @click="handleConfirm"
                >Confirm
              </UButton>
            </div>
            <ULink
              v-if="sign != 'out'"
              class="opacity-50 text-sm hover:text-violet-600 hover:dark:text-violet-400 underline"
              @click="toggleSign"
            >
              <p v-if="sign == 'up'">Sign In?</p>
              <p v-if="sign == 'in'">Sign Up?</p>
            </ULink>

            <p
              v-if="creadentials.error"
              class="text-sm text-center text-red-600"
            >
              {{
                creadentials.error
                  ?.split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ") + "."
              }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <UDivider />

    <!-- Footer -->
    <footer class="w-full h-fit m-0 px-3 py-0">
      <HomeFooter />
    </footer>
  </div>
</template>
