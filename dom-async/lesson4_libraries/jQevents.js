$('form').submit((e) => {
  e.preventDefault();
  character = $('input').prop('value');
  console.log(character);
  $(document).off('keypress').on('keypress', function(e2) {
    if (e2.key !== character) {
      return;
    }
    $('a').trigger('click');
  });
});

$('a').click((e) => {
  e.preventDefault();
    $('#accordion').slideToggle();
});
