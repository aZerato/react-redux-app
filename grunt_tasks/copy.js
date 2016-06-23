module.exports = copy = {
	build: {
		files: [
			{expand: true, cwd: 'node_modules/react/dist/', src:['react.js'], dest: 'build/lib'},
			{expand: true, cwd: 'node_modules/react-dom/dist/', src:['react-dom.js'], dest: 'build/lib'},
			{expand: true, cwd: 'node_modules/react-redux/dist/', src:['react-redux.js'], dest: 'build/lib'},
			{expand: true, cwd: 'node_modules/redux/dist/', src:['redux.js'], dest: 'build/lib'},
			{expand: true, cwd: 'node_modules/jquery/dist/', src:['jquery.js'], dest: 'build/lib'},

			{expand: true, cwd: 'assets', src:['**'], dest: 'build/'}
		]
	}
};