
function goLanguage() {

    let page = getLocation();
    var url;
    if (page){
    url = "Language.html?node=" + page;
    }
    else{
        url = "Language.html";
    }

    location.href = url;
}

function goDestination() {

    let page = getLocation();

    href="../English Navigation/Landing_page_Front Entrance.html"

    let url = "../English Navigation/Landing_page_" + page + ".html"

    location.href = url;
}

function goDirections(){
    location.href = "Directions.html";
}

function reset(){
    location.href = "index.html";
}

function getLocation(){

    var urlParams;
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

    return urlParams["node"];
}
