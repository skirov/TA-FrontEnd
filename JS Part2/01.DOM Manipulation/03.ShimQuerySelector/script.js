//if you want, delete the if statements and view the console in IE7
if (!document.querySelector) {
    document.querySelector = function (selector) {
        return Sizzle(selector)[0];
    };
}

if (!document.querySelectorAll) {
    document.querySelectorAll = function (selector) {
        return Sizzle(selector);
    };
}

var nav = document.querySelector("#testDiv");

console.log(nav.innerHTML);
