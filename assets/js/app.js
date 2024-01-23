function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        //   openDropdown.classList.remove('show');
        }
      }
    }
  };
  
  document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var url = document.getElementById("urlInput").value;
    console.log(url);
    var combinedUrl = "https://arportal.kaispe.com/" + url;
    document.getElementById("urlInput").value = "";
    window.location.href = combinedUrl;
  });
  

  
  jQuery('.appie-video-popup').magnificPopup({
    type: 'iframe',
});



