/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable brace-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

// eslint-disable-next-line no-unused-vars
 const router = require("express").Router();

 const functions = require("firebase-functions");
 const admin = require("firebase-admin");
 const { error } = require("firebase-functions/logger");

//  const verifyToken = async (req , res) => {
    
//   const authHeader = req.headers.authorization;

//   if(!authHeader){
//     return res.status(401).json({ message : "Unauthorized no token provide"});
//   }

//   const idToken = authHeader.split(" ")[1];

//   try{
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedToken; // Attach the decoded token to the request object
//   }
//   catch(error){
//     console.error('Error verifying token:', error);
//     return res.status(401).json({ message: 'Unauthorized: Invalid token', error: error.message });
//   }

//  }

 router.get("/", (req, res) => {
    return res.send("inside api routes");
  });
  

 // eslint-disable-next-line space-before-function-paren
//  router.get("/jwtVerification" , verifyToken , (req , res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Token verified successfully!',
//         uid: req.user.uid,
//       });
//  })

router.get("/jwtVerfication", async (req, res) => {
    if (!req.headers.authorization) {
      return res.status(500).send({ msg: "Token Not Found" });
    }
  
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedValue = await admin.auth().verifyIdToken(token);
      if (!decodedValue) {
        return res
          .status(500)
          .json({ success: false, msg: "Unauthorized access" });
      }
      return res.status(200).json({ success: true, data: decodedValue });
    } catch (err) {
      return res.send({
        success: false,
        msg: `Error in extracting the token : ${err}`,
      });
    }
  });

// Export the router
module.exports = router;
// eslint-disable-next-line no-multiple-empty-lines


