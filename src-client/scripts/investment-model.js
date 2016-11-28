const Backbone = require('backbone')

const StockModel = Backbone.Model.extend({

   url: "/investment"


})


const StockColl = Backbone.Collection.extend({

   model: StockModel,
   url: "/investment",
   initialize: ()=>{

   }


})





module.exports = {StockColl, StockModel}
