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
      this.contacts[this.activeContactId].messages.push(newMessage)
    }
  },

  mounted(){
    activeContactId = activeContactId
  },

  created(){
    
  }
}).mount('#app')

