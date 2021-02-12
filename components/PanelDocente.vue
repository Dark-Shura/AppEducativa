<template lang="pug">
div
  h1.title.text-center Crear Avisos
  pushNotification
  div
    b-row
      b-col(sm="7")
        b-form-input.box.mt-4(type="text", placeholder="titulo" v-model="titulo")
        b-form-textarea.box.mt-4(rows="3" max-rows="6"  placeholder=" descripcion" v-model="descripcion")
        b-form-file.box.mt-3(v-model="pdf"  placeholder='Seleccione su Archivo' )
        b-progress.mt-4( :value = "valor" max='100' variant='success')
        h6.mt-3 Archivo Seleccionado: {{ pdf ? pdf.name: '' }}
        b-button.mt-4(variant="dark" @click="guardarAviso") Enviar
      b-col(sm="4")
        b-card-group.box
          b-card.box(header="Lista de Avisos Creados")
            b-list-group
              b-list-group-item(v-for="title in titles" :key="title.id")
                h6 {{ title.nuevoTitulo }}
</template>

<script>
import { StoreDB, storeRef } from '../plugins/firebase'
import pushNotification from '@/components/pushNotification.vue'
export default {
  components: { pushNotification },
  data () {
    return {
      valor: 0,
      video: '',
      titulo: '',
      descripcion: '',
      pdf: null,
      urlPdf: null,
      titles: [],
      fecha: new Date().toString().substring(0, 25)
    }
  },
  created () {
    this.observador()
  },
  methods: {
    guardarAviso () {
      const lol = this
      const aviso = {
        titulo: this.titulo,
        descripcion: this.descripcion,
        urlPdf: this.urlPdf,
        fecha: this.fecha
      }
      if (this.pdf.size < 3000000) {
        const uploadTask = storeRef.child('archivos/' + this.pdf.name ).put(this.pdf)
        uploadTask.on('state_changed', function (snapshot) {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          lol.valor = progress
        }, function (error) {
          console.log(error)
        }, function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            aviso.urlPdf = downloadURL
            console.log('File available at', aviso.urlPdf)
            StoreDB.collection('avisos').add(aviso)
              .then(() => {
                lol.titulo = ''
                lol.descripcion = ''
                lol.pdf = null
                lol.valor = 0
              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.error('Error writing document: ', error)
              })
          })
        })
      } else {
        alert('Elija un Archivo menor a 3MB Gracias')
      }
    },
    observador () {
      const se = this
      StoreDB.collection('avisos').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = { nuevoTitulo: doc.data().titulo }
          se.titles.push(data)
        })
      })
    }
  }
}
</script>

<style>
  .box {
    box-shadow: 0px 5px 10px  #333;
  }
</style>
