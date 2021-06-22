// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello jQuery!  :)' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': '#333333',
      'background-color': '#ffff99'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://design.kyusan-u.ac.jp/socialdesign/">Department of Social Design</a></p>' );
    $( 'footer a' ).css( 'color','#ffa400' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });



});
