const m=document.querySelector('.menu'),n=document.querySelector('.nav nav');if(m&&n)m.onclick=()=>n.classList.toggle('open');
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const success=document.getElementById('form-success');
if(success&&new URLSearchParams(window.location.search).get('submitted')==='1'){success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'});}

// Compose a message locally; customer must confirm Send in WhatsApp.
const waForm=document.getElementById('kcnc-wa-form');
if(waForm)waForm.addEventListener('submit',function(ev){
  ev.preventDefault();if(!waForm.reportValidity())return;
  const data=new FormData(waForm);
  const message=['Hello KCNC Engineering & Consultancy,','Name: '+(data.get('name')||''),'Company: '+(data.get('company')||'Not specified'),'Interested in: '+(data.get('topic')||''),'Requirement: '+(data.get('message')||'')].join('\n');
  const url='https://wa.me/919585926248?text='+encodeURIComponent(message);
  window.location.href=url;
});
