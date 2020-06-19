<template>
  <div id="channelController">
    <div id="channelTest">
        <img class="BoutonChannel" alt="Button Channel" src="@/assets/Bouton_Appuye.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'channelController',
  components: {
  },
  watch: {
  },
  mounted: function() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.BoutonChannel {
  position: relative;
  top: 10%;
  right: 40%; 
  height: 80%;
}

#channelTest {
  z-index: 6;
  border-radius: 5px;
  position: relative;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s;
}

#channelTest:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.3);
}

</style>