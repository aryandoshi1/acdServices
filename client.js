$(function() {
    $('#myForm').on('submit', function(event) {
      event.preventDefault();
  
      // Get the form data
      var formData = $(this).serialize();
  
      // Send the AJAX request to the server
      $.ajax({
        type: 'POST',
        url: '/',
        data: formData,
        success: function(response) {
          // Display the success message
          alert(response.message);
  
          // Optionally, reset the form fields
          $('#myForm')[0].reset();
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });  