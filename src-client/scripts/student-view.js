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
      ACTIONS.fetchCurrentStudent()

   },

   _handlePayment: function(){
      let newPayment={payment: "236.0"}
      ACTIONS.submitPayment(newPayment)
   },

   render: function(){
      if(!this.props.user.attributes){
         return(
            <p>Loadingggg</p>
         )
      }

      // console.log("student props", this.props.user.attributes)
      // console.log('ehhhh', this.props.user)
      return(
         <div className="fluid-container student-view">
            <UserNav userName={this.props.user.attributes && this.props.user.attributes.username} firstName={this.props.user.attributes && this.props.user.attributes.firstName} />
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
      console.log('hahsdkfjahsldkfhja')

      ACTIONS.logOut()
   },


   render: function(){


      return(
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <a className="navbar-brand" >StudentStocks</a>
               </div>

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                     <li className="active"><a href="#/login/students">STUDENT LOGIN <span className="sr-only">(current)</span></a></li>
                     <li><a href="#">Link</a></li>

                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                     <li><p>{this.props.firstName}</p><span>{this.props.userName}</span> </li>
                     <li><i className="fa fa-user" aria-hidden="true"></i></li>
                     <li><button onClick={this._handleLogout}>Logout</button></li>
                  </ul>
               </div>
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
