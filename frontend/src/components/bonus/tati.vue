<template>
<div>
    <sui-modal id="modal1" v-model="open1">
      <sui-modal-header id="headerTati">
        <i id="closeXtati" class="x icon small" @click="toggle1"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentTati">
          <sui-modal-description> 
            <img id="tati" class="equipePhotoGroupe" src="@/assets/TV/Ecran/tati.gif">
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>

    <sui-modal id="modal2" v-model="open2">
      <sui-modal-header id="headerTati">
        <i id="closeXtati2" class="x icon small" @click="toggle2"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentTati">
          <sui-modal-description> 
            <img id="tati" class="equipePhotoGroupe" src="@/assets/TV/Ecran/tati.gif">
          </sui-modal-description>
      </sui-modal-content>
    </sui-modal>


    <sui-modal id="modal3" v-model="open3">
      <sui-modal-header id="headerTati">
        <i id="closeXtati3" class="x icon small" @click="toggle3"></i>
      </sui-modal-header>

      <sui-modal-content image id="contentTati">
          <sui-modal-description> 
            <img id="tati" class="equipePhotoGroupe" src="@/assets/TV/Ecran/tati.gif">
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
        open1 : false,
        open2 : false,
        open3 : false
    }
  },
  mounted() {
  },
  methods: {
    toggle1() {
      this.open1 = false;
      this.open2 = true;
    },
    toggle2() {
      this.open2 = false;
      this.open3 = true;
    },
    toggle3() {
      this.open3 = false;
    }
  }
}
</script>

<style lang="scss">



.equipePhotoGroupe {
  width : 100%;
}

#contentTati {
  padding : 0px;
  background-color: black !important;
}

#headerTati {
  height : 25px !important;
  padding : 0px;
  background-color: black !important;
}

#modal1 .ui.standard.modal{
  width: 400px;
  position: relative;
  top : 10%;
  right : 10%;
}

#modal2 .ui.standard.modal{
  width: 400px;
  position: relative;
  top : -10%;
  right : -10%;
}

#modal3 .ui.standard.modal{
  width: 400px;
  position: relative;
  top : 10%;
  right : -10%;
}

#tati {
  height: 400px;
  width: 400px;
}

#closeXtati {
  color: white;
  position: absolute;
  top : 1.5%;
  right : 0.5%;
  opacity: 0.5;
}

#closeXtati:hover {
  opacity: 1;
}

#closeXtati2 {
  color: white;
  position: absolute;
  top : 1.5%;
  left : 0.5%;
  opacity: 0.5;
}

#closeXtati2:hover {
  opacity: 1;
}

#closeXtati3 {
  color: white;
  position: absolute;
  bottom : 60%;
  left : 70%;
  opacity: 0.5;
}

#closeXtati3:hover {
  opacity: 1;
}

@media (max-width: 800px) {

#contentTati {
  padding: 0px !important;
}

#contentTati .description {
  padding: 0px !important;
}


#modal1 .ui.standard.modal{
  width: 300px;
  margin: 0;

}

#modal2 .ui.standard.modal{
  width: 300px;
  margin: 0;

}

#modal3 .ui.standard.modal{
  width: 300px;
  margin: 0 ;
}

#tati {
  height: 300px;
  width: 300px;
}

}


@media (max-width: 500px) {

#contentTati {
  padding: 0px !important;
}

#contentTati .description {
  padding: 0px !important;
}


#modal1 .ui.standard.modal{
  width: 200px;
  margin: 0;

}

#modal2 .ui.standard.modal{
  width: 200px;
  margin: 0;

}

#modal3 .ui.standard.modal{
  width: 200px;
  margin: 0 ;
}

#tati {
  height: 200px;
  width: 200px;
}

}


@media (max-height: 800px) and (min-width: 500px) {

#contentTati {
  padding: 0px !important;
}

#contentTati .description {
  padding: 0px !important;
}


#modal1 .ui.standard.modal{
  width: 300px;
  margin: 0;

}

#modal2 .ui.standard.modal{
  width: 300px;
  margin: 0;

}

#modal3 .ui.standard.modal{
  width: 300px;
  margin: 0 ;
}

#tati {
  height: 300px;
  width: 300px;
}

}


@media (max-height: 500px) {

#contentTati {
  padding: 0px !important;
}

#contentTati .description {
  padding: 0px !important;
}


#modal1 .ui.standard.modal{
  width: 200px;
  margin: 0;

}

#modal2 .ui.standard.modal{
  width: 200px;
  margin: 0;

}

#modal3 .ui.standard.modal{
  width: 200px;
  margin: 0 ;
}

#tati {
  height: 200px;
  width: 200px;
}

}




</style>