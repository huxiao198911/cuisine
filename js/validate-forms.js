$(document).ready(function() {
    initForm();
    if ($('#accountForm')) {
        if ($(window).width() < '768') {
            $('.accountList ul li').eq(0).on('click', function() {
                $(this).siblings().toggle(1000);
            });
            $('.accountList ul li').on('click', function() {
                $(this).addClass('present').siblings().removeClass('present');
            });
        }
        $('.accountList ul li').on('click', function() {
            $(this).addClass('present').siblings().removeClass('present');
        });
        if ($(window).width() > '1280') {
            $('.accountList ul li').removeClass('present');
        }
    }
});

function initForm() {
    if (!$('#contactForm') || !$('#registerForm') || !$('#accountForm')) return false;


    var validateiLijst = ['username', 'firstname', 'lastname', 'street', 'housenum', 'postcode', 'email', 'emailConform', 'password'];

    function validatefield(whichField) {
        var field = $('#' + whichField);
        var valid = false;
        var content = field.val();
        var type = field.attr('type');
        var inputName = field.attr('name');

        if (type == 'text' && inputName != 'postcode') {
            var pattern = /^[a-z0-9\s-]{4,256}$/i;
            valid = pattern.test(content);
        } else if (type == 'number') {
            var num = parseInt(content);
            var min = parseInt(field.attr('min'));
            var max = parseInt(field.attr('max'));
            valid = ((num <= max) && (num >= min));
        } else if (type == 'email') {
            var apenstaart = content.indexOf('@');
            var laatstePunt = content.lastIndexOf('.');
            var lengte = content.length;
            valid = (apenstaart >= 2 && laatstePunt > (apenstaart + 2) && lengte > (laatstePunt + 2));
        } else if (type == 'password') {
            var pswReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            valid = pswReg.test(content);
        } else if (inputName == 'postcode') {
            var postcodeReg = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
            valid = postcodeReg.test(content);
        }
        createFeedback(field, valid);
        return valid;
    }

    function createFeedback(field, valid) {
        if (valid) {
            field.css({
                backgroundColor: 'rgba(0,255,0,0.2)',
                borderColor: 'rgba(0,255,0,1)'
            });
        } else {
            field.css({
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)'
            });
        }
    }

    $('#submit').on('click', function(e) {
        for (fieldID of validateiLijst) {
            var antwoord = validatefield(fieldID);
            if (!antwoord) e.preventDefault();
        }
    });
    var eventList = ['blur', 'click', 'keyup'];

    for (elementID of validateiLijst) {
        let element = $('#' + elementID);
        for (myEvent of eventList) {
            element.on(myEvent, function(e) {
                validatefield(this.id);
                console.log(this.value);
            });
        }
    }
}