
$(function(){

  $('.cancel').click(function() {
    $('#box').css("display","none");
  })
  $('#show').click(function() {
    $('#box').css("display","block");
  })

  $('#teamdrop').on('change', function(){

    var val = $(this).val();

    if(val === 'Engineering') {

      $("#employees").focus(function(){

        var availableEmployees = [
          "Lawana Fan",
          "Larry Rainer",
          "Rahul Malik",
          "Leah Shumway"
        ];
        $("#employees").autocomplete({
          source: availableEmployees
        });
      })
      $("#ok").click(function(){

        var val1 = document.getElementById('employees').value;
        if(val1 === 'Lawana Fan' || val1 === 'Larry Rainer' || val1 === 'Rahul Malik' || val1 === 'Leah Shumway') {
           alert("Employee name matched");
        }else{
          alert("Employee name does not match");
        }

      });
    }
    else if(val === 'Executive') {

      $("#employees").focus(function(){

        var availableEmployees = [
          "Rohan Gupta",
          "Ronda Dean",
          "Robby Maharaj"
        ];
        $("#employees").autocomplete({
          source: availableEmployees
        });

      })
      $("#ok").click(function(){

        var val2 = document.getElementById('employees').value;
        if(val2 === 'Rohan Gupta' || val2 === 'Ronda Dean' || val2 === 'Robby Maharaj') {
           alert("Employee name matched");
        }else{
          alert("Employee name does not match!!!");
        }

      });
    }
    else if(val === 'Finance') {

      $("#employees").focus(function(){

        var availableEmployees = [
          "Caleb Brown",
          "Carol Smithson",
          "Carl Sorensen"
        ];
        $("#employees").autocomplete({
          source: availableEmployees
        });

      })
      $("#ok").click(function(){

        var val3 = document.getElementById('employees').value;
        if(val3 === 'Caleb Brown' || val3 === 'Carol Smithson' || val3 === 'Carl Sorensen') {
           alert("Employee name matched");
        }else{
          alert("Employee name does not match");
        }

      });
    }
    else if(val === 'Sales') {

      $("#employees").focus(function(){

        var availableEmployees = [
          "Ankit Jain",
          "Anjali Maulingkar"
        ];
        $("#employees").autocomplete({
          source: availableEmployees
        });

      })
      $("#ok").click(function(){

        var val4 = document.getElementById('employees').value;
        if(val4 === 'Ankit Jain' || val4 === 'Anjali Maulingkar') {
           alert("Employee name matched");
        }else{
          alert("Employee name does not match!!!");
        }

      });

    }

  })
})
