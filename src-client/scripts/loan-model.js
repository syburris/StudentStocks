const Backbone = require('backbone')


const LoanModel = Backbone.Model.extend({

   url: "/postloan"

})
const LoanCollection = Backbone.Model.extend({

   url: "/postloan"
})



module.exports = {LoanModel, LoanCollection}
