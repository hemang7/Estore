var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./db.config");
var cors = require("cors");
var nodemailer = require("nodemailer")

const app = express();
app.use(express.json());
app.use(cors());

//Connect to the db
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

sequelize.authenticate().then( ()=>{
    console.log("Connected to database successfully...");
}).catch(err => {
    console.error("Unable to connect to db, because" + err);
})

// Define the structure of Users table
let userTable = sequelize.define("Users",{
    id:{
        primaryKey:true,
        autoIncrement: true,
        type:Sequelize.INTEGER
    },
    email:Sequelize.STRING,
    name:Sequelize.STRING,
    password:Sequelize.STRING
},{
    timestamps:false,
    freezeTableName:true
});

// userTable.sync({force:true}).then(()=>{
//     console.log("Table created successfully")
// }).catch (err => {
//     console.error("Error is : "+err);
// });

let productsTable = sequelize.define("Products",{
    pId:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    title:Sequelize.STRING,
    description:Sequelize.STRING,
    quantity:Sequelize.INTEGER,
    price:Sequelize.INTEGER,
    brand:Sequelize.STRING,
    img:Sequelize.STRING,
    total:Sequelize.INTEGER
},{
    timestamps:false,
    freezeTableName:true
});

// productsTable.sync({force:true}).then(()=>{
//     console.log("Table created successfully")
// }).catch (err => {
//     console.error("Error is : "+err);
// });

// productsTable.bulkCreate ([
  
//     {pId:1, title: 'RealMe 7', description: '6GB RAM, 64GB ROM', quantity: 1, price: 14000,brand: 'Realme', img:'assets/2.png', total: 14000},
//     {pId:2, title: 'Oppo F15', description: '8GB RAM, 128GB ROM', quantity: 1, price: 21000,brand: 'Oppo', img:'assets/3.png', total: 21000},
//     {pId:3, title: 'Vivo Y20T', description: '6GB RAM, 128GB ROM', quantity: 1, price: 15990,brand: 'Vivo', img:'assets/4.png', total: 15990},
//     {pId:4, title: 'Samsung A12', description: '8GB RAM, 128GB ROM', quantity: 1, price: 15000,brand: 'Samsung', img:'assets/1.png', total: 15000},
//     {pId:5, title: 'iphone 13', description: '128GB ROM', quantity: 1, price: 9000,brand: 'Poco', img:'assets/5.png', total: 19000},
//     {pId:6, title: 'Redmi Note 10s', description: '6GB RAM, 64GB ROM', quantity: 1, price: 14000,brand: 'Redmi', img:'assets/6.png', total: 14000},
// ]);


// let Cart = sequelize.define(
//     "Cart",
//     {
//       cartId: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
      
//       quantity: Sequelize.INTEGER
      
//     },
//     {
//       timestamps: false,
//       freezeTableName: true,
//     }
//   );
//   userTable.hasMany(Cart);
//   Cart.belongsTo(userTable);
//   productsTable.hasMany(Cart);
//   Cart.belongsTo(productsTable);


// Cart.sync({force:true}).then(()=>{
//     console.log("Table created successfully")
// }).catch (err => {
//     console.error("Error is : "+err);
// });

// app.post("/addCart", function(req, res) {
            
//         var quantity=req.body.quantity;
//         var UserId=req.body.UserId;
//         var ProductPId=req.body.ProductPId;
        
//         const Op=Sequelize.Op;
//        Cart.findAndCountAll({where:{ [Op.and]:[{UserId:UserId},{ProductPId:ProductPId}]},row:true}).then((data)=>
//       {console.log("Number of record are :"+data.count);
//         console.log(data);
//          if(data.count==0)
//          {
//            var cartObj = Cart.build({
           
//              quantity:quantity,
//             UserId : UserId,
//             ProductPId:ProductPId });
//             cartObj
//             .save({where:{UserId:UserId}})
//             .then((ele) => {
//               var string = "Record inserted successfully";
                  
//               res.status(201).send(string);
//             })
//             .catch((err) => {
//               console.log("Error is :" + err);
//               res.status(400).send(err);
//             });
//           }
//           else{ var quantity2;
//                 var quantity3;
              
