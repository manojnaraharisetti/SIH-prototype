const express = require("express");
const router = express.Router();
const multer = require("multer");

var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}`+".png")
        nameOfFile=file.originalname
        console.log(file.originalname)
    },
    
});

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowed"))
    }
}


var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})
const db =require("../config/db.config")
// routes



router.post("/add",upload.single("photo"),(req,res)=>{
    const {filename} = req.file;
    const {type ,sellername,sellerNumber,productName,houseNumber,street,city, username , password,gender} = req.body

   
    if( !filename){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    try {
                db.query("INSERT INTO admin ( admin_username ,admin_password , admin_type,admin_sellername, admin_sellernumber, admin_gender, admin_productname, admin_housenumber, admin_street, admin_city, admin_image) values (?,?,?,?,?,?,?,?,?,?,?)",[username , password,type,sellername,sellerNumber,gender,productName,houseNumber,street,city,filename],(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("data added")
                        res.status(201).json({status:201,data:req.body})
                    }
                  })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});



router.get("/getadmindata", (req, res) => {
    try {
        db.query("SELECT * FROM admin where admin_type='admin'", (err, result) => {
            if (err) {
                console.log("error");
                res.status(500).json({ status: 500, error: "Internal Server Error" });
            } else {
                const dataArray = Array.from(result); // Convert the result to an array
                res.status(200).json({ status: 200, data: dataArray });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(422).json({ status: 422, error: "Unprocessable Entity" });
    }
});

router.get("/getprofile", (req, res) => {
    try {
        db.query("SELECT * FROM admin where admin_type='self'", (err, result) => {
            if (err) {
                console.log("error");
                res.status(500).json({ status: 500, error: "Internal Server Error" });
            } else {
                const dataArray = (result); // Convert the result to an array
                res.status(200).json({ status: 200, data: dataArray });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(422).json({ status: 422, error: "Unprocessable Entity" });
    }
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
  
    // Construct the SQL query to delete the record
    const deleteQuery = 'DELETE FROM admin WHERE id = ?';
  
    // Execute the SQL query
    db.query(deleteQuery, [id], (err, results) => {
      if (err) {
        console.error('Error deleting record:', err);
        res.status(500).json({ status: 500, message: 'Error deleting record' });
      } else {
        console.log(`Deleted record with ID ${id}`);
        res.status(200).json({ status: 200, message: 'Record deleted successfully' });
      }
    });
  });

  router.post("/auth", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    // Query the MySQL database to check authentication
    const sql = "SELECT * FROM admin WHERE admin_username = ? AND admin_password = ?";
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error("Error during database query:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
  
      if (result.length === 1) {
        // Authentication successful, send status 200
        return res.status(200).json({ message: "Authentication successful" });
      } else {
        // Authentication failed, send status 401 (Unauthorized)
        return res.status(401).json({ message: "Authentication failed" });
      }
    });
  });


  router.post('/getsellers', async (req, res) => {
    try {
      const { dist } = req.body; // Capture the 'dist' value from the request body
  
      // Construct the SQL query with a placeholder to prevent SQL injection
      const sqlQuery = 'SELECT * FROM admin WHERE admin_productname = ?';
  
      // Execute the query, passing the 'dist' value as a parameter
      db.query(sqlQuery, [dist], (error, results) => {
        if (error) {
          console.error('Error executing SQL query:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Query results:', results);
          res.json(results); // Send the query results as a JSON response
        }
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(400).json({ error: 'Bad Request' });
    }
  });


  router.post('/getsellers', async (req, res) => {
    try {
      const { dist } = req.body; // Capture the 'dist' value from the request body
  
      // Construct the SQL query with a placeholder to prevent SQL injection
      const sqlQuery = 'SELECT * FROM admin WHERE admin_productname = ?';
  
      // Execute the query, passing the 'dist' value as a parameter
      db.query(sqlQuery, [dist], (error, results) => {
        if (error) {
          console.error('Error executing SQL query:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Query results:', results);
          res.json(results); // Send the query results as a JSON response
        }
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(400).json({ error: 'Bad Request' });
    }
  });
  
module.exports = router;