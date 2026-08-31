const m=document.querySelector('.menu'),n=document.querySelector('.nav nav');if(m&&n)m.onclick=()=>n.classList.toggle('open');
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const success=document.getElementById('form-success');
if(success&&new URLSearchParams(window.location.search).get('submitted')==='1'){success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'});}
