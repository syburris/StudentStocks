const {InvestorAppModel, InvestorAppColl, InvestorLoginModel} = require('./investor-model.js')
const {AllStudentsColl, SingleStudentModel, StudentModel, StudentAppColl,StudentLoginModel, StudentPayment} = require("./student-model.js")
const {SchoolColl, SchoolModel} = require("./schools-model.js")
const {StockColl, StockModel} = require("./investment-model.js")
const {LoanModel, LoanCollection} = require('./loan-model.js')
const STORE = require('./store.js')





const ACTIONS = {


   logOut: function(){
      let mod = new StudentModel()

      mod.logOut()

      mod.save().then(function(){
         location.hash = ""

      })




   },


   fetchAllStudents: function(route = "/students"){
      let allStudents = new AllStudentsColl(route)

      allStudents.fetch().then(function(){

         STORE.setStore('allStudents', allStudents.models)
      })
   },
   submitLoanForm: function(formInfo){
      let loanForm = new LoanModel()

      loanForm.set(formInfo)
      loanForm.save().then(function(serverRes){
         let mod = new StudentModel()
         mod.set(serverRes)
         STORE.setStore("currentUser", mod)
      })
      location.hash = "/dash/students"


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


      })
   },

   fetchCurrentStudent: function(){
      let newModel = new StudentModel()
      newModel.checkAuth("/currentstudent").then(function(){

         STORE.setStore('currentUser', newModel)
      }).fail(function(){
      })
   },
   fetchCurrentInvestor: function(){
      let newModel = new InvestorAppModel()
      newModel.checkAuth().then(function(){

         STORE.setStore('currentUser', newModel)
      }).fail(function(){
      })
   },

   handleInvestment: function(loanInfo){
      let stockInvst = new StockModel()

      stockInvst.set(loanInfo)

      stockInvst.save().then(function(serverRes){
         ACTIONS.fetchAllStudents()
         STORE.setStore("selectedStudent", {})
         location.hash = "dash/investors"
      })

   },
   submitPayment: function(payInfo){
      let pay = new StudentPayment()
      pay.set(payInfo)
      pay.save().then(function(){
      })
      ACTIONS.fetchCurrentStudent()
   },


   changeView: function(viewInput){

      STORE.setStore('currentView', viewInput)

   }



}




module.exports = ACTIONS
