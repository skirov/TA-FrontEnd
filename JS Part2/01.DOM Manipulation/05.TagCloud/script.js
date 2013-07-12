function generateTagCloud(stings, minSize, maxSize) {
    var i = 0, j = 0, k = 0;
    var docFragment = document.createDocumentFragment();
    var addedNamesArray = [];

    for (i = 0; i < stings.length; i++) {
        var string = document.createElement('span');
        string.textContent = stings[i].toLowerCase() + " ";
        var isAdded = false;

        for (var k = 0; k < addedNamesArray.length; k++) {
            if (tags[i] === addedNamesArray[k]) {
                isAdded = true;
                break;
            }
        }

        if (!isAdded) {
            var sizer = parseInt(minSize);

            for (j = 0; j < stings.length; j++) {
                if (stings[i] === stings[j]) {
                    sizer++;
                }
            }

            if (sizer > maxSize) {
                sizer = maxSize;
            }

            string.style.fontSize = sizer + 'px';
            addedNamesArray.push(stings[i]);
            docFragment.appendChild(string);
        }
    }
    return docFragment;
}

var tags = ["wordPreSS", "cms", "javascRiPt", "php", "csharp", "js", "javascript", "javascript", "javascript"
            , "javascript", "javascript", "javascript", "wordpress", "wordpress", "wordpress", "wordpress"
            , "wordpress", "wordpress", "wordpress", "wordpress", "wordpress", "wordpress", "wordpress"
            , "wordpress", "wordpress", "wordpress", "wordpress", "wordpress", "wordpress"];

var tagCloud = generateTagCloud(tags, 17, 42);

var container = document.getElementById('tagCloud');

container.appendChild(tagCloud);