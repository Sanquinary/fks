//https://stackoverflow.com/questions/54763111/add-dash-in-between-each-td-selector/54763358?noredirect=1#comment96309477_54763358

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $(element).addClass("selected").siblings().removeClass("selected");
  $temp.val($(element).find("td:eq(1), td:eq(2), td:eq(3)").text().replace(/(\d)(?=(\d{6})+(?!\d))/g, '$1-')).select();
  $('#kontostreng_kopiert').fadeIn(500).delay(3500).fadeOut(500);
  $("#row_copy").html($temp.val());
  document.execCommand("copy");
  $temp.remove();
}

