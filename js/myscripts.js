//when the document is ready (completely charged), then execute my js
$(document).ready(function(){
    var state = false;
    $('#btn-toggle').on('click',function() {
        $('.section-toggle').slideToggle();
        //quit scroll asnd change button value
        if (state==true) {
            $(this).text("Open");
            $('body').css({
                "overflow":"auto"
            });
            state = false;
        }else{
            $(this).text("Close");
            $('body').css({
                "overflow": "hidden"
            });
            state = true;
        }
    });
    
});