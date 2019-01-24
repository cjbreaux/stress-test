$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    var warningSigns = []
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var userWarningSigns = $(this).val();
      warningSigns.push(userWarningSigns);

    });
    var healthConditions = []
    $("input:checkbox[name=health-conditions]:checked").each(function(){
      var userHealthConditions = $(this).val();
      healthConditions.push(userHealthConditions);

    });
    var relaxTechniques = []
    $("input:checkbox[name=relax-techniques]:checked").each(function(){
      var userRelaxTechniques = $(this).val();
      relaxTechniques.push(userRelaxTechniques);

    });
console.log(warningSigns);
console.log(healthConditions);
console.log(relaxTechniques);
    // the idea is to put the values into separate arrays then compare the lengths of the arrays to use for evaluating conditionals
  });
});
