module.exports = browserify = {
	build: {
		files: {
			'build/index.js'		     		  : 'app/index.js',
			'build/actions/index.js'     		  : 'app/actions/index.js',
			'build/components/App.js'    		  : 'app/components/App.js',
			'build/components/Footer.js' 		  : 'app/components/Footer.js',
			'build/components/Link.js'   		  : 'app/components/Link.js',
			'build/components/Todo.js'   		  : 'app/components/Todo.js',
			'build/components/TodoList.js'		  : 'app/components/TodoList.js',
			'build/containers/AddTodo.js'		  : 'app/containers/AddTodo.js',
			'build/containers/FilterLink.js'	  : 'app/containers/FilterLink.js',
			'build/containers/VisibleTodoList.js' : 'app/containers/VisibleTodoList.js',
			'build/reducers/index.js' 			  : 'app/reducers/index.js',
			'build/reducers/todos.js'			  : 'app/reducers/todos.js',
			'build/reducers/visibilityFilter.js'  : 'app/reducers/visibilityFilter.js',
		},
		options: {
			browserifyOptions: { debug: true },
			transform: [
				['babelify', {
					presets: ['es2015', 'react']
				}]
			]
		}
	}
};