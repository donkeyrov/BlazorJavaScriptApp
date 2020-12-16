window.interop = {

    setItem: function (name, value) {
        window.localStorage[name] = value;
    },
    getItem: function (name) {
        return window.localStorage[name];
    }
}