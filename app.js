
function show() {
  var list = document.getElementsByClassName("list")[0];
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}


// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', function() {

  // Hide the spinner initially
  document.querySelector('.load').style.display = 'none';

  // Show the spinner while the page is loading
  window.addEventListener('load', function() {
    document.querySelector('.load').style.display = 'block';
  });

  // Hide the spinner once the page has finished loading
  window.addEventListener('load', function() {
    document.querySelector('.load').style.display = 'none';
  });

});

//Function to send an email with auto select the to selector
function openEmail() {
  var emailAddress = "tonyayda7@gmail.com";
  window.location.href = "mailto:" + emailAddress;
}




