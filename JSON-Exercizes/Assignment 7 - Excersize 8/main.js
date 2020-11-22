//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();
var MAINAPP = (function(app){
    let jsonObj = {},
        doc = document;
    let loadJSON = function(path){
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function(){
            if (xobj.readyState === 4){
                jsonObj = JSON.parse(xobj.responseText);
                populateHtml();
            }
        };
        xobj.send(null);
    };

    let populateHtml = function(){
        // returns a node list
        let li = doc.getElementsByTagName('li');
        doc.getElementsByTagName('h2')[0].innerHTML = jsonObj.heading;
        for(let i = 0; i < li.length; i++){
            li[i].innerHTML = jsonObj.bullets['b' + (i + 1)];
        }
    };

    loadJSON('data.json');
    // public function
    app.populateHtml = populateHtml;
    return app;
})(MAINAPP || {});