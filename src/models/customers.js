const mongoose=require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const CustomersSchema = new schema({
_id:Number,
Adress:{
type:String,
required:true
},
City:String,
Country:String,
District:String,
FirstName:String,
LastName:String,
status:Boolean
},
{ versionKey: false },
{ _id: false }
);


CustomersSchema.plugin(AutoIncrement);
module.exports=mongoose.model('customers',CustomersSchema);