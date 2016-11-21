const Backbone = require('backbone')

const SchoolModel = Backbone.Model.extend({

   url: "/schools"


})


const SchoolColl = Backbone.Collection.extend({

   model: SchoolModel,
   url: "/schools",
   initialize: ()=>{

   }


})





module.exports = {SchoolColl, SchoolModel}
