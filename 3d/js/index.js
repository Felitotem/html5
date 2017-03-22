document.addEventListener("DOMContentLoaded", function(event) {
  impress().init();
});

document.addEventListener('impress:stepenter', function(e) {
  var currentStep = document.querySelector('.active[id]').id;
  if (currentStep == 'gofirst')
    impress().goto(0);
  console.log(currentStep)
})
