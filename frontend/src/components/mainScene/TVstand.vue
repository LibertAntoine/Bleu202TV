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
  height : 1100px;
  width : 2000px;
  bottom: -1010px;
  left: 20%;
  margin-left : -500px;
  z-index: 2;
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
    bottom: -970px;
  }
}
@media (max-height: 556px) {
  #meuble {
    bottom: -1020px;
  }
}


</style>
