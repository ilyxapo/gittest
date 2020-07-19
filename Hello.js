const colors = require('colors');
colors.setTheme({
	custom: ['yellow', 'bold']
});

console.log(colors.custom('Hello World!'));
