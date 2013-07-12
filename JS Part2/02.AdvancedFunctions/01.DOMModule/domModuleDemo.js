//DOM Demos
domModule.appendChild("li", "ul#addDemo");

domModule.removeChild("ul#removeDemo", "li:last-child");

domModule.addHandler("a#button", "click",
                     function () { alert("Clicked") });

//with a buffer size of 2, elements will be appended only when 2 elements are in the buffer. Try to remove one.
domModule.appendToBuffer("#content", "div");
domModule.appendToBuffer("#content", "div");
domModule.appendToBuffer("#removeDemo", "li");
domModule.appendToBuffer("#removeDemo", "li");
domModule.appendToBuffer("#removeDemo", "li");
domModule.appendToBuffer("#removeDemo", "li");

//Console log demo
console.log("getElementBySelector demo: ");
console.log(domModule.getElementBySelector("#removeDemo"));