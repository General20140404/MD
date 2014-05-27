var fs = require('fs');
var marked = require('marked');

function compose (content) {
	// body...
	var arr = [];
	arr[0] = '<!doctype html>' + 
			'<html lang="en">' + 
			'<head>' + 
				'<meta charset="UTF-8">' + 
				'<title>' + 'Markdown Parser Demo' + '</title>' + 
				'<link href="http://kevinburke.bitbucket.org/markdowncss/markdown.css" rel="stylesheet">' + '</link>' + 
			'</head>' + 
			'<body>';
	arr[2] = '</body>' + '</html>';
	arr[1] = content;

	content = arr.join('');

	return content;
}



fs.readFile('Markdown.md', 'utf8', function(err, content) {
	console.log('load successful');
	// console.log(marked(content));
	var value = marked(content, function(err, content) {
		if (err) {
			throw err;
		};
		console.log('-----------compile successful.');
		var content = compose(content);
		// console.log(content);
		fs.writeFile('Markdown.html', content, function(err, content) {
			if (err) {
				throw err;
			};
			console.log('+++++++++++general Markdown.html successful.');
		});
	});
	// var value = marked('I am using __markdown__.')
	// console.log(value);
});