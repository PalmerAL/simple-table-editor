    var table = $(".table")[0];
    var columns = table.rows[0].cells.length;
$(".table td").attr("contenteditable", "true");
$(".add-row").click(function() {
    var rowtemplate = "<td contenteditable></td>"
    var rowinnerhtml = ""
    for(var i=0; i < columns; i++) {
        rowinnerhtml += rowtemplate
    }
    $(".table").append("<tr>" + rowinnerhtml + "</tr>");
});

$(".add-column").click(function() {
    var template = "<td contenteditable></td>"
    $(".table tr").append(template);
    columns++;
});
