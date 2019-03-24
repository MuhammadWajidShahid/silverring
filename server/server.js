let express=require("express");
let server=express();
let bodyparser=require("body-parser");
let mongoose= require("mongoose");
let multer = require('multer');
let cloudinary=require("cloudinary");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

server.use(express.static("./build"));
server.use(bodyparser.urlencoded({extended:true}));
server.use(bodyparser.json())

cloudinary.config({
    cloud_name:"sliverring",
    api_key:"935534932925425",
    api_secret:"jcUSRwXN54wRS_XNOxT-RRb69-E"
})
var customConfig = multer.diskStorage({});
        // filename: function (req, file, next) {
        //     next(null, Math.random()+"-"+file.originalname)
        // }
    
    var upload = multer({ storage: customConfig, })
mongoose.connect('mongodb://wajid:wajid123@ds155845.mlab.com:55845/silverring',{useNewUrlParser:true},err=>{
    if(err)
    console.log(err)
    else
    console.log("mongo connected");
})
const product = mongoose.model('product', {
     productName:{type:String,required:true },
     desc:{type:String,required:true },
     price:{type:Number,required:true },
     disc:Number,
     categorey:{type:String },
     images:{type:String },
     featured:String
     });


     const user =mongoose.model('user',{
         name:String,
         email:String,
         phone:Number,
         password:String,
     })

var feildupload=upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1},
    {name:"image4",maxCount:1}
]);

server.post("/additem",feildupload,async (req,res)=>{

    console.log(req.files)
    var item=req.body;
    let imag=[];
    let obj=req.files;
    let result;
    let path;
    if(obj.image1)
    {
        path=obj.image1[0].path;
        result= await cloudinary.v2.uploader.upload(path,{width:300,height:300},function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
        });
        imag.push(result.secure_url);
    }
    if(obj.image2)
    {
        path=obj.image2[0].path;
        result= await cloudinary.v2.uploader.upload(path,{width:300,height:300},function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
        });
        imag.push(result.secure_url);
    } 
       if(obj.image3)
    {
        path=obj.image3[0].path;
        result= await cloudinary.v2.uploader.upload(path,{width:300,height:300},function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
        });
        imag.push(result.secure_url);
    }
        if(obj.image4)
    {
        path=obj.image4[0].path;
        result= await cloudinary.v2.uploader.upload(path,{width:300,height:300},function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
        });
        imag.push(result.secure_url);
    }
    imag=JSON.stringify(imag)
    const prod=new product({
         productName: item.prodname,
         desc:item.des,
         price:item.price,
         disc:item.disc,
         categorey:item.cat,
         images:imag, 
         featured:item.featured
        })

    prod.save().then((success,err)=>{
        if(err)
        console.log(err)    
        else
        {
            console.log("saved") 
            res.json({success:true,prod:success});
        }
    })
})
server.get("/",(req,res)=>{
    res.send("hlo");
})
server.get("/getproducts",(req,res)=>{
    product.find()
    .exec((err,products)=>{
        if(err)
        res.json({success:false,err:err})
        else
        res.json({success:true,products:products})
    });
})


server.post("/adduser",(req,res)=>{
    let obj=req.body;
    let nuser=new user({name:obj.name,email:obj.email,phone:obj.phone,password:obj.password});
    nuser.save()
    .then((success,err)=>{
        if(err)
        res.send("something went wrong");
        else
        res.send("accont created");
    })
})

// server.use(session({ secret: "secret-word" }));
server.use(passport.initialize());
    server.use(passport.session());
passport.use(new LocalStrategy(
    function (email, password, next) {
        // var getuser =
        user.findOne({email:email}).exec(
        (err,use)=>{

            if(err)
            next(err);
            if(!use)
             next(null,false,{message:"invalid email"})
             else{
            if(use.password!==password)
            {
                next(null,false,{message:"invalid password"})
            }
            else{

                next(null,use);
            }
             }
            
    });
            // if(user)
        // {
        //     next(null,user);
        // }
        // else{
        //     next(null,false)
        // }
    }
));

passport.serializeUser(function(user,next){
    next(null,user._id);
});
passport.deserializeUser(function(id,next){
    var user = users.find((user) => {
        return user._id === id;
    })

    next(null, user);
})

server.post('/login', passport.authenticate('local'), function (req, res) {
    console.log(req.user);
    res.send('loggedin');
});

server.listen(process.env.PORT||800,()=>{console.log("server running")});
