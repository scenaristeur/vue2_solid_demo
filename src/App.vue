<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <a href="https://github.com/scenaristeur/vue2_solid" target="_blank">vue2_solid</a> |
    <a href="https://github.com/scenaristeur/vue2_solid_demo" target="_blank">code source demo</a> |  v.1.0.2
    <InputText />
    <InputTextarea />
    <SolidLogin clientName="Vue2Solid_Demo" />

    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
