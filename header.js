function loadHeader() {
    fetch("header.html")
      .then(response => response.text())
      .then(html => {
        const headerElement = document.querySelector("header");
        headerElement.innerHTML = html;
      })
      .catch(error => console.log(error));
  }
  
  loadHeader();
  