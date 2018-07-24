/**
  * Show edit and delete buttons on hover
  */

  $('#file-list').on('mouseenter', '.knife-look', function() {
    $("input", this).toggle();
  });


  $('#file-list').on('mouseleave', '.knife-look', function() {
    $("input", this).toggle();
  });
