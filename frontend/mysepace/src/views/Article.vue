<template>
  <div>
    <!-- Article-->
    <Article v-bind:article="article"></Article>

    <!-- FORMULAIRE COMMENTAIRE -->
    <form class="form bg-white p-6 my-10 relative">
      <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px">
        <i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
      <h3 class="text-2xl text-gray-900 font-semibold">Poster un commenter les fils de pute de tes morts</h3>
      <input v-model="postComment.auteur" type="text" name="" placeholder="Auteur" class="border p-2  w-1/2">
      <textarea v-model="postComment.contenu" name="" cols="10" rows="3" placeholder="Tell us about desired property"
                class="border p-2 mt-3 w-full"></textarea>
      <button type="submit" v-on:click="postCom"
              class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">
        Poster un commentaire
      </button>
    </form>

    <Comment v-bind:comments="comments"></Comment>
  </div>


</template>
<script>

import Comment from "../components/Comment.vue";
import Article from "../components/Article.vue";

export default {
  name: "article",
  data() {
    return {
      id: this.$route.params.id,
      article: {},
      comments: {},
      postComment: {
        auteur: "",
        contenu: ""
      }
    }
  },
  components: {
    Comment,
    Article
  },
  created() {
    this.$http.get('http://localhost:1337/api/articles/' + this.id)
        .then(response => {
          console.log(response);
          this.article = response.data;
        });
    this.comment();
  },
  methods: {
    comment() {
      this.$http.get('http://localhost:3000/api/commentaires/' + this.id)
          .then(response => {
            console.log(response);
            this.comments = response.data;
          });
    },
    postCom () {
      this.$http.post('http://localhost:3000/api/commentaires/', {
        auteur: this.postComment.auteur,
        contenu: this.postComment.contenu,
        iDArticle: this.id
      }).then(function (data) {
        console.log(data)
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
  }
}
</script>