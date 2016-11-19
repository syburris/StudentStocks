const React = require('react')



// input component

const SimpleInput = React.createClass ({





   render: function(){


      return (
         <input type={this.props.textType} className="simp-input" placeholder={this.props.content} ref={this.props.content}/>
      )
   }
})


const SimpleButton = React.createClass ({

   render: function(){


      return (
      <button className="simp-button" ref={this.props.content}>{this.props.content}</button>
      )
   }
})


const TestView = React.createClass({




   render: function(){


      return(
         <div>
            <SimpleButton content="Hello"/>
            <SimpleInput content="email" textType="text"/>



         </div>

      )
   }
})


module.exports = {TestView}
