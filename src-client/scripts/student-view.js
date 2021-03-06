const React = require("react")
const ACTIONS = require('./actions.js')
const {NavView} = require("./home-view.js")
const STORE = require('./store.js')
import numeral from 'numeral'

const StudentView = React.createClass({

   componentWillReceiveProps: function(){
      if(this.props.user.attributes === undefined){
         ACTIONS.fetchCurrentStudent()

      }

   },
   componentDidMount: function(){
      ACTIONS.fetchCurrentStudent()
   },

   _handlePayment: function(){
      let newPayment={payment: this.props.user.attributes.loan.monthlyPayment}
      ACTIONS.submitPayment(newPayment)


   },

   render: function(){
      if(this.props.user.attributes === undefined){
         return(
            <p>Loadingggg</p>
         )
      }
      let isFunded = function(){
         var funded
         if(this.props.user.attributes.loan.funded === false){
            funded = "Not Yet Funded"
             return funded

         }else{
            funded = "You're Funded!"
             return funded
         }
      }.bind(this)





      return(
         <div className="fluid-container student-view">
            <UserNav userName={this.props.user.attributes && this.props.user.attributes.username} firstName={this.props.user.attributes && this.props.user.attributes.firstName} />
            <div className="container info-cont">
               <div className="row">
                  <h1>Welcome <span>{this.props.user.attributes  && this.props.user.attributes.firstName}</span></h1>
                  <div className="col-xs-12 col-sm-4 left-col">
                     <div className="row">
                        <div className="col-xs-12 col-sm-12">
                           <div className="thumbnail">
                              <h4>Payment Info >></h4>
                              <h3>Minimum payment: <span>${this.props.user.attributes.loan && this.props.user.attributes.loan.monthlyPayment}</span></h3>
                              <p>Loan balance: <span>{this.props.user.attributes && numeral(this.props.user.attributes.loan.principalBalance).format('$0,0')}</span></p>
                              <button className="btn btn-primary" onClick={this._handlePayment}>Make Payment</button>
                           </div>
                           <div className="thumbnail">
                              <h4>Manage Info >></h4>
                              <h3><i className="fa fa-user-circle" aria-hidden="true"></i>
                                 {this.props.user.attributes && this.props.user.attributes.firstName}<span> </span>{this.props.user.attributes &&this.props.user.attributes.lastName} </h3>
                              <label htmlFor="">Email</label>
                              <p>{this.props.user.attributes && this.props.user.attributes.username}</p>
                              <label htmlFor="">Education Info</label>
                              <p>{this.props.user.attributes && this.props.user.attributes.school}</p>
                              <p>{this.props.user.attributes && this.props.user.attributes.major}</p>
                              <p>{this.props.user.attributes && this.props.user.attributes.minor}</p>

                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xs-12 col-sm-8 right-col">
                     <div className="row">
                        <div className="thumbnail col-xs-12 col-sm-12 loan-info">
                           <h2>Current Loan Info</h2>
                           <div className="row">
                              <div className="col-xs-8">
                                 <p>Loan Fully Funded?</p>
                                 <h3>{isFunded()}</h3>
                                 <p>Current Loan Goal:</p>
                                 <h3>{numeral(this.props.user.attributes.loan.loanGoal).format('$0,0')}</h3>
                                 <p>Remaining Grace Period:</p>
                                 <h3>{this.props.user.attributes.loan.gracePeriod} Years</h3>
                                 <p>Current Loan Length</p>
                                 <h3>{this.props.user.attributes.loan.loanLength} Years</h3>
                                 <p>current # of Investors:</p>
                                 <h3>{this.props.user.attributes.loan.investments.length} </h3>
                              </div>
                              <div className="col-xs-4">

                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
})

const UserNav = React.createClass({

   _handleLogout: function(){

      ACTIONS.logOut()
   },


   render: function(){


      return(
         <nav className="usr-nav navbar-default stdnt-nav">
            <div className="container-fluid">
               <div className="navbar-header nav-head-cont">
                  <a className="navbar-brand nav-title" >StudentStocks</a>
               </div>

               <ul className="nav navbar-nav navbar-right nav-info">
                  <li>{this.props.firstName}</li>
                  <li><i className="fa fa-user" aria-hidden="true"></i></li>
                  <li><a href="#">Logout</a></li>
               </ul>
            </div>
         </nav>

      )
   }
})


// const UserFooter = React.createClass({
//
//
//
//    render: function(){
//
//       return (
//
//       )
//    }
// })
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



module.exports = {StudentView, UserNav}
