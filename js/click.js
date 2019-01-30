$(function(){
    // 1
    $('#list_banner li a').eq(0).click(function(){
        $('#list_banner1 img')
         .attr('src', 'images/lb1.png')

        $('#list_banner li').removeClass('selected');
        $('#list_banner li').eq(0).addClass('selected');

         console.log('on');
    });

    // 2 
    $('#list_banner li a').eq(1).click(function(){
        $('#list_banner1 img')
         .attr('src', 'images/lb2.png')
        
        $('#list_banner li').removeClass('selected');
        $('#list_banner li').eq(1).addClass('selected');

         console.log('on');
    });

    // 3
    $('#list_banner li a').eq(2).click(function(){
        $('#list_banner1 img')
         .attr('src', 'images/lb3.png')

        $('#list_banner li').removeClass('selected');
        $('#list_banner li').eq(2).addClass('selected');

         console.log('on');
    });

});