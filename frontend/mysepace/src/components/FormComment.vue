<template>
   <form class="form bg-white p-6 my-10 relative">
      <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px">
        <i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
      <h3 class="text-2xl text-gray-900 font-semibold">Poster un commentaire</h3>
      <input  v-model="comment.auteur" type="text" name="" placeholder="Auteur" class="border p-2  w-1/2">
      <textarea v-model="comment.contenu" name="" cols="10" rows="3" placeholder="Tell us about desired property"
                class="border p-2 mt-3 w-full"></textarea>
      <button type="submit" v-on:click="postCom"
             class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">Poster un commentaire</button>
    </form>
</template>

<script>
export default {
  name: "FormComment",
  props: ["comment"]
}
</script>