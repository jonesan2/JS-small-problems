$('a').click(function(e) {
  let blockValue = $(this).attr('data-block');
  let $selected = $("article[data-block=" + blockValue + "]");
  $selected.parent().prepend($selected);  
});