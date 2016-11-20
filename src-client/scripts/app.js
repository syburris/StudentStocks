const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const {AppView} = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      'login': "showLogin",
      'about': "showAbout",
      'signup/:type': "showSignup",
      '': "showHome"

   },
   showHome: function(){

      ReactDOM.render(<AppView currentView="home"/>, document.querySelector("#app-container"))
   },

   showAbout: function(){

      ReactDOM.render(<AppView currentView="about"/>, document.querySelector("#app-container"))
   },

   showSignup: function(type){
      let crntView = "signup/"+type;
      console.log(crntView)

      ReactDOM.render(<AppView currentView={crntView}/>, document.querySelector("#app-container"))
   },

   showLogin: function(){

      ReactDOM.render(<AppView currentView="login"/>, document.querySelector("#app-container"))
   },

   initialize: function(){

      Backbone.history.start()
   }

})



   new AppRouter()
