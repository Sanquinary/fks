$(document).ready(function(){
    //for UiO
    /*path = window.location.pathname.substring("/for-ansatte/enhetssider/mn/kontostrenger/".length, window.location.pathname.lastIndexOf("/"));*/
    path = window.location.pathname;
    path_rmSlash = path.replace(/\//g,''); 
    function PromiseAjax(url){
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                dataType:"text",
                success: function(data) {
                    resolve(data)
                },
                error: function(error) {
                    console.warn(error);
                    resolve("")
                }
            })
        })
    }

    Promise.all([
        PromiseAjax("../assets/txt/kontostrenger-" + path_rmSlash + ".txt"),
        PromiseAjax("../assets/txt/kontostrenger-" + path_rmSlash + "2.txt")
    ])

    .then((values) => {
        let data = values[0] + values[1];
        var kontostreng_data = data.split(/\r?\n|\r/);
        var table_data = '<table class="table table-bordered table-striped" id="tabellok">';

        for(var count = 1; count<kontostreng_data.length; count++) {
            var cell_data = kontostreng_data[count].split("::");

            if (kontostreng_data[count].length === 0) {
                continue;
            }
            table_data += '<tr class="copy-to-clipboard" onclick="copyToClipboard($(this));" title="Klikk for å kopiere kontostreng.">';

            for(var cell_count=0; cell_count<6; cell_count++) {
                table_data += '<td>'+cell_data[cell_count]+'</td>';
            }
            table_data += '</tr>';
        }
        table_data += '</table>';
        $('#kontostreng_table').html(table_data);
        $('#oppforinger_totalt').append("<b>" + count + "</b>");
    });

    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $('#nettleser').css('display', 'block');
    }

    $("#overskrift").append(path_rmSlash.toUpperCase());
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

        if (value == 0 || rowCount == 0) {
            $('#oppforinger_dynamisk').css('display', 'none');
        } else {
            $('#oppforinger_dynamisk').css('display', 'block');
        }
    });
});