const notescontainer= document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// function shownotes(){
//     notescontainer.innerHTML=localStorage.getItem("notes")
// }

// function updatestorage(){
//     localStorage.setItem("notes", notescontainer.innerHTML)
// }

createbtn.addEventListener("click",()=>{
    let inputbox =document.createElement("p");
    let img= document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg";
    notescontainer.appendChild(inputbox).appendChild(img)
})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    // else if(e.target.tagName ==="p"){
    //     notes= document.querySelectorAll(".input-box")
    //     notes.forEach(nt=>{
    //         nt.onkeyup= function(){
    //             updatestorage();
    //         }
    //     })
    // }
})