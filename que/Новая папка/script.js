$(document).ready(function () {
    $('#slide_2').hide();
    $('#slide_1').show();

    $('#mark_1').css({
        "backgroung-color": "#ff0000"
    });

$('#mark_1').click(function () {
    $('#slide_2').hide();
    $('#slide_1').show();
});

 $('#mark_2').click(function () {
     $('#slide_1').hide();
     $('#slide_2').show();
    });

});