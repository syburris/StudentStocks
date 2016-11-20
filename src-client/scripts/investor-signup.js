const React = require('react')
const ACTIONS = require('./actions.js')




const InvestorForm = React.createClass({


   "username":"myname@gmail.com",
   "password":"hunter2",
   "firstName":"Alex",
   "lastName":"Cross",
   "ssn":"654321-4321-21",
   "school":"College of Charleston"
   _handleClick: function(evt){
      evt.preventDefault()

      let newForm = {
         username: this.refs.email.value,
         password: this.refs.password.value,
         firstName: this.refs.firstName.value,
         school: this.refs.school.value,


      }
   }




   render: function(){

      return (


      )
   }
})
