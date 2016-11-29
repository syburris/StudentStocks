const React = require('react')
const {HomeView} = require('./home-view.js')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')
const {TestView} = require('./simple-components.js')
const {StdntLoginView, InvstLoginView} = require('./login-view.js')
const {StudentView} = require("./student-view.js")
const InvestorView = require('./investor-view.js')
const AppView = React.createClass({

   getInitialState: function(){

      ACTIONS.fetchSchoolData()
      ACTIONS.fetchAllStudents({})

      return STORE.getStoreData()
   },


   componentWillMount: function(){
      let self = this
      console.log(this.state)
      ACTIONS.fetchSchoolData()
      ACTIONS.fetchAllStudents()


      STORE.onChange(function(){
         self.setState(STORE.getStoreData())
         console.log('app state changed')

      })
   },

   render: function(){
      if(!this.state.allStudents[0]){

         return (
            <div id="load">
               <div>G</div>
               <div>N</div>
               <div>I</div>
               <div>D</div>
               <div>A</div>
               <div>O</div>
               <div>L</div>
            </div>         )
      }

      switch (this.props.currentView) {
         case "home":
            return <HomeView schoolData={this.state.schools} showModal={this.state.showModal} userType={this.state.userType}/>
            break;
         case "dash/students":
            return <StudentView user={this.state.currentUser}/>
            break;
         case "dash/investors":
            return <InvestorView user={this.state.currentUser} studentInfo={this.state.allStudents} selectedStudent={this.state.selectedStudent} showDrop={this.state.showDrop} searchView={this.state.showSearch}/>
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
