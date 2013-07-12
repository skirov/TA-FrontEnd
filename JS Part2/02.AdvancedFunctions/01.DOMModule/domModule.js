var domModule = (function () {
    var buffersCollection = [];

    var elementBuffer = {
        parentElement: undefined,
        childElements: []
    };

    function appendToBuffer(parentToAppendTo, childToAppend) {
        var parentElementExists = false;
        var bufferSize = 2; //you can test it with 100. I made it 2 for easier testing.
        var i;
        var j;

        //check if the parent element exists in the parrent elements to append
        for (i = 0; i < buffersCollection.length; i++) {
            if (buffersCollection[i].parentElement === parentToAppendTo) {
                parentElementExists = true;
                break;
            }
        }

        if (parentElementExists) {

            buffersCollection[i].childElements.push(childToAppend);

            //if the elementBuffer size is reached, append the elements and clean the array for the new ones
            if (buffersCollection[i].childElements.length === bufferSize) {
                for (j = 0; j < buffersCollection[i].childElements.length; j++) {
                    appendChild(childToAppend, parentToAppendTo);
                }
                buffersCollection[i].childElements = [];
            }
            //if the parent does not exist clear the elementBuffer
        } else {
            elementBuffer.parentElement = undefined;
            elementBuffer.childElements = [];

            elementBuffer.parentElement = parentToAppendTo;
            elementBuffer.childElements.push(childToAppend);
            buffersCollection.push(elementBuffer);
        }
    }

    function appendChild(element, selector) {

        var newElement = document.createElement(element);

        newElement.innerHTML = "Appended child item";
        newElement.style.color = "red";

        var parentElement = document.querySelector(selector);

        parentElement.appendChild(newElement);
    }

    function removeChild(parent, selector) {

        var parentElement = document.querySelector(parent);

        var elementToRemove = parentElement.querySelector(selector);

        parentElement.removeChild(elementToRemove);
    }

    function addHandler(selector, eventType, eventHandler) {

        var elementToHandle = document.querySelector(selector);

        elementToHandle.addEventListener(eventType, eventHandler, false);
    }

    function getElementBySelector(selector) {

        var elementToSelect = document.querySelector(selector);

        return elementToSelect;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        getElementBySelector: getElementBySelector,
        appendToBuffer: appendToBuffer
    };

})();