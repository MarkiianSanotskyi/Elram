/*placeholder*/
$(document).ready(function () {
    $.Placeholder.init({color: "#000000"});

    $('.form-inner').submit(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://www.bmby.com/shared/AddClient/index.php",
            method: "POST",
            data: {
                'Fname': $('[name="Fname"]').val(),
                'Phone': $('[name="Phone"]').val(),
                'Email': $('[name="Email"]').val(),
                'MediaTitle': 'LP',
                'AllowedMail': $('#news-letter-checkbox').is(':checked') ? '0' : '2',
                'IP': window.USER_IP,
                'ProjectID': '6586',
                'Password': 'abc241116'
            }
        })
            .done(function(response){
                console.log(response);
            });

        $(this).hide();
        $('.ty').show();
    });

    var currentText = 0;
    var textQuantity = $('.bg-form-2').length;
    var textAnimationInterval = setInterval(function(){
        $($('.bg-form-2')[currentText]).removeClass('show').addClass('hide');
        setTimeout(function(){
            $($('.bg-form-2')[currentText]).hide().removeClass('hide');
            currentText++;
            if(currentText == textQuantity) currentText = 0;

            $($('.bg-form-2')[currentText]).show().addClass('show');
        },1005);
    }, 6000);

    var mySwiper = new Swiper('.swiper-container', {
        speed: 500,
        autoplay: 5000,
        effect: 'fade'
    });

    var mySwiper = new Swiper('.swiper-container-2', {
        speed: 500,
        autoplay: 5000,
        effect: 'fade'
    });
});
// method="POST" action="http://private-db4d9f-vvertigoo.apiary-mock.com"