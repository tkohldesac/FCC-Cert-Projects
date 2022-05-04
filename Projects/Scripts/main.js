function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openWork(evt, workName) {
  // Declare all variables
  var i, workContent, workLinks;

  // Get all elements with class="workContent" and hide them
  workContent = document.getElementsByClassName("workContent");
  for (i = 0; i < workContent.length; i++) {
    workContent[i].style.display = "none";
  }

  // Get all elements with class="workLinks" and remove the class "active"
  workLinks = document.getElementsByClassName("workLinks");
  for (i = 0; i < workLinks.length; i++) {
    workLinks[i].className = workLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(workName).style.display = "block";
  evt.currentTarget.className += " active";
}
