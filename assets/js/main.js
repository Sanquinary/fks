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
    	var table_data = '<table class="table table-bordered table-striped" id="tabellok">';

    		//looper gjennom alle linjene i filen og splitter på hver semikolon // starter å telle fra rad 1 her.
	    	for(var count = 1; count<kontostreng_data.length; count++) {
	     		var cell_data = kontostreng_data[count].split("::");
	     		
	     		table_data += '<tr>';
	     		//generer en tabell for hver linje
	     		for(var cell_count=0; cell_count<7; cell_count++) {
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

	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
		/*alert("Vi har oppdaget at du bruker en nettleser som ikke er anbefalt! Nettsiden fungerer kanskje som den ikke skal. Vennligst bruk en anbefalt nettleser som Google Chrome eller Firefox.");*/
		$('#nettleser').css('display', 'block');
	}

  	/*function sortTable (table, order) {
		var asc   = order === 'asc',
		    tbody = table.find('tbody');

		tbody.find('tr').sort(function(a, b) {
		    if (asc) {
		        return $('td(2)', a).text().localeCompare($('td(2)', b).text());
		    } else {
		        return $('td(2)', b).text().localeCompare($('td(2)', a).text());
		    }
		}).appendTo(tbody);
	}
	sortTable($('#tabellok'),'asc');*/

	//automatisk søkefiltrering for hvert tastetrykk
  	$("#kontostreng_input").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#kontostreng_table tr:not(:has(th))").filter(function() {
  			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});

		var rowCount = $('tr:visible:not(:has(th))').length;
		$('#row_count').html("<b>" + rowCount + "</b>");
		if (rowCount == 0) {
  			$('#no_result').css('display', 'block');
  			$('.table table-bordered table-striped').css('display', 'none');
  		} else {
  			$('#no_result').css('display', 'none');
  			$('.table table-bordered table-striped').css('display', 'block');
		}
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