//                Cart.findOne({attributes:['quantity'],where:{UserId:UserId,ProductPId:ProductPId},raw:true}).then((data)=>
//                   {  console.log(data);
//                      quantity2=data.quantity;
//                      console.log(typeof quantity);
//                      console.log(typeof quantity2);
//                       quantity3=quantity+quantity2;
//                       console.log(quantity3);
//                       Cart.update(
//                  {
//                   quantity:quantity3,
//                 UserId: UserId,
//                 ProductPId:ProductPId
//                  },
//               { where: { UserId: UserId} }
//             ).then((data) => {
//                 console.log(data);
//                 var string = "Record updated successfully...";
//                 res.status(201).send(string);
//               })
//               .catch((err) => {
//                 console.log("There is an error updating table:Reason: " + err);
//                 res.status(400).send(err);
//               });
          
         


      

//       }).catch((err)=>{
//         console.error("Error is :"+err);
//          });
//         }
//         }).catch((err)=>{
//           console.error("Error is :"+err);
//            });
//           },

// ),

// app.get("/getCart/:UserId", function(req, res) {
//     var UserId=Number(req.params.UserId);

//             Cart.findAll({
//                 where: {UserId:UserId},
//                 include: [{
//                   model: productModel.product
//                 //   where: [" productModel.product.productId=Cart.ProductPId"]
//                  }]
//               }).then(data => {
//                   res.status(200).send(data);
//               }).catch(err=>
//                 {
//                     console.log("Error is :" + err);
//                     res.status(400).send(err);
//                 })




            // cartData.findAll({where:{CustomerId:customerId}},{ raw: true })
            //   .then((data) => {
            //     console.log(data);
            //     res.status(200).send(data);
            //   })
            //   .catch((err) => {
            //     console.error("There is an error getting data from db:" + err);
            //     res.status(400).send(err);
            //   });
// })

// app.put("/cartUpdate", function(req, res){
//     var cartId = req.body.cartId;
//             var quantity = req.body.quantity;
//             var UserId = req.body.UserId;
//             var ProductPId = req.body.ProductPId;
            
        
//            Cart.update(
//               {
//                 cartId: cartId,
//                 quantity: quantity,
//                 UserId: UserId,
//                 ProductPId: ProductPId
             
//               },
//               { where: { cartId: cartId } }
//             )
//               .then((data) => {
//                 console.log(data);
//                 var string = "Record updated successfully...";
//                 res.status(201).send(string);
//               })
//               .catch((err) => {
//                 console.log("There is an error updating table:Reason: " + err);
//                 res.status(400).send(err);
//               });
// })

// app.delete("/deleteCart/:cartId",function(req, res){
//     console.log("Entering id to delete");
//          var id=req.params.cartId;
//          console.log("Given id is"+id);
//         Cart.destroy({where:{cartId:id}}).then(data=>
//         {
//             console.log(data);
//             var str="Record deleted successfully";
//             res.status(200).send(str);
//         }).catch(err=>{
//             console.error("There is an error while deleting record:"+err);
//             res.status(400).send(err);
//         })
// })

  



//Displays data of all Products
app.get("/getProducts",function(req,res){
    productsTable.findAll({raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.error("There is an error getting data from db: " + err);
        res.status(400).send(err);
    })
})



app.get("/",function(req,res){
    console.log("At GET of http://localhost:8002");
    res.send("Hello");
})

//Displays data of all Users
app.get("/getAllUsers",function(req,res){
    userTable.findAll({raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.error("There is an error getting data from db: " + err);
        res.status(400).send(err);
    })
})

//Display User based on email
app.get('/getUserByEmail/:email',function(req,res){
    var email=req.params.email;
    console.log("Given email: "+email)
    userTable.findByPk(email,{raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.error("There is an error getting data from db: "+err );
        res.status(400).send(err);
    })
})

