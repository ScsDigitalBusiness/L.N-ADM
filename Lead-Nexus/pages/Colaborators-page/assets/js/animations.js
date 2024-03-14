

$("#new-Lead").click(() => {
  $("#new-Lead").hide();
  $(".register-area").fadeIn(200);
  $(".content").addClass("desfoque");
  $(".close").click(function () {
    $("#new-Lead").show();
    $(".register-area").fadeOut(200);
    $(".content").removeClass("desfoque");
  });
});

setTimeout(() => { 
  document.getElementById("spiner-area").remove(); 
}, 3000);