$(document).ready(function() {
    initVideo();
    createCard($('#nBooks'), books);
    createCard($('#nRecipes'), nRecipes);
    preloadImages();
});

function initVideo() {
    // object sniffing
    if (!$('#campagneContent') || !$('#camVideo')) return false;

    var srcDir = '../../media/simply-nigella-';
    var deviceList = ['mobile', 'tablet', 'desktop'];
    var type = ['mp4', 'webm', 'ogv'];

    $('#camVideo h1').after('<video controls muted preload="auto"><p>Uw browser heeft geen video ondersteuning.</p></video>');

    if ($(window).width() < '768') {
        $('#camVideo video').prepend('<source src="' + srcDir + '' + deviceList[0] + '.' + type[0] + '" type="video/' + type[0] + '"><source src="' + srcDir + '' + deviceList[0] + '.' + type[1] + '" type="video/' + type[1] + '"><source src="' + srcDir + '' + deviceList[0] + '.' + type[2] + '" type="video/' + type[2] + '">');
    } else if ($(window).width() > '768' && $(window).width() < '1280') {
        $('#camVideo video').prepend('<source src="' + srcDir + '' + deviceList[1] + '.' + type[0] + '" type="video/' + type[0] + '"><source src="' + srcDir + '' + deviceList[1] + '.' + type[1] + '" type="video/' + type[1] + '"><source src="' + srcDir + '' + deviceList[1] + '.' + type[2] + '" type="video/' + type[2] + '">');
    } else {
        $('#camVideo video').prepend('<source src="' + srcDir + '' + deviceList[2] + '.' + type[0] + '" type="video/' + type[0] + '"><source src="' + srcDir + '' + deviceList[2] + '.' + type[1] + '" type="video/' + type[1] + '"><source src="' + srcDir + '' + deviceList[2] + '.' + type[2] + '" type="video/' + type[2] + '">');
    }
}