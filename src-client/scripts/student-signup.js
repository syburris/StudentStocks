const React = require('react')






const StudentFormModal = React.createClass ({


   render: function() {


         return (

         <div className="form-cont">
            <form action="" className="form-horizontal">
               {/* username */}
               <SimpleInput fieldType="text" nameTag="Email" ref="email"/>
               {/* password */}
               <SimpleInput fieldType="password" nameTag="Password" ref="password"/>
               {/* firstName */}
               <SimpleInput fieldType="text" nameTag="First Name" ref="first"/>
               {/* lastName */}
               <SimpleInput fieldType="text" nameTag="Last Name" ref="last"/>
               {/* bio */}

               {/* school */}
               <SimpleInput fieldType="text" nameTag="School Attending" ref="school"/>
               {/* bio */}
               <label htmlFor="bio">Tell us a little about yourself...</label>
               <textarea className="form-control" rows="3" id="textArea" ></textarea>
               {/* highSchool */}
               <SimpleInput fieldType="text" nameTag="High School" ref="highSchool"/>
               {/* transcript */}
               <SimpleInput fieldType="text" nameTag="Transcript" ref="transcipt"/>
               {/* level */}
               Graduate or Undergrad?
               <select className="form-control" id="select" ref="level">
                  <option>Undergraduate</option>
                  <option>Graduate</option>
               </select>

               {/* gpa */}
               <SimpleInput fieldType="text" nameTag="G.P.A" ref="gpa"/>
               {/* major */}
               <SimpleInput fieldType="text" nameTag="Major" ref="major"/>
               {/* minor */}
               <SimpleInput fieldType="text" nameTag="Minor" ref="minor"/>
               {/* ssn */}
               <SimpleInput fieldType="text" nameTag="SSN" ref="ssn"/>
               {/* loanGoal */}
               <SimpleInput fieldType="text" nameTag="Loan Amount" ref="loanGoal"/>
            </form>

            </div>


               )
               }




               })
const SimpleInput = React.createClass({





   render: function(){

      return (

         <div className="input-group simp-input">
            <label htmlFor={this.props.nameTag} className="input-label">{this.props.nameTag}</label>
            <input type={this.props.fieldType} className="form-control" placeholder={this.props.nameTag}/>
         </div>
      )
   }
})

module.exports = {StudentFormModal}
