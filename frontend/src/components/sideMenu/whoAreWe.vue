<template>
<div>
    <sui-modal v-model="open">
      <sui-modal-header id="header">Qui sommes nous ?
        <i id="closeX" class="x icon" @click="toggle"></i>
      </sui-modal-header>

      <sui-modal-content image id="content">
          <sui-modal-description>
            Nous sommes la compagnie bleu 202
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>
</div>
</template>

<script>
export default {
  name: 'whoAreWe',
  components: {
  },
  data() {
    return {
        open : false
    }
  },
  mounted() {
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss">
#header {
    padding : 10px !important;
    padding-left : 20px !important;
    height : 45px;
    color : black;
    font-size: 20px;
    font-weight: normal;
}

#closeX {
  position: absolute;
  right : 15px;
  opacity: 40%;
  transition: opacity 0.3s;
}

#closeX:hover {
  opacity: 100%;
}

</style>