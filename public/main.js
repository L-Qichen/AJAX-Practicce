getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/style.css');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("Failed to load css!");
      }
    }
  }
  request.send();
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("Failed to load js!");
      }
    }
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert('Failed to load HTML!');
      }
    }
  }
  request.send();
}

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName('warning')[0].textContent;
        const div = document.createElement('div');
        div.innerHTML = text.trim();
        document.body.appendChild(div);
      } else {
        alert('Failed to load XML!');
      }
    }
  };
  request.send();
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const data = JSON.parse(request.response);
        console.log(data)
        const div = document.createElement("div");
        div.innerHTML = `${Object.keys(data)[0]}: ${data.name},
        ${Object.keys(data)[1]}: ${data.Age} `;
        document.body.appendChild(div);
      } else {
        alert("Failed to load JSON!");
      }
    }
  };
  request.send();
}

let n = 1;
getNext.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const arr = JSON.parse(request.response);
        arr.forEach(element => {
          const li = document.createElement("li");
          li.textContent = element.id;
          xxx.appendChild(li);
        });
      } else {
        alert(`Failed to load page${n}! Cause there are only 3 pages.`);
      }
    }
  }
  n++;
  request.send();
}
