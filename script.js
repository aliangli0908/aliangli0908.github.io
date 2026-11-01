/* Aliang Li — bilingual academic homepage; all local, no trackers or dependencies. */
(() => {
  'use strict';
  const site = window.SITE_DATA;
  if (!site) return;
  const dict = {
    en: {
      siteLabel: 'LINGUISTICS / LANGUAGE', skipLink: 'Skip to content', brandLabel: 'Go to homepage',
      navLabel: 'Main navigation', openNavigation: 'Open navigation', closeNavigation: 'Close navigation',
      languageLabel: 'Choose language', filterLabel: 'Filter publications',
      waveformCaption: 'My name, in sound.', waveformAlt: 'Waveform of Aliang Li’s spoken name',
      navAbout: 'About', navResearch: 'Research', navPublications: 'Publications', navTalks: 'Talks', navHonors: 'Honors', navContact: 'Contact',
      heroEyebrow: 'LINGUISTICS · LANGUAGE & CHANGE', heroPrefix: "Hello, I'm", exploreResearch: 'Explore my research', viewPublications: 'Publications',
      sectionAboutSmall: 'ABOUT', sectionAbout: 'About me', atAGlance: 'AT A GLANCE', fieldPosition: 'POSITION', fieldInstitution: 'AFFILIATION', fieldDegree: 'DOCTORATE',
      sectionResearchSmall: 'RESEARCH', sectionResearch: 'Research interests', researchNote: 'Historical comparison, typological analysis, and experimental evidence.', languagesLabel: 'LANGUAGES IN MY RESEARCH',
      sectionPublicationsSmall: 'PUBLICATIONS', sectionPublications: 'Publications', downloadCV: 'Curriculum vitae [pdf]', viewCV: 'CV [pdf]',
      publicationLead: 'Journal articles and a book review · most recent first.', filterAll: 'All', filterArticle: 'Research articles', filterReview: 'Book review',
      publicationNote: 'Paper titles are shown in their original language. Reference English translations accompany Chinese-language titles.', emptyPublications: 'No entries in this category.',
      types: {article: 'Research article', review: 'Book review'}, accepted: 'Accepted',
      sectionTalksSmall: 'PRESENTATIONS', sectionTalks: 'Selected talks', talksNote: 'Conference presentations and workshops.',
      showAllTalks: 'View all presentations', showFewerTalks: 'Show fewer presentations',
      sectionHonorsSmall: 'HONORS', sectionHonors: 'Selected academic honors',
      sectionContactSmall: 'CONTACT', contactHeading: 'Get in touch', contactDescription: 'I welcome conversations on research, language data and academic collaboration.', emailLabel: 'EMAIL',
      footerCaption: 'Language in structure, history and sound.', backToTop: 'Back to top'
    },
    zh: {
      siteLabel: '语言学 / LINGUISTICS', skipLink: '跳转到主要内容', brandLabel: '返回主页',
      navLabel: '主导航', openNavigation: '打开导航菜单', closeNavigation: '关闭导航菜单',
      languageLabel: '切换网站语言', filterLabel: '筛选论文',
      waveformCaption: '我的名字，化作声音。', waveformAlt: '李阿亮姓名的语音波形图',
      navAbout: '关于', navResearch: '研究方向', navPublications: '学术论文', navTalks: '学术报告', navHonors: '学术荣誉', navContact: '联系',
      heroEyebrow: '语言学 · 结构、演变与习得', heroPrefix: '你好，我是', exploreResearch: '了解我的研究', viewPublications: '阅读学术成果',
      sectionAboutSmall: '关于', sectionAbout: '关于我', atAGlance: '个人信息', fieldPosition: '现任职务', fieldInstitution: '工作单位', fieldDegree: '博士学位',
      sectionResearchSmall: '研究', sectionResearch: '研究方向', researchNote: '融合历时比较、类型分析与实验验证的研究路径。', languagesLabel: '主要研究语言',
      sectionPublicationsSmall: '论文', sectionPublications: '学术论文', downloadCV: '英文简历 [pdf]', viewCV: '英文简历 [pdf]',
      publicationLead: '期刊论文及书评，按时间倒序排列。', filterAll: '全部', filterArticle: '研究论文', filterReview: '书评',
      publicationNote: '论文题名按发表语言呈现：中文论文保留中文原题，英文论文保留英文原题。', emptyPublications: '这一类别暂时没有条目。',
      types: {article: '研究论文', review: '书评'}, accepted: '已录用',
      sectionTalksSmall: '学术报告', sectionTalks: '学术报告', talksNote: '国际及国内学术会议报告选录。',
      showAllTalks: '展开全部学术报告', showFewerTalks: '收起部分学术报告',
      sectionHonorsSmall: '荣誉', sectionHonors: '学术荣誉',
      sectionContactSmall: '联系', contactHeading: '保持联系', contactDescription: '欢迎就语言学研究、语料材料及学术合作交流。', emailLabel: '电子邮箱',
      footerCaption: '在结构、历史与声音中理解语言。', backToTop: '返回顶部'
    }
  };

  const state = { lang: 'en', filter: 'all', showAllTalks: false };
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const local = (v) => v && typeof v === 'object' && !Array.isArray(v) ? (v[state.lang] ?? v.en ?? v.zh ?? '') : (v ?? '');
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const set = (selector, value) => {const el = $(selector); if(el) el.textContent = String(value ?? '');};
  const safeUrl = (v) => {
    if (typeof v !== 'string' || /["'<>]/.test(v)) return '';
    if (/^https?:\/\//i.test(v)) return v;
    if (/^assets\/[a-zA-Z0-9_./-]+$/.test(v) && !v.includes('..')) return v;
    if (/^files\/(?:papers|cv)\/[a-zA-Z0-9_-]+\.pdf$/.test(v)) return v;
    return '';
  };
  const copy = () => dict[state.lang];

  function renderLabels() {
    const t = copy();
    $$('[data-i18n]').forEach(el => {
      const label = t[el.dataset.i18n];
      if (typeof label !== 'string') return;
      const suffix = el.querySelector('.title-dot, .contact-period');
      if (suffix) { const dot = suffix.cloneNode(true); el.textContent = label; el.appendChild(dot); }
      else el.textContent = label;
    });
    $$('[data-i18n-aria-label]').forEach(el => {
      const value = t[el.dataset.i18nAriaLabel];
      if (typeof value === 'string') el.setAttribute('aria-label',value);
    });
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.language = state.lang;
    $$('.lang-button').forEach(btn => {const active = btn.dataset.lang === state.lang; btn.classList.toggle('active',active); btn.setAttribute('aria-pressed',String(active));});
    document.title = state.lang === 'en' ? 'Aliang Li · 李阿亮 — Linguistics' : '李阿亮 · Aliang Li — 语言学个人主页';
    set('#year',new Date().getFullYear());
    const description = local(site.profile.intro);
    const desc = $('meta[name="description"]'); if(desc) desc.content = description;
    const ogTitle = $('meta[property="og:title"]'); if(ogTitle) ogTitle.content=document.title;
    const ogDesc = $('meta[property="og:description"]'); if(ogDesc) ogDesc.content=description;
    const ogLocale = $('meta[property="og:locale"]'); if(ogLocale) ogLocale.content=state.lang === 'zh' ? 'zh_CN' : 'en_US';
  }

  function renderProfile() {
    const p=site.profile;
    set('#brand-name',local(p.name));
    const heading = $('#hero-title');
    const otherName = $('#other-name');
    if (heading) {
      heading.classList.toggle('hero-title-bilingual', state.lang === 'en');
      if (state.lang === 'en') {
        // The primary English heading mirrors the bilingual, one-line academic name style.
        // Use textContent so names always remain safe to edit in site-data.js.
        const latin = document.createElement('span');
        latin.className = 'hero-name-latin';
        latin.textContent = p.name.en;
        const separator = document.createElement('span');
        separator.className = 'hero-name-separator';
        separator.textContent = '•';
        separator.setAttribute('aria-hidden', 'true');
        const chinese = document.createElement('span');
        chinese.className = 'hero-name-cn';
        chinese.lang = 'zh-CN';
        chinese.textContent = p.name.zh;
        heading.replaceChildren(latin, separator, chinese);
        heading.setAttribute('aria-label', `${p.name.en}，${p.name.zh}`);
      } else {
        heading.textContent = p.name.zh;
        heading.removeAttribute('aria-label');
      }
    }
    if (otherName) {
      otherName.textContent = p.name.en;
      otherName.classList.toggle('hidden', state.lang === 'en');
    }
    set('#hero-role',local(p.title)); set('#hero-institution',local(p.institution)); set('#hero-intro',local(p.intro));
    set('#hero-status',local(p.availability)); set('#fact-title',local(p.title)); set('#fact-institution',local(p.institution));
    set('#fact-degree',local(p.phd)); set('#footer-name',local(p.name));
    const figure=$('#name-waveform-figure'), wave=$('#name-waveform'), path=safeUrl(p.waveformUrl);
    if(figure && wave) {figure.classList.toggle('hidden',!path);if(path)wave.src=path;wave.alt=copy().waveformAlt;}
    $('#about-copy').innerHTML=(p.bio||[]).map(para=>`<p>${esc(local(para))}</p>`).join('');
    const cv=safeUrl(p.cvUrl);
    $$('#cv-link, #hero-cv-link').forEach(link=>{
      link.classList.toggle('hidden', !cv);
      if(cv) link.href=cv;
      else link.removeAttribute('href');
    });
  }

  function renderResearch() {
    $('#research-grid').innerHTML=(site.research||[]).map(item=>{
      const tags=local(item.tags)||[];
      return `<article class="research-card"><span class="research-number">${esc(item.number)}</span><h3>${esc(local(item.title))}</h3><p>${esc(local(item.description))}</p><div class="research-tags">${tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></article>`;
    }).join('');
    $('#focus-tags').innerHTML=(local(site.focusLanguages)||[]).map(tag=>`<span>${esc(tag)}</span>`).join('');
  }

  function renderPublications() {
    const list=state.filter==='all'?site.publications:site.publications.filter(p=>p.type===state.filter);
    $$('.filter-button').forEach(b=>{const current=b.dataset.filter===state.filter;b.classList.toggle('selected',current);b.setAttribute('aria-pressed',String(current));});
    $('#publication-list').innerHTML=list.length?list.map(p=>{
      const paperLinks=(p.links||[]).map(link=>({kind:link.kind||'', label:local(link.label), url:safeUrl(link.url)})).filter(link=>link.url);
      const pdfLinks=paperLinks.filter(link=>link.kind==='pdf').map(link=>
        `<a class="pub-pdf-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc((state.lang==='zh'?'打开论文 PDF：':'Open paper PDF: ')+local(p.title))}">[pdf]</a>`
      ).join(' ');
      const extraLinks=paperLinks.filter(link=>link.kind!=='pdf' && link.label).map(link=>
        `<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`
      ).join('');
      const accepted=p.status==='accepted'?`<span class="pub-status">${esc(copy().accepted)}</span>`:'';
      return `<article class="publication-item"><div class="pub-year">${esc(local(p.year))}</div><div class="pub-main"><div class="pub-meta"><span class="pub-type">${esc(copy().types[p.type]||p.type)}</span>${accepted}</div><h3 class="pub-title">${esc(local(p.title))}${pdfLinks?' '+pdfLinks:''}</h3><p class="pub-authors">${esc(local(p.authors))}</p><p class="pub-venue">${esc(local(p.venue))}</p>${extraLinks?`<div class="pub-links">${extraLinks}</div>`:''}</div></article>`;
    }).join(''):`<p class="empty-publications">${esc(copy().emptyPublications)}</p>`;
  }

  function renderTalks() {
    const shown=state.showAllTalks?site.talks:site.talks.slice(0,4);
    $('#talks-list').innerHTML=shown.map(t=>`<article class="update-item"><span class="update-date">${esc(t.year)}</span><div><h3>${esc(local(t.title))}</h3><p>${esc(local(t.venue))}</p></div></article>`).join('');
    const more=$('#toggle-talks');more.textContent=state.showAllTalks?copy().showFewerTalks:copy().showAllTalks;
    more.setAttribute('aria-expanded',String(state.showAllTalks));
    more.classList.toggle('hidden',site.talks.length<=4);
  }

  function renderHonors() {
    $('#awards-list').innerHTML=(site.awards||[]).map(item=>`<div class="award-item"><span>${esc(item.year)}</span><p>${esc(local(item.title))}</p></div>`).join('');
    $('.awards-block').classList.toggle('hidden',!(site.awards||[]).length);
  }

  function renderContact() {
    const p=site.profile;
    const email=$('#email-link');email.textContent=p.email || '';
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email||'')) email.href=`mailto:${p.email}`;
    else email.removeAttribute('href');
    const names=[['googleScholar','Google Scholar'],['orcid','ORCID'],['researchgate','ResearchGate'],['personal',state.lang==='zh'?'其他网站':'Website']];
    $('#social-links').innerHTML=names.map(([key,label])=>({label,url:safeUrl(p.links?.[key])})).filter(l=>l.url)
      .map(l=>`<a target="_blank" rel="noopener noreferrer" href="${esc(l.url)}">${esc(l.label)} ↗</a>`).join('');
  }
  function render() {renderLabels();renderProfile();renderResearch();renderPublications();renderTalks();renderHonors();renderContact();}
  function closeMenu() {const menu=$('#primary-nav'),toggle=$('#menu-toggle');menu.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',copy().openNavigation);}

  const params=new URLSearchParams(location.search),urlLang=params.get('lang');
  let savedLang=''; try {savedLang=localStorage.getItem('academic-homepage-language')||'';} catch (_){}
  const browserLang=(navigator.language||'en').toLowerCase().startsWith('zh')?'zh':'en';
  state.lang=['zh','en'].includes(urlLang)?urlLang:(['zh','en'].includes(savedLang)?savedLang:browserLang);
  $$('.lang-button').forEach(button=>button.addEventListener('click',()=>{
    state.lang=button.dataset.lang;
    try{localStorage.setItem('academic-homepage-language',state.lang);}catch(_){}
    try{const u=new URL(location.href);u.searchParams.set('lang',state.lang);history.replaceState(history.state,'',u.toString());}catch(_){}
    render();closeMenu();
  }));
  $$('.filter-button').forEach(b=>b.addEventListener('click',()=>{state.filter=b.dataset.filter;renderPublications();}));
  $('#toggle-talks').addEventListener('click',()=>{state.showAllTalks=!state.showAllTalks;renderTalks();});
  $('#menu-toggle').addEventListener('click',()=>{
    const menu=$('#primary-nav'),isOpen=menu.classList.toggle('nav-open'),toggle=$('#menu-toggle');
    toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?copy().closeNavigation:copy().openNavigation);
  });
  $$('#primary-nav a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',e=>{if($('#primary-nav').classList.contains('nav-open')&&!e.target.closest('.site-header'))closeMenu();});
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      if(visible.length){const id=visible[0].target.id;$$('#primary-nav a').forEach(link=>link.classList.toggle('active',link.hash==='#'+id));}
    },{rootMargin:'-15% 0px -65% 0px',threshold:0});
    ['about','research','publications','talks','honors','contact'].forEach(id=>{const e=document.getElementById(id);if(e)observer.observe(e);});
  }
  render();
})();
