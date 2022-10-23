//1. fetch
fetch("https://reqres.in/api/unknown", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      let ul =document.createElement("ul");
      const fragment = document.createDocumentFragment();
      responseData.data.forEach((element) => {
        let li = document.createElement("li");
        // li.textContent = element.first_name + element.last_name;
        li.textContent = `${element.name} ${element.year} ${element.color}`;
        fragment.appendChild(li);
      });
      ul.appendChild(fragment);
      document.getElementById("api").appendChild(ul);
    })
    .catch(function (error) {
      if (error == 404) {
        let p = document.createElement("p");
        p.textContent = "Page not found";
        p.style.color = "red";
        document.getElementById("api").appendChild(p);
      } else if (error == 500) {
        let p = document.createElement("p");
        p.textContent = "Server Error";
        p.style.color = "red";
        document.getElementById("api").appendChild(p);
      }
    });

//2. xml http requist
//function getUsers(){
//  function renderPage(){
//    let response = this.responseText;
//    let responseData = JSON.parse(response);
//    console.log(responseData);
//    let ul= document.createElement('ul');
//    responseData.data.forEach(element => {
//      let li=document.createElement('li');
//      li.textContent = `${element.name} ${element.year} ${element.color}`;
//      ul.appendChild(li);
//    });
//    document.getElementById('api').appendChild(ul);
//  }

//  let requist = new XMLHttpRequest();
//  requist.addEventListener('load', renderPage);
//  requist.open('GET', 'https://reqres.in/api/unknown');
//  requist.send();
//}
//getUsers();


