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
  </div>
</template>


<script>
export default {
  name: "Article",
  props: ['article'],
};

</script>