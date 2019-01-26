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
  //has for inside tag 
  $("p:has(i)").hide();
})
