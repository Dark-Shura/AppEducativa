import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChtMwdDY_zRDYBBKuT2Eli2yQl2zrPvT0',
  authDomain: 'lista-de-compras-33ba5.firebaseapp.com',
  databaseURL: 'https://lista-de-compras-33ba5.firebaseio.com',
  projectId: 'lista-de-compras-33ba5',
  storageBucket: 'lista-de-compras-33ba5.appspot.com',
  messagingSenderId: '168939812672',
  appId: '1:168939812672:web:e9537c8cebee60b0902ca5',
  measurementId: 'G-S7JTN3WPJW'
}
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const StoreDB = firebase.firestore()
export const storeRef = firebase.storage().ref()
export const storage = firebase.storage()
export default firebase
