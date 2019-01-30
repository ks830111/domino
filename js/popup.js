<script>
   $(function () {

      // 팝업 상자 드래그 시키기
      $('.layer_popup').draggable();

      $('.close_popup').click(function () {

         // $('.layer_popup').removeClass('show');
         $('.layer_popup').hide();
      });
   })
</script>