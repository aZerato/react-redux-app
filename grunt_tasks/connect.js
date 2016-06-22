module.exports = connect = {
	server: {
		options: {
			port: 3000,
			hostname: 'localhost',
			base: '<%= config.build %>',
			keepalive : true,
			open : true
		}
	}
};