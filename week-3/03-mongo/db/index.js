const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ALIVE435:43500000@cluster0.tgf93sl.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description: String,
    image_link: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
/*module.exports is a special object in Node.js that is used to expose functionality from a module to the outside world. In this case, it's exporting an object containing the Admin, User, and Course models(all three are objects). */