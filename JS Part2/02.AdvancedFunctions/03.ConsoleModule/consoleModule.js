var specialConsole = (function () {
    function stringFormat() {
        var numberOfValues = arguments.length - 2; //the number of values passed after the text
        var result = arguments[0]; //the text. In owr case {0}, {1}, {0} text {2}
        var i;

        for (i = 0; i <= numberOfValues; i++) {
            var placeHolderToReplace = new RegExp("\\{" + i + "\\}", "g"); //e.g. matches {0}, {1} etc.
            result = result.replace(placeHolderToReplace, arguments[i + 1]); //replace placeholders globally with the following(their) argument. 
        }

        return result;
    }

    function writeLine(message, format) {
        var stringToPrint = stringFormat.apply(null, arguments);
        console.log(stringToPrint);
    }

    function writeError(message, format) {
        var stringToPrint = stringFormat.apply(null, arguments);
        console.log(stringToPrint);
    }

    function writeWarning(message, format) {
        var stringToPrint = stringFormat.apply(null, arguments);
        console.log(stringToPrint);
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    };
})();


specialConsole.writeLine("{0}, {1}, {0},  {2}", "writeLineParam1", "writeLineParam2", "writeLineParam3");

specialConsole.writeError("{0}, {1}, {0},  {2}", "writeErrorParam1", "writeErrorParam2", "writeErrorParam3");

specialConsole.writeWarning("{0}, {1}, {0},  {2}", "writeWarning1", "writeWarning2", "writeWarning3");