const Backbone = require('backbone')

const StockModel = Backbone.Model.extend({

   url: "/portion"


})


const StockColl = Backbone.Collection.extend({

   model: StockModel,
   url: "/portion",
   initialize: ()=>{

   }


})





module.exports = {StockColl, StockModel}
