const a="http://localhost:5678/";function s(e){let c=e*100001,l=e*100002,r=e*100003,t=e*100004;return function(){let n=l<<9,o=l*5;return o=(o<<7|o>>>25)*9,r^=c,t^=l,l^=r,c^=t,r^=n,t=t<<11|t>>>21,(o>>>0)/4294967296}}export{a as D,s as g};