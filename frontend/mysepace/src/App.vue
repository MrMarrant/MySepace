<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Menu</router-link> |
      <router-link to="/Home">Creer un article</router-link> |
      <router-link to="/about">Commenter</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Oxygen, italic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightpink;
}

#nav {
  padding: 30px;
  color: deeppink;
}

#nav a {
  font-weight: bold;
  color: lightpink;
}

#nav a.router-link-exact-active {
  color: mediumpurple;
}
</style>
