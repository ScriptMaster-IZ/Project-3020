
function buttonCreate(text, link){

//Finalize Link
let hyperlink=document.createElement('a');
hyperlink.setAttribute("href",link);

//Finalize Button
let butt=document.createElement('button');
butt.setAttribute("class","Pages");
butt.innerText=text;

//Add Button to hyeprlink
hyperlink.appendChild(butt);

//Find the holder element in teh page and 
let hh=document.querySelector(".holder");

//add the link button
hh.appendChild(hyperlink);

}

function buttonTheme(text, link){

//Finalize Button
let butt=document.createElement('button');
butt.setAttribute("id","theme-toggle");
butt.setAttribute("class","Pages");

butt.innerText=text;

//Find the holder element in teh page and 
let hh=document.querySelector(".holder");

//add the link button
hh.appendChild(butt);

}







//Navtigation buttons
(function buttonStart(){

let butt1=new buttonCreate("HOME","Landing.html");
butt1=new buttonCreate("ABOUT US","About.html");
butt1=new buttonCreate("SERVICES","Services.html");
butt1=new buttonCreate("PROJECTS/PRODUCTS","Project_Products.html");
butt1=new buttonCreate("NEWS","Blog.html");
butt1=new buttonCreate("CONTACTS","Contacts.html");

butt1=new buttonTheme("","");

document.addEventListener("DOMContentLoaded", themer );



document.addEventListener("DOMContentLoaded", function () {
 loadComponent("#header-placeholder", "components/header.html");
 loadComponent("#footer-placeholder", "components/footer.html");




});


document.addEventListener("DOMContentLoaded", blogger);




}())

