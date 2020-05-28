
$("ul").on("click","li",function(){
    // $(this).css("color","gray");
    // $(this).css("text-decoration","line-through");

    // if($(this).css("color")==="rgb(0, 0, 0)")
    //     $(this).css({
    //         color : "gray",
    //         textDecoration : "line-through"
    //     });
    // else
    // {
    //     $(this).css({
    //         color : "black",
    //         textDecoration: "none"
    //     });
    //}
    $(this).toggleClass("completed");
})

//Click on bin to delete

$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
})

//adding listener to input, that fires when we enter the key

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        //fetching the value of input
        var newTodo = $(this).val();
        //adding new todos to list
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newTodo + "</li>");
        //clearing input
        $(this).val("");

    }
});


$("#plus").on("click",function(){
    $("input").fadeToggle();
})

// var back = true;

// var lists = document.getElementsByTagName("list");

// for(var i=0; i<lists.length; i++)
// {
//     if(back==true)
//     {
//         lists[i].classList.add("list-background");
//         back=false;
//     }
//     else
//     {
//         back=true;
//     }
// }


















