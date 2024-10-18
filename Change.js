// function to update page content based on current month
function updatePageContent() {
    const contentDiv = document.getElementById("content");
    const now = new Date();
    const currentMonth = now.getMonth();
    
    switch(currentMonth) {
      case 0:
        fetch("january.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
      case 1:
        fetch("february.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 2:
        fetch("march.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 3:
        fetch("april.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 4:
        fetch("may.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 5:
        fetch("june.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 6:
        fetch("july.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 7:
        fetch("august.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 8:
        fetch("October.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 9:
        fetch("November.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
        case 10:
        fetch("December.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
      // add cases for each month
      default:
        fetch("bjs old.html")
          .then(response => response.text())
          .then(html => contentDiv.innerHTML = html)
          .catch(error => console.log(error));
        break;
    }
  }
  
  // call updatePageContent() initially to set the page content
  updatePageContent();
  
  // set interval to check for month change every 10 seconds
  setInterval(() => {
    // call updatePageContent() and check if content needs to be updated
    const contentDiv = document.getElementById("content");
    const currentContent = contentDiv.innerHTML;
    updatePageContent();
    const newContent = contentDiv.innerHTML;
    
    // if content has changed, log a message to the console
    if (newContent !== currentContent) {
      console.log("Page content updated for new month.");
    }
  }, 600000); // 10000 ms = 10 seconds
  