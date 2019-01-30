$(function(){
   $('.depth2').hide(); // 메뉴 닫기
   
   $('.depth1 > li').hover( // menu hover
     function(){ 
        // 마우스가 올라갔을 때
      //  $('.depth2').stop().slideDown();
       $(this).find('.depth2').stop().show();
     },  // $(this).find - 선택 목록만 열리게 하는 명령어
     function(){
        // 마우스가 떨어졌을 때
       $('.depth2').stop().hide();
     }
   );
});