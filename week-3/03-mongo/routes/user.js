const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    User.create({
        username:username,
        password:password
    }).
    then((response)=>{
        res.json({
            msg:"user created succesfully",
            response
        })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
    .then(function(courses){
        res.send(courses);
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;
    const username=req.headers.username;
    User.updateOne({
        username:username
    },{
        $push: {
            purchasedCourses: courseId
        }    
    })
    .then(()=>{
        return Course.findOne({
            _id:courseId
        })
    })
    .then((courseDetails)=>{
        res.json({
            msg:"course purchased successfully",
            courseDetails
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const user= await User.findOne({username})
    // console.log(user.purchasedCourses);
    const course =await Course.find({
        //_id:user.purchasedCourses    though this worked but we are searching on array
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({user:user.purchasedCourses,course});
    
});

module.exports = router