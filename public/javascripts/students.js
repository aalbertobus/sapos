// ** On change Program
var advprev = 0;

$('#program').live("change", function() {
  liveSearch();
});

// ** On change Status
$('.status-cbs').live("click", function() {
  liveSearch();
});


function initializeSearchForm() {
  $("#program option[value=0]").attr("selected", true);
  $('#status_activos').attr('checked', true);
  $('#status_egresados').attr('checked', false);
  $('#status_bajas').attr('checked', false);
}

$('#advance-select').live("change", function() {
  $('#advance-' + advprev).hide();
  $('#advance-' + $('#advance-select').val()).show();
  advprev = $('#advance-select').val();
});

$(document).ready(function() {
  liveSearch();
});

$('.assign-number')
  .live("ajax:success", function(evt, data, status, xhr) {
    var res = $.parseJSON(xhr.responseText);
    $("#flash-notice").removeClass('error').removeClass('notice').removeClass('info');
    $("#flash-notice").addClass('success').html(res['flash']['notice']);
    $("#flash-notice").slideDown().delay(1500).slideUp();
    $("#thesis-number").html(res['number']);
  })

  .live('ajax:beforeSend', function(ev, xhr, settings) {
    $("#thesis-number").html('Asignando...');
  })

  .live("ajax:error", function(data, status) {
    console.log(data);
    console.log(status);
  })

  .live('ajax:complete', function(evt, xhr, status) {

  });

