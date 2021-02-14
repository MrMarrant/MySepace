<template>
  <div id="add-article" class="flex justify-center">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Titre
          </label>
          <input
            v-model="article.titre"
            type="text"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
          />
        </div>
      </div>
      <br />
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Description
          </label>
          <textarea
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            v-model="article.description"
            id="message"
          ></textarea>
          <br />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            v-on:click="post"
            @click="!disabled ? clickEvent() : false"
            id="show-modal"
            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
            type="button"
          >
            Send
          </button>
          <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
              <div class="w3-container">
                <span v-on:click="close" class="w3-button w3-display-topright"
                  >&times;</span
                >
                <br />
                <p>L'article est ajouté</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        titre: "",
        description: "",
      },
    };
  },
  methods: {
    post: function () {
      document.getElementById("id01").style.display = "block";
      this.$http
        .post("http://localhost:1337/api/articles", {
          titre: this.article.titre,
          description: this.article.description,
        })
        .then(function (data) {
          console.log(data);
        });
    },
    close: function () {
      document.getElementById("id01").style.display = "none";
    },
    clickEvent() {
      /**
       * Click event.
       *
       * @event click
       */
      this.$emit("click");
    },
  },
};
</script>
