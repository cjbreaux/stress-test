$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var userWarningSigns = $(this).val();
      console.log(userWarningSigns);
    });
    $("input:checkbox[name=health-conditions]:checked").each(function(){
      var userHealthConditions = $(this).val();
      console.log(userHealthConditions);
    });
    $("input:checkbox[name=relax-techniques]:checked").each(function(){
      var userRelaxTechniques = $(this).val();
      console.log(userRelaxTechniques);
    });
  });
});
