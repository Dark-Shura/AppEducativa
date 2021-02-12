<template lang="pug">
div
  b-button(variant='dark' @click="askForPermission" :disabled='disable')  Activar notificaciones
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/messaging'
export default {
  data () {
    return {
      disable: false
    }
  },
  mounted () {
    const message = firebase.messaging()
    message.onMessage((payload) => {
      console.log('mensaje recibido:', payload)
    })
  },
  methods: {
    askForPermission () {
      const message = firebase.messaging()
      message.requestPermission().then(() => message.getToken())
        .then((Token) => {
          this.disable = true
          console.log('El token de Notificacion es:', Token)
        })
        .catch(() => console.log('no se puede papu'))
    }
  }
}
</script>
