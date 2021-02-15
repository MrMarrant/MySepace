<template>
  <div
    v-if="$auth.isAuthenticated"
    id="add-article"
    class="flex justify-center"
  >
    <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
        <h1 class="text-3xl">Administration</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <form>
          <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <div v-for="article in articles" :key="article">
                <tr class="border-b">
                  <th class="text-left p-3 px-5">Titre de l'article</th>
                  <th class="text-left p-3 px-5">Contenu de l'article</th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100">
                  <td class="p-3 px-5">
                    <input
                      v-model="article.titre"
                      type="text"
                      v-bind:placeholder="article.titre"
                      class="bg-transparent"
                    />
                  </td>
                  <td class="p-3 px-5">
                    <input
                      type="text"
                      v-model="article.description"
                      v-bind:placeholder="article.description"
                      class="bg-transparent"
                    />
                  </td>
                  <td class="p-3 px-5 flex justify-end">
                    <button

                      v-on:click.stop.prevent="put(article)"
                      @click="!disabled ? clickEvent() : false"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Modifier
                    </button>
                    <button
                      v-on:click.stop.prevent="deleteArticle(article)"
                      @click="!disabled ? clickEvent() : false"
                      class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import router from "@/router";
export default {
  data() {
    return {
      articles: {
        titre: "",
        description: "",
        id: "",
      },
    };
  },
  methods: {
    post: function (article) {
      this.$http
        .post("http://localhost:1337/api/articles", {
          titre: article.titre,
          description: article.description,
        })
        .then(function (data) {
          console.log(data);
        })
        .then(function () {
          router.push("/admin");
        });
    },
    put: function (article) {
      this.$http
        .put("http://localhost:1337/api/articles/" + article.id, {
          titre: article.titre,
          description: article.description,
        })
        .then((data) => {
          console.log(data);
        })
        .then(function () {
          router.push("/admin");
        });
    },
    deleteArticle: function (article) {
      this.$http.delete("http://localhost:1337/api/articles/ " + article.id)
      .then(function () {
          router.push("/admin");
        });
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  created() {
    this.$http.get(" http://localhost:1337/api/articles").then((response) => {
      console.log(response.data);
      this.articles = response.data;
    });
  },
};
</script>