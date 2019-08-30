function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$(element).addClass("selected").siblings().removeClass("selected");
	$("#row_copy").addClass("selected").siblings().removeClass("selected");
	$temp.val($(element).find("td:eq(1), td:eq(2), td:eq(3)").text().replace(/(\d)(?=(\d{6})+(?!\d))/g, '$1-')).select();
	$('#kontostreng_kopiert').fadeIn(500);
	$("#row_copy").html($temp.val());
	document.execCommand("copy");
	$temp.remove();
}

