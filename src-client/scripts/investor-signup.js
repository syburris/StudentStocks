const React = require('react')
const ACTIONS = require('./actions.js')
const {StudentFormModal, SimpInput, SchoolOption} = require("./student-signup.js")




const InvestorForm = React.createClass({


   // "username":"myname@gmail.com",
   // "password":"hunter2",
   // "firstName":"Alex",
   // "lastName":"Cross",
   // "ssn":"654321-4321-21",
   // "school":"College of Charleston"
   _handleClick: function(evt){
      evt.preventDefault()

      let newForm = this.state;
      newForm["school"] = this.refs.school.value

      ACTIONS.submitInvestorForm(newForm)


   },
   handleChange: function(data, name) {
      let newState = {};

      newState[name] = data;

      this.setState(newState, () => {
         console.log('current state', this.state);
      });
   },




   render: function(){

      return (
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
               {/* ssn */}
               <SimpInput title="SSN" name="ssn" handleChange={this.handleChange} />
               {/* school */}
               <label htmlFor="">School Attended</label>
               <select className="form-control" id="select" ref="school">
                  {this.props.schoolData.map((obj,i)=>{
                     return <SchoolOption schoolName={obj.get('name')} key={i}/>
                  })}
               </select>
               <button className="btn button-primary" onClick={this._handleClick}>Submit Form</button>

            </form>
         </div>


      )
   }
})

module.exports = InvestorForm
