const m=document.querySelector('.menu'),n=document.querySelector('.nav nav');if(m&&n)m.onclick=()=>n.classList.toggle('open');
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const success=document.getElementById('form-success');
if(success&&new URLSearchParams(window.location.search).get('submitted')==='1'){success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'});}

// Populate the enquiry fields from links on software pages.
const emailForm=document.getElementById('kcnc-email-form');
if(emailForm){
  const params=new URLSearchParams(window.location.search);
  for(const key of ['name','company','topic','message']){
    const field=emailForm.elements.namedItem(key);
    const incoming=params.get(key);
    if(field && incoming){
      if(field.tagName==='SELECT'){
        if([...field.options].some(option=>option.value===incoming)) field.value=incoming;
      }else field.value=incoming.slice(0,field.maxLength>0?field.maxLength:3000);
    }
  }
}
