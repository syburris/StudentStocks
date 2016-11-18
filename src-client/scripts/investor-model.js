const Backbone = require('backbone')

const InvestorAppModel = Backbone.Model.extend({

   url: "/investor"


})


const InvestorAppColl = Backbone.Collection.extend({

   model: InvestorAppModel,
   url: "/investor",
   initialize: ()=>{

   }


})
const InvestorLoginModel = Backbone.Model.extend({

   url: "/investorlogin"


})

module.exports = {InvestorAppModel, InvestorAppColl, InvestorLoginModel}
