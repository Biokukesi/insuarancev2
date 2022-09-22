<template>
  <header>
    <router-link to ='/'>
      <h1><span>Hobbiton </span></h1>
      <p>Technologies</p>
    </router-link>
  </header>
  <router-view />
  <div id = "login">
     <VueFormulate />
     <VueFormGenerator />
  </div>
</template>

<script>
 
import VueFormulate from "./components/vueFormulate.vue";
import VueFormGenerator from "./components/vueFormGenerator.vue";

  export default {
    name: 'App',
    components: {
    VueFormulate,
    VueFormGenerator
     },
        methods: {
            isTrue: true
        }
  }
</script>


<style lang="scss">
  
  // The main font
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;400&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Archivo', sans-serif;

    &::selection {
      background: transparentize($color: #06d7ee, $amount: 0)
    }
  }

  body{
    background-color: white;
  }

 a{
  color: white;
    text-decoration: none;
 }

 header{
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: rgba(0,0,0,-0.5);
  box-shadow: 0px 0px 6px rgba(0,0,0,0.9);
 }

 span{
  color: #020af2;
 }



</style>
