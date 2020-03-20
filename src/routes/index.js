const express=require('express');
const router=express.Router();
const Usuario = require('../models/customers');
const Propiedades=require('../models/propiedades')


router.get('/altas',async (req,res) =>{
const usuarios =await Usuario.find();
    res.render('altas',{
        usuarios//usuarios:usuarios
    });
});

router.post('/add',async(req,res)=>{
const usuario=new Usuario(req.body);
usuario.status=true;
await usuario.save();
res.redirect('/consultas')

});

router.get('/delete/:id',async (req,res)=>{
    const {id} = req.params;
    await Usuario.deleteOne({_id:id})
    res.redirect('/consultas')
});

router.get('/estado/:id',async (req,res)=>{
    const {id} = req.params;
    const usuario = await Usuario.findById({_id:id});
    usuario.status=!usuario.status;
    await usuario.save();
    res.redirect('/consultas')
});
////////////////////////////////////////////////////////////
router.get('/actualizar/:id' , async(req,res)=>{
    const {id} = req.params;
    const customers=await Usuario.findById(id);
    res.render('actualizar',{
        customers,
       
    });
        }); 


router.post('/editar/:id',async (req,res)=>{
const{id}=req.params;
console.log(req.body);
await Usuario.update({_id:id},req.body);
res.redirect('/consultas')
})


/////////////////////////////////////////////////////////

router.get('/consultas',async (req,res)=>{
const customers =await Usuario.find();
    res.render('consultas',{
        customers//customers:customers
    });
});


/////////////////////////Propiedades/////////////////////////
router.get('/propiedades/all',async(req,res)=>{
const propiedades =await Propiedades.find().limit(100);
res.render('propiedades',{
    propiedades
});
});

router.get('/propiedades/:kind',async(req,res)=>{
    var {kind}=req.params;
    console.log(kind)
    const propiedades =await Propiedades.find({}).where('property_type').equals(kind).limit(100);
    res.render('propiedades',{
      propiedades
    });
});

router.get('/propiedadeslt',async(req,res)=>{
    const propiedades =await Propiedades.find({}).where('price').lt(1000).limit(100);
    res.render('propiedades',{
      propiedades
    });
});

router.get('/propiedadesgt/',async(req,res)=>{
    const propiedades =await Propiedades.find({}).where('price').gt(4000).limit(100);
    res.render('propiedades',{
      propiedades
    });
});


router.get('/propiedadesmid',async(req,res)=>{
    const propiedades =await Propiedades.find({}).where('price').gt(1000).lt(4000).limit(100);
    res.render('propiedades',{
      propiedades
    });
});
////////////////////////////////////////////////////////////
router.post('/busquedanombre',async(req,res)=>{
    const a= req.body.nombre;
    var customers;
    if(a==""){
        customers =await Usuario.find();
    }else
    {
    customers =await Usuario.find({FirstName:a});
    }
    res.render('consultas',{
        customers//usuarios:usuarios
    });

    
});
///////////////////////////////////////////////////////////////
router.get('*',(req,res)=>{
res.redirect('consultas')
});


module.exports=router;