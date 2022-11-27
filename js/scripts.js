$(document).ready(function () {



  $(".lien").find("a").click(function () {
    $(".lien").find("li").removeClass("active");  
    console.log("ko")
    $(this).parent().addClass("active");

    if ($(this).find("h3").html() == "DON UNIQUE") {
      $(".don_mensuel").fadeOut();
      $(".don_unique").addClass("don_active");
      $(".don_mensuel").removeClass("don_active");
      $(".don_unique").fadeIn();
    } else {
      $(".don_unique").fadeOut();
      $(".don_mensuel").addClass("don_active");
      $(".don_unique").removeClass("don_active");
      $(".don_mensuel").fadeIn();
    }

    $(".don").find(".bloc_don h1").removeClass("active_prix");
  });


  $(".don_unique").find(".bloc_don a").click(function(e) {
    e.preventDefault();
  
    if($(this).find("h1").html() == "50€"){
      $(".simpay-amount-input").val(50);
      $(".simpay-total-amount-value").text("50€");
    }else if($(this).find("h1").html() == "75€"){
      $(".simpay-amount-input").val(75);
      $(".simpay-total-amount-value").text("75€");
    }else if($(this).find("h1").html() == "100€"){
      $(".simpay-amount-input").val(100);
      $(".simpay-total-amount-value").text("100€");
    }

    $(".don_unique").find(".bloc_don h1").removeClass("active_prix");
    $(this).find("h1").addClass("active_prix");

  });


  $(".don_mensuel").find(".bloc_don a").click(function(e) {
    e.preventDefault();
    if($(this).find("h1").html() == "5€"){
      $(".simpay-plan-wrapper select").val("price_1M5RCZIahUkTHJHZPo9vuzuU");
      $(".simpay-total-amount-value").text("5€");
      $(".simpay-total-amount-recurring-value").text("5,00€ every month");

    }else if($(this).find("h1").html() == "10€"){
      $(".simpay-plan-wrapper select").val("price_1M5RCZIahUkTHJHZEtbDJzf0");
      $(".simpay-total-amount-value").text("10€");
      $(".simpay-total-amount-recurring-value").text("10,00€ every month");

    }else if($(this).find("h1").html() == "20€"){
      $(".simpay-plan-wrapper select").val("price_1M5RIFIahUkTHJHZnrqvIHL4");
      $(".simpay-total-amount-value").text("20€");
      $(".simpay-total-amount-recurring-value").text("20,00€ every month");
    }

    $(".don_mensuel").find(".bloc_don h1").removeClass("active_prix");
    $(this).find("h1").addClass("active_prix");

  });

}); // ready