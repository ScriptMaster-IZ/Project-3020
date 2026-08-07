function themer () {
 
const toggleBtn = document.getElementById("theme-toggle");


toggleBtn.addEventListener("click", function () {

 let theme= document.body.getAttribute("data-theme");
if (theme=="light"){applyTheme("dark");}
else
{if (theme=="dark"){applyTheme("light");}   }


 });



function applyTheme(theme) {

localStorage.setItem("theme", theme);

document.body.setAttribute("data-theme", theme);

toggleBtn.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

 }



 function loadSavedTheme() {
 let theme=localStorage.getItem("theme");

if (theme==null || theme=="light"){applyTheme("light");}
else{if (theme=="dark"){applyTheme("dark");}}

}









 loadSavedTheme(); 
}//localStorage.clear();

