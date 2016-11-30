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
            <UserNav user={this.props.user} userName={this.props.user.attributes && this.props.user.attributes.username} firstName={this.props.user.attributes && this.props.user.attributes.firstName} showDrop={this.props.showDrop} searchView={this.props.searchView} schoolData={this.props.schoolData} />
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
      let progBarStyles = + this.props.studentData.attributes.mySchool.color
      let headerStyles = "stud-head text-center "+ this.props.studentData.attributes.mySchool.color
      let amountInvested = parseInt(this.props.studentData.get("loan").principalBalance)
      let loanAmount = parseInt(this.props.studentData.get("loan").loanGoal)
      let perVal = Math.floor(((amountInvested / loanAmount)* 100)) + "%"
      let style = {
         width: perVal,
      }
      return(
         <div className="col-xs-6 col-sm-3  stud-card">
            <div className="thumbnail stud-thumb">
               <div className="progress vertical">
                  <div className="progress-bar fill-bar text-center" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={style}>
                     <h3>{perVal}</h3>
                  </div>
               </div>
               <h4 className={headerStyles}><i className="fa fa-graduation-cap" aria-hidden="true"></i>{this.props.studentData.get('school')}</h4>
               <div className="row thumb-info">
                  <h4>{this.props.studentData.get("firstName")+ " " + this.props.studentData.get("lastName")}</h4>
                  <p><span>Major: </span>{this.props.studentData.get('major')}</p>
                  <p><span>GPA: </span>{this.props.studentData.get('gpa')}</p>
                  <p>StudentStock Remaining:</p>
                  <h4>{loanAmount - amountInvested}</h4>
               </div>
               <button className="btn btn-primary btn-invst" onClick={this._handleInvest}>Invest</button>

            </div>
         </div>
      )
   }
})
const UserNav = React.createClass({
   getInitialState: function(){
      return(
         {searched: "/students"}
      )
   },
   _handleSearch: function(slctd){
      console.log("is this linked up", slctd)

      this.setState({searched: slctd})

   },

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
      console.log(this.state)

      let showDropDown = function(){
         console.log("runnniinnnn?",this.props.showDrop)
         if(this.props.showDrop === true){
            console.log("hello?")
            return <DropDownMenu handleSearch={this._handleSearch} mySchool={this.props.user.attributes.mySchool.id}/>
         }

      }.bind(this)
      let showSearchBar = function(){
         if(this.state.searched === "school"){
            return <SchoolFilter schools={this.props.schoolData}/>
         }else if(this.state.searched === "gpa"){
            return <GpaFilter />
         }
      }.bind(this)


      return(
         <nav className="invst-nav navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <a className="navbar-brand" onClick={this._handleLogout}>StudentStocks</a>
               </div>
               {showDropDown()}

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">

                     <li className="active" onClick={this._handleSearchButton}><a href="#/dash/investors"><i className="fa fa-search" aria-hidden="true"></i><span className="sr-only">(current)</span></a></li>
                     {showSearchBar()}

                  </ul>
                  <h4 className='active'>Total Investments returned: $ {this.props.user.attributes.principalPaid}</h4>

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

const SchoolFilter = React.createClass({
   _handleSubmit: function(evt){
      evt.preventDefault()
      console.log("clickky")
      console.log(this.refs.school.value)
      let newSearch = "/students/school/" + this.refs.school.value

      ACTIONS.fetchAllStudents(newSearch)


   },


   render: function(){
      return(
         <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
               <select className="form-control" name="" id="select" ref="school">
                  {this.props.schools.map(function(obj, i){
                     return(
                        <SchoolOption val={obj.get("id")} title={obj.get("name")} key={i}/>
                     )
                  })}
               </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this._handleSubmit}>Submit</button>
         </form>

      )
   }
})
const SchoolOption = React.createClass({

   render: function(){
      return(
         <option value={this.props.val}>{this.props.title}</option>
      )
   }
})
const GpaFilter = React.createClass({

   _handleSubmit: function(evt){
      evt.preventDefault()
      console.log("clickky")
      console.log(this.refs.school.value)
      let newSearch = "/students/gpa/" + this.refs.gpa.value

      ACTIONS.fetchAllStudents(newSearch)


   },



   render: function(){
      return(
         <form action="" className="navbar-form navbar-left">
            <div className="form-group">
               <select name="" id="select" className="form-control" ref="gpa"></select>
            </div>
         </form>
      )
   }
})

const DropDownMenu = React.createClass({
   _handleSelect: function(evt){
      if(evt.target.name === "/students"){
         ACTIONS.fetchAllStudents(evt.target.name)
      }else if(evt.target.name === "myschools"){
         let mySchool = "/students/school/" + this.props.mySchool
         ACTIONS.fetchAllStudents(mySchool)
      }else{
         this.props.handleSearch(evt.target.name)

      }
      STORE.setStore("showDrop", false)

   },

   render: function(){
      console.log(this.state)
      return(
         <ul className="dropdown-menu drop-search text-center">
            <li className="drop-title">Search By:</li>
            <li onClick={this._handleSelect}>
               <a href="#/dash/investors" name="myschools">My school</a>
            </li>
            <li  onClick={this._handleSelect}><a href="#/dash/investors" name="school">School</a></li>
            <li  onClick={this._handleSelect}><a href="#/dash/investors" name="gpa">GPA</a></li>
            <li  onClick={this._handleSelect}><a href="#/dash/investors" name="/students">Show All</a></li>
         </ul>

      )
   }
})



module.exports = InvestorView
