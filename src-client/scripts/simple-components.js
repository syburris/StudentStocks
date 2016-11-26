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

module.exports = {LoginModal, StudModal}
