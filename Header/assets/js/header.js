// top-header-1
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("header").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("header").style.marginLeft= "0";
};

// top-heade-2
$(document).ready(function(){
    var showHeaderAt = 150;
    var win = $(window),
            body = $('body');
    // Show the fixed header only on larger screen devices
    if(win.width() > 600){
        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.
        win.on('scroll', function(e){
            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });
    }
});