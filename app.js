const express = require("express")
const app = express();
<<<<<<< HEAD
const authRoutes = require ("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoute");
const projectRoutes = require("./routes/projectRoute");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors")


app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);

app.use(errorHandler);

module.exports = app;
=======
const authRoutes = require ("./routes/authRoutes")
const clientRoutes = require("./routes/clientRoute")
const projectRoutes = require("./routes/projectRoute")
const errorHandler = require("./middleware/errorHandler")
>>>>>>> 917f0fea52fe173064ad4e1da1520ad91fd178d5
