let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$("input[type='number']").inputSpinner()

$(document).ready(function () {
  $("#myTab a:last").tab("show"); // show last tab
});