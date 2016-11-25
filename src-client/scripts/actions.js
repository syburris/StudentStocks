const {InvestorAppModel, InvestorAppColl, InvestorLoginModel} = require('./investor-model.js')
const {AllStudentsColl, StudentModel, StudentAppColl,StudentLoginModel} = require("./student-model.js")
const {SchoolColl, SchoolModel} = require("./schools-model.js")
const {StockColl, StockModel} = require("./investment-model.js")
const STORE = require('./store.js')





const ACTIONS = {


   logOut: function(){
      console.log("exexutttinn")
      let mod = new StudentModel()

      mod.logOut()

      mod.save().then(function(){
         location.hash = ""

      })




   },

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
      let formInst = new StudentModel()

      formInst.set(formInfo)

      formInst.save().then(function(serverRes){
         console.log('this is serverresponse ', serverRes)
         let mod = new StudentModel()
         mod.set(serverRes)
         STORE.setStore('currentUser', mod)
      })
      location.hash = "/dash/students"
   },

   submitInvestorForm: function(formInfo){
      let formInvstForm = new InvestorAppModel()

      formInvstForm.set(formInfo)

      formInvstForm.save().then(function(serverRes){
         console.log(serverRes)
         STORE.setStore('currentUser', serverRes)
      })
      location.hash = "/dash/investors"
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
      })



   },
   handleStudentLogin: function(usrInfo){
      let stdntLogin = new StudentLoginModel()

      stdntLogin.set(usrInfo)

      stdntLogin.save().then(function(serverRes){
         let mod = new StudentModel()
         mod.set(serverRes)
         STORE.setStore('currentUser', mod)


         location.hash = "/dash/students"

         // console.log(localStorage.getItem("user_id"))

      })
   },

   fetchCurrentStudent: function(){
      let newModel = new StudentModel("/currentstudent")
      console.log("thisone?", newModel)
      newModel.checkAuth("/currentstudent").then(function(){

         STORE.setStore('currentUser', newModel)
      }).fail(function(){
         console.log("WHOOPS!")
      })
   },
   fetchCurrentInvestor: function(){
      let newModel = new InvestorAppModel("/currentstudent")
      console.log("thisone?", newModel)
      newModel.checkAuth("/currentinvestor").then(function(){

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
