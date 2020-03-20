const express=require("express");
const app=express();
const path=require('path');
const morgan=require("morgan");
const mongoose=require('mongoose');


//configuracion
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine' , 'ejs');
//importando rutas
const indexRoutes =require("./routes/index")
//midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//rutas
app.use('/',indexRoutes);
//conectando base de datos
mongoose.connect('mongodb://localhost/sample_airbnb',{useNewUrlParser:true, useUnifiedTopology: true})
.then(db=>console.log("Db conectada"))
.catch(err=>console.log(err))
//inciar servidor
app.listen(app.get('port'),()=>{
console.log("Servidor en puerto",app.get('port'))
});