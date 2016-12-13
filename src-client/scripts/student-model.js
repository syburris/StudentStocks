const Backbone = require('backbone')

const StudentModel = Backbone.Model.extend({

   url: "/student",
   checkAuth: function(newUrl){
      this.url = newUrl
      return this.fetch()
   },
   logOut: function(){
      this.url = "/logout"
      return this.set()
   },



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
   url: "/students",
   initialize: function(path){
      this.url = path

   },



})



const StudentLoginModel = Backbone.Model.extend({

   url: "/studentlogin"


})
const StudentPayment = Backbone.Model.extend({

   url: "/payment"
})

module.exports = {AllStudentsColl, SingleStudentModel, StudentModel, StudentAppColl, StudentLoginModel, StudentPayment}
