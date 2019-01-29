//write inside the ready function
//selector for class put . for id put #
$("document").ready(function() {
  $("#wrapper").css("width", 500);
  $("#wrapper").css("margin", "auto");
  $("#logo2").css("float", "left");
  $("#wrapper").css("width",500);

  $("#p_two").css({
    "background": "url('repeatBkgrnd.png') repeat-y"
  });

  $("a").css("color","red");

  $("em + a").css("color", "orange");
  $("p > em").css("color", "gray");
  $("oListIndent li:nth-child(3)").css("color","red")
  $("li[name]").html("'and the Goblet of Fire'");
  $("input[type ='text']#yourName").val("Derek");
  $("a[href*='google']").css("font-weight", "bolder");
  $("img[alt^='NTT']").css({
    "border-color":"black",
    "border_width":"1px",
    "border-style":"solid"
  })
  $("img[alt^='NTT']").width(150).height(150);
  $("a[href$='pdf']").css("color","red");
  $("#tableData tr:first").css({
    "background-color" : "#001A57",
    "color" : "white"
  });
  //contains for text content
  $("#oListTypes li:not(:contains(and))").css("color","red")
  $("a:contains(gravida)").css("color","blue");
  //has: for inside tag
  //hide: hide the content
  $("p:has(i)").hide();

  alert($("p:has(i)").html());
  //add some text and show
  $("p:has(i)").html("<i>Some normal text</i>").show();
  //attach text content after
  $("p:has(i)").append("I go at the end");
  //attach text content before
  $("p:has(i)").prepend("I go at the begining");
  //add a paragraph before
  $("p:has(i)").before("<p id='before_p>'A new paragraph beofre</p>");
  $("p:has(i)").after("<p id='after_p'> A new paragraph after</p>");
  $("#after_p").click(function() {
    $(this).remove();
  })

  $("#before_p").click(function() {
    $(this).replaceWith('<p>I\m the new paragraph</p>')
  });

  $("#oListIndent li").each(function(index){
    let inputListStuff = $("#listStuff").val();
    $("#listStuff").val(inputListStuff + ", " + $(this).text());
  })

  //change attribute
  //add class
  $("oListIndent li").addClass("Harry_Potter");
  $(".Harry_Potter").css("color", "#36454F");
  //toggleClass turn on and off when click
  $("#oListIndent li").click(function() {
    $(this).toggleClass("hightlight");
  })



})
