function _attachEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

var Folder = Class.create({
    initialize: function (title, urls) {
        this.title = title;
        this.urls = urls;
    },

    addUrl: function (title, url) {
        var newUrl = new Url(title, url);
        this.urls.push(newUrl);
    },

    render: function () {
        var urlsList = document.createElement("ul");

        for (var i = 0; i < this.urls.length; i++) {
            var anchor = document.createElement("a");
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("href", this.urls[i].url);
            anchor.innerText = this.urls[i].title;

            var folderElement = document.createElement("li");
            folderElement.appendChild(anchor);

            urlsList.appendChild(folderElement)
        }

        var folderTitle = document.createElement("span");
        folderTitle.innerText = this.title;
        _attachEvent(folderTitle, "click", function () {
            if (urlsList.style.display == "none") {
                urlsList.style.display = "block";
            }
            else {
                urlsList.style.display = "none";
            }
        });

        var folder = document.createElement("div");
        folder.appendChild(folderTitle);
        folder.appendChild(urlsList);

        var wraper = document.querySelector("#wrapper");
        wraper.appendChild(folder);
    }
});