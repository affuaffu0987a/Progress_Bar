const button = document.getElementsByClassName("btn")
const Page_no = document.querySelectorAll(".page-no")
const insideLine = document.querySelector(".centerinsideline")

let PriviousBtn = button[0].children[0];
let NextBtn = button[0].children[1];
let lengths = Page_no.length;
let num = 1;
let widths = 40;
NextBtn.addEventListener("click",(e)=>{
    PriviousBtn.disabled = false;
    Page_no.forEach((e)=>{
        if(e.id == num){
            insideLine.style.width = widths+"%"
            e.style.border = "2px solid blue"
        }else if(num == lengths){
            NextBtn.disabled = true;
        }
    })
    num +=1;
    widths +=30;
})

PriviousBtn.addEventListener("click",(e)=>{
    NextBtn.disabled = false;
    widths =  widths-30;
    num = num-1;
    Page_no.forEach((e)=>{
        if(e.id == num){
            insideLine.style.width = widths+"%";
            e.style.border = "2px solid white"
        }
        else if(num == 0){
            insideLine.style.width = widths+"%";
            PriviousBtn.disabled = true;
        }
    })
})