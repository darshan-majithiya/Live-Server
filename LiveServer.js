$(document).ready(function () {

    function updateOutput() {
      $('iframe').contents().find('html').html('<html><head><style type="text/css">' + $('#cssPanel').val() + '</style></head><body>' + $('#htmlPanel').val() + '</body></html>');
      document.getElementById('outputPanel').contentWindow.eval($('#jsPanel').val());
    }

    $('.btn').click(function () {
        $(this).toggleClass('btn-outline-dark');
        $(this).css('boxShadow', '0px 0px 0px');
        $(this).toggleClass('btn-danger');

        var panel = $(this).attr('id') + 'Panel';
        $('#' + panel).toggleClass('hidden');
        var numberOfActivePanels = $('.hidden').length;
        $('.panel').width((($(window).width()) / (4 - numberOfActivePanels)) - 40);
      });

    $('.panel').width((($(window).width()) / 2) - 40);
    updateOutput();
    $('textarea').on('change keyup paste', function () {
        updateOutput();
      });
  });
