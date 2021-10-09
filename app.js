//GET plaintext data
document.getElementById("button1").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log(err));
}

//Get JSON data
document.getElementById("button2").addEventListener("click", getJsom);

function getJsom() {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//Get API data
document.getElementById("button3").addEventListener("click", getAPI);

function getAPI() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
