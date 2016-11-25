const React = require('react')
const ACTIONS = require('./actions.js')

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
         console.log("running", this.props)


      return(

         <div className="fluid-container in-cont">
            <UserNav userName={this.props.user.attributes && this.props.user.attributes.username} firstName={this.props.user.attributes && this.props.user.attributes.firstName} />
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



   render: function(){

      return(
         <div className="col-xs-6 col-sm-3">
            <div className="thumbnail stud-card">
               <h4>{this.props.studentData.get("firstName")+ " " + this.props.studentData.get("lastName")}</h4>
               <p>{this.props.studentData.get('school')}</p>

               <button className="btn btn-primary">Invest</button>
            </div>
         </div>
      )
   }
})
const UserNav = React.createClass({

   _handleLogout: function(){

      ACTIONS.logOut()
   },


   render: function(){


      return(
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <a className="navbar-brand" onClick={this._handleLogout}>StudentStocks</a>
               </div>

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                     <li className="active"><a href="#/login/students">STUDENT LOGIN <span className="sr-only">(current)</span></a></li>
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


module.exports = InvestorView
