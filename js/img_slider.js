// img_slider(이미지번호: 0, 1, 2)
function img_slider(img_num){
   // image slider
   $('.slider .sliders')
   .animate({
      marginLeft: -img_num*100 + '%'
   });
}

$(function(){

   var duration = 4000; // 재생 시간 5초
   var slider_num = 0; // 이미지 번호

   // 자동 재생
   setInterval(function(){
      // 다음 이미지로
      slider_num++;

      // 마지막 이미지일때 처음으로
      if(slider_num > 2){
         slider_num = 0;
      }

      // 이미지 슬라이더 함수 실행
      img_slider(slider_num);

      // 현재 이미지의 indicator 선택 효과
      $('.slider_indicator li a').removeClass('active');
      $('.slider_indicator li')
      .eq(slider_num)
      .find('a')
      .addClass('active');

   }, duration);
   
});