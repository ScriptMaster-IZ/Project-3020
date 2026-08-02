
function buttonCreate(text, link){
//Finalize Link
let hyperlink=document.createElement('a');
hyperlink.setAttribute("href",link);



//Finalize Button
let butt=document.createElement('button');
butt.innerText=text;

//Add Button to hyeprlink
hyperlink.appendChild(butt);

//Find the holder element in teh page and 
let hh=document.querySelector(".holder");

//add the link button
hh.appendChild(hyperlink);

}




(function buttonStart(){

let butt1=new buttonCreate("HOME","About.html");
butt1=new buttonCreate("ABOUT US","Services.html");

}())

