(function() {
	window.onload =function() {
		var markdownContent = document.getElementById('editor').value
		if (markdownContent) {
			marked(markdownContent, function(err, content) {
				if (err) throw err;
				document.getElementById('show_panel').innerHTML = content;
			});
		}
	};

	document.getElementById('editor').addEventListener('keyup', function() {
		var markdownContent = document.getElementById('editor').value;
		marked(markdownContent, function(err, content) {
			if (err) throw err;
			document.getElementById('show_panel').innerHTML = content;
		});
	});
})()