<template lang="pug">
b-container
  panelDocente
</template>

<script>
import firebase from 'firebase/app'
import { getUserFromCookie } from '@/helpers'
import panelDocente from '~/components/PanelDocente.vue'
// import Cookies from 'js-cookie'
export default {
  components: { panelDocente },
  asyncData ({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/')
      }
    } else {
      const user = firebase.auth().currentUser
      if (!user) {
        redirect('/')
      }
    }
  }
}
</script>
