window.onload = function() {
    var window_height = $(window).height();
    $("body").css("height", window_height + 'px');
}

$(window).resize(function() {
    var window_height = $(window).height();
    $("body").css("height", window_height + 'px');
});