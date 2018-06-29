function isProd() {
	return process.env.ENVIRONMENT === 'production' || process.env.ENVIRONMENT === 'prod';
}

module.exports = {
	isProd
};
