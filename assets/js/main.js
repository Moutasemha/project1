/* بيانات تجريبية للعرض؛ يمكن تعديلها أو استبدالها ببيانات الفعاليات الحقيقية. */
const eventsData = [
 {id:1,title:"مساحة حوار: مستقبل التعلّم الرقمي",category:"ثقافة",date:"2026-10-28",time:"18:00",location:"عن بُعد",duration:"90 دقيقة",emoji:"💬",art:"art-culture",featured:true,description:"لقاء مفتوح لتبادل الأفكار حول مستقبل التعليم والتعلّم عبر الإنترنت.",long:"ندعو الطلبة والمهتمين إلى مساحة حوار تفاعلية نستكشف فيها أدوات التعلّم الرقمي، وكيف يمكن للتعاون وتبادل الخبرات أن يصنعا تجربة تعليمية أكثر ثراءً. الفعالية تجريبية ضمن نموذج الدليل."},
 {id:2,title:"يوم الحركة والنشاط",category:"رياضة",date:"2026-10-30",time:"16:00",location:"دمشق",duration:"ساعتان",emoji:"⚽",art:"art-sport",featured:true,description:"نشاط رياضي ودي يشجّع على الحركة والعمل بروح الفريق.",long:"فعالية رياضية مجتمعية تركّز على المتعة والمشاركة والتعارف. يمكن للمشاركين اختيار الأنشطة المناسبة لهم والاستمتاع بوقت نشط في أجواء ودية."},
 {id:3,title:"أمسية موسيقية: ألوان الصوت",category:"موسيقى",date:"2026-11-02",time:"19:00",location:"اللاذقية",duration:"ساعتان",emoji:"🎸",art:"art-music",featured:true,description:"أمسية فنية تجمع أنماطاً موسيقية متنوعة ومواهب شابة.",long:"مساحة للاحتفاء بالموسيقى والتجارب الفنية الشابة، مع فقرات متنوعة وأجواء تشجّع على مشاركة المواهب والاستمتاع بالفن."},
 {id:4,title:"ورشة مهارات العرض والتقديم",category:"ثقافة",date:"2026-11-04",time:"17:30",location:"عن بُعد",duration:"ساعتان",emoji:"🎤",art:"art-workshop",featured:false,description:"تعلّم خطوات عملية لتقديم أفكارك بثقة ووضوح.",long:"تتناول الورشة بناء الرسالة الأساسية، وتنظيم الأفكار، واستخدام لغة الجسد، والتدرّب على افتتاحية قوية وخاتمة واضحة."},
 {id:5,title:"مختبر الأفكار التقنية",category:"ثقافة",date:"2026-11-07",time:"18:30",location:"حمص",duration:"ثلاث ساعات",emoji:"💡",art:"art-tech",featured:false,description:"جلسة تشاركية لتبادل الأفكار التقنية وتحويلها إلى نماذج أولية.",long:"لقاء تطبيقي يتيح للمشاركين عرض أفكارهم التقنية وتطويرها ضمن مجموعات صغيرة، مع التركيز على حل المشكلات والتفكير الإبداعي."},
 {id:6,title:"صباح أخضر: مبادرة مجتمعية",category:"عائلي",date:"2026-11-09",time:"10:00",location:"دمشق",duration:"ساعتان",emoji:"🌱",art:"art-family",featured:false,description:"مبادرة مجتمعية بسيطة لتعزيز الاهتمام بالمساحات الخضراء.",long:"تجمع المبادرة المهتمين بالبيئة في نشاط تعاوني يسلّط الضوء على أهمية المساحات الخضراء والعمل التطوعي والممارسات اليومية المستدامة."},
 {id:7,title:"نادي القراءة: كتاب وشاي",category:"ثقافة",date:"2026-11-12",time:"17:00",location:"عن بُعد",duration:"ساعة ونصف",emoji:"📚",art:"art-culture",featured:false,description:"جلسة خفيفة لمناقشة كتاب ومشاركة وجهات النظر.",long:"يتيح نادي القراءة مساحة آمنة لتبادل الآراء حول الكتب والأفكار التي تترك أثراً في حياتنا، مع فرصة للتعرّف إلى قراءات جديدة."},
 {id:8,title:"ألعاب وتحديات جماعية",category:"عائلي",date:"2026-11-15",time:"15:00",location:"حمص",duration:"ساعتان",emoji:"🎲",art:"art-family",featured:false,description:"تحديات ممتعة تعزّز التعاون والتواصل بين المشاركين.",long:"تتضمن الفعالية ألعاباً جماعية خفيفة وتحديات تعتمد على التواصل والعمل المشترك، مع مراعاة أن تكون الأنشطة مناسبة لمختلف المشاركين."},
 {id:9,title:"إيقاع وحركة",category:"رياضة",date:"2026-11-18",time:"16:30",location:"اللاذقية",duration:"ساعة",emoji:"🏃",art:"art-sport",featured:false,description:"نشاط حركي مفتوح للمبتدئين ومحبي الحركة.",long:"وقت مخصص للحركة والنشاط البدني ضمن تجربة ودية، مع اقتراحات بسيطة تساعد المشاركين على جعل النشاط جزءاً من روتينهم."}
];
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const formatDate = d => new Intl.DateTimeFormat('ar-SY',{day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00'));
const eventUrl = id => `event.html?id=${id}`;
function eventCard(e){return `<article class="event-card"><div class="event-cover ${e.art}"><span class="cover-emoji">${e.emoji}</span><span class="cover-badge">${e.category}</span></div><div class="event-body"><span class="badge-soft">${e.category}</span><h3>${e.title}</h3><div class="event-meta"><span>📅 ${formatDate(e.date)}</span><span>📍 ${e.location}</span></div><p>${e.description}</p><div class="event-footer"><small class="muted">${e.time}</small><a class="text-link" href="${eventUrl(e.id)}">التفاصيل ←</a></div></div></article>`}
function eventColumn(e){return `<div class="col-md-6 col-xl-4">${eventCard(e)}</div>`}
function renderHeader(){
 const header=$('#site-header');if(!header)return;
 const current=location.pathname.split('/').pop()||'index.html';
 const links=[['index.html','الرئيسية'],['events.html','كل الفعاليات'],['about.html','عن الدليل'],['contact.html','اتصل بنا']];
 header.innerHTML=`<nav class="navbar navbar-expand-lg sticky-top"><div class="container"><a class="navbar-brand" href="index.html"><span class="brand-mark">✦</span><span class="brand-copy">دليل الفعاليات<small>الجامعة الافتراضية السورية</small></span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="فتح القائمة"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav me-auto mb-2 mb-lg-0">${links.map(([href,label])=>`<li class="nav-item"><a class="nav-link ${current===href?'active':''}" ${current===href?'aria-current="page"':''} href="${href}">${label}</a></li>`).join('')}</ul><a class="btn btn-primary d-none d-lg-inline-flex" href="events.html">اكتشف فعالية ←</a></div></div></nav>`;
}
function renderFooter(){
 const footer=$('#site-footer');if(!footer)return;
 footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-top"><div class="footer-brand"><a class="navbar-brand text-white" href="index.html"><span class="brand-mark">✦</span><span class="brand-copy">دليل الفعاليات<small class="text-white-50">الجامعة الافتراضية السورية</small></span></a><p class="mt-3">مساحة تجمع الاهتمامات وتقرّب الفعاليات من المجتمع الجامعي. المحتوى الحالي تجريبي لأغراض المشروع.</p><div class="socials"><a href="contact.html" aria-label="تواصل">✉</a><a href="about.html" aria-label="عن الدليل">✦</a><a href="events.html" aria-label="الفعاليات">⌁</a></div></div><div class="footer-col"><h3>تصفّح الدليل</h3><a href="events.html">كل الفعاليات</a><a href="about.html">عن الدليل</a><a href="contact.html">اقترح فعالية</a></div><div class="footer-col"><h3>تواصل معنا</h3><a href="contact.html">نموذج التواصل</a><a href="mailto:hello@eventguide.example">hello@eventguide.example</a><span class="text-white-50 small">مشروع جامعي تجريبي</span></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} دليل الفعاليات — جميع الحقوق محفوظة.</span><span>صُمّم بروح المجتمع والإبداع ✦</span></div></div></footer><button class="site-top" id="scrollTop" aria-label="العودة إلى الأعلى">↑</button>`;
 const top=$('#scrollTop');window.addEventListener('scroll',()=>top?.classList.toggle('show',window.scrollY>500));top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
function initHome(){
 const track=$('#featuredTrack');if(track){const featured=eventsData.filter(e=>e.featured);track.innerHTML=featured.map(eventCard).join('');$('#prevFeatured')?.addEventListener('click',()=>track.scrollBy({left:350,behavior:'smooth'}));$('#nextFeatured')?.addEventListener('click',()=>track.scrollBy({left:-350,behavior:'smooth'}));}
 const latest=$('#latestEvents');if(latest)latest.innerHTML=eventsData.slice(3,6).map(eventColumn).join('');
}
function initEvents(){
 const grid=$('#allEvents');if(!grid)return;
 const search=$('#searchInput'),category=$('#categoryFilter'),date=$('#dateFilter'),locationFilter=$('#locationFilter'),count=$('#resultCount'),empty=$('#emptyState');
 const params=new URLSearchParams(location.search);if(params.has('category'))category.value=params.get('category');
 function render(){const q=search.value.trim().toLowerCase();const today=new Date();today.setHours(0,0,0,0);
  const filtered=eventsData.filter(e=>(!q||`${e.title} ${e.description} ${e.category} ${e.location}`.toLowerCase().includes(q))&&(!category.value||e.category===category.value)&&(!locationFilter.value||e.location===locationFilter.value)&&(!date.value||(date.value==='upcoming'?new Date(e.date+'T12:00:00')>=today:e.date===today.toISOString().slice(0,10))));
  grid.innerHTML=filtered.map(eventColumn).join('');count.textContent=`${filtered.length} ${filtered.length===1?'فعالية':'فعاليات'} متاحة ضمن النتائج`;empty.classList.toggle('d-none',filtered.length>0);
 }
 [search,category,date,locationFilter].forEach(el=>el.addEventListener('input',render));$('#resetFilters').addEventListener('click',()=>{search.value='';category.value='';date.value='';locationFilter.value='';render()});render();
}
function initDetail(){
 const root=$('#eventDetails');if(!root)return;
 const id=Number(new URLSearchParams(location.search).get('id'))||1;const e=eventsData.find(x=>x.id===id)||eventsData[0];
 document.title=e.title+' | دليل الفعاليات';$('#detailEmoji').textContent=e.emoji;$('.detail-cover').classList.add(e.art);$('#detailCategory').textContent=e.category;$('#detailTitle').textContent=e.title;$('#detailDescription').textContent=e.description;$('#detailDate').textContent=`${formatDate(e.date)} — ${e.time}`;$('#detailLocation').textContent=e.location;$('#detailLong').textContent=e.long;$('#mapText').textContent=e.location==='عن بُعد'?'فعالية عبر الإنترنت':`موقع توضيحي في ${e.location}`;
 $('#relatedEvents').innerHTML=eventsData.filter(x=>x.id!==e.id&&x.category===e.category).slice(0,3).concat(eventsData.filter(x=>x.id!==e.id&&x.category!==e.category)).slice(0,3).map(x=>`<a class="related-item" href="${eventUrl(x.id)}"><span class="related-emoji ${x.art}">${x.emoji}</span><span><b>${x.title}</b><small>${formatDate(x.date)}</small></span></a>`).join('');
 $('#addCalendar').addEventListener('click',()=>{const start=e.date.replaceAll('-','')+'T'+e.time.replace(':','')+'00';const end=e.date.replaceAll('-','')+'T'+String(Number(e.time.slice(0,2))+1).padStart(2,'0')+e.time.slice(3).replace(':','')+'00';const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:event-${e.id}@eventguide.example\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:${e.title}\nLOCATION:${e.location}\nDESCRIPTION:${e.description}\nEND:VEVENT\nEND:VCALENDAR`;const blob=new Blob([ics],{type:'text/calendar;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`event-${e.id}.ics`;a.click();URL.revokeObjectURL(a.href);$('#detailAlert').textContent='تم تجهيز ملف التقويم لتنزيله وإضافته إلى تطبيق التقويم.';$('#detailAlert').classList.remove('d-none');});
 $('#shareEvent').addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:e.title,text:e.description,url:location.href});else{await navigator.clipboard.writeText(location.href);$('#detailAlert').textContent='تم نسخ رابط الفعالية.';$('#detailAlert').classList.remove('d-none')}}catch(err){}});
}
function initContact(){
 const form=$('#contactForm');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();const alert=$('#formAlert');const name=$('#name'),email=$('#email'),message=$('#message');[name,email,message].forEach(el=>el.classList.remove('is-invalid'));let errors=[];
 if(name.value.trim().length<2){name.classList.add('is-invalid');errors.push('يرجى إدخال اسم صحيح.')}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){email.classList.add('is-invalid');errors.push('يرجى إدخال بريد إلكتروني صحيح.')}
 if(message.value.trim().length<10){message.classList.add('is-invalid');errors.push('يجب أن تتكون الرسالة من 10 أحرف على الأقل.')}
 if(errors.length){alert.innerHTML=`<div class="alert alert-danger mb-0">${errors.join('<br>')}</div>`;return}
 alert.innerHTML='<div class="alert alert-success mb-0">شكراً لك '+escapeHtml(name.value.trim())+'! تم التحقق من النموذج بنجاح. هذا نموذج تجريبي ولا تُرسل البيانات إلى خادم.</div>';form.reset();
 });
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.addEventListener('DOMContentLoaded',()=>{renderHeader();renderFooter();initHome();initEvents();initDetail();initContact();});
