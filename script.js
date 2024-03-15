import { contacts } from './contacts.js'

const {createApp} = Vue;

createApp({

  data(){

    return{

      contacts,
      activeContactId: 0,
      newMessageItem:'',
      contactToSearch:'',
    }
  },

  methods:{

    addMessage(){
      const newMessage = {
        date: '10/01/2020 15:30:55',
        message: this.newMessageItem,
        status: 'sent'
      }
      this.contacts[this.activeContactId].messages.push(newMessage),
      this.newMessageItem = ''

      const newMessageAnswer = {
        date: '10/01/2020 15:30:55',
        message: 'Ok',
        status: 'received'
      }    
      setTimeout( ()=> {
          this.contacts[this.activeContactId].messages.push(newMessageAnswer)
        },1000 )

    },

    removeMessage(index){
      this.contacts[this.activeContactId].messages.splice(index, 1)
    }


  },

  computed: {

    filteredContacts(){
      return contacts.filter(contact => contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase()))
    }

  },

  mounted(){

  },

  created(){
    
  }
}).mount('#app')

