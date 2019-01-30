$(function(){

    // 팝업상자 드래그 시키기
    $('.popup_ksm').draggable();

    $('.bc').click(function(){
      
      // 아래 2가지 방식(자바, 제이쿼리)

      // $('.lp').removeClass('show');
      $('.popup_ksm').hide();
      
    });
  });