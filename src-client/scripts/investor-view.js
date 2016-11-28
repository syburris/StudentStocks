const React = require('react')
const ACTIONS = require('./actions.js')
const {StudModal} = require('./simple-components.js')
const STORE = require("./store.js")

const InvestorView = React.createClass({

   componentWillMount: function(){

      ACTIONS.fetchCurrentInvestor()
   },






   render: function(){
      console.log(this.props)
      if(this.props.user.attributes === undefined){

         return(
            <p>loadinng</p>
         )
      }
      let modalView = function(){
         console.log(this.props)
         if(this.props.selectedStudent.attributes != undefined){
            return(
               <StudModal modData={this.props.selectedStudent.attributes} loanData={this.props.selectedStudent.attributes.loan}/>
            )
         }
      }.bind(this)
         console.log("running", this.props)


      return(

         <div className="fluid-container in-cont">
            <UserNav userName={this.props.user.attributes && this.props.user.attributes.username} firstName={this.props.user.attributes && this.props.user.attributes.firstName} showDrop={this.props.showDrop} searchView={this.props.searchView} />
            {modalView()}
            <div className="container student-box">
               <div className="row">
                  {this.props.studentInfo.map((obj, i)=>{

                     return (
                        <StudentCard studentData={obj} key={i}/>
                     )

                  })}
               </div>
            </div>

         </div>
      )
   }
})



const StudentCard = React.createClass({

   _handleInvest: function(){
      console.log(this.props.studentData)
      STORE.setStore("selectedStudent", this.props.studentData)
   },



   render: function(){

      return(
         <div className="col-xs-6 col-sm-3  stud-card">
            <div className="thumbnail">
               <h4>{this.props.studentData.get("firstName")+ " " + this.props.studentData.get("lastName")}</h4>
               <p>{this.props.studentData.get('school')}</p>

               <button className="btn btn-primary" onClick={this._handleInvest}>Invest</button>
            </div>
         </div>
      )
   }
})
const UserNav = React.createClass({

   _handleLogout: function(){

      ACTIONS.logOut()
   },
   _handleSearchButton: function(){
      var val = this.props.showDrop
      if(val === true){
         val = false
      }else{
         val = true
      }
      STORE.setStore("showDrop", val)
   },


   render: function(){

      let showDropDown = function(){
         console.log("runnniinnnn?",this.props.showDrop)
         if(this.props.showDrop === true){
            console.log("hello?")
            return <DropDownMenu/>
         }

      }.bind(this)
      let showSearchBar = function(){
         if(this.props.searchView === true){
            return <StudSearch/>
         }
      }.bind(this)


      return(
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <a className="navbar-brand" onClick={this._handleLogout}>StudentStocks</a>
               </div>
               {showDropDown()}

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">

                     <li className="active"><a href="#/dash/investors"><i className="fa fa-search" aria-hidden="true" onClick={this._handleSearchButton}></i><span className="sr-only">(current)</span></a></li>

                     <li><a href="#">Link</a></li>

                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                     <li><p>{this.props.firstName}</p><span>{this.props.userName}</span> </li>
                     <li><i className="fa fa-user" aria-hidden="true"></i></li>
                     <li><a href="#">Logout</a></li>
                  </ul>
               </div>
            </div>
         </nav>

      )
   }
})

const StudSearch = React.createClass({



   render: function(){
      return(
         <li>
            <input type="text"/>
         </li>
      )
   }
})

const DropDownMenu = React.createClass({

   render: function(){
      return(
         <ul className="dropdown-menu drop-search">
            <li className="drop-title">Search By:</li>
            <li><a href="">School</a></li>
            <li><a href="">GPA</a></li>
            <li><a href="">Major</a></li>
            <li><a href="">Show All</a></li>
         </ul>

      )
   }
})


module.exports = InvestorView
