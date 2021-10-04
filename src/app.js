/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function generateDomains() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".es"];
  let allDomains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let fullDomain = pronoun[i] + adj[j] + noun[k] + domain[l];
          allDomains.push(fullDomain);
        }
      }
    }
  }
  return allDomains;
}

window.onload = () => {
  var finalDomains = generateDomains();
  var ul = document.getElementById("domainNames");
  for (var i = 0; i < finalDomains.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + finalDomains[i];
  }
};
