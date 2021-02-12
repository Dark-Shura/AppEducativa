<template lang="pug">
div.container
  b-row
    b-col
      div.centrado
        h1.title Registro
        div.centrar
          b-input.mt-4.mb-3(type="email" placeholder="ingresa tu correo" v-model="email")
          b-input.mt-4.mb-3(type="password" placeholder="ingresa tu contrasenia" v-model="password")
        span {{ errorMessage }}
        b-button( @click="register" variant="dark") Enviar

</template>

<script>
import firebase from 'firebase/app'

export default {
  data () {
    return {
      email: '',
      password: '',
      errorCode: '',
      errorMessage: ''
    }
  },
  methods: {
    async register () {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        this.email = ''
        this.password = ''
        this.$router.push('/')
      } catch (e) {
        this.errorCode = e.errorMessage
      }
    }
  }
}
</script>
