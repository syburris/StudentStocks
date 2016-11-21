const React = require('react')
const {HomeView} = require('./home-view.js')
const {StudentFormModal, SimpInput} = require('./student-signup.js')
const InvestorForm = require('./investor-signup.js')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')
const {TestView} = require('./simple-components.js')
const {StdntLoginView, InvstLoginView} = require('./login-view.js')


const AppView = React.createClass({

   getInitialState: function(){


      return STORE.getStoreData()
   },


   componentWillMount: function(){
      let self = this
      ACTIONS.fetchSchoolData()
      ACTIONS.fetchALlStudents()



      STORE.onChange(function(){
         self.setState(STORE.getStoreData())
         console.log('app state changed')

      })
   },

   render: function(){
      console.log(this.state)
      switch (this.props.currentView) {
         case "home":
            return <HomeView schoolData={this.state.schools}/>
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
