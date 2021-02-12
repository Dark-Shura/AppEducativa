<template lang="pug">
div
  b-navbar(toggleable='lg' type='dark' variant='dark')
    b-navbar-brand(href='#') School Online
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav='')
      b-navbar-nav
        //- b-nav-item(href='/estudiante') Estudiantes
        //- b-nav-item(href='/padres') Padres De Familia
        Nuxt-Link(to='/docente' v-if="loggedIn") Docente   |
        Nuxt-Link(to='/avisos') Avisos    |
        Nuxt-Link(to='/estudiante') PDF
      b-navbar-nav.ml-auto
        b-navbar-nav
          b-nav-item(@click="logout" v-if="loggedIn" ) Logout
          b-nav-item(v-else href='/') Login

</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      loggedIn: false
    }
  },
  mounted () {
    this.setupFirebase()
  },
  methods: {
    setupFirebase () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true
          firebase.auth().currentUser.getIdToken(true).then((token) => {
            Cookies.set('access_token', token)
          })
        } else {
          this.loggedIn = false
          Cookies.remove('access_token')
        }
      })
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
