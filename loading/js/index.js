$( document ).ready(function() {
  //first one
  setTimeout(function(){ 
    $("#WashingFur").hide();
    $("#GeneratingMonkeys").show();
    $("#myProgress").css("width","20%");
}, 5000);
  
  setTimeout(function(){ 
    $("#GeneratingMonkeys").hide();
    $('#SettingFireToYourHouse').show();
    $("#myProgress").css("width","40%");
  }, 10000);
  
  setTimeout(function(){ 
    $('#SettingFireToYourHouse').hide();
    $("#CleaningCannons").show();
        $("#myProgress").css("width","60%");
  }, 15000);
  
  setTimeout(function(){     
    $("#CleaningCannons").hide();
    $('#FeedingTheMonkeys').show();
        $("#myProgress").css("width","80%");
  }, 20000);
  
  setTimeout(function(){     
    $("#FeedingTheMonkeys").hide();
    $('#SharpeningWeapons').show();
     $("#myProgress").css("width","100%");
  }, 25000);
  
});