<template>
      <div id="meuble">
        <img id="meubleTV" src="@/assets/TV/meuble.png" alt="meuble de télévision">
      </div>
</template>

<script>
export default {
  name: 'MeubleTV'
  }
</script>

<style lang="scss" >
#meuble {
  position : absolute;
  height : 1000px;
  width : 2000px;
  bottom: -858px;
  left: 20%;
  margin-left : -500px;
  z-index: -1;
}

#meubleTV {
  width: 100%;
  height: 100%;
}

@media (min-width: 2100px) {
  #meuble {
    width : 3000px;
  }
}

@media (max-width: 556px) {
  #meuble {
    bottom: -810px;
  }
}
</style>
