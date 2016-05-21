
// This is function for tab the menu images
function tab(type) {

    var selected = $('#'+type);
    var tabs     = $('.tabs');

    for(var i = 0; i<tabs.length; i++){

        $(tabs[i]).removeClass('active');
    }

    $(selected).addClass('active');
}
