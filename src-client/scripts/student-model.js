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
const SingleStudentModel = Backbone.Model.extend({
   url:"/students"
})

const AllStudentsColl = Backbone.Collection.extend({
   model: SingleStudentModel,
   url: "/students"



})



const StudentLoginModel = Backbone.Model.extend({

   url: "/studentlogin"


})

module.exports = {AllStudentsColl, StudentAppModel, StudentAppColl,StudentLoginModel}
