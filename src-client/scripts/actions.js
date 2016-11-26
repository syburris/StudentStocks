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

      formInst.save().then(function(){
         // console.log('this is serverresponse ', serverRes)
         // let mod = new StudentModel()
         // mod.set(serverRes)
         // STORE.setStore('currentUser', mod)
         // STORE.setStore("userType", "")
      })

   },

   submitInvestorForm: function(formInfo){
      let formInvstForm = new InvestorAppModel()

      formInvstForm.set(formInfo)

      formInvstForm.save().then(function(serverRes){
         formInvstForm.set(serverRes)
         STORE.setStore('currentUser', formInvstForm)
         STORE.setStore("userType", "")

      })
      location.hash = "/dash/investors"
   },
//
   handleInvestorLogin: function(usrInfo){
      let invstLogin = new InvestorLoginModel()

      invstLogin.set(usrInfo)

      invstLogin.save().then(function(serverRes){
         invstLogin.set(serverRes)
         STORE.setStore('currentUser', invstLogin)
         STORE.setStore("userType", "")

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
         STORE.setStore("userType", "")



         location.hash = "/dash/students"

         // console.log(localStorage.getItem("user_id"))

      })
   },

   fetchCurrentStudent: function(){
      let newModel = new StudentModel()
      console.log("thisone?", newModel)
      newModel.checkAuth("/currentstudent").then(function(){

         STORE.setStore('currentUser', newModel)
      }).fail(function(){
         console.log("WHOOPS!")
      })
   },
   fetchCurrentInvestor: function(){
      let newModel = new InvestorAppModel()
      console.log("thisone?", newModel)
      newModel.checkAuth().then(function(){

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
