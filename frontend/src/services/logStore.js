import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cookie from '@/services/cookies'
import userApi from '@/services/api/user'

export default new Vuex.Store ({
    state: {
        connected : false,
        opener : false,
        logPage : false,
        pseudo : null,
        uniqueName : null
    },
    mutations: {
        logOut() {
            cookie.deleteCookie("token")
            this.state.connected = false
            this.state.pseudo = ""
            this.state.opener = true
        },
         
    },
    getters: {},
    actions: {
        async logIn(state, uniqueName) {
            const data = await userApi.login(uniqueName);
            if(data.status == 200) {
              cookie.setCookie("token", data.data.token, 15)
              this.state.pseudo = data.data.user.pseudo
              this.state.uniqueName = data.data.user.uniqueName
              this.state.connected = true      
            }
            return data
         },
         async logCookie() {
            if(cookie.getCookie("token")) {
              const data = await userApi.auth(cookie.getCookie("token"))
              if(data.status != 200) {
                cookie.deleteCookie("token")
                this.state.opener = true
              } else {
                this.state.connected = true
                this.state.pseudo = data.data.user.pseudo;
              }
            } else {
                this.state.opener = true
            }
        },
        async signUp(state, reponses) {
            const data = await userApi.signup({
                pseudo : reponses[5],
                favoriteCharacter : reponses[3],
                favoriteActor : reponses[4],
                favoriteDrink : reponses[1],
                favoriteCake : reponses[0],
                astroSigne : reponses[2]
              })
            if(data.status == 201) {
              cookie.setCookie("token", data.data.token, 15)
              this.state.pseudo = reponses[5]
              this.state.uniqueName = data.data.uniqueName
              this.state.connected = true
            }
         }
    }
})