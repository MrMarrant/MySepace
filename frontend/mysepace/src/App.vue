<template>
  <div class="bg-gray-100 overflow-x-hidden">
    <nav class="bg-white px-6 py-4 shadow">
      <div class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <div>
            <a href="#" class="text-gray-800 text-xl font-bold md:text-2xl">MySepace</a>
          </div>
          <div>
            <button type="button"
                    class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="md:flex flex-col md:flex-row md:-mx-4 hidden">
          <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-5 md:my-0">
            <router-link to="/">Blog</router-link>
          </a>
          <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-5 md:my-0">
            <router-link v-if="$auth.isAuthenticated"  to="/admin">Administration article</router-link>
          </a>
          <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-5 md:my-0">
            <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
          </a>
          <a href="#" class="my-1 text-gray-800 hover:text-blue-500 md:mx-5 md:my-0">
            <router-link v-if="$auth.isAuthenticated" to="/AddArticle">Ajouter un article</router-link>
          </a>
          <a v-if="$auth.isAuthenticated" @click="logout" href="#">Deconnexion</a>
          <a href="#" v-else @click="login" class="my-1 text-gray-800 hover:text-blue-500 md:mx-5 md:my-0">Connexion</a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

