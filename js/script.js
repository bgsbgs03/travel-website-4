"use strict";
const config = window.MM_HOLIDAYS;
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.querySelector('nav').classList.remove('open');}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter);}));
document.querySelectorAll('[data-destination]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name=destination]').value=a.dataset.destination;}));
document.querySelectorAll('[data-social]').forEach(a=>{const url=config[a.dataset.social];if(url && /^https:\/\//.test(url)){a.href=url;a.target='_blank';a.rel='noopener noreferrer';}else {a.addEventListener('click',e=>{e.preventDefault();document.querySelector('#social-notice').textContent='Our '+a.dataset.social+' profile link will be available soon. Please connect with us on WhatsApp.';});}});
const form=document.querySelector('#enquiry-form');
const date=form.elements.departure;const now=new Date();date.min=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');
form.addEventListener('submit',event=>{event.preventDefault();date.setCustomValidity(date.value&&date.value<date.min?'Please choose today or a future date.':'');if(!form.reportValidity())return;const d=new FormData(form);const lines=['Hello MM Holidays! I would like to enquire about a trip.','Name: '+d.get('name'),'Mobile: '+d.get('phone'),'Email: '+(d.get('email')||'Not provided'),'Destination: '+d.get('destination'),'Departure: '+(d.get('departure')||'Flexible'),'Travellers: '+d.get('travellers'),'Total budget: '+d.get('budget'),'Interest: '+d.get('interest'),'Notes: '+(d.get('message')||'None')];const url='https://wa.me/'+config.whatsapp+'?text='+encodeURIComponent(lines.join('\n'));window.location.assign(url);document.querySelector('#form-status').textContent='Opening WhatsApp. Your enquiry is sent only when you tap Send in WhatsApp.';});
date.addEventListener('input',()=>date.setCustomValidity(''));
document.querySelector('#year').textContent=new Date().getFullYear();

// Close the mobile menu with Escape or after returning to a desktop layout.
const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); document.querySelector('nav').classList.remove('open'); };
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
