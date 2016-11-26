const React = require('react')
const ACTIONS = require('./actions.js')






const StudentFormModal = React.createClass ({




   handleChange: function(data, name) {
      let newState = {};

      newState[name] = data;

      this.setState(newState, () => {
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
               <label htmlFor="">School Attending</label>
               <select className="form-control" id="select" ref="school">
                  {this.props.schoolData.map((obj,i)=>{
                     return <SchoolOption schoolName={obj.get('name')} key={i}/>
                  })}
               </select>

               {/* bio */}
               <label htmlFor="bio">Tell us a little about yourself...</label>
               <textarea className="form-control" rows="1" id="textArea" ref="bio"></textarea>
               {/* highSchool */}
               <SimpInput title="High School" name="highSchool" handleChange={this.handleChange} />
               {/* level */}
               <label htmlFor="level">Graduate or Undergrad?</label>
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
         <option value={this.props.schoolName}>
            {this.props.schoolName}
         </option>
      )
   }
})



module.exports = {StudentFormModal, SchoolOption}
