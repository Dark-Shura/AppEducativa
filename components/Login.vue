<template lang="pug">
div
  b-row
    b-col
      div.centrado
        h1.subtitle Iniciar Sesion
        div.centrar
          b-input.mb-3(type="email" placeholder="Ingresa tu Correo" v-model="correo" )
          b-input.mb-3(type="password" placeholder="Ingresa tu Contrasenia" v-model="password")
        span.error {{ error.message }}
        b-button.mt-4.mr-3( @click="googleSignIn" variant="dark") Login
        b-button.mt-4.mr-3( href="/registro" variant="dark") Register
</template>

<script>
import * as firebase from 'firebase/app'
export default {
  data () {
    return {
      correo: '',
      password: '',
      error: ''
    }
  },
  methods: {
    googleSignIn () {
      firebase.auth().signInWithEmailAndPassword(this.correo, this.password).then((data) => {
        this.$router.push('/docente')
      }).catch(error => (this.error = error))
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>
