import{o as u,c as v,a as e,r as $,u as L,b as f,d as S,i as C,e as b,n as g,t as z,f as y,g as h,h as s,j as P,k as A,l as H,m as I,p as R,q as D,s as j,v as E,w as F,x as m,y as V,z as M,_ as B,A as U,B as W,C as k,D as q,F as O,E as Z,G,H as N,I as J,J as K,K as Q,L as X,M as Y,N as ee,O as te,P as se,Q as ne,S as oe,R as le,T as ae,U as ie,V as ce,W as re}from"./index.44535218.js";import{_ as ue}from"./DrawingControls.vue_vue_type_script_setup_true_lang.b5d9fabf.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function pe(t,o){return u(),v("svg",de,me)}const ve={name:"carbon-renew",render:pe},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(t,o){return u(),v("svg",he,xe)}const ke={name:"carbon-time",render:we},$e="/pixelgrid-entrance-LT/assets/logo-title-horizontal.96c3c915.png";function ye(){const t=$(Date.now()),o=L({interval:1e3}),d=f(()=>{const n=(o.value-t.value)/1e3,a=Math.floor(n%60).toString().padStart(2,"0");return`${Math.floor(n/60).toString().padStart(2,"0")}:${a}`});function i(){t.value=o.value}return{timer:d,resetTimer:i}}const Se=["innerHTML"],Ce=["textContent"],be=S({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(t){const o=t;return C(b),(d,i)=>t.noteHtml?(u(),v("div",{key:0,class:g(["prose overflow-auto outline-none",o.class]),onClick:i[0]||(i[0]=n=>d.$emit("click")),innerHTML:t.noteHtml},null,10,Se)):(u(),v("div",{key:1,class:g(["prose overflow-auto outline-none",o.class]),onClick:i[1]||(i[1]=n=>d.$emit("click")),textContent:z(t.note)},null,10,Ce))}}),Te=S({__name:"NoteStatic",props:{class:null},setup(t){const o=t;C(b);const d=f(()=>{var n,a,l;return(l=(a=(n=y.value)==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:l.note}),i=f(()=>{var n,a,l;return(l=(a=(n=y.value)==null?void 0:n.meta)==null?void 0:a.slide)==null?void 0:l.notesHTML});return(n,a)=>(u(),h(be,{class:g(o.class),note:s(d),"note-html":s(i)},null,8,["class","note","note-html"]))}}),x=t=>(Z("data-v-63376833"),t=t(),G(),t),He={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Me={class:"grid-section top flex"},Be=x(()=>e("img",{src:$e,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Ne=x(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Le=x(()=>e("div",{class:"context"}," current ",-1)),Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ae=x(()=>e("div",{class:"context"}," next ",-1)),Ie={class:"grid-section note overflow-auto"},Re={class:"grid-section bottom"},De={class:"progress-bar"},je=S({__name:"Presenter",setup(t){C(b);const o=$();P(),A(o);const d=H.titleTemplate.replace("%s",H.title||"Slidev");I({title:`Presenter - ${d}`});const{timer:i,resetTimer:n}=ye(),a=$([]),l=f(()=>N.value<J.value?{route:y.value,clicks:N.value+1}:K.value?{route:Q.value,clicks:0}:null);return R(()=>{const T=o.value.querySelector("#slide-content"),r=D(j()),w=E();F(()=>{if(!w.value||Y.value||!ee.value)return;const _=T.getBoundingClientRect(),c=(r.x-_.left)/_.width*100,p=(r.y-_.top)/_.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},_=>{X.cursor=_})}),(T,r)=>{const w=ke,_=ve;return u(),v(O,null,[e("div",He,[e("div",Ve,[e("div",Me,[Be,Ne,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...c)=>s(n)&&s(n)(...c))},[m(w,{class:"absolute"}),m(_,{class:"absolute opacity-0"})]),e("div",ze,z(s(i)),1)]),e("div",{ref_key:"main",ref:o,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:V(s(te))},[m(B,{key:"main",class:"h-full w-full"},{default:M(()=>[m(se,{context:"presenter"})]),_:1}),Le],4),e("div",Pe,[s(l)?(u(),h(B,{key:"next",class:"h-full w-full"},{default:M(()=>{var c;return[m(s(oe),{is:(c=s(l).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":r[1]||(r[1]=p=>a.value=p),clicks:s(l).clicks,"clicks-disabled":!1,class:g(s(ne)(s(l).route)),route:s(l).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):U("v-if",!0),Ae]),e("div",Ie,[(u(),h(Te,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Re,[m(le,{persist:!0})]),(u(),h(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:V({width:`${(s(ae)-1)/(s(ie)-1)*100}%`})},null,4)])]),m(ce),m(q,{modelValue:s(k),"onUpdate:modelValue":r[2]||(r[2]=c=>W(k)?k.value=c:null)},null,8,["modelValue"])],64)}}});const Ue=re(je,[["__scopeId","data-v-63376833"]]);export{Ue as default};
