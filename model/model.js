export function getRoute() {
    let hashID = window.location.hash;
    let pageID = hashID.replace("#","");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(data){
            $("#app").html(data);
        });
    } else {
        $.get(`pages/home.html`, function(data){
            $("#app").html(data);
        })
    }

    changeNav(pageID);
}

export function changeNav(pageID){
    if (pageID != "home"){
        $.get(`pages/nav2.html`, function(data){
            $("#nav").html(data);
        });
    } else {
        $.get(`pages/nav.html`, function(data){
            $("#nav").html(data);
        })
    }

}

export function blankURL(pageID){
    if (pageID == ""){
        $.get(`pages/nav.html`, function(data){
            $("#nav").html(data);
        })
    }
}
