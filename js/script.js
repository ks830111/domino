
$(function(){

   // 2단계 메뉴 닫기
   $('.depth2').hide();

   // 2단계 메뉴 hover
   $('.depth1 > li').hover(
      // 마우스 올라갔을때
      function(){
         // 전체 메뉴 열림
         $('.depth2').stop().slideDown()
         // 현재 선택한 목록만 열림
         // $(this).find('.depth2').stop().slideDown();
      },
      // 마우스 나갔을때
      function(){
         $('.depth2').stop().slideUp();

      }
   );

})