const Backbone = require('backbone')

const StudentAppModel = Backbone.Model.extend({

   url: "/student"


})


const StudentAppColl = Backbone.Collection.extend({

   model: StudentAppModel,
   url: "/student",
   initialize: ()=>{

   }


})



const StudentLoginModel = Backbone.Model.extend({

   url: "/studentlogin"


})

module.exports = {StudentAppModel, StudentAppColl,StudentLoginModel}
