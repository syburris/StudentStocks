const {InvestorAppModel, InvestorAppColl, InvestorLoginModel} = require('./investor-model.js')
const {AllStudentsColl, StudentModel, StudentAppColl,StudentLoginModel} = require("./student-model.js")
const {SchoolColl, SchoolModel} = require("./schools-model.js")
const {StockColl, StockModel} = require("./investment-model.js")
const STORE = require('./store.js')





const ACTIONS = {



   fetchAllStudents: function(){
      let allStudents = new AllStudentsColl()

      allStudents.fetch().then(function(){
         STORE.setStore('allStudents', allStudents.models)
      })
   },


   fetchSchoolData: function(){
      let schoolInst = new SchoolColl()

      schoolInst.fetch().then(function(){
         STORE.setStore('schools', schoolInst.models)
      })
   },

   submitStudentForm: function(formInfo){
      let formInst = new StudentAppModel

      formInst.set(formInfo)

      formInst.save().then(function(serverRes){
         console.log('this is serverresponse ', serverRes)
         STORE.setStore('currentUser', serverRes)
      })
   },

   submitInvestorForm: function(formInfo){
      let formInvstForm = new InvestorAppModel()

      formInvstForm.set(formInfo)

      formInvstForm.save().then(function(serverRes){
         console.log(serverRes)
         STORE.setStore('currentUser', serverRes)
      })
   },
//
   handleInvestorLogin: function(usrInfo){
      let InvstLogin = new InvestorLoginModel()

      InvstLogin.set(usrInfo)

      InvstLogin.save().then(function(serverRes){

         console.log(serverRes)
         STORE.setStore('currentUser', serverRes)
         location.hash = "/dash/investors"
         // localStorage.setItem("user_id", serverRes.id);
         // console.log(localStorage.getItem("user_id"))
//
      })



   },
   handleStudentLogin: function(usrInfo){
      let stdntLogin = new StudentLoginModel()

      stdntLogin.set(usrInfo)

      stdntLogin.save().then(function(serverRes){

         console.log(serverRes)
         STORE.setStore('currentUser', serverRes)
         localStorage.setItem("user", serverRes);
         location.hash = "/dash/students"

         // console.log(localStorage.getItem("user_id"))

      })
   },

   fetchCurrentStudent: function(){
      let newModel = new StudentModel()
      console.log("thisone?", newModel)
      newModel.fetch().then(function(servRes){
         console.log(serverRes, "?????")
         console.log("helloooo???", newModel)
         console.log(newModel)

         STORE.setStore('currentUser', newModel)
      }).fail(function(){
         console.log("WHOOPS!")
      })
   },

   handleInvestment: function(loanInfo){
      let stockInvst = new StockModel()

      stockInvst.set(loanInfo)




   },


   changeView: function(viewInput){

      STORE.setStore('currentView', viewInput)

   }

}




module.exports = ACTIONS
