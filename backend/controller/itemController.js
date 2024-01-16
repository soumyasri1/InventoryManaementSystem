const axios = require('axios');
const  Product  = require('../models/Product');
const fetchAndStoreExternalProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const externalProducts = response.data.products;

    // Create arrays to store unique product IDs
    const uniqueProductIds = [];

    // Map the fetched data to match the structure of the Product model
    const mappedProducts = externalProducts.map(product => {
      // Check if the product ID already exists in the uniqueProductIds array
      if (uniqueProductIds.includes(product.id)) {
        // Skip this product to avoid conflicts
        return null;
      }

      // If the product ID is not present, add it to the uniqueProductIds array
      uniqueProductIds.push(product.id);

      // Return the mapped product without the 'id' field
      return {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
        // Combine multiple images into a single string
        images: Array.isArray(product.images) ? product.images.join(',') : product.images,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    // Filter out null values (skipped products) from the mappedProducts array
    const validMappedProducts = mappedProducts.filter(product => product !== null);

    console.log("vp", validMappedProducts);

    // Check if there are valid products before attempting bulkCreate
    if (validMappedProducts.length > 0) {
      // Store the mapped products in the database
      await Product.bulkCreate(validMappedProducts);
    }

    res.json({ message: 'External products fetched and stored successfully.' });
  } catch (error) {
    console.error('Error fetching and storing external products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProduct = async (req, res) => {
    try {
      const newProduct = req.body;
  
      // Validate required fields and data types
      if (!newProduct.title || !newProduct.price || !newProduct.category || !newProduct.brand) {
        return res.status(400).json({ error: 'Title, price, category, and brand are required fields.' });
      }
  
      if (typeof newProduct.title !== 'string' || typeof newProduct.category !== 'string' || typeof newProduct.brand !== 'string') {
        return res.status(400).json({ error: 'Title, category, and brand must be strings.' });
      }
      const parsedPrice = parseFloat(newProduct.price);
      if ( isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({ error: 'Price must be a positive number.' });
      }
      const parsedDiscountPercentage= parseFloat(newProduct.discountPercentage);
      if (parsedDiscountPercentage && ( isNaN(parsedDiscountPercentage) || parsedDiscountPercentage< 0)) {
        return res.status(400).json({ error: 'Discount percentage must be a non-negative number.' });
      }
      const parsedRating= parseFloat(newProduct.rating);
      if (parsedRating && ( isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5)) {
        return res.status(400).json({ error: 'Rating must be a number between 0 and 5.' });
      }
      const parsedStock= parseFloat(newProduct.stock);
      if (parsedStock && ( isNaN(parsedStock) || parsedStock < 0)) {
        return res.status(400).json({ error: 'Stock must be a non-negative number.' });
      }
      
  
      // Additional validations based on your specific requirements
  
      const createdProduct = await Product.create(newProduct);
      res.status(201).json(createdProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId)

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const updatedProductData = req.body;
  
    try {
      const product = await Product.findByPk(productId);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update only the fields that are present in updatedProductData
      await product.update(updatedProductData);
  
      res.json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getCategories = async (req, res) => {
  try {
    const categories = await Product.findAll({
      attributes: ['category'],
      group: ['category'],
    });

    const uniqueCategories = categories.map(product => product.category);

    res.json(uniqueCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getProductsByCategory = async (req, res) => {
  const category = req.params.category;

  try {
    const products = await Product.findAll({
      where: { category },
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }


  
};


module.exports = {
  fetchAndStoreExternalProducts,
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getCategories,
  getProductsByCategory
  
};
