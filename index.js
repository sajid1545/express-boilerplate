const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./utils/connectDB');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// middleware to set router
app.use('/api/v1/tools', require('./routes/v1/tools.routes'));


const start = async () => {
	try {
		// await connectDB(process.env.MONGO_URI)
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();

app.get('/', (req, res) => {
	res.send('Express Boilerplate');
});

app.all('*', (req, res) => {
	res.send('No route found');
});

process.on('unhandledRejection', (error) => {
	console.log(error.name, error.message);
	app.close(() => {
		process.exit(1);
	});
});

module.exports = app;
