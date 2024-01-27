const navbarEl=document.getElementByquerySelector(".navbar");

const bottomContainerEl=document.getElementByquerySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener(scroll, () => {

    if(window.scrollY> bottomContainerEl.offsetTop - navbarEl.offsetHeight-50)
    {
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});