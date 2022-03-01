


$(".btn").click(function () {

     $("#dis").val($("#dis").val() + $(this).text());

    $("#clear").click(function () {
        $("#dis").val('');
    });

    $("#equal").click(function () {
        $("#dis").val(eval($("#dis").val()));
    });
})

