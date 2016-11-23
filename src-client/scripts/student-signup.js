const React = require('react')
const ACTIONS = require('./actions.js')






const StudentFormModal = React.createClass ({


   _handleClick: function(evt){
      console.log("??????")
      evt.preventDefault()
      console.log('this is the state you want to send to your backend>', this.state)
      let newForm = this.state;
         newForm["level"] = this.refs.level.value
         newForm["bio"] = this.refs.bio.value

      console.log(newForm)
      ACTIONS.submitStudentForm(newForm)
      console.log(window.location.hash)

      window.location.hash = "/dash/students"



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


               <button className="btn button-primary" onClick={this._handleClick}>Submit Form</button>
            </form>

         </div>


         )
   }




})
const SchoolOption = React.createClass({





   render: function(){
      return (
         <option value=""></option>
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
