const React = require('react')
const {HomeView} = require('./home-view.js')
const {StudentFormModal, SimpInput} = require('./student-signup.js')
const InvestorForm = require('./investor-signup.js')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')
const {TestView} = require('./simple-components.js')
const {StdntLoginView, InvstLoginView} = require('./login-view.js')
const {StudentView} = require("./student-view.js")

const AppView = React.createClass({

   getInitialState: function(){


      return STORE.getStoreData()
   },


   componentWillMount: function(){
      let self = this

      ACTIONS.fetchSchoolData()
      ACTIONS.fetchAllStudents()
      ACTIONS.fetchCurrentStudent()


      STORE.onChange(function(){
         self.setState(STORE.getStoreData())
         console.log('app state changed')

      })
   },

   render: function(){
      let countMe = 1
      console.log((countMe += 1), this.state)
      switch (this.props.currentView) {
         case "home":
            return <HomeView schoolData={this.state.schools}/>
            break;
         case "dash/students":
            console.log(this.state.currentUser)
            return <StudentView user={this.state.currentUser}/>
            break;
         case "signup/students":
            return <StudentFormModal/>
            break;
         case "signup/investors":
            return <InvestorForm/>
            break;
         case "login/investors":
            return <InvstLoginView/>
            break;
         case "login/students":
            return <StdntLoginView/>
            break;
         // case "game":
         //    return <GameView crntUser={this.state.currentUser}/>
         //    break;
         default:
         <h1>Page not Found</h1>
            break;


   }

   }


})


module.exports = {AppView}
