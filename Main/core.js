
function goLanguage() {

    let page = getInfo();
    var url;
    if (page["node"]){
    url = "Language.html?node=" + page["node"];
    }
    else{
        url = "Language.html";
    }

    location.href = url;
}

function goDestination() {

    let page = getInfo();
    let url = "../English Navigation/Landing_page_" + page["node"] + ".html"
    location.href = url;
}

function goDestinationF() {

    let page = getInfo();
    let url = "../French Navigation/FR_landing_page_" + page["node"] + ".html"
                
    location.href = url;
}


function goDirections(){
    location.href = "Directions.html";
}

function reset(){
    location.href = "index.html";
}

function getInfo(){

    var urlParams;
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

    return urlParams;
}
