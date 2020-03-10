$("input[type = 'text']").fadeOut(0);
$("ul").on("click" , "li" , function(){
    $(this).toggleClass("done");
})

$("ul").on("click" ,"li span", function(e){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
})

$("input[type = 'text']").keypress(function(e){
    if(e.which === 13){
        $("#todo-list").append("<li><span><i class='far fa-trash-alt'></i></span> " + $(this).val() + "</li>");
        $(this).val('');
    }
})
$("#yoyo").click(function(){
    $("input[type = 'text']").fadeToggle(500);
})

