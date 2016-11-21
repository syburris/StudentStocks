const React = require('react')

StudentCard = React.createClass({



   render: function(){

      return(
         <div className="col-xs-6 col-sm-3">
            <div className="row">
               <div className="col-xs-6">
                  <h3>{this.props.studentName}</h3>
                  <p>School: <span>{this.props.school}</span></p>
                  <p>Major: <span>{this.props.major}</span></p>
                  <p>Minor: <span>{this.props.minor}</span></p>
                  <p>Loan Amount: <span>{this.props.loanInfo}</span></p>
               </div>
               <div className="col-xs-6">
                  <img src={this.props.schoolImg} alt=""/>
               </div>
            </div>
            <button className="btn btn-primary">Invest</button>



         </div>
      )
   }


})

module.exports = StudentCard
