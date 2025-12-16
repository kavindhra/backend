const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./model/Product');
const connectdb = require('./config/db');

dotenv.config();
connectdb();

const products = [
  {
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfQYVl9EhwW4UMUXto_GVpwi_29pWVTWZLQ&s',
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    reviews: 128
  },
  {
    name: 'Smart Watch',
    price: 199,
    image: 'https://istarmax.com/wp-content/uploads/2024/01/gts7-pro-smart-watch-view-2-en-jpg.webp',
    description: 'Advanced smartwatch with health tracking features',
    category: 'Electronics',
    stock: 30,
    rating: 4.8,
    reviews: 256
  },
  {
    name: 'USB-C Cable',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/61qdgfRqTWL.jpg',
    description: 'Durable USB-C charging and data transfer cable',
    category: 'Accessories',
    stock: 100,
    rating: 4.3,
    reviews: 512
  },
  {
    name: 'Phone Case',
    price: 24.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbwcvkraj1RTbDOT41DyaXDf_kDni6XVsKQ&s',
    description: 'Protective and stylish phone case for multiple devices',
    category: 'Accessories',
    stock: 75,
    rating: 4.6,
    reviews: 340
  },
  {
    name: '4K Webcam',
    price: 149.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lN6P8cbJ7lKsKnatJBW03JvuqLAeB8Aazg&s',
    description: 'Professional 4K webcam for streaming and video calls',
    category: 'Electronics',
    stock: 20,
    rating: 4.7,
    reviews: 189
  },
  {
    name: 'Keyboard Mechanical',
    price: 129.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCACgCJZ6fZ-wYUW_xH9BhQDUvLbrkoN93Q&s',
    description: 'RGB mechanical keyboard with customizable switches',
    category: 'Electronics',
    stock: 40,
    rating: 4.9,
    reviews: 421
  },
  {
    name: 'Laptop Stand',
    price: 34.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupnE-LXlVZcK-L18lMIySv5-xkf61HmQFNA&s',
    description: 'Adjustable aluminum laptop stand for better ergonomics',
    category: 'Accessories',
    stock: 60,
    rating: 4.4,
    reviews: 267
  },
  {
    name: 'Wireless Mouse',
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzrm82yM1d5HokTIUyP6O-LoBQlgpmRqtJQ&s',
    description: 'Ergonomic wireless mouse with long battery life',
    category: 'Electronics',
    stock: 80,
    rating: 4.5,
    reviews: 398
  },
];

const seedDB = async () => {
  try {
    const deleted = await Product.deleteMany();
    console.log(`Deleted ${deleted.deletedCount} products`);
    const inserted = await Product.insertMany(products);
    console.log(`Inserted ${inserted.length} products`);
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();