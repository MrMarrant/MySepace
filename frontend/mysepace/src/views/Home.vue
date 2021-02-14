<template>
  <div class="home">
    <div class="text-center">
      <h1>Bienvenue sur super blog de la mort qui tue espéce de gros fils pute va bien niquer ta mére.
        Il est super chouette hein !!!!!
      </h1>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="grid grid-cols-3 gap-2 ...">
      <!-- component -->
      <div v-for="article in articles" :key="article" class="py-4">
        <div
            class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
          <div>
            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
              <span class="block text-lg text-gray-800 font-bold tracking-wide">{{ article.titre }}</span>
              <span class="block text-gray-600 text-sm">
                {{ article.description }}
              </span>
            </div>
          </div>
          <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
            <div class="pt-8 text-center">
              <router-link v-bind:to="'/article/' + article.id">
                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                  Voir l'article
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  created() {
    this.$http.get(" http://localhost:1337/api/articles")
        .then(response => {
          console.log(response.data);
          this.articles = response.data;
        })
  }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>

