/*
 *   Object create extension
 */
if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

Object.prototype.extend = function (properties) {
    function f() { };
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}


//Slider control
var _images = [];
var _currentImageIndex = 0;

function _attachEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

var Image = {
    init: function (thumbImageUri, largeImageUri, title) {
        this.thumbUri = thumbImageUri;
        this.largeUri = largeImageUri;
        this.title = title;
    }
}

var Slider = {
    init: function (images) {
        if (images) {
            _images = images;
        }

        Slider._placeLargeImage(0);
        Slider._placeSmallImages();

        var prevButton = document.querySelector("span#prev");
        _attachEvent(prevButton, "click", function () {
            if (_currentImageIndex > 0) {
                _currentImageIndex--;
            }
            Slider._placeLargeImage(_currentImageIndex);
        });

        var nextButton = document.querySelector("span#next");
        _attachEvent(nextButton, "click", function () {
            if (_currentImageIndex < _images.length - 1) {
                _currentImageIndex++;
            }

            Slider._placeLargeImage(_currentImageIndex);
        });
    },

    addImage: function (imageUri) {
        _images.push(imageUri);
    },

    _placeLargeImage: function (index) {

        var imageToAppend = _images[index];

        var theImage = document.createElement("img");
        theImage.setAttribute("src", imageToAppend.largeUri);
        theImage.setAttribute("title", imageToAppend.title);

        var theLargeImageContainer = document.querySelector("#bigImage");

        var currentImageInTheLargeImageContainer = document.querySelector("#bigImage img");

        if (currentImageInTheLargeImageContainer) {
            theLargeImageContainer.removeChild(currentImageInTheLargeImageContainer);
        }

        theLargeImageContainer.appendChild(theImage);
    },

    _placeSmallImages: function () {
        var theThumbsContainer = document.querySelector("ul#imagesList");

        for (var i = 0; i < _images.length; i++) {
            var theImage = document.createElement("img");
            theImage.setAttribute("src", _images[i].thumbUri);
            theImage.setAttribute("title", _images[i].title);

            var listItem = document.createElement("li");
            listItem.appendChild(theImage);

            theThumbsContainer.appendChild(listItem);
        }

        _attachEvent(theThumbsContainer, "click", function (ev) {
            for (var i = 0; i < _images.length; i++) {
                var imageTitle = ev.target.getAttribute("title");

                if (_images[i].title === imageTitle) {
                    Slider._placeLargeImage(i);
                }
            }
        });
    }
}