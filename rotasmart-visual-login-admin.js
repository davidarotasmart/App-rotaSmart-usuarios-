/* RotaSmart — visual do Login e da Área administrativa (complemento; não altera o restante do app). */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var esc=function(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var mk=function(c,h){var d=document.createElement('div');d.className=c;d.innerHTML=h||'';return d};
var G='linear-gradient(135deg,var(--accent-color,#f59e0b),var(--accent-hover,#d97706))';

var st=document.createElement('style');st.id='rsx-style';
st.textContent=
/* ===== LOGIN ===== */
'#rs-fb-gate .rs-fb-box{max-width:390px;padding:22px;border-radius:22px;gap:0;box-shadow:0 25px 70px rgba(0,0,0,.45)}'+
'.rsx-brand{text-align:center;margin-bottom:18px}'+
'.rsx-logo{width:58px;height:58px;margin:0 auto 10px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:'+G+';font-size:1.8rem}'+
'#rs-fb-gate .rs-fb-box h3{text-align:center;font-size:1.25rem}'+
'#rs-fb-gate .rs-fb-sub{text-align:center;margin-top:6px;font-size:.76rem}'+
'.rsx-tabs{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:16px;padding:4px;border-radius:13px;background:var(--bg-color);border:1px solid var(--card-border)}'+
'.rsx-tabs button{min-height:40px;border:0;border-radius:10px;background:transparent;color:var(--text-muted);font:inherit;font-size:.78rem;font-weight:800;cursor:pointer}'+
'.rsx-tabs button.on{background:'+G+';color:#000}'+
'.rsx-f{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}'+
'.rsx-f label{color:var(--text-muted);font-size:.7rem;font-weight:700}'+
'#rs-fb-gate .rsx-f input{min-height:46px;font-size:16px;border-radius:12px}'+
'#rs-fb-gate .rsx-f input:focus{outline:none;border-color:var(--accent-color)}'+
'.rsx-pw{position:relative}.rsx-pw input{padding-right:50px!important}'+
'.rsx-eye{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:36px;height:36px;border:0;border-radius:10px;background:transparent;color:var(--text-main);font-size:1rem;cursor:pointer}'+
'#rs-fb-gate .rs-fb-primary{width:100%;min-height:48px;border-radius:13px;background:'+G+';color:#000}'+
'#rs-fb-gate .rs-fb-link[onclick*="rsFb.view"]{display:none}'+
/* ===== ADMIN ===== */
'#rs-fb-admin .rsx-admin{max-width:420px;padding:20px;border-radius:24px;gap:14px}'+
'.rsx-ah{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}'+
'.rsx-k{display:block;color:var(--accent-color);font-size:.68rem;font-weight:800;letter-spacing:.16em;margin-bottom:5px}'+
'.rsx-ah h3{margin:0 0 4px!important;font-size:1.3rem!important}'+
'.rsx-ah p{margin:0;color:var(--text-muted);font-size:.8rem}'+
'.rsx-x{flex:0 0 44px;width:44px;height:44px;border-radius:14px;border:1px solid var(--card-border);background:var(--bg-color);color:var(--text-main);font-size:1.05rem;font-weight:800;cursor:pointer}'+
'.rsx-sess{color:var(--text-muted);font-size:.8rem}.rsx-sess b{color:var(--text-main)}'+
'.rsx-atabs{display:flex;gap:6px;padding:6px;border:1px solid var(--card-border);border-radius:16px;background:var(--bg-color)}'+
'.rsx-atabs button{flex:1;min-height:40px;border:0;border-radius:11px;background:transparent;color:var(--text-main);font:inherit;font-size:.8rem;font-weight:800;cursor:pointer}'+
'.rsx-atabs button.on{background:var(--accent-color);color:#111}'+
'.rsx-pane{display:none;flex-direction:column;gap:12px}.rsx-pane.on{display:flex}'+
'.rsx-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}'+
'.rsx-stat{display:flex;flex-direction:column;align-items:center;gap:4px;padding:14px 6px;border:1px solid var(--card-border);border-radius:16px;background:var(--bg-color)}'+
'.rsx-stat strong{font-size:1.5rem;line-height:1}.rsx-stat span{color:var(--text-muted);font-size:.64rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase}'+
'.rsx-search{display:flex;align-items:center;gap:8px;padding:0 14px;border:1px solid var(--card-border);border-radius:14px;background:var(--bg-color)}'+
'.rsx-search input{flex:1;min-width:0;border:0!important;outline:0;background:transparent!important;min-height:46px!important;padding:0!important}'+
'#rs-fb-admin-list{display:flex;flex-direction:column;gap:12px}'+
'#rs-fb-admin-list .rs-fb-row{gap:10px;padding:14px;border-radius:18px;background:var(--bg-color)}'+
'.rsx-uh{display:flex;align-items:center;gap:12px}'+
'.rsx-av{flex:0 0 42px;width:42px;height:42px;display:grid;place-items:center;border-radius:13px;background:var(--accent-color);color:#111;font-size:1.15rem;font-weight:900}'+
'.rsx-id{min-width:0;display:flex;flex-direction:column;gap:2px}.rsx-id b{font-size:.98rem}.rsx-id small{font-size:.8rem}'+
'.rsx-meta{color:var(--text-muted);font-size:.78rem}'+
'#rs-fb-admin-list .rs-fb-row .acts button{min-height:42px;padding:8px 14px;border-radius:13px;font-weight:800}'+
'.rsx-row{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--card-border);border-radius:16px;background:var(--bg-color)}'+
'.rsx-row>span{font-size:1.15rem}.rsx-row div{flex:1;min-width:0}.rsx-row strong{display:block;font-size:.86rem}.rsx-row small{color:var(--text-muted);font-size:.72rem}'+
'.rsx-pill{padding:5px 11px;border-radius:999px;font-size:.68rem;font-weight:800;border:1px solid var(--green-color);color:var(--green-color);white-space:nowrap}'+
'.rsx-log{display:flex;gap:10px;padding:10px 12px;border:1px solid var(--card-border);border-radius:14px;background:var(--bg-color)}'+
'.rsx-log b{display:block;font-size:.8rem;word-break:break-word}.rsx-log small{color:var(--text-muted);font-size:.7rem}'+
'.rsx-empty{padding:22px 14px;border:1px dashed var(--card-border);border-radius:16px;color:var(--text-muted);font-size:.82rem;text-align:center}'+
'.rsx-note{margin:0;color:var(--text-muted);font-size:.74rem;line-height:1.4}';
document.head.appendChild(st);

/* ===== LOGIN: abas, rótulos, olhinho de senha, Enter ===== */
function enhanceGate(){
  var g=$('#rs-fb-gate'),box=g&&$('.rs-fb-box',g);
  if(!box||!$('#rs-fb-email',box)||box.dataset.rsx)return;
  box.dataset.rsx='1';
  var reg=!!$('#rs-fb-name',box),h=$('h3',box),sub=$('.rs-fb-sub',box);
  h.textContent='RotaSmart Motoboy';
  sub.textContent=reg?'Crie sua conta. O acesso é liberado pelo administrador.':'Entre ou crie sua conta para continuar.';
  var brand=mk('rsx-brand','<div class="rsx-logo">🛵</div>');
  box.insertBefore(brand,h);brand.appendChild(h);brand.appendChild(sub);
  var tabs=mk('rsx-tabs','<button type="button" class="'+(reg?'':'on')+'">Entrar</button><button type="button" class="'+(reg?'on':'')+'">Criar conta</button>');
  tabs.children[0].onclick=function(){window.rsFb.view('login')};
  tabs.children[1].onclick=function(){window.rsFb.view('register')};
  box.insertBefore(tabs,brand.nextSibling);
  $$('input',box).forEach(function(i){
    var f=mk('rsx-f'),l=document.createElement('label');
    l.textContent=(i.placeholder||'').replace(/\s*\(.*\)/,'');l.setAttribute('for',i.id);i.placeholder='';
    i.parentNode.insertBefore(f,i);f.appendChild(l);
    if(i.type==='password'){
      var w=mk('rsx-pw'),b=document.createElement('button');
      b.type='button';b.className='rsx-eye';b.textContent='👁';b.setAttribute('aria-label','Mostrar senha');
      b.onclick=function(){var s=i.type==='password';i.type=s?'text':'password';b.textContent=s?'🙈':'👁'};
      f.appendChild(w);w.appendChild(i);w.appendChild(b);
    }else f.appendChild(i);
  });
  var p=$('.rs-fb-primary',box);if(p)p.textContent=reg?'Criar minha conta':'Entrar na conta';
}
var gate=$('#rs-fb-gate');
if(gate){
  new MutationObserver(enhanceGate).observe(gate,{childList:true});
  gate.addEventListener('keydown',function(e){
    if(e.key==='Enter'&&e.target&&e.target.tagName==='INPUT'){var p=$('.rs-fb-primary',gate);if(p){e.preventDefault();p.click();}}
  });
  enhanceGate();
}

/* ===== ADMIN ===== */
var LK='rs_admin_log',ICON={approved:'✅',blocked:'🚫',del:'🗑️'};
function getLog(){try{var l=JSON.parse(localStorage.getItem(LK)||'[]');return Array.isArray(l)?l:[]}catch(e){return[]}}
function addLog(type,text){var l=getLog();l.unshift({t:Date.now(),type:type,text:text});if(l.length>100)l.length=100;try{localStorage.setItem(LK,JSON.stringify(l))}catch(e){}}
function who(list,id){
  var r=$$('.rs-fb-row',list).filter(function(x){return x.innerHTML.indexOf("'"+id+"'")>-1})[0];
  return r?((($('b',r)||{}).textContent||'').trim()||'usuário'):'usuário';
}
function initAdmin(){
  var ad=$('#rs-fb-admin'),box=ad&&$('.rs-fb-box',ad),list=$('#rs-fb-admin-list');
  if(!box||!list||box.dataset.rsx)return;
  box.dataset.rsx='1';box.classList.add('rsx-admin');
  $$(':scope > h3, :scope > .rs-fb-sub',box).forEach(function(c){c.style.display='none'});
  var head=mk('rsx-ah','<div><span class="rsx-k">ADMINISTRAÇÃO</span><h3>🛡️ Área administrativa</h3><p>Recursos de gerenciamento do app.</p></div><button type="button" class="rsx-x" aria-label="Fechar">✕</button>');
  head.lastChild.onclick=function(){ad.style.display='none'};
  var sess=mk('rsx-sess','Conectado como <b>administrador</b>.');
  var tabs=mk('rsx-atabs','<button type="button" data-t="u" class="on">👥 Usuários</button><button type="button" data-t="a">🔐 Acesso</button><button type="button" data-t="r">📜 Registro</button>');
  var pU=mk('rsx-pane on','<div class="rsx-stats"><div class="rsx-stat"><strong id="rsx-nt">0</strong><span>Usuários</span></div><div class="rsx-stat"><strong id="rsx-na">0</strong><span>Admins</span></div><div class="rsx-stat"><strong id="rsx-nb">0</strong><span>Bloqueados</span></div></div><div class="rsx-search"><span>🔎</span><input id="rsx-q" type="search" placeholder="Buscar nome ou e-mail" autocomplete="off"></div>');
  var pA=mk('rsx-pane','<div class="rsx-row"><span>🔐</span><div><strong>Exigir login para abrir o app</strong><small>Cada pessoa entra com a própria conta</small></div><i class="rsx-pill">Ativado</i></div><div class="rsx-row"><span>📝</span><div><strong>Novos cadastros pela tela de login</strong><small>Ficam pendentes até você liberar</small></div><i class="rsx-pill">Com aprovação</i></div><div class="rsx-row"><span>🔒</span><div><strong>Proteger esta área com senha</strong><small>Só o administrador com e-mail confirmado abre esta área</small></div><i class="rsx-pill">Ativado</i></div><p class="rsx-note">Os dados de entregas, ganhos e abastecimentos de cada conta são sincronizados com a nuvem.</p>');
  var pR=mk('rsx-pane','');
  box.insertBefore(head,box.firstChild);
  box.insertBefore(sess,head.nextSibling);box.insertBefore(tabs,sess.nextSibling);
  box.insertBefore(pU,tabs.nextSibling);pU.appendChild(list);
  box.insertBefore(pA,pU.nextSibling);box.insertBefore(pR,pA.nextSibling);

  function enh(){
    var rows=$$('.rs-fb-row',list),a=0,b=0,q=($('#rsx-q').value||'').trim().toLowerCase();
    rows.forEach(function(r){
      var tag=$('.rs-fb-tag',r),txt=tag?tag.textContent:'';
      if(!r.dataset.rsx){
        r.dataset.rsx='1';
        var nm=$('b',r),sm=$('small',r),parts=(sm?sm.textContent:'').split(' · desde ');
        var uh=mk('rsx-uh','<div class="rsx-av">'+esc((nm.textContent.trim()||'?').charAt(0).toUpperCase())+'</div>');
        var id=mk('rsx-id');id.appendChild(nm);id.appendChild(sm);uh.appendChild(id);
        sm.textContent=parts[0];
        r.insertBefore(uh,r.firstChild);
        if(tag){
          tag.textContent=/Administrador/.test(txt)?'👑 Administrador':(txt==='Liberado'?'Ativo':txt);
          var meta=mk('rsx-meta','Criado em '+esc(parts[1]||'—'));r.insertBefore(meta,tag.nextSibling);
        }
        $$('.acts button',r).forEach(function(x){
          var t=x.textContent.trim();x.textContent=({'Liberar':'✅ Liberar','Bloquear':'🚫 Bloquear','Excluir':'🗑️ Excluir'})[t]||t;
        });
      }
      if(/Administrador/.test(tag?tag.textContent:''))a++;
      if(tag&&/blocked/.test(tag.className))b++;
      r.style.display=(!q||r.textContent.toLowerCase().indexOf(q)>-1)?'':'none';
    });
    $('#rsx-nt').textContent=rows.length;$('#rsx-na').textContent=a;$('#rsx-nb').textContent=b;
  }
  new MutationObserver(enh).observe(list,{childList:true});
  $('#rsx-q').addEventListener('input',enh);

  function renderLog(){
    var l=getLog();
    pR.innerHTML=(l.length?'<div style="display:flex;flex-direction:column;gap:8px">'+l.map(function(e){
      return '<div class="rsx-log"><span>'+(ICON[e.type]||'•')+'</span><div><b>'+esc(e.text)+'</b><small>'+new Date(e.t).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'})+'</small></div></div>';
    }).join('')+'</div><button type="button" class="rs-fb-sec" id="rsx-clr">🧹 Limpar registro</button>':'<div class="rsx-empty">Nenhum evento registrado ainda.</div>')+'<p class="rsx-note">O registro guarda as ações feitas por você neste aparelho.</p>';
    var c=$('#rsx-clr');if(c)c.onclick=function(){if(confirm('Apagar todo o registro?')){try{localStorage.removeItem(LK)}catch(e){}renderLog()}};
  }
  tabs.addEventListener('click',function(e){
    var b=e.target.closest('button[data-t]');if(!b)return;
    var t=b.getAttribute('data-t');
    $$('button',tabs).forEach(function(x){x.classList.toggle('on',x===b)});
    pU.classList.toggle('on',t==='u');pA.classList.toggle('on',t==='a');pR.classList.toggle('on',t==='r');
    if(t==='r')renderLog();
  });

  /* registra no Registro as ações de liberar, bloquear e excluir */
  var A=window.rsFb;
  if(A){
    var oS=A.setSt,oD=A.del;
    if(oS)A.setSt=function(id,s){addLog(s,(s==='approved'?'Acesso liberado: ':'Acesso bloqueado: ')+who(list,id));return oS.apply(this,arguments)};
    if(oD)A.del=function(id){
      var nome=who(list,id),oc=window.confirm,ok=null;
      window.confirm=function(m){ok=oc.call(window,m);return ok};
      var r;try{r=oD.apply(this,arguments)}finally{window.confirm=oc}
      if(ok!==false)addLog('del','Usuário excluído: '+nome);
      return r;
    };
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initAdmin,{once:true});else initAdmin();
})();
