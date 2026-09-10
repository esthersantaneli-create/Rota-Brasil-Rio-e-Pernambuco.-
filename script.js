const nav = document.querySelector('.nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>35));
const menuBtn=document.querySelector('.menu-btn');
menuBtn?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const stops=[...document.querySelectorAll('.stop')];
const dots=[...document.querySelectorAll('.progress span')];
if(stops.length){
 const stopObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const i=stops.indexOf(e.target);dots.forEach((d,j)=>d.classList.toggle('active',i===j));}}),{threshold:.5});
 stops.forEach(s=>stopObs.observe(s));
}

document.querySelectorAll('[data-modal]').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.modal)?.classList.add('open')));
document.querySelectorAll('.modal-close,.modal').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)el.closest('.modal')?.classList.remove('open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'))});
