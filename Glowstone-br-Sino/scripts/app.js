
function test(){
    window.alert("testing")
}


// for hidden sections
function show(id){
    let section = document.getElementById(id)
    section.style.cssText = "z-index:10";
}


function hide(id){
    let section = document.getElementById(id)
    section.style.cssText = "z-index:-10";
}


// back to main menu
