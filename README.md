# 🚀 Blip

Blip is a Node.js-based backend application built with Express and MongoDB (via Mongoose). It provides a structured API for managing users, owners, and products, and is designed to serve as the backend for an e-commerce or marketplace platform.

---

## ✨ Features

- 👤 User, Owner, and Product management via RESTful APIs
- 🗄️ MongoDB integration using Mongoose ODM
- 🔒 Secure password handling with bcrypt
- 🛡️ JWT-based authentication (planned/extendable)
- 📦 File uploads supported via Multer
- 🖼️ Static file serving and EJS templating support

---

## 🗂️ Project Structure

```
.
├── app.js
├── config/
│   └── mongoose-connection.js
├── controllers/
├── models/
│   ├── ownermodel.js
│   ├── productmodel.js
│   └── usermodel.js
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
├── views/
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd Blip
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory for sensitive configuration (e.g., JWT secrets, DB URIs).

4. **Start MongoDB:**
   - Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/Blip` or update the URI in [`config/mongoose-connection.js`](config/mongoose-connection.js).

5. **Run the application:**
   ```sh
   node app.js
   ```

6. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

- `GET /owners` — Owners route
- `GET /users` — Users route
- `GET /products` — Products route

Further endpoints can be added in the respective router files.

---

## 🛠️ Technologies Used

- [Express](https://expressjs.com/) ⚡
- [Mongoose](https://mongoosejs.com/) 🍃
- [bcrypt](https://www.npmjs.com/package/bcrypt) 🔑
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 🛡️
- [multer](https://www.npmjs.com/package/multer) 📦
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) 🍪
- [EJS](https://ejs.co/) 🖼️

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📄 License

This project is licensed under the ISC License.

---

**Developed with ❤️ using Node.js and MongoDB.**