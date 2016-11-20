const React = require('react')
const ACTIONS = require('./actions.js')




const InvestorForm = React.createClass({


   // "username":"myname@gmail.com",
   // "password":"hunter2",
   // "firstName":"Alex",
   // "lastName":"Cross",
   // "ssn":"654321-4321-21",
   // "school":"College of Charleston"
   _handleClick: function(evt){
      evt.preventDefault()

      let newForm = {
         username: this.refs.email.value,
         password: this.refs.password.value,
         firstName: this.refs.firstName.value,
         lastName: this.refs.last.value,
         ssn: this.refs.ssn.value,
         school: this.refs.school.value,


      }
      ACTIONS.submitInvestorForm(newForm)


   },




   render: function(){

      return (
         <div className="form-cont">
            <form action="" className="form-horizontal">
               {/* username */}
               <div className="input-group simp-input">
                  <label htmlFor="email" className="input-label">Email</label>
                  <input type="text" className="form-control" placeholder="Email" ref="email"/>
               </div>
               {/* password */}
               <div className="input-group simp-input">
                  <label htmlFor="password" className="input-label">Password</label>
                  <input type="password" className="form-control" placeholder="Password" ref="password"/>
               </div>
               {/* firstName */}
               <div className="input-group simp-input">
                  <label htmlFor="first" className="input-label">Fist Name</label>
                  <input type="text" className="form-control" placeholder="First Name" ref="firstName"/>
               </div>
               {/* lastName */}
               <div className="input-group simp-input">
                  <label htmlFor="last" className="input-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" ref="last"/>
               </div>
               {/* ssn */}
               <div className="input-group simp-input">
                  <label htmlFor="ssn" className="input-label">SSN</label>
                  <input type="text" className="form-control" placeholder="SSN" ref="ssn"/>
               </div>
               {/* school */}
               <div className="input-group simp-input">
                  <label htmlFor="school" className="input-label">School Attending</label>
                  <input type="text" className="form-control" placeholder="School Attending" ref="school"/>
               </div>
               <button className="btn button-primary" onClick={this._handleClick}>Submit Form</button>
               
            </form>
         </div>


      )
   }
})
