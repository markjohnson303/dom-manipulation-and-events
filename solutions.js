// Mission A - Select & Modify: Str8-up H4cked
//grab all the companies
var companies = document.querySelectorAll("h5");
//for each company
for(var i= 0; i < companies.length; i++) {
    //change the text content
    companies[i].textContent = "WDI Rulez: str8-up h4cked";
}

//Mission B - Add the V
var subscribeBox = document.querySelector(".alerts");
var logo = document.createElement("span")
logo.className = "fontello-angellist";
logo.setAttribute("id", "myLogo")
subscribeBox.appendChild(logo) 

//Mission C - green V
logo.style.fontSize = "64px";
logo.style.color = "green";

//Mission D - set an event listener
function fundMe(){ alert("Fund Me!") }
logo.addEventListener("click", fundMe)

//Mission E Bonus
function makeMeRed(event){ event.target.style.color = "red";}  
function makeMeGreen(event){ event.target.style.color = "green"}

logo.addEventListener("mouseenter", makeMeRed)
logo.addEventListener("mouseleave", makeMeGreen)