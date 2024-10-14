const btn=document.getElementById('btn')
const heading=document.getElementById('heading')
btn.addEventListener("click",()=>{
if(btn.innerHTML==="Dark"){
    btn.innerHTML='Light'
    document.body.style.backgroundColor='black'
    heading.style.color='white'
}
else{
    btn.innerHTML='Dark'
    document.body.style.backgroundColor='white'
    heading.style.color='black'
}})

