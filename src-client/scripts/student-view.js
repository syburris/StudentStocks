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


   },

   render: function(){
      // console.log("student props", this.props.user.attributes)
      // console.log('ehhhh', this.props.user)
      return(
         <div className="fluid-container student-view">
            <NavView/>
            <div className="container">
               <div className="row">
                  <h1>Welcome <span>{this.props.user.attributes  && this.props.user.attributes.firstName}</span></h1>
                  <div className="col-xs-12 col-sm-4 left-col">
                     <div className="row">
                        <div className="col-xs-12 col-sm-12">
                           <div className="thumbnail">
                              <h4>Payment Info >></h4>
                              <h3>Minimum payment: <span>$145.37</span></h3>
                              <p>Loan balance: <span>${this.props.user.attributes && this.props.user.attributes.loanGoal}</span></p>
                              <p>Payment due: <span>December 1, 2016</span></p>
                              <button className="btn btn-primary">Make Payment</button>
                           </div>
                           <div className="thumbnail">
                              <h4>Manage Info >></h4>
                              <h3><i className="fa fa-user-circle" aria-hidden="true"></i>
                                 {this.props.user.attributes && this.props.user.attributes.firstName}<span> </span>{this.props.user.attributes &&this.props.user.attributes.lastName} </h3>

                              <p></p>
                           </div>
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
         </div>
      )
   }
})



module.exports = {StudentView}
