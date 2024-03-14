import { contacts } from './contacts.js'

const {createApp} = Vue;

createApp({

  data(){

    return{

      contacts,
      counter: 0,
    }
  },

  methods:{

  },

  mounted(){
    console.log(contacts);
  }
}).mount('#app')

