const React = require('react')
const ACTIONS = require("./actions.js")
const {LoginModal, StudFormModal, InvstFormModal} = require('./simple-components.js')
const STORE = require('./store.js')


const HomeView = React.createClass({



   componentWillMount: function(){
      // ACTIONS.fetchSchoolData()
   },

   _handleClick: function(evt){
      console.log(evt)
      console.log(this.refs)


   },

   render: function(){
      console.log('data', this.props)
      let loginModalView = function(){

         if(this.props.userType === "Student" || this.props.userType === "Investor"){
            console.log("im tryin to changggaa")
               return <LoginModal userType={this.props.userType}/>

         }
      }.bind(this)

      let studFormModalView = function(){
         if(this.props.userType === "StudentSignup"){
            return <StudFormModal userType={this.props.userType} schoolData={this.props.schoolData} />
         }

      }.bind(this)

      let invstFormModalView = function(){
         if(this.props.userType === "InvestorSignup"){
            return <InvstFormModal schoolData={this.props.schoolData}/>
         }

      }.bind(this)



      return(
         <div className="fluid-container home-view">
            {loginModalView()}
            {studFormModalView()}
            {invstFormModalView()}
            <div className="top-offset"></div>

            <NavView/>

            <HeaderHeros/>
            <AboutStocks/>
            <StudentSuccess/>
            <div className="row">
               {this.props.schoolData.map((obj, i) =>{

                  return (
                     <SchoolItem imgSrc={obj.get('logo')} key={i}/>
                  )
               })}
            </div>




         </div>
      )

   },




})

const SchoolItem = React.createClass({




   render: function(){

      return(
         <div className="col-xs-6 col-sm-3 schoolCard">
            <img src={this.props.imgSrc} alt=""/>
         </div>
      )
   }
})



const NavView = React.createClass({

   _studLogin: function(){
      STORE.setStore('userType', "Student")
   },

   _invstLogin: function(){
      STORE.setStore('userType', "Investor")
   },





   render: function(){
      return(
         <nav className="home-nav container-fluid">


            <div className="row">
               <div className="title-cont col-xs-12 col-sm-4 text-center">
                  <div className="logo-cont">
                     <img src="images/main-logo.png" alt=""/>
                  </div>
                  <h1>StudentStocks</h1>
                  <h3>Invest in the brightest futures</h3>
               </div>
               <div className=" menu-col col-sm-8">
                  {/* <div className="row"> */}
                  <div className="col-sm-12 r-top">

                  </div>
                  <div className="col-sm-12">
                     <ul className="nav-menu">
                        <li><a href="#" onClick={this._studLogin}>Student Login</a></li>
                        <li> | </li>
                        <li><a href="#" onClick={this._invstLogin}>Investor Login</a></li>
                        <li> | </li>
                        <li><a href="#">About Us</a></li>
                     </ul>
                  </div>

                  {/* </div> */}

               </div>
            </div>

         </nav>
      )
   }
})


const HeaderHeros = React.createClass({

   _handleStudentForm: function(evt){
      evt.preventDefault()
      console.log(evt)

      STORE.setStore("userType", "StudentSignup")
   },

   _handleInvestorForm: function(evt){
      evt.preventDefault()

      STORE.setStore("userType", "InvestorSignup")

   },

   _handleLoginModalView: function(evt){
      console.log(evt)

      STORE.setStore('showLoginModal', true)
   },





   render: function(){

      return(
         <div className="row text-center apply-cont">
            <div className="col-xs-12 col-sm-6 student-hero">
               <h3>Are you A Student?</h3>
               <p>Apply for a loan today</p>
               {/* route to student form page  */}
               <button className="btn btn-primary" onClick={this._handleStudentForm} ref="student">Apply Now</button>
               <p>or</p>
               {/* page down to student about/testimonials */}
               <button className="btn btn-primary" onClick={this._handleLoginModalView}>Find out more</button>
               <h4>XX Active Student Loans</h4>

            </div>
            <div className="col-xs-12 col-sm-6 invester-hero">
               <h3>Become an Investor...</h3>
               <p>Invest in our future today</p>
               {/* route to student form page  */}
               <button className="btn btn-primary" onClick={this._handleInvestorForm}>Apply Now</button>
               <p>or</p>
               {/* page down to student about/testimonials */}
               <button className="btn btn-primary">Find out more</button>
               <h4>XX Current Investors</h4>
            </div>
         </div>


      )
   }


})


const AboutStocks = React.createClass({


   render: function(){

      return (
         <div className="row abt-cont text-center">

            <div>
               <h2>How StudentStocks<span>&#8482;</span> Works</h2>
               <p>Here at StudentStocks we make the frustration of student loans a thing of the past</p>
            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Easy Signup</h3>
               {/* <i className="fa fa-file-text-o abt-icon" aria-hidden="true"></i> */}
               <div className="icon-container">
                  <img src="/images/Untitled-4.png" alt=""/>
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nulla beatae ratione itaque fuga veritatis accusantium, debitis ab, voluptatem voluptatum quis suscipit similique tempora blanditiis sint in! Id, doloribus, aliquam!</p>


            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Lower Rates</h3>
               <div className="icon-container">
                  <img src="/images/StudentIcon.png" alt=""/>
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quam voluptatibus error hic officia quasi obcaecati velit beatae soluta, nobis, atque, nam rerum ullam deleniti maiores. Recusandae amet beatae expedita!</p>

            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Become an Investor</h3>
               <div className="icon-container">
                  <img src="/images/DollarSign_icon.png" alt=""/>
               </div>

               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ut, nihil aliquid soluta ipsum ea esse eius! Eius iste quaerat, iusto necessitatibus ex aliquam ducimus animi rem quo illo tempora.</p>

            </div>

         </div>


      )
   }
})




const StudentSuccess = React.createClass ({


   render: function(){


      return (
         <div className="container">
            <div className="row success-story">
               <h3>Success Stories</h3>
               <div className="col-sm-4">
                  <img src="https://static.pexels.com/photos/108048/pexels-photo-108048.jpeg" alt=""/>
               </div>
               <div className=" col-sm-8">
                  <h3>Colby</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo error sint at, consectetur, rem delectus vel porro voluptate corporis nemo, voluptatibus quae impedit ab libero eligendi commodi expedita nam eos.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-xs-4 col-sm-4">
                  <img src="https://static.pexels.com/photos/57862/pexels-photo-57862.jpeg" alt=""/>
               </div>
               <div className="col-xs-8 col-sm-8">
                  <h3>Colby</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo error sint at, consectetur, rem delectus vel porro voluptate corporis nemo, voluptatibus quae impedit ab libero eligendi commodi expedita nam eos.</p>
               </div>
            </div>
         </div>
      )

   }



})

module.exports = {HomeView, NavView}
