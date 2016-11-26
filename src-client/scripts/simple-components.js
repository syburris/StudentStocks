const React = require('react')
const ACTIONS = require("./actions.js")
const STORE = require('./store.js')

const LoginModal = React.createClass({

   _handleSubmit: function(evt){
      evt.preventDefault()
      console.log(this.refs.userField.value)
      console.log(this.refs.passField.value)
      let loginInfo = {
         username: this.refs.userField.value,
         password: this.refs.passField.value
      }
      if(this.props.userType === "Investor"){

         ACTIONS.handleInvestorLogin(loginInfo)
      }else{
         ACTIONS.handleStudentLogin(loginInfo)
      }

   },
   _exitLogin: function(){
      STORE.setStore('userType', "")
   },



   render: function(){

      return(
         <div className="gen-modal login-modal">

            <a className="close-modal" href="#" onClick={this._exitLogin}>X</a>
            <div>
               <h3>{this.props.userType} login</h3>

               <form action="">
                  <p>Username</p>
                  <input className="input-group" type="text" className="username" ref="userField"/>
                  <p>Password</p>
                  <input className="input-group" type="password" className="password" ref="passField"/>
                  <button onClick={this._handleSubmit} className="btn btn-primary">Login</button>
               </form>
            </div>
         </div>

      )
   }
})

const FormModal = React.createClass({

   getInitialState: function(){

      return {pageView: 0}
   },
   _changePage: function(evt){
      console.log(this.state)
      if(evt.target.textContent === "next"){
         this.setState({pageView: 1})
      }else{
         this.setState({pageView: 0})
      }

   },
   _handleClick: function(evt){
      console.log("??????")
      evt.preventDefault()
      console.log('this is the state you want to send to your backend>', this.state)
      let newForm = this.state;
         newForm["level"] = this.refs.level.value
         newForm["bio"] = this.refs.bio.value
         newForm["school"] = this.refs.school.value

      console.log(newForm)
      ACTIONS.submitStudentForm(newForm)
      console.log(window.location.hash)

      window.location.hash = "/dash/students"

   },
   handleChange: function(data, name) {
      let newState = {};

      newState[name] = data;

      this.setState(newState, () => {
      });
      console.log(this.state)
   },

   _exitLogin: function(){
      STORE.setStore("userType", "")
   },


   render: function(){
      if(this.props.userType === "StudentSignup" && this.state.pageView === 0){
         return(
            <div className="gen-modal signup-modal text-center">
               <a className="close-modal" href="#" onClick={this._exitLogin}>X</a>
               <div>
                  <h1>Personal Info</h1>
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
                     </form>

                     <div className="row">
                        <div className="col-xs-6">
                           {/* <button className="btn btn-primary" type="back" onClick={this._changePage}>back</button> */}
                        </div>
                        <div className="col-xs-6">
                           <button className="btn btn-primary" onClick={this._changePage}>next</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

               )
      }else if(this.props.userType === "StudentSignup" && this.state.pageView === 1){
         return(
            <div className="gen-modal signup-modal">
               <a className="close-modal" href="#" onClick={this._exitLogin}>X</a>

               <div>
                  <h1>Im workkinnn</h1>
                  <div className="row">
                     <div className="col-xs-6">
                        <button className="btn btn-primary" type="back" onClick={this._changePage}>back</button>
                     </div>
                     <div className="col-xs-6">
                        <button className="btn btn-primary" type="next" onClick={this._changePage}>next</button>
                     </div>
                  </div>
               </div>
            </div>
         )
                  }
                  }
                  })

const StudModal = React.createClass({

   _exitLogin: function(){
      STORE.setStore('selectedStudent', {})
   },




   render: function(){
      console.log(this.props)

      return(
         <div className="gen-modal stud-modal">
            <a className="close-modal" href="#/dash/investors" onClick={this._exitLogin}>X</a>
            <div>
               <h4>{this.props.modData.firstName} {this.props.modData.lastName}</h4>
               <p>{this.props.modData.school}</p>

            </div>
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



                  module.exports = {LoginModal, StudModal, FormModal}
