<template>
  <div v-if="$auth.isAuthenticated" class="text-center ">
    <h1 class="text-5xl  mb-6	">George suce des queues</h1>
    <div class="flex justify-center	">
      <form class="w-9/12 ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Titre
            </label>
            <input
                v-model="article.titre" type="text"
                class="appearance-none block
                  w-full bg-gray-200 text-gray-700 border
                  border-gray-200 rounded py-3 px-4 mb-3
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
          </div>
        </div>
        <br>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
                class=" no-resize appearance-none block
                  w-full bg-gray-200 text-gray-700 border border-gray-200
                   rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                    focus:bg-white focus:border-gray-500 h-48 resize-none"
                v-model="article.description"
                id="message"></textarea>
            <br>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button v-on:click.stop.prevent="post"
                    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                    type="button">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      article: {},
      foobar: null
    }
  },
  methods: {
    post: function () {
      this.$http.post('http://localhost:1337/api/articles', {
        titre: this.article.titre,
        description: this.article.description
      }).then(function () {
        router.push('/admin')
      });
    },
  }
}
</script>