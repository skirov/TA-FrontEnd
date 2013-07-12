//localStorage - https://developer.mozilla.org/en-US/docs/DOM/Storage#localStorage
var localStorage = {
    getItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return null; }
      return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    },
    key: function (nKeyId) {
      return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
    },
    setItem: function (sKey, sValue) {
      if(!sKey) { return; }
      document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      this.length = document.cookie.match(/\=/g).length;
    },
    length: (document.cookie.match(/\=/g) || []).length,
    removeItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return; }
      document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      this.length--;
    },
    hasOwnProperty: function (sKey) {
      return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
  };


var sessionStorage = (function () {
    var data = {};
 
    function setItem(key, value) {
        data[key] = value.toString();
    }
 
    function getItem(key) {
        return data[key];
    }
 
    function removeItem(key) {
        delete data[key];
    }
 
    function clear() {
        data = {};
    }
 
    function key(index) {
        var count = 0;
        for (var e in data) {
            if (count == index) {
                return e;
            }
 
            count++;
        }
    }
 
    function length() {
        var count = 0;
 
        for (var i in data) {
            count++;
        }
 
        return count;
    }
 
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        clear: clear,
        key: key,
        length: length
    };
})();

