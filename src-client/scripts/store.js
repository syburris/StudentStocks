const Backbone = require('backbone')
const ACTIONS = require('./actions.js')

const STORE = {

   data: {
      currentUserType: ""
      currentUser: {},
      studentsSearched: [],
      currentView: "",


   },

   setStore: function(storeProp, payload){
      this.data[storeProp] = payload
      Backbone.Events.trigger('storeChange')
   },

   getStoreData: function(){
      return this.data
   },

   onChange: function(someFunc){
      Backbone.Events.on('storeChange', someFunc)
   }

}

module.exports = STORE