// preload images
function preloadImages() {
    var imageList = $('img');
    var preloadImages = [];
    for (var i = 0; i < imageList.length; i++) {
        preloadImages[i] = new Image();
        preloadImages[i].src = imageList[i].src;
    }
}

// carousel starts

var showDelay = 3000;
var fadeSpeed = 1000;

var _totaal_photos = 0;
var _current_photo;
var _current_photo_nr = 1;
var timer;

function initCarousel() {
    // Object sniffing
    if (!$('#slider') || !$('#carousel')) return false;

    _totaal_photos = $('#sImages li').length;
    $('#sImages li a img').css({
        opacity: 0
    });
    _current_photo = $('#sImages li:nth-child(' + _current_photo_nr + ') img');
    _current_photo.animate({
        opacity: 1
    }, fadeSpeed / 2);

    timer = setInterval(rotateImages, showDelay);;
    // mouseover and mouseout events
    $('#slider').on('mouseover', function() {
        clearInterval(timer);
    });
    $('#slider').on('mouseout', function() {
        timer = setInterval(rotateImages, showDelay);

    });

    // arrow click events
    $('#arrowRight').on('click', function() {
        changeSliderImage($(this));
    });
    $('#arrowLeft').on('click', function() {
        changeSliderImage($(this));
    });

    // pagination change
    createAndTogglePagination();
}

// right click image function and setInterval function
function rotateImages() {
    $('#pagination li').eq(_current_photo_nr).addClass('current').siblings().removeClass('current');

    $('.description').eq(_current_photo_nr).addClass('present').siblings().removeClass('present');

    _current_photo_nr++;
    if (_current_photo_nr > _totaal_photos) {
        _current_photo_nr = 1;

        $('#pagination li').eq(_current_photo_nr - 1).addClass('current').siblings().removeClass('current');

        $('.description').eq(_current_photo_nr - 1).addClass('present').siblings().removeClass('present');
    }
    var _new_foto = $('#sImages li:nth-child(' + _current_photo_nr + ') img');
    _new_foto.animate({
        opacity: 1
    }, fadeSpeed);
    _current_photo.animate({
        opacity: 0
    }, fadeSpeed, function() {
        _current_photo = _new_foto;
    });

}

// step 1: create pagination based on the number of images;
// step 2: click pagination to switch image
function createAndTogglePagination() {
    $('#sImages').children().each(function(theIndex, theElement) {
        $('#pagination').append(' <li><span></span></li>');
    });
    $('#pagination li').eq(0).addClass('current');
    $('#pagination').find('li span').each(function(theIndex) {
        $(this).parent().on('click', function() {
            _current_photo_nr = theIndex;
            $(this).addClass('current').siblings().removeClass('current');
            rotateImages();
        });
    });
}

// Image changes when arrows are clicked
function changeSliderImage($clickedObj) {
    var clickedObjID = $clickedObj.attr('id');
    if (clickedObjID == 'arrowLeft') {
        _current_photo_nr--;

        $('#pagination li').eq(_current_photo_nr - 1).addClass('current').siblings().removeClass('current');

        $('.description').eq(_current_photo_nr - 1).addClass('present').siblings().removeClass('present');

        if (_current_photo_nr == 0) {
            _current_photo_nr = _totaal_photos;

            $('#pagination li').eq(_current_photo_nr - 1).addClass('current').siblings().removeClass('current');

            $('.description').eq(_current_photo_nr - 1).addClass('present').siblings().removeClass('present');
        }
        var _new_foto = $('#sImages li:nth-child(' + _current_photo_nr + ') img');
        _new_foto.animate({
            opacity: 1
        }, fadeSpeed);
        _current_photo.animate({
            opacity: 0
        }, fadeSpeed, function() {
            _current_photo = _new_foto;
        });
    } else if (clickedObjID == 'arrowRight') {
        rotateImages();
    }
}

// carousel ends

