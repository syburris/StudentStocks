const React = require('react')
const AppBarExampleIcon = require('./student-signup.js')

// const menu = (
//     <Menu>
//         <MenuItem text="New" />
//         <MenuItem text="Open" />
//         <MenuItem text="Save" />
//         <MenuDivider />
//         <MenuItem text="Settings..." />
//     </Menu>
// );
//
// <Popover content={menu} position={Position.BOTTOM_RIGHT}>
//     <Button text="Actions" />
// </Popover>
// 3




const HomeView = React.createClass({

   _handleClick: function(evt){
      console.log(evt)
      console.log(this.refs)


   },

   render: () =>{


      return(
         <div className="fluid-container home-view">
            <NavView/>
            <div className="jumbotron hdr-hero">

            </div>
            <HeaderHeros/>
            <AboutStocks/>
            <StudentSuccess/>


         </div>
      )

   },




})

module.exports = {HomeView}

const NavView = React.createClass({






   render: function(){
      return(
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#/login">INVESTOR LOGIN</a>
               </div>

               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                     <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                     <li><a href="#">Link</a></li>
                     <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                           <li><a href="#">Action</a></li>
                           <li><a href="#">Another action</a></li>
                           <li><a href="#">Something else here</a></li>
                           <li className="divider"></li>
                           <li><a href="#">Separated link</a></li>
                           <li className="divider"></li>
                           <li><a href="#">One more separated link</a></li>
                        </ul>
                     </li>
                  </ul>
                  <form className="navbar-form navbar-left" role="search">
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                     </div>
                     <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                     <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                     </ul>
                  </div>
               </div>
            </nav>
      )
   }
})


const HeaderHeros = React.createClass({

   _handleClick: function(evt){
      evt.preventDefault()

      location.hash = "/signup/students"




   },





   render: function(){

      return(
         <div className="row text-center apply-cont">
            <div className="col-xs-12 col-sm-6 student-hero">
               <h3>Are you A Student?</h3>
               <p>Apply for a loan today</p>
               {/* route to student form page  */}
               <button className="btn btn-primary" onClick={this._handleClick} ref="student">Apply Now</button>
               <p>or</p>
               {/* page down to student about/testimonials */}
               <button className="btn btn-primary">Find out more</button>
               <h4>XX Active Student Loans</h4>

            </div>
            <div className="col-xs-12 col-sm-6 invester-hero">
               <h3>Become an Investor...</h3>
               <p>Invest in our future today</p>
               {/* route to student form page  */}
               <button className="btn btn-primary" href="#/signup/investor">Apply Now</button>
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






   render: () =>{

      return (
         <div className="row abt-cont text-center">

            <div>
               <h2>How StudentStocks<span>&#8482;</span> Works</h2>
               <p>Here at StudentStocks we make the frustration or student loans a thing of the past</p>
            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Easy Signup</h3>
               <i className="fa fa-file-text-o abt-icon" aria-hidden="true"></i>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nulla beatae ratione itaque fuga veritatis accusantium, debitis ab, voluptatem voluptatum quis suscipit similique tempora blanditiis sint in! Id, doloribus, aliquam!</p>


            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Lower Rates</h3>
               <i className="fa fa-percent abt-icon" aria-hidden="true"></i>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quam voluptatibus error hic officia quasi obcaecati velit beatae soluta, nobis, atque, nam rerum ullam deleniti maiores. Recusandae amet beatae expedita!</p>

            </div>
            <div className="col-xs-12 col-sm-4 abt-col">
               <h3>Become an Investor</h3>
               <i className="fa fa-money abt-icon" aria-hidden="true"></i>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ut, nihil aliquid soluta ipsum ea esse eius! Eius iste quaerat, iusto necessitatibus ex aliquam ducimus animi rem quo illo tempora.</p>

            </div>

         </div>


      )
   }
})




const StudentSuccess = React.createClass ({





   render: ()=>{


      return (
         <div className="container">
            <div className="row success-story">
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
