const Backbone = require('backbone')

const StudentAppModel = Backbone.Model.extend({

   urlRoot: "/student",
   checkAuth: function(){
      this.url = "/currentstudent"
      return this.fetch()
   },

   // initialize: function(configObj){
   //    this.set(configObj)
   // }


})


// newModel = new StudentAppModel()
// newModel.fetch()
// newModel.checkAuth().then(...)


const StudentAppColl = Backbone.Collection.extend({

   model: StudentAppModel,
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

module.exports = {AllStudentsColl, StudentAppModel, StudentAppColl,StudentLoginModel}
