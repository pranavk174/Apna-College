const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid"); // used for generating ids
const path = require("path");
const mysql = require("mysql2"); // used for database connection
const methodOverride = require("method-override")
app.use(methodOverride("_method"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const { faker } = require("@faker-js/faker"); // used for using generating fake data

const connection = mysql.createConnection({
  // this method is for creating connection
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Pranav@12",
});

let createRandomUser = () => {
  // this functio will create a fake use data
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//     "/usr/local/mysql/bin/mysql -u root -p"   ye command teriminal me run krne se hamko SQL k saare operations krne ki facility milegi vs code k vs code k terminal me terminal me

// let q = "insert into user values ?";    //query
// let data = [ ]
// for(let i =0;i< 100 ;i++){
//     data.push(createRandomUser());
// }

// console.log(createRandomUser());

// let q = "select * from students";
// try{
//     connection.query(q,[data] ,(err,results)=>{       // agr ek se jyada values daalni hai to array k form me daaalo   [user]
//         if(err) throw err;
//         console.log(results);
//     })
//     } catch(err){
//         console.log(err)
//     }

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", async (req, res) => {
  let q = "select count(*) from user";
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let count = results[0]["count(*)"];
      // console.log(results);
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", async (req, res) => {
  let q = "select * from user";
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
    //   console.log(results);
      res.render("show.ejs", { results });
    });
  } catch (err) {
    console.log(err);
  }
});


//edit 
app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  let q = `select * from user where id ='${id}'`;
  // console.log(id)

  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let result = results[0];
    //   console.log(result.id);

      res.render("edit.ejs", { person: result });
    });
  } catch (err) {
    console.log(err);
  }
});


// execute update
app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const username  = req.body.username;
  const password = req.body.password;
const q = `select * from user where id = '${id}'`
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let result = results[0];
      if (password != result.password) {
        res.send("wrong password");
      } else {
        
        let q2 = `update user set username='${username}' where id= '${id}'`;
        connection.query(q2, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.redirect("/user");
      })
        
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/user",(req,res)=>{
    const {username , email , password} = req.body;
    const id = uuidv4()
    let q = `insert into user values ('${id}','${username}','${email}','${password}')`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            console.log("success")
            res.redirect("user")
        })
    }
    catch(err){
        console.log(err)
    }
});


//delete user

app.get("/user/delete" , (req,res)=>{
    res.render("delete.ejs")
})

app.delete("/user",(req,res)=>{
    const {email , password} = req.body;
    const q = `delete from user where email = "${email}"`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            if(result.email != email){
            res.send("enter correct credentials")
            }
            else{
                res.send("done");
            }
        })
    }
    catch(err){
        console.log(err);
    }
})
// connection.end();    // to end connection
