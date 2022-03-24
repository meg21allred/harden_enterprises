//wait for entire page to load
window.onload = function() {
    //get the current page path.
    var pathArray = location.pathname.split("/");
    var foldername = pathArray[pathArray.length - 1];

    //make sure you execute in localhost or server for functionality
    if(foldername == "" || foldername == "index.html") {
        //if you are at the home page then highlight "home" nav
        document.getElementById("home").className = "current-page";
    } else {
        // otherwise, loop through the links and put the classname on the correct page nav
        // when it matches the folder name variable
        var nav = document.getElementById("primary-navigation");
        var links = nav.getElementsByTagName('a');

        for(i = 1; i < links.length; i++) {
            if(links[i].getAttribute("href").indexOf(foldername) > -1) {
                links[i].className = "current-page";
            }
        }
    }
}