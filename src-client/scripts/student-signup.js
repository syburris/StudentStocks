const React = require('react')
const ACTIONS = require('./actions.js')






const StudentFormModal = React.createClass ({


   _handleClick: function(evt){
      evt.preventDefault()

      let newForm ={
         username: this.refs.email.value,
         password: this.refs.password.value,
         gpa: this.refs.gpa.value,
         firstName: this.refs.firstName.value,
         highSchool: this.refs.highSchool.value,
         lastName: this.refs.last.value,
         level: this.refs.level.value,
         loanGoal: this.refs.loanGoal.value,
         major: this.refs.major.value,
         minor: this.refs.minor.value,
         school: this.refs.school.value,
         ssn: this.refs.ssn.value,
         bio: this.refs.bio.value
      }
      console.log(newForm)
      ACTIONS.submitStudentForm(newForm)



   },


   render: function() {


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

               {/* school */}
               <div className="input-group simp-input">
                  <label htmlFor="school" className="input-label">School Attending</label>
                  <input type="text" className="form-control" placeholder="School Attending" ref="school"/>
               </div>
               {/* bio */}
               <label htmlFor="bio">Tell us a little about yourself...</label>
               <textarea className="form-control" rows="3" id="textArea" ref="bio"></textarea>
               {/* highSchool */}
               <div className="input-group simp-input">
                  <label htmlFor="highSchool" className="input-label">High School</label>
                  <input type="text" className="form-control" placeholder="High School" ref="highSchool"/>
               </div>

               {/* level */}
               Graduate or Undergrad?
               <select className="form-control" id="select" ref="level">
                  <option>UNDERGRADUATE</option>
                  <option>GRADUATE</option>
               </select>
               {/* gpa */}
               <div className="input-group simp-input">
                  <label htmlFor="gpa" className="input-label">G.P.A</label>
                  <input type="text" className="form-control" placeholder="G.P.A" ref="gpa"/>
               </div>
               {/* major */}
               <div className="input-group simp-input">
                  <label htmlFor="major" className="input-label">Major</label>
                  <input type="text" className="form-control" placeholder="Major" ref="major"/>
               </div>
               {/* minor */}
               <div className="input-group simp-input">
                  <label htmlFor="password" className="input-label">Minor</label>
                  <input type="text" className="form-control" placeholder="Minor" ref="minor"/>
               </div>
               {/* ssn */}
               <div className="input-group simp-input">
                  <label htmlFor="ssn" className="input-label">SSN</label>
                  <input type="text" className="form-control" placeholder="SSN" ref="ssn"/>
               </div>
               {/* loanGoal */}
               <div className="input-group simp-input">
                  <label htmlFor="loanGoal" className="input-label">Loan Amount</label>
                  <input type="text" className="form-control" placeholder="Loan Amount" ref="loanGoal"/>
               </div>

               <button className="btn button-primary" onClick={this._handleClick}>Submit Form</button>
            </form>

         </div>


               )
               }




               })


module.exports = {StudentFormModal}