//Add new user data
app.post('/addUser',function(req,res){
    var name =req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var userObj=userTable.build({name:name,email:email,password:password});
    userObj.save().then(data=>{
        var Msg="Record Inserted Successfully";
        console.log(Msg);
        res.status(201).send(data)
    }).catch(err=>{
        console.error("There is an error getting data from db: "+err );
        res.status(400).send(err);
    })
    var mailOptions = {
        from:'mtxestore@gmail.com',
        to: `${req.body.email}`,
        subject:`Welcome, ${req.body.name} to E-Store.`,
        html:`<h3>Dear ${req.body.name}, <br>
            You have been successfully registered on E-Store.<br>
            In case you need any support, you can write to support@estore.com.<br><br><br>
            With Regards,<br>
            E-Store team</h3>`
    };

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mtxestore@gmail.com',
        pass:'estorehm21'
    }
});

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log("Email sent : " + info.response)
    }
})
})

//Delete user data
app.delete('/deleteUserByEmail/:email',function(req,res){
    var email=req.params.email;
    userTable.destroy({where:{email:email}})
    .then(data=>{
        console.log(data)
        var Msg="Record Deleted Successfully";
        res.status(200).send(Msg)
    }).catch(err=>{
            console.error("There is an error getting data from db: "+err );
            res.status(400).send(err);
    })
})


app.post("/forgetpass",function(req,res){

    userTable.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        console.log("hello");
        if (!user) {
          console.log("user not found");
            return res.status(201).send({
            message: "User Not Found",
          });
        }
      
        else{
            console.log("Hi");
             var otp = Math.floor(100000 + Math.random() * 900000);
            sendMail(user,otp,info=>
                {

                if(!user){ 
                    console.log("Not found");
                          return res.status(201).send({
                            message: "try later, unable to send mail."
                            });
                        } 
                     
                 else{

                 console.log("email sent with otp : "+otp+"\ninfo : "+info.response);
                 return res.status(201).send({
                     message: "OTP sent on this mail id.",
                      flag : true,
                     email: user.email,
                    otp : otp
                   });
                 }
             })
             }
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
            message: "Server error"
            });
          }
       
      });

})

app.put("/updatepass",function(req,res){
    console.log("hey")
    userTable.update({password : req.body.password},
        {where : { email: req.body.email}}).then(user => {
        sendMail2(req.body.email,info=>{
            res.status(201).send({
                message: "Password updated successfully."
            });
         })
      }).catch(err => {
        res.status(201).send({
          message: "Error updating Password with email=" + email
        });
    });

})

async function sendMail(user,otp,callback)
 {     
     console.log(user.email);
    //  console.log(typeof user) 
      
    // console.log(user.Emailno);
   
  var transporter=nodemailer.createTransport({
    
      service:'gmail',
     
      auth:{
        user:'mtxestore@gmail.com',
        pass:'estorehm21'
    }
  });
  var mailOptions={
      from:"mtxestore@gmail.com",
      to:user.email,
      subject:'Password Reset',
      html:`<h1 style="color:coral;">Hello ${user.name},</h1><br>
             <h4 style="color:aqua;">You are receiving this email beacuse we recieved
              a password reset request to your account <br> Your One time Password is :-<h4>`+otp+
        `<h4 style="color:red;">Best wishes,</h4>
               <b style="color:red;">Team E-Store</b>`

  };
  let info= await transporter.sendMail(mailOptions);
  callback(info);
}




async function sendMail2(user,callback)
 {    
      
  var transporter=nodemailer.createTransport({
    
      service:'gmail',
     
      auth:{
        user:'mtxestore@gmail.com',
        pass:'estorehm21'
    }
  });
  
  var mailOptions={
      from:'mtxestore@gmail.com',
      to:user,
      subject:'Password Successfully updated',
      html:`<h1 style="color:coral;">Hi ${user.name},</h1><br>
             <h4 style="color:aqua;">Your Password is Successfully Changed 
             You can  login using the new password
              <h4 style="color:red;">Best wishes,</h4>
               <b style="color:red;">Team E-store</b>`

  };
  let info= await transporter.sendMail(mailOptions);
  callback(info);
}




app.listen(8002,function(){
    console.log("Server is listening at http://localhost:8002");
})