(function() {
	var markdownContent = '';
	var htmlContent = '';
	var convert = function(content) {
		marked(content, function(err, content) {
			if (err) throw err;
			document.getElementById('show_panel').innerHTML = content;
		});
	};

	window.onload =function() {
		markdownContent = document.getElementById('editor').value
		if (markdownContent) {
			convert(markdownContent);
		}
	};

	document.getElementById('editor').addEventListener('keyup', function() {
		markdownContent = document.getElementById('editor').value;
		convert(markdownContent);
	});

	
	// setInterval(function() {

	// 	console.log(typeof markdownContent);
	// 	console.log(markdownContent);

	// 	$.ajax({
	// 		url: '/parse',
	// 		data: {"content": markdownContent},
	// 		success: function(data) {
	// 			// console.log(data);
	// 		},
	// 		error: function(err) {
	// 			// console.log(err);
	// 		}
	// 	});
	// }, 5000);

})()