"use strict"



const video = document.querySelector("#ozon");
const button = document.querySelector("#button-design");

button.addEventListener("click", () => {
  button.style.display = "none";
  video.style.display = "inline";
  video.play();
});





// fetch("https://api.github.com/users/laibodron")
// .then(response => response.json())
// .then(githubUser => new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//         img.remove();
//         resolve(githubUser); // (**)
//       }, 3000);
// }))



// console.log( primeFactors( 7775460 ) );   