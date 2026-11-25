(function(){
  var meta={
    tr:{title:"Mustafa Özel – Saha ve Proje Sorumlusu, Sporcu, Antrenör | İstanbul · Sakarya · Hamburg",note:"Teşekkürler. Mesajın WhatsApp'ta açıldı, göndermek için onayla.",err:"Lütfen adını ve iletişim bilgini yaz."},
    de:{title:"Mustafa Özel – Bau- und Projektleiter, Sportler, Trainer | Istanbul · Sakarya · Hamburg",note:"Danke. Deine Nachricht wurde in WhatsApp geöffnet – bitte dort absenden.",err:"Bitte Name und Kontakt angeben."}
  };
  var current='tr';
  function setLang(l){
    current=l;
    document.documentElement.lang=l;
    document.title=meta[l].title;
    document.querySelectorAll('[data-'+l+']').forEach(function(el){el.textContent=el.getAttribute('data-'+l);});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l?'true':'false');});
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang);});});
  if((navigator.language||'').toLowerCase().indexOf('de')===0)setLang('de');

  var f=document.getElementById('contactForm');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=f.querySelector('.form__note');
    if(!f.elements["name"].value.trim()||!f.elements["contact"].value.trim()){n.textContent=meta[current].err;return;}
    var el=f.elements,t=el['topic'];var txt=el['name'].value.trim()+' ('+el['contact'].value.trim()+')\n'+t.options[t.selectedIndex].text+'\n'+el['msg'].value.trim();window.open('https://wa.me/491729955128?text='+encodeURIComponent(txt),'_blank','noopener');n.textContent=meta[current].note;f.reset();
  });
})();
