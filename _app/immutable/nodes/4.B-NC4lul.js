import{s as fe,n as ae,o as ue}from"../chunks/scheduler.Bmg8oFKD.js";import{S as _e,i as de,e as k,s as j,l as ne,c as T,k as A,f as w,a as D,d as u,m as R,g as O,h as c,o as re,t as z,b as N,n as ve,j as P}from"../chunks/index.D195rnIf.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{D as pe}from"../chunks/common.43JiDf7S.js";function oe(a,l,s){const n=a.slice();return n[6]=l[s][0],n[7]=l[s][1],n}function ie(a,l,s){const n=a.slice();return n[10]=l[s],n[11]=l,n[12]=s,n}function ce(a){let l,s,n=a[10]+"",r,o,h;function m(){a[3].call(s,a[10])}return{c(){l=k("li"),s=k("input"),r=z(n),this.h()},l(_){l=T(_,"LI",{});var v=D(l);s=T(v,"INPUT",{type:!0}),r=N(v,n),v.forEach(u),this.h()},h(){R(s,"type","checkbox")},m(_,v){O(_,l,v),c(l,s),s.checked=a[1][a[10]],c(l,r),o||(h=ve(s,"change",m),o=!0)},p(_,v){a=_,v&3&&(s.checked=a[1][a[10]]),v&1&&n!==(n=a[10]+"")&&P(r,n)},d(_){_&&u(l),o=!1,h()}}}function he(a){let l,s=a[6]+"",n,r,o,h,m,_='<th class="svelte-1o2ga24"></th> <th class="svelte-1o2ga24">Intended as Bullshit</th> <th class="svelte-1o2ga24">Intended as True</th>',v,g,b,i="Reviewed as Bullshit",I,f,e=a[7][0][0]+"",d,t,p,U=a[7][0][1]+"",F,Q,H,B,$="Reviewed as True",W,L,V=a[7][1][0]+"",G,X,S,q=a[7][1][1]+"",J,Y;return{c(){l=k("h3"),n=z(s),r=j(),o=k("div"),h=k("table"),m=k("tr"),m.innerHTML=_,v=j(),g=k("tr"),b=k("td"),b.textContent=i,I=j(),f=k("td"),d=z(e),t=j(),p=k("td"),F=z(U),Q=j(),H=k("tr"),B=k("td"),B.textContent=$,W=j(),L=k("td"),G=z(V),X=j(),S=k("td"),J=z(q),Y=j(),this.h()},l(C){l=T(C,"H3",{});var E=D(l);n=N(E,s),E.forEach(u),r=w(C),o=T(C,"DIV",{class:!0});var Z=D(o);h=T(Z,"TABLE",{class:!0});var x=D(h);m=T(x,"TR",{"data-svelte-h":!0}),A(m)!=="svelte-1nfplz5"&&(m.innerHTML=_),v=w(x),g=T(x,"TR",{});var y=D(g);b=T(y,"TD",{class:!0,"data-svelte-h":!0}),A(b)!=="svelte-1wv7lx0"&&(b.textContent=i),I=w(y),f=T(y,"TD",{class:!0});var ee=D(f);d=N(ee,e),ee.forEach(u),t=w(y),p=T(y,"TD",{class:!0});var te=D(p);F=N(te,U),te.forEach(u),y.forEach(u),Q=w(x),H=T(x,"TR",{});var M=D(H);B=T(M,"TD",{class:!0,"data-svelte-h":!0}),A(B)!=="svelte-1olkkt7"&&(B.textContent=$),W=w(M),L=T(M,"TD",{class:!0});var le=D(L);G=N(le,V),le.forEach(u),X=w(M),S=T(M,"TD",{class:!0});var se=D(S);J=N(se,q),se.forEach(u),M.forEach(u),x.forEach(u),Y=w(Z),Z.forEach(u),this.h()},h(){R(b,"class","svelte-1o2ga24"),R(f,"class","svelte-1o2ga24"),R(p,"class","svelte-1o2ga24"),R(B,"class","svelte-1o2ga24"),R(L,"class","svelte-1o2ga24"),R(S,"class","svelte-1o2ga24"),R(h,"class","svelte-1o2ga24"),R(o,"class","row")},m(C,E){O(C,l,E),c(l,n),O(C,r,E),O(C,o,E),c(o,h),c(h,m),c(h,v),c(h,g),c(g,b),c(g,I),c(g,f),c(f,d),c(g,t),c(g,p),c(p,F),c(h,Q),c(h,H),c(H,B),c(H,W),c(H,L),c(L,G),c(H,X),c(H,S),c(S,J),c(o,Y)},p(C,E){E&4&&s!==(s=C[6]+"")&&P(n,s),E&4&&e!==(e=C[7][0][0]+"")&&P(d,e),E&4&&U!==(U=C[7][0][1]+"")&&P(F,U),E&4&&V!==(V=C[7][1][0]+"")&&P(G,V),E&4&&q!==(q=C[7][1][1]+"")&&P(J,q)},d(C){C&&(u(l),u(r),u(o))}}}function me(a){let l,s="Results",n,r,o="Include reviewers",h,m,_,v,g,b=K(Object.keys(a[0])),i=[];for(let e=0;e<b.length;e+=1)i[e]=ce(ie(a,b,e));let I=K(Object.entries(a[2])),f=[];for(let e=0;e<I.length;e+=1)f[e]=he(oe(a,I,e));return{c(){l=k("h1"),l.textContent=s,n=j(),r=k("h2"),r.textContent=o,h=j(),m=k("div"),_=k("ul");for(let e=0;e<i.length;e+=1)i[e].c();v=j();for(let e=0;e<f.length;e+=1)f[e].c();g=ne(),this.h()},l(e){l=T(e,"H1",{"data-svelte-h":!0}),A(l)!=="svelte-1c6xwz4"&&(l.textContent=s),n=w(e),r=T(e,"H2",{"data-svelte-h":!0}),A(r)!=="svelte-1e1lfle"&&(r.textContent=o),h=w(e),m=T(e,"DIV",{class:!0});var d=D(m);_=T(d,"UL",{});var t=D(_);for(let p=0;p<i.length;p+=1)i[p].l(t);t.forEach(u),d.forEach(u),v=w(e);for(let p=0;p<f.length;p+=1)f[p].l(e);g=ne(),this.h()},h(){R(m,"class","row")},m(e,d){O(e,l,d),O(e,n,d),O(e,r,d),O(e,h,d),O(e,m,d),c(m,_);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(_,null);O(e,v,d);for(let t=0;t<f.length;t+=1)f[t]&&f[t].m(e,d);O(e,g,d)},p(e,[d]){if(d&3){b=K(Object.keys(e[0]));let t;for(t=0;t<b.length;t+=1){const p=ie(e,b,t);i[t]?i[t].p(p,d):(i[t]=ce(p),i[t].c(),i[t].m(_,null))}for(;t<i.length;t+=1)i[t].d(1);i.length=b.length}if(d&4){I=K(Object.entries(e[2]));let t;for(t=0;t<I.length;t+=1){const p=oe(e,I,t);f[t]?f[t].p(p,d):(f[t]=he(p),f[t].c(),f[t].m(g.parentNode,g))}for(;t<f.length;t+=1)f[t].d(1);f.length=I.length}},i:ae,o:ae,d(e){e&&(u(l),u(n),u(r),u(h),u(m),u(v),u(g)),re(i,e),re(f,e)}}}function ge(a,l){let s={};return Object.entries(a).map(([n,r])=>{l[n]&&r.map(o=>{let h=o.name;Object.keys(s).includes(h)||(s[h]={0:{0:0,1:0},1:{0:0,1:0}}),s[h][o.res][o.prompt_val=="Bullshit"?0:1]+=1})}),s}function be(a,l,s){let n,r={},o={};function h(){fetch(`${pe}v1-results`).then(_=>{_.json().then(v=>{for(let g in v){let b=v[g],i=b.rname;Object.keys(r).includes(i)?r[i].push(b):(s(0,r[i]=[b],r),s(1,o[i]=!1,o))}})})}ue(h);function m(_){o[_]=this.checked,s(1,o)}return a.$$.update=()=>{a.$$.dirty&3&&s(2,n=ge(r,o))},[r,o,n,m]}class De extends _e{constructor(l){super(),de(this,l,be,me,fe,{})}}export{De as component};
