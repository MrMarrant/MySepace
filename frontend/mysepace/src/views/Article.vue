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
    <div v-for="comment in comments" :key="comment" class="py-4">
  <div class="shadow-lg pt-4 ml-2 mr-2 rounded-lg">
    <a href="#" class="block bg-white py-3 border-t pb-4">
      <div class="px-4 py-2 flex  justify-between">
        <span class="text-sm font-semibold text-gray-900">{{ comment.auteur }}</span>
        <!-- <div class="flex">
          <span class="px-4 text-sm font-semibold text-gray-600"> yesterday</span>
          <img class="h-6 w-6 rounded-full object-cover"
               src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;q=80"
               alt="">
        </div> -->
      </div>
      <p class="px-4 py-2 text-sm font-semibold text-gray-700">{{ comment.contenu }} </p>
    </a>
  </div>
  </div>
  <!-- <Comment></Comment> -->
  </div>

  
</template>
<script>

// import Comment from "../components/Comment.vue";

export default {
  name: "article",
  data() {
    return {
      id: this.$route.params.id,
      article: {},
      comments: {}
    }
  },
  components: {
    // Comment,
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
  }
}
}
</script>