/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
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

// server.js or app.js
const router = require("express").Router();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

router.post('/createproduct', async (req, res) => {

  const productId = Date.now();

  const { product_category ,product_name ,product_price , imageURL } = req.body; // Destructure the incoming data fields

  try {
    // Assume we're storing the product data in a collection named 'products'
    await db.collection('products').doc(String(productId)).set({
      productId ,
      product_category , 
      product_name ,
      product_price , 
      imageURL,
      // timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ message: 'Product created successfully', data: { productId , product_category ,product_name ,product_price , imageURL } });
  } catch (error) {
    console.error('Error creating product:', JSON.stringify(error, Object.getOwnPropertyNames(error))); // Logs entire error object
    res.status(500).send({ message: 'Failed to create product', error: error.message || 'Unknown error occurred' });
  }
});

router.get('/getproduct', async (req, res) => {
  try {
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();

    const products = [];
    snapshot.forEach(doc => {
      products.push({ ...doc.data() });
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
});


router.delete('/deleteproduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the product from Firebase (or your database)
    await db.collection('products').doc(String(id)).delete();
    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete product' });
  }
})

router.post('/addtocart/:id', async (req, res) => {

  const {id} = req.params;
  const productData = req.body;

  try {
    // Reference to the specific product in the user's cart
    const productRef = db.collection("cartItems").doc(String(id)).collection("items").doc(String(productData.productId));
    await productRef.set(productData);
    res.status(200).json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Failed to add product to cart." });
  }
})

router.get('/getcartitem/:id', async (req, res) => {
  const {id} = req.params;
  
})

module.exports = router;

