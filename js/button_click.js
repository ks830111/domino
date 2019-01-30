$(function(){

  $('.btn1, .btn2').on('click', function(e){
    console.log('click')
    e.preventDefault();
    //   $(this)
    //     .stop()
    //     .animate({
    //      fontSize: '1.2em',
    // },300,'easeOutElastic')
  
    // // 원래대로 돌아가기
    //     .animate({
    //      fontSize: '1em',
    //     },250);
  });
});
