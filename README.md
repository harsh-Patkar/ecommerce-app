# E-Commerce Web Application

A full-stack e-commerce application built with Node.js, Express, MongoDB, and React.

## Features

### Backend
- JWT Authentication (Login/Register)
- CRUD APIs for items with filters (price, categories)
- Add to cart APIs
- User cart persistence

### Frontend
- Signup and login pages
- Product listing page with filters
- Shopping cart page with add/remove functionality
- Cart items persist after logout
- Professional responsive design

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Frontend**: React, React Router, Axios
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install
   cd ..
   ```

3. **Set up MongoDB Atlas**
   - Create a MongoDB Atlas account at https://www.mongodb.com/atlas
   - Create a new cluster
   - Get your connection string
   - Replace the MONGODB_URI in `.env` file

4. **Configure environment variables**
   
   Update `.env` file:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Update `client/.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Seed the database with sample data**
   ```bash
   node server/seedData.js
   ```

6. **Run the application**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and React frontend (port 3000).

### Deployment to Vercel

1. **Prepare for deployment**
   - Push your code to GitHub
   - Update `client/.env` with your production API URL

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your JWT secret key
     - `NODE_ENV`: production

3. **Update API URL**
   - After deployment, update `client/.env`:
   ```
   REACT_APP_API_URL=https://your-vercel-app.vercel.app/api
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Items
- `GET /api/items` - Get all items with filters
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:itemId` - Remove item from cart

## Sample Data

The application includes sample products in the following categories:
- Electronics
- Clothing
- Books
- Home
- Sports
- Beauty

## Features Implemented

✅ JWT Authentication
✅ User registration and login
✅ Product listing with filters (category, price, search)
✅ Add to cart functionality
✅ Cart management (add, remove, update quantities)
✅ Cart persistence after logout
✅ Professional responsive design
✅ MongoDB Atlas integration
✅ Vercel deployment ready

## Demo Credentials

You can create a new account or use these sample credentials:
- Email: demo@example.com
- Password: demo123

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request