const React = require('react')
const {HomeView} = require('./home-view.js')
const {StudentForm} = require('./student-signup.js')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')
const {LoginView} = require('./login-view.js')
const AppView = React.createClass({

   getInitialState: function(){


      return STORE.getStoreData()
   },

   componentWillMount: function(){
      let self = this

      STORE.onChange(function(){
         self.setState(STORE.getStoreData())
         console.log('app state changed')
      })
   },

   render: function(){

      switch (this.props.currentView) {
         case "home":
            return <HomeView/>
            break;
         case "signup/student":
            return <StudentForm/>
            break;
         case "login":
            return <LoginView/>
            break;
         // case "game":
         //    return <GameView crntUser={this.state.currentUser}/>
         //    break;
         default:

            break;
      }

   }


})


module.exports = {AppView}
