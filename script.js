const {DateTime} = luxon;

import { contacts } from './contacts.js';

const {createApp} = Vue;

createApp({

  data(){

    return{

      contacts,
      activeContactId: 0,
      newMessageItem:'',
      contactToSearch:'',
      // dateTime: DateTime.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss'),
      lastMessageDate : DateTime.now().setLocale('it').toFormat(' hh:mm'),
    }
  },

  methods:{

    addMessage(){
      const newMessage = {
        date:  DateTime.now().setLocale('it').toFormat(' dd/MM/yyyy hh:mm:ss '),
        message: this.newMessageItem,
        status: 'sent'
      }
      this.contacts[this.activeContactId].messages.push(newMessage),
      this.newMessageItem = ''
      this.lastMessageDate = DateTime.now().setLocale('it').toFormat(' hh:mm')
      

      const newMessageAnswer = {
        date:  DateTime.now().plus({ seconds: 1 }).setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss'),
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

    // this.dateTime = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss')

  },

  created(){
    
  }
}).mount('#app')

