<template>
  <div class="home">
    Vue2Solid Demo
    <b-container>
      <a href="https://github.com/scenaristeur/vue2_solid" target="_blank">vue2_solid</a> |
      <a href="https://github.com/scenaristeur/vue2_solid_demo" target="_blank">code source demo</a> |  v.1.0.10 | add tension
      <hr>
      SolidLogin :     <SolidLogin clientName="Vue2Solid_Demo" />
      <hr>
      <!-- SolidBrowser : <SolidBrowser />
      <hr> -->
      SolidProfile : <SolidProfile />

      <hr>
      SolidExplorer : <SolidExplorer />
      <hr>
      SolidTensionForm : <SolidTensionForm />
      <hr>
      SolidEditor : <SolidEditor />
      <br><br><br>
    </b-container>

    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
