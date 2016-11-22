const React = require("react")
const ACTIONS = require('./actions.js')
const {NavView} = require("./home-view.js")
const STORE = require('./store.js')
// CURRENT USER RESPONSE ****
// balance:0
// bio:"This is filler info. I have no idea what to type here, so I'll stop."
// firstName: "Steven"
// gpa: "4"
// highSchool: "Porter-Gaud"
// id: 1
// lastName: "Burris"
// level: "GRADUATE"
// loanGoal:
// "1000000"
// major:
// "Accounting"
// minor:
// "French"
// mySchool:
// null
// school:
// "College of Charleston"
// username:
// "stevenburris@gmail.com"


const StudentView = React.createClass({

   componentWillMount: function(){

      STORE.setStore("currentUser", this.props.user)

   },

   render: function(){
      console.log(this.props)

      return(
         <div className="container student-view">
            <NavView/>
            <div className="row">
               <h1>Welcome <span>{this.props.user.firstName}</span></h1>
               <div className="col-xs-12 col-sm-4 left-col">
                  <div className="row">
                     <div className="col-xs-12 col-sm-12">
                        <p>Left Column</p>
                     </div>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-4 right-col">
                  <div className="row">
                     <div className="col-xs-12 col-sm-12">
                        <p>right Column</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
})



module.exports = {StudentView}
