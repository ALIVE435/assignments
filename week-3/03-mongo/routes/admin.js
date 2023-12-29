const { Router } = require("express"); //const express= require("express") 
const router = Router();               //const router =express.Router();
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}= require("../db");


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password

    Admin.create({
        username:username,
        password:password
    })
    .then((details)=>{
        res.json({msg:"Admin created successfully",
        details:details
        });
    })
    .catch((err)=>{
        console.log(err.message);
        res.json({msg:"admin not created"});
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price= req.body.price;
    const course=await Course.create({         //{title:title,description:description} or {title,description}
        title,description,imageLink,price
    });
    res.json({
        msg:"course created succesfully",
        courseId:course._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then((response)=>{
        res.json({courses:response});
    })
});

module.exports = router;