const React = require('react')
const {HomeView} = require('./home-view.js')
const {StudentFormModal, SimpInput} = require('./student-signup.js')
const InvestorForm = require('./investor-signup.js')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')
const {TestView} = require('./simple-components.js')
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
         case "signup/students":
            return <StudentFormModal/>
            break;
         case "signup/investor":
            return <InvestorForm/>
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
