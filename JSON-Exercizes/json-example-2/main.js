var MAINAPP = (function(app) {

    let jsonObj = {};

    let loadJSON = function(path) {
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                app.jsonObj = JSON.parse(xobj.responseText);
            }
        };
        xobj.send(null);
    };

    //Public methods
    app.jsonObj = jsonObj;
    app.loadJSON = loadJSON;

    return app;
})(MAINAPP || {});