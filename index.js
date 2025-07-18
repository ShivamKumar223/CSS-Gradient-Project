const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const code1 = document.getElementById("code1");
const codeDiv = document.querySelector(".code");
// console.log(codeDiv);
// console.log(btn1,btn2);

let hexValue = ()=>{
    let range = "0123456789abcdef";
    let color = "#";

    for(let i=0;i<6;i++)
    {
        let index= Math.floor((Math.random())*16);
       color = color + range[index];
    }
    return color;
}

btn1.addEventListener("click",()=>{
   btn1.innerText = hexValue();
   document.body.style.backgroundImage = `linear-gradient(to right,${btn1.innerText},${btn2.innerText})`;
   code1.innerText = `background-image : linear-gradient(to right,${btn1.innerText},${btn2.innerText})`; 
   
});

btn2.addEventListener("click",()=>{
   btn2.innerText = hexValue();
   document.body.style.backgroundImage = `linear-gradient(to right,${btn1.innerText},${btn2.innerText})`;
   code1.innerText = `background-image : linear-gradient(to right,${btn1.innerText},${btn2.innerText})`; 
});

codeDiv.addEventListener("click",()=>{
   window.navigator.clipboard.writeText(code1.innerText);
   alert("Text Copied")
})