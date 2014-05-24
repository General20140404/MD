
**Markdown Introduction** 
---
---
####**What is Markdown?**
* Markdown is a plain text formatting syntax.
* It can be optionally converted to `HTML` using a tool by the same name. 
####**Why using Markdown?**
* The goal is "to write using an easy-to-read, easy-to-write plain text format, and optionally convert it to structurally valid XHTML/HTML".
* It is supported by many *editors* as plug-in and *sites*.    
    >Editor:
    * Cmd Markdown
    * Dillinger.io
    * notepag
    * 简书
    * stackedit.io
    * MarkdownPad2
    
    >Sites:   
    * GitHub
    * Stack Overflow
    * OpenStreetMap

####**How to use?**
* Heading: 
> Head
> \= = =

* Sub-Heading
> Sub-heading
> \- - -

* Bold
> \**Bold**

* Italic
> \*Italic*

* Link
> \[google.com](www.google.com 'link to google')

* Unsort List
> \* apples
> \* bananas
> \* oranges

* Sort List
> 1\. one
> 2\. one
> 3\. one

* Blockquetos
> \> This content contained in a blockqueto.

* split line
> \- \- \-

####**Others**
* Markdown enhancements:
    1. Markdown extensions
    2. Markdown Extra

* Simliar lightweight markup languages:
    1. AsciiDoc
    2. Setext
    3. etc.
    
* Code
> \`console.log('Code.')\`

>
```
var fs = require('fs');
var marked = require('marked');

fs.readFile('Markdown.md', 'utf8', function(err, content) {
    console.log('load successful');
    console.log(typeof content);
    // console.log(marked(content));
    var value = marked(content, function(err, content) {
        if (err) {
            throw err;
        };
        console.log('-----------compile successful.');
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
```

####**Useful website link:**
[Markdown][1]
[stackedit.io][2]
[markdown wikipedia][3]

[1]: http://daringfireball.net/projects/markdown/ "markdown official website"
[2]: https://stackedit.io "one editor"
[3]: http://en.wikipedia.org/wiki/Markdown "markdown wikipedia"

---
*Some of content extract from [WikiPedia][3].*