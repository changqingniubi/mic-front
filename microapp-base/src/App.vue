<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">自己的home</router-link> |
      <router-link to="/about">自己的about</router-link> |
      <router-link to="/app-vue">vue应用</router-link> |
      <router-link to="/app-react">react应用</router-link>
    </div>
    <router-view/>
    <div id="container">

    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
