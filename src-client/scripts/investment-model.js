const Backbone = require('backbone')

const StockModel = Backbone.Model.extend({

   url: "/invesment"


})


const StockColl = Backbone.Collection.extend({

   model: StockModel,
   url: "/investment",
   initialize: ()=>{

   }


})





module.exports = {StockColl, StockModel}
