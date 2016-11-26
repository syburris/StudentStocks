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

   _exitLogin: function(){
      STORE.setStore("userType", "")
   },


   render: function(){
      if(this.props.userType === "StudentSignup" && this.state.pageView === 0){
         return(
            <div className="gen-modal login-modal tex-center">
               <a className="close-modal" href="#" onClick={this._exitLogin}>X</a>
               <div>
                  <h1>Helloooooooooooo</h1>
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
      }else{
         return(
            <div className="gen-modal login-modal">
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

module.exports = {LoginModal, StudModal, FormModal}
