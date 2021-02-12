<template lang="pug">
div
  div.mt-4(v-for="aviso in avisos" :key="aviso.id")
    b-card.box(:title="aviso.nuevoTitulo")
      strong Fecha de Publicacion: {{ aviso.nuevaFecha }}
      b-card-text.text-center
        strong Descripcion :
        p {{ aviso.nuevaDescripcion }}
      b-button(variant='primary' @click='descargarArchivo(aviso) ') Descargar Archivo
    img(:src='file')
</template>

<script>
import axios from 'axios'
import { StoreDB } from '../plugins/firebase'

export default {
  data () {
    return {
      avisos: [],
      file: null
    }
  },
  created () {
    this.observador2()
  },
  methods: {
    observador2 () {
      const self = this
      StoreDB.collection('avisos').onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const data = { nuevoTitulo: doc.data().titulo, nuevaDescripcion: doc.data().descripcion, urlPdf: doc.data().urlPdf, id: doc.id, nuevaFecha: doc.data().fecha }
          self.avisos.push(data)
        })
      })
    },
    forceFileDownload (response, item) {
      const headers = response.headers
      const extension = item.urlPdf.substring(item.urlPdf.lastIndexOf('.') + 1, item.urlPdf.lastIndexOf('?'))
      const name = item.urlPdf.substring(item.urlPdf.lastIndexOf('F') + 1, item.urlPdf.lastIndexOf('.'))
      const blob = new Blob([response.data], { type: headers['content-type'] })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `${name}.${extension}`
      link.click()
      link.remove()
    },
    descargarArchivo (item) {
      axios({
        method: 'GET',
        url: item.urlPdf,
        responseType: 'blob'
      })
        .then((response) => {
          this.forceFileDownload(response, item)
        })
        .catch((error) => { console.log(error) })
    }
  }
}
</script>

<style>

</style>
