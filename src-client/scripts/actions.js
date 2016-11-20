const {InvestorAppModel, InvestorAppColl, InvestorLoginModel} = require('./investor-model.js')
const {StudentAppModel, StudentAppColl,StudentLoginModel} = require("./student-model.js"
)
const STORE = require('./store.js')





const ACTIONS = {

//    fetchHighScores: function(){
//       let scores = new HighScoreCollection()
//
//        scores.fetch().then(function(){
//          STORE.setStore('highscore', scores.models)
//
//
//       })
//    },
//
//    fetchUserData: function(){
//       let userCollInst = new UserModel()
//       return userCollInst.fetch().then(function(){
//          STORE.setStore('all_users', userCollInst)
//       })
//
//    },
//
   submitStudentForm: function(formInfo){
      let formInst = new StudentAppModel

      formInst.set(formInfo)

      formInst.save().then(function(serverRes){
         console.log('this is serverresponse ', serverRes)
         STORE.setStore('currentUser', serverRes)
      })
   },
   // submitInvestorForm: function(formInfo){
   //    let formInvstForm = new StudentAppModel
   //
   //    formInvstForm.set(formInfo)
   //
   //    formInvstForm.save().then(function(serverRes){
   //       console.log(serverRes)
   //       STORE.setStore('currentUser', serverRes)
   // },
//
   handleInvestorLogin: function(usrInfo){
      let invstLogin = new InvestorLoginModel()

      invstLogin.set(usrInfo)

      invstLogin.save().then(function(serverRes){

         console.log(serverRes)
         STORE.setStore('currentUser', serverRes)

      })



   },

// // EXECUTE TO GRAB RANDOM ASSETS
//    getObstacles: function(){
//       let obst = new ObstacleCollection()
//       //
//       // obst.fetch().then(function(){
//       //
//       //    STORE.setStore('obstacles', obst.models)
//       //
//       // })
//    },
//
//    createNewUser: function(modlVals){
//       let newUser = new SignUpModel()
//
//       newUser.set(modlVals)
//
//       newUser.save().then(function(serverRes){
//          STORE.setStore('currentUser', serverRes)
//
//       })
//
//    },
//
//    fetchCharData: function(){
//       let charCollInst = new CharCollection()
//
//       return charCollInst.fetch().then(function(){
//          STORE.setStore('characters', charCollInst)
//       })
//
//
//    },

   changeView: function(viewInput){

      STORE.setStore('currentView', viewInput)

   }

}




module.exports = ACTIONS
