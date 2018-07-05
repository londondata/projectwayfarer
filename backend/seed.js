const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/27017");
const db = require (`./models`);

function removeTheseBitches() {
  db.User.remove({});
  db.City.remove({});
  db.Post.remove({});
}

removeTheseBitches()

const userList = [{
  name: "teripanda",
  city: "Cleveland",
  joined: "06/29/2018",
  email: 'teri@gmail.com',
  password: '123',
  image: 'https://images4.alphacoders.com/730/730203.jpg',
},
{
  name: "maxgonerogue",
  city: "Eugene",
  joined: "07/02/2018",
  email: 'max69@gmail.com',
  password: '123',
  image: 'https://images4.alphacoders.com/730/730203.jpg',
},
{
  name: "oxleberry",
  city: "Oakland",
  joined: "07/03/2018",
  email: 'oxle@gmail.com',
  password: '123',
  image: 'https://images4.alphacoders.com/730/730203.jpg',
},
{
  name: "troiboi",
  city: "Seattle",
  joined: "07/04/2018",
  email: 'troi@gmail.com',
  password: '123',
  image: 'https://images4.alphacoders.com/730/730203.jpg',
}];

db.User.create ( userList, (err, newUser) => {
  if(err) { return console.log(err) }
  console.log("saved new user: ", newUser);
  // User.save()
  // process.exit();


  db.User.findOne({})
  .exec(function(err, fuck) {
    console.log('====================')
    console.log(fuck)
    console.log('====================')
    const postList = [
        {
            user: fuck,
            city: 'San Francisco',
            title: 'Climbing Coit',
            body: 'Id aliquet lectus proin nibh. Aliquam sem et tortor consequat id porta nibh venenatis.',
            postCreated: Date.now(),
        },
        {
            user: fuck,
            city: 'San Francisco',
            title: 'Revenge of the Parrots',
            body: 'Arcu dui vivamus arcu felis bibendum. Volutpat lacus laoreet non curabitur gravida.',
            postCreated: Date.now(),
        },
        {
            user: fuck,
            city: 'New Orleans',
            title: 'Vieux Carre',
            body: 'In ornare quam viverra orci sagittis. Enim neque volutpat ac tincidunt vitae sempervenenatis.',
            postCreated: Date.now(),
        },
    ];

    db.Post.create ( postList, (err, posts) => {
      if(err) { return console.log(err) }
      console.log("saved new post: ", posts);
      // Post.save()
      process.exit();
    });
  })


});

const cityList = [
    {
        name: 'San Francisco',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/70/71/51/the-painted-ladies-of.jpg'
    },
    {
        name: 'London',
        image: 'https://www.revistaviajesdigital.com/images/LONDRES.jpg'
    },
    {
        name: 'Sydney',
        image: 'https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg'
    },
    {
        name: 'New Orleans',
        image: 'https://fthmb.tqn.com/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg'
    },
    {
        name: 'Hong Kong',
        image: 'https://images.placesonline.com/photos/18376_hong_kong_meraviglioso_spettacoli_di_luci.jpg'
    },
    {
        name: 'Los Angeles',
        image: 'https://utazomajom.hu/wp-content/uploads/2018/05/75434072_m-1024x683.jpg'
    },
    {   name: 'Eugene',
        image: 'https://i.ytimg.com/vi/Fjwj62aBbT4/hqdefault.jpg'
    },
    {   name: 'Seattle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/1200px-Space_Needle002.jpg'
    },
    {   name: 'Oakland',
        image: 'http://www.gleninjurylaw.com/wp-content/uploads/2016/12/Oakland-1.jpg'
    },
    {   name: 'Cleveland',
        image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjZkve6vIPcAhXO6FMKHZ_3CdMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tripsavvy.com%2Fcleveland-ohio-visitors-guide-4123340&psig=AOvVaw1Ubnz0HDsco756pub0UoLb&ust=1530725881673305'
    }
];

db.City.create ( cityList, (err, newCity) => {
  if(err) { return console.log(err) }
  // newCity.save()
  console.log("saved new city: ", newCity);
});
