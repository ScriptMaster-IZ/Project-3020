function loadComponent(selector, filePath) {
 fetch(filePath) 


 .then(response => {

 if (!response.ok) throw new Error("Could not load " + filePath) 
 return response.text();
 })

.then(html => {
document.querySelector(selector).innerHTML=html;
// TODO: After injecting the header, re-run your theme toggle setup
 // (the button now exists in the DOM)
themer();
 })

.catch(error => console.error(error));





}



