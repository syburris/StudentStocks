const Backbone = require('backbone')

const StudentModel = Backbone.Model.extend({

   url: "/currentstudent",
   // initialize: function(newUrl){
   //    console.log("auth executing", newUrl)
   //    this.url = newUrl
   //    console.log(this.url)
   // },



})




// newModel = new StudentAppModel()
// newModel.fetch()
// newModel.checkAuth().then(...)


const StudentAppColl = Backbone.Collection.extend({

   model: StudentModel,
   url: "/student",



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

module.exports = {AllStudentsColl, StudentModel, StudentAppColl,StudentLoginModel}
