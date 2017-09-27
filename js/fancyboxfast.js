     $(document).ready(function () {
      /* fancybox handler */
      $('[data-toggle="tooltip"]').tooltip(); 

      $('.fancybox-media').fancybox({
          openEffect: 'none',
          closeEffect: 'none',
          autoSize: true,
          type: 'iframe',
          iframe: {
              preload: false // fixes issue with iframe and IE *thumbs up*
          }
      });
  });
      