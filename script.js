import { contacts } from './contacts.js'

const {createApp} = Vue;

createApp({

  data(){

    return{

      contacts,
      activeContactId: 0,
      newMessageItem:'',
    }
  },

  methods:{

    addMessage(){
      const newMessage = {
        date: '10/01/2020 15:30:55',
        message: this.newMessageItem,
        status: 'sent'
      }
      contacts[this.activeContactId].messages.push(newMessage)
    }
  },

  mounted(){
    
  },

  created(){
    
  }
}).mount('#app')

