const screenHost = document.querySelector('#screenHost');
const sheet = document.querySelector('[data-sheet]');
const backdrop = document.querySelector('[data-sheet-backdrop]');
const phone = document.querySelector('.phone');
const floatingActions = document.querySelector('[data-floating-actions]');

const screens = {
  schedule: 'scheduleTemplate', activities: 'activitiesTemplate', todo: 'todoTemplate', money: 'moneyTemplate', capsule: 'capsuleTemplate'
};

const icons = {
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M7.5 3.8V7M16.5 3.8V7M3.5 9.2h17M8 12.5h.01M12 12.5h.01M16 12.5h.01M8 16h.01M12 16h.01"/></svg>`,
  flag:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4.8c3.2-2.4 6 .7 9.4-1.4 1.6-1 3-.8 4.6-.2v9c-1.6-.6-3-.8-4.6.2C11 14.5 8.2 11.4 5 13.8"/></svg>`,
  checklist:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.2 6h10M9.2 12h10M9.2 18h10"/><circle cx="4.8" cy="6" r="2.2"/><circle cx="4.8" cy="12" r="2.2"/><path d="m3.6 18 1 1 2-2.4"/></svg>`,
  coin:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.7 8.2c-.7-.7-1.7-1.1-2.8-1.1-1.7 0-3 .9-3 2.2 0 3.3 6.2 1.4 6.2 5 0 1.4-1.3 2.5-3.2 2.5-1.4 0-2.6-.5-3.4-1.3M12 5.4v13.2"/></svg>`,
  archive:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="15" rx="3"/><path d="M7 9.2h10M9.5 13h5"/></svg>`,
  megaphone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5V9.8l11-4.3v12.3L4 13.5Z"/><path d="M15 8.3c3.2.6 3.2 6.1 0 6.7M6.5 14.4l1.1 4.1h3.1l-1.3-3.1"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m7 7 10 10M17 7 7 17"/></svg>`,
  palette:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5c-5 0-9 3.4-9 7.8S6.4 19 10.5 19H12a2 2 0 0 0 0-4h-1c-.9 0-1.5-.7-1.2-1.5.3-.8 1-1.2 2-1.2h1.4c4.4 0 7.8-2 7.8-4.5C21 5.5 17 3.5 12 3.5Z"/><circle cx="7.5" cy="9" r=".8" fill="currentColor" stroke="none"/><circle cx="10.5" cy="6.7" r=".8" fill="currentColor" stroke="none"/><circle cx="14" cy="6.6" r=".8" fill="currentColor" stroke="none"/><circle cx="17" cy="9" r=".8" fill="currentColor" stroke="none"/></svg>`,
  home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9Z"/></svg>`,
  people:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/></svg>`,
  coffee:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v4.5A5.5 5.5 0 0 1 10.5 19 5.5 5.5 0 0 1 5 13.5V9Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M7 5.5c0 1 1 1.5 1 2.5M11 5.5c0 1 1 1.5 1 2.5"/></svg>`,
  roles:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3.5 19c.5-3 2-5 4.5-5s4 2 4.5 5M11.5 19c.5-3 2-5 4.5-5s4 2 4.5 5"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,
  comment:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg>`
};

function injectIcons(scope=document){scope.querySelectorAll('[data-icon]').forEach(node=>{const key=node.dataset.icon;if(icons[key]) node.innerHTML=icons[key];});}

function renderScreen(name){
  const tpl=document.getElementById(screens[name]);
  screenHost.innerHTML=''; screenHost.append(tpl.content.cloneNode(true)); injectIcons(screenHost); wireLocalInteractions();
  document.querySelectorAll('.nav-item').forEach(btn=>{const active=btn.dataset.screen===name;btn.classList.toggle('is-active',active);active?btn.setAttribute('aria-current','page'):btn.removeAttribute('aria-current');});
  floatingActions.hidden=name!=='schedule';
  screenHost.scrollTop=0;
  screenHost.scrollTo({top:0,left:0,behavior:'auto'});
  requestAnimationFrame(()=>screenHost.scrollTo({top:0,left:0,behavior:'auto'}));
}

function openSheet(templateId){const tpl=document.getElementById(templateId);sheet.innerHTML='';sheet.classList.remove('is-expanded');sheet.append(tpl.content.cloneNode(true));injectIcons(sheet);backdrop.hidden=false;sheet.hidden=false;sheet.scrollTop=0;wireSheetInteractions();setTimeout(()=>sheet.querySelector('input,button,textarea')?.focus({preventScroll:true}),60);}
function closeSheet(){sheet.hidden=true;backdrop.hidden=true;sheet.innerHTML='';}
function toast(message){phone.querySelector('.toast')?.remove();const el=document.createElement('div');el.className='toast';el.textContent=message;phone.append(el);setTimeout(()=>el.classList.add('out'),1700);setTimeout(()=>el.remove(),1950);}

function wireLocalInteractions(){
  screenHost.querySelectorAll('[data-quick-add]').forEach(btn=>btn.addEventListener('click',()=>openSheet('quickAddTemplate')));
  screenHost.querySelectorAll('[data-open-announcements]').forEach(btn=>btn.addEventListener('click',()=>openSheet('announcementsTemplate')));
  screenHost.querySelectorAll('.text-tab').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.querySelectorAll('.text-tab').forEach(p=>p.classList.remove('is-active'));btn.classList.add('is-active');}));
  screenHost.querySelectorAll('.segment-item').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.querySelectorAll('.segment-item').forEach(p=>p.classList.remove('is-active'));btn.classList.add('is-active');toast(`${btn.textContent.trim()} view selected`);}));
}
function wireSheetInteractions(){
  sheet.querySelectorAll('[data-close-sheet]').forEach(btn=>btn.addEventListener('click',closeSheet));
  const disclosure=sheet.querySelector('[data-toggle-advanced]');
  disclosure?.addEventListener('click',()=>{const panel=sheet.querySelector('[data-advanced]');panel.hidden=!panel.hidden;const expanded=!panel.hidden;sheet.classList.toggle('is-expanded',expanded);disclosure.setAttribute('aria-expanded',String(expanded));disclosure.querySelector('.chevron').textContent=expanded?'⌃':'⌄';});
  sheet.querySelectorAll('.color-chip').forEach(btn=>btn.addEventListener('click',()=>{sheet.querySelectorAll('.color-chip').forEach(c=>c.classList.remove('is-selected'));btn.classList.add('is-selected');}));
  sheet.querySelectorAll('.guest-chip').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('is-selected')));
  sheet.querySelector('[data-save-activity]')?.addEventListener('click',()=>{const title=sheet.querySelector('#activityTitle')?.value.trim();closeSheet();toast(title?`Saved “${title}”`:'Activity saved');});
  sheet.querySelector('[data-save-another]')?.addEventListener('click',()=>{sheet.querySelector('#activityTitle').value='';toast('Saved. Add another activity.');});
}

document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>renderScreen(btn.dataset.screen)));
document.querySelectorAll('[data-quick-add]').forEach(btn=>btn.addEventListener('click',()=>openSheet('quickAddTemplate')));
document.querySelectorAll('[data-open-announcements]').forEach(btn=>btn.addEventListener('click',()=>openSheet('announcementsTemplate')));
document.querySelector('[data-alert]')?.addEventListener('click',()=>toast('Alert composer opened'));
backdrop.addEventListener('click',closeSheet);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!sheet.hidden) closeSheet();});
injectIcons();renderScreen('schedule');
