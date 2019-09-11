var mongoose = require("mongoose"),
    Post = require("./models/post"),
    User = require("./models/user");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});




// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });

Post.create({
  title: "how to cook healthy",
  content: "cook lots of veggies and little meat!"
}, function (err, post) {
  User.findOne({ email: "bob@gmail.com" }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

//Find User
// User.findOne({ email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//   if(err){
//     console.log(err);
//   } else { 
//     console.log(user);
//   }
// });

//Find all Posts for that User

