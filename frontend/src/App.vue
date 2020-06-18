<template>
  <div id="app">
    <div id="TV-group">
      <img id="TV" alt="Vue logo" src="./assets/TV.png">
      <div id="screen" v-on:click="hello" ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    hello() {
      console.log("hello");
    }
  }
}
</script>

<style lang="scss" >


#TV-group {
  padding-top : 40px;
  height : 90%;
}

#TV {
  position: absolute;
  right : 12%;
  height: 90%;
  z-index: 1;
}

#screen {
  position: absolute;
  margin-right : 550px;
  right : 12%;
  top : 25%;
  background-image : url("./assets/gif-anime.gif");
  background-repeat: none;
  height : 50%;
  width : 1900px;
  z-index: 2;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height : 100%;
}

@media (max-width: 830px) {
  #TV {
    display: none;
  }
}
</style>
