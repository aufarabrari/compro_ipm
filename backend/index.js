const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const urlLogger = (req, res, next) => {
	console.log(req.method + ":" + req.url);
	next();
};

const corsOption = {
	origin: [process.env.FRONTEND_URL],
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(urlLogger);
app.use(express.static("public"));

const { inquiryRouter } = require("./router");
app.use("/inquiry", inquiryRouter);

// landing page API
app.get("/", (req, res) => {
	res.status(200).send("Welcome to Inquiry Management System API");
});

// Define API PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
