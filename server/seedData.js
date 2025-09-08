const mongoose = require('mongoose');
const Item = require('./models/Item');
require('dotenv').config();

const sampleItems = [
  {
    name: "iPhone 14 Pro",
    description: "Latest Apple smartphone with advanced camera system",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300",
    stock: 50,
    rating: 4.8
  },
  {
    name: "Nike Air Max",
    description: "Comfortable running shoes with air cushioning",
    price: 129,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
    stock: 30,
    rating: 4.5
  },
  {
    name: "MacBook Pro",
    description: "Powerful laptop for professionals",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
    stock: 25,
    rating: 4.9
  },
  {
    name: "Denim Jacket",
    description: "Classic blue denim jacket",
    price: 79,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300",
    stock: 40,
    rating: 4.3
  },
  {
    name: "JavaScript Guide",
    description: "Complete guide to modern JavaScript",
    price: 39,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300",
    stock: 100,
    rating: 4.7
  },
  {
    name: "Coffee Maker",
    description: "Automatic drip coffee maker",
    price: 89,
    category: "Home",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300",
    stock: 20,
    rating: 4.4
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    
    await Item.deleteMany({});
    await Item.insertMany(sampleItems);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();