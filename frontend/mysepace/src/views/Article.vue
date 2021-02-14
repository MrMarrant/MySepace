<template>
  <div>
    <article class="py-12 px-4">
      <h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold">
        {{ article.titre }}
      </h1>
      <p class="text-center">
        <span> {{ article.createdAt }} </span>
      </p>

      <div class="max-w-3xl mx-auto">
        <p class="mb-10">
          {{ article.description }}
        </p>
      </div>
    </article>
    <Comment></Comment>
  </div>
</template>
<script>

import Comment from "../components/Comment.vue";

export default {
  name: "article",
  data() {
    return {
      id: this.$route.params.id,
      article: {}
    }
  },
  components: {
    Comment,
  },
  created() {
    this.$http.get('http://localhost:1337/api/articles/' + this.id)
        .then(response => {
          console.log(response);
          this.article = response.data;
        });
  }
}
</script>