// create card, multipages
function createCard(sectionObj, items) {

    var titleLength = 20;
    var descriptionLength = 100;
    var myIndex;

    var sectionObjID = sectionObj.attr('id');
    if (sectionObjID == 'books' || sectionObjID == 'nBooks' || sectionObjID == 'webBooks' || sectionObjID == 'popBooks' || sectionObjID == 'otherBooks') {
        for (item of items) {
            var titleShort = item.title;
            var introShort = item.synopsis;

            if (titleShort.length > titleLength) {
                myIndex = titleShort.lastIndexOf(' ', titleLength);
                titleShort = titleShort.substring(0, myIndex) + '...';
            }
            if (introShort.length > descriptionLength) {
                myIndex = introShort.lastIndexOf(' ', descriptionLength);
                introShort = introShort.substring(0, myIndex) + ' ...';
            }
            if (sectionObjID == 'books') {
                $('#' + sectionObjID).append('<article class="card hBook"><h2>' + item.title + '</h2><a Url="#"><img src="' + item.imgSrc + '" alt="' + item.cta + '"></a><div class="bContent"><p class="mbItalic">' + item.mbItalicIntro + '</p><p class="rBold">' + item.rBoldIntro + '</p></div><div class="cta"><a Url="#">' + item.cta + '</a></div><div class="bPrice">Prijs: ' + item.prijs + '</div></article>');
            } else if (sectionObjID == 'nBooks' || sectionObjID == 'webBooks' || sectionObjID == 'popBooks' || sectionObjID == 'otherBooks') {
                $('#' + sectionObjID).append('<article class="card b-info"><h2>' + item.title + '</h2><div class="bContent"><p class="rBold">' + introShort + '</p></div><a Url="#"><img src="' + imgDir + '' + item.imgSrc + '" alt="' + item.cta + '"></a><div class="cta"><a Url="#">' + shopCta + '</a></div><div class="bPrice">Prijs: ' + item.prijs + '</div></article>');
            }

        }
    } else if (sectionObjID == 'news' || sectionObjID == 'mainNews') {
        for (item of items) {
            var titleShort = item.title;
            var introShort = item.synopsis;

            if (titleShort.length > titleLength) {
                myIndex = titleShort.lastIndexOf(' ', titleLength);
                titleShort = titleShort.substring(0, myIndex) + '...';
            }
            if (introShort.length > descriptionLength) {
                myIndex = introShort.lastIndexOf(' ', descriptionLength);
                introShort = introShort.substring(0, myIndex) + ' ...';
            }

            if (sectionObjID == 'news') {
                $('#' + sectionObjID).append('<article class="card hNews"><div class="bContent"><h2>' + titleShort + '</h2><p>' + introShort + '</p></div><a Url="#"><img src="' + item.imgSrc + '" alt="' + item.title + '"></a><div class="cta"><a Url="#">' + item.cta + '</a></div></article>');
            } else if (sectionObjID == 'mainNews') {
                $('#' + sectionObjID).append('<article class="card"><div class="bContent"><h2>' + titleShort + '</h2><p>' + introShort + '</p></div><a Url="#"><img src="' + imgDir + '' + item.imgSrc + '" alt="' + item.title + '"></a><div class="cta"><a Url="#">' + item.cta + '</a></div></article>');
            }
        }
    } else if (sectionObjID == 'recipes' || sectionObjID == 'nRecipes' || sectionObjID == 'mainRecipes') {
        for (item of items) {
            titleLength = 15;
            var titleShort = item.title;
            if (titleShort.length > titleLength) {
                myIndex = titleShort.lastIndexOf(' ', titleLength);
                titleShort = titleShort.substring(0, myIndex) + '...';
            }
            if (sectionObjID == 'recipes' || sectionObjID == 'nRecipes') {
                $('#' + sectionObjID).append('<article class="card hRecipes"><div class="bContent"><h2>' + item.foodIcons + titleShort + '</h2>' + item.steps + '</div><a Url="#"><img src="' + item.imgSrc + '" alt="' + item.title + '"></a><div class="cta"><a Url="#">' + item.cta + '</a></div></article>');
            } else if (sectionObjID == 'mainRecipes') {
                $('#' + sectionObjID).append('<article class="card" data-food-type=' + item.foodType + ' data-cook-type=' + item.cookType + ' data-eat-number=' + item.eatNumber + ' data-food-flag="0" data-cook-flag="0" data-eat-flag="0"><div class="bContent"><h2>' + item.foodIcons + titleShort + '</h2>' + item.steps + '</div><a Url="#"><img src="' + imgDir + '' + item.imgSrc + '" alt="' + item.title + '"></a><div class="cta"><a Url="#">' + item.cta + '</a></div></article>');
            }
        }
    }
}



// click every to go to subpages, for recipes, webshop, articles parts
function getUrl(items, index, type = '') {
    var currentUrl = $(location).attr('href');
    var lastSlashIndex = currentUrl.lastIndexOf('/') + 1;
    var beforeSlashContent = currentUrl.substring(0, lastSlashIndex);
    var afterSlashContent = currentUrl.substring(lastSlashIndex);

    //console.log(currentUrl);

    urlList = [];
    for (item of items) {
        var title = item.title;
        title = title.toLowerCase();
        titleReg = /[&()?'"!%,.]/g;
        title = title.replace(titleReg, '');
        titleSpaceReg = /[' ']/g;
        title = title.replace(titleSpaceReg, '-');
        newUrl = beforeSlashContent + title + '.html';

        console.log(item);

        if ($('#homeContent')) {
            if (type == 'webshop') {
                newUrl = beforeSlashContent + 'pages/webshop/' + title + '.html';
            } else if (type == 'nieuws') {
                newUrl = beforeSlashContent + 'pages/nieuws/' + title + '.html';
            } else if (type == 'recepten') {
                console.log(1);
                newUrl = beforeSlashContent + 'pages/recepten/' + title + '.html';
            }

        }
        urlList.push(newUrl);

    }
    //console.log(urlList);
    return urlList[index];
}