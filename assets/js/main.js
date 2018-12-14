//loader all content og intialiserer jquery
$(document).ready(function(){
	//starter AJAX
	$.ajax({
		//definerer hvilken data og hva den inneholder
		url:"assets/txt/kontostrenger_bio.txt",
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		dataType:"text",
		success: function (data) {

		//definerer variabler som parser inneholdet i filen
    	var kontostreng_data = data.split(/\r?\n|\r/);
    	var table_data = '<table class="table table-bordered table-striped">';

    		//looper gjennom alle linjene i filen og splitter på hver semikolon // starter å telle fra rad 1 her.
	    	for(var count = 1; count<kontostreng_data.length; count++) {
	     		var cell_data = kontostreng_data[count].split("::");
	     		
	     		table_data += '<tr>';

	     		//generer en tabell for hver linje
	     		for(var cell_count=0; cell_count<8; cell_count++) {
	       			table_data += '<td>'+cell_data[cell_count]+'</td>';
	     		}

	     		table_data += '</tr>';
	    	}
    		table_data += '</table>';
    		//definerer hva som skal hvor i HTML siden
    		$('#kontostreng_table').html(table_data);
    		$('#oppforinger_totalt').append("<b>" + count + "</b>");
    		
   		}	
  	});

	//automatisk søkefiltrering for hvert tastetrykk
  	$("#kontostreng_input").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#kontostreng_table tr:not(:has(th))").filter(function() {
  			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});

		var rowCount = $('tr:visible:not(:has(th))').length;
  		$('#row_count').html("<b>" + rowCount + "</b>");
		});

		$(function () {
	    $('#utskrift').click(function () {
	        var pageTitle = 'Kontostreng tabell',
	            stylesheet = 'assets/css/bootstrap.min.css',
	            stylesheet2 = 'assets/css/style.css'
	            win = window.open('', 'Print', 'width=990,height=590');
	        win.document.write('<html><head><title>' + pageTitle + '</title>' +
	            '<link rel="stylesheet" href="' + stylesheet + '">' +
	            '<link rel="stylesheet" href="' + stylesheet2 + '">' +
	            '</head><body>' + $('.tabell')[0].outerHTML + '</body></html>');
	        win.document.close();
	        win.print();
	        win.close();
	        return false;
		});
	});
});