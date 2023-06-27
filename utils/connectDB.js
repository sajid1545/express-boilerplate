const mongoose = require('mongoose');

const connectDB = async (uri) => {
	try {
		mongoose.connect(uri).then(() => {
			console.log('Connected to MongoDB successfully');
		});
	} catch (error) {
		console.log('Could not connect to MongoDB...', error);
	}
};

module.exports = connectDB;
