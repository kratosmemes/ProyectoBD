const mongoose=require('mongoose');
const schema = mongoose.Schema;

const PropiedadesSchema = new schema({ summary:String , name:String ,bedrooms:String,amenities:Array,
    price:Number,bathrooms:Number ,property_type:String}, 
    { collection : 'listingsAndReviews' });   

module.exports=mongoose.model('listingsAndReviews',PropiedadesSchema);