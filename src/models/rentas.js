const mongoose=require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

const CustomersSchema = new schema({
_id:Number,

},
{ versionKey: false },
{ _id: false }
);


CustomersSchema.plugin(AutoIncrement);
module.exports=mongoose.model('customers',CustomersSchema);