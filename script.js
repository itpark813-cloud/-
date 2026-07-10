// MENU
function toggleMenu(){
    document.getElementById("nav").classList.toggle("active");
}

// TYPING
const text="Software Developer | Frontend | Designer";
let i=0;
function type(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text[i];
        i++;
        setTimeout(type,40);
    }
}
type();

// SCROLL PROGRESS
window.addEventListener("scroll",()=>{
    let sc=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    document.getElementById("progress").style.width=sc+"%";
});

// SKILLS
const bars=document.querySelectorAll(".bar div");
window.addEventListener("scroll",()=>{
    bars.forEach(bar=>{
        if(bar.getBoundingClientRect().top<window.innerHeight){
            bar.style.width=bar.dataset.width;
        }
    });
});

// CONTACT SCROLL
function scrollToContact(){
    document.getElementById("contact").scrollIntoView();
}
