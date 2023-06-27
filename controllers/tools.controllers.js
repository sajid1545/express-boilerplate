const getAllTools = async (req, res) => {
	try {
		res.send('all tools');
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	getAllTools,
};
