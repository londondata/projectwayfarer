const db = require (`./models`);

const teripanda = {
  name: "teri"
  city: "san francisco"
  joined: "06/29/2018"
};

db.User.create ( teripanda, (err, newUser) => {
  if(err) P return console.log(err) }
  console.log("saved new user: ", newUser);
});
