const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const {AppView} = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      'login/:usertype': "showLogin",
      'about': "showAbout",
      'signup/:usertype': "showSignup",
      '': "showHome"

   },
   showHome: function(){

      ReactDOM.render(<AppView currentView="home"/>, document.querySelector("#app-container"))
   },

   showAbout: function(){

      ReactDOM.render(<AppView currentView="about"/>, document.querySelector("#app-container"))
   },

   showSignup: function(usrType){

      ReactDOM.render(<AppView currentView={"signup/" + userType}/>, document.querySelector("#app-container"))
   },

   showLogin: function(usrType){
      console.log('game viieww')

      ReactDOM.render(<AppView currentView={"login/" + usrType}/>, document.querySelector("#app-container"))
   },

   initialize: function(){

      Backbone.history.start()
   }

})



   new AppRouter()
