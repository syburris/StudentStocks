const React = require('react')
const ACTIONS = require('./actions.js')






const StudentFormModal = React.createClass ({


   _handleClick: function(evt){
      evt.preventDefault()
      console.log('this is the state you want to send to your backend>', this.state)
      let newForm = this.state;
         newForm["level"] = this.refs.level.value
         newForm["bio"] = this.refs.bio.value
      // let newForm ={
      //    username: this.refs.email.value,
      //    password: this.refs.password.value,
      //    gpa: this.refs.gpa.value,
      //    firstName: this.refs.firstName.value,
      //    highSchool: this.refs.highSchool.value,
      //    lastName: this.refs.last.value,
      //    level: this.refs.level.value,
      //    loanGoal: this.refs.loanGoal.value,
      //    major: this.refs.major.value,
      //    minor: this.refs.minor.value,
      //    school: this.refs.school.value,
      //    ssn: this.refs.ssn.value,
      //    bio: this.refs.bio.value
      // }
      console.log(newForm)
      ACTIONS.submitStudentForm(newForm)



   },

   handleChange: function(data, name) {
      let newState = {};

      newState[name] = data;

      this.setState(newState, () => {
         console.log('current state', this.state);
      });
   },


   render: function() {


         return (
            // <div className="input-group simp-input">
            //    <label htmlFor={this.props.title} className="input-label">{this.props.title}</label>
            //    <input type={textType} className="form-control" name={this.props.name} placeholder={this.props.title} onChange={this.changeHandler}/>
            // </div>

         <div className="form-cont">
            <form action="" className="form-horizontal">
               {/* username */}
               <SimpInput title="Email" name="username" handleChange={this.handleChange} />
               {/* password */}
               <SimpInput textType="password" title="Password" name="password" handleChange={this.handleChange} />
               {/* firstName */}
               <SimpInput title="First Name" name="firstName" handleChange={this.handleChange} />
               {/* lastName */}
               <SimpInput title="Last Name" name="lastName" handleChange={this.handleChange} />
               {/* school */}
               <SimpInput title="School Attending" name="school" handleChange={this.handleChange} />
               {/* bio */}
               <label htmlFor="bio">Tell us a little about yourself...</label>
               <textarea className="form-control" rows="3" id="textArea" ref="bio"></textarea>
               {/* highSchool */}
               <SimpInput title="High School" name="highSchool" handleChange={this.handleChange} />
               {/* level */}
               Graduate or Undergrad?
               <select className="form-control" id="select" ref="level">
                  <option>UNDERGRADUATE</option>
                  <option>GRADUATE</option>
               </select>
               {/* gpa */}
               <SimpInput title="G.P.A" name="gpa" handleChange={this.handleChange} />
               {/* major */}
               <SimpInput title="Major" name="major" handleChange={this.handleChange} />
               {/* minor */}
               <SimpInput title="Minor" name="minor" handleChange={this.handleChange} />
               {/* ssn */}
               <SimpInput title="SSN" name="ssn" handleChange={this.handleChange} />
               {/* loanGoal */}
               <SimpInput title="Loan Amount" name="loanGoal" handleChange={this.handleChange} />






               {/* <div className="input-group simp-input">
                  <label htmlFor="email" className="input-label">Email</label>
                  <input type="text" className="form-control" placeholder="Email" ref="email"/>
               </div> */}
               {/* <div className="input-group simp-input">
                  <label htmlFor="password" className="input-label">Password</label>
                  <input type="password" className="form-control" placeholder="Password" ref="password"/>
               </div> */}
               {/* <div className="input-group simp-input">
                  <label htmlFor="first" className="input-label">Fist Name</label>
                  <input type="text" className="form-control" placeholder="First Name" ref="firstName"/>
                  </div>
                  <div className="input-group simp-input">
                  <label htmlFor="last" className="input-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" ref="last"/>
               </div> */}
               {/*
                  <div className="input-group simp-input">
                  <label htmlFor="school" className="input-label">School Attending</label>
                  <input type="text" className="form-control" placeholder="School Attending" ref="school"/>
               </div> */}
               {/*
                  <div className="input-group simp-input">
                  <label htmlFor="highSchool" className="input-label">High School</label>
                  <input type="text" className="form-control" placeholder="High School" ref="highSchool"/>
                  </div>


                  <div className="input-group simp-input">
                  <label htmlFor="gpa" className="input-label">G.P.A</label>
                  <input type="text" className="form-control" placeholder="G.P.A" ref="gpa"/>
               </div> */}
               {/* <div className="input-group simp-input">
                  <label htmlFor="major" className="input-label">Major</label>
                  <input type="text" className="form-control" placeholder="Major" ref="major"/>
               </div> */}
               {/* minor */}
               {/* <div className="input-group simp-input">
                  <label htmlFor="password" className="input-label">Minor</label>
                  <input type="text" className="form-control" placeholder="Minor" ref="minor"/>
               </div> */}
               {/* <div className="input-group simp-input">
                  <label htmlFor="ssn" className="input-label">SSN</label>
                  <input type="text" className="form-control" placeholder="SSN" ref="ssn"/>
                  </div>
                  <div className="input-group simp-input">
                  <label htmlFor="loanGoal" className="input-label">Loan Amount</label>
                  <input type="text" className="form-control" placeholder="Loan Amount" ref="loanGoal"/>
                  </div>
                  <SimpInput title="email" name="email" handleChange={this.handleChange} />

                  <SimpInput title="username" name="username" handleChange={this.handleChange} />


               <SimpInput title="facebook" name="facebook" handleChange={this.handleChange} /> */}

               <button className="btn button-primary" onClick={this._handleClick}>Submit Form</button>
            </form>

         </div>


         )
   }




})
const SimpInput = React.createClass({

   changeHandler: function(event) {
      const {
         value: value,
         name: name,
      } = event.currentTarget;
      console.log(value);

      this.props.handleChange(value, name);
   },

   render: function(){
      let textType
      if(this.props.textType != undefined){
         textType = this.props.textType
      }else{textType = "text"}

      return(
         <div className="input-group simp-input">
            <label htmlFor={this.props.title} className="input-label">{this.props.title}</label>
            <input type={textType} className="form-control" name={this.props.name} placeholder={this.props.title} onChange={this.changeHandler}/>
         </div>


      )
   }
})


module.exports = {StudentFormModal, SimpInput}
