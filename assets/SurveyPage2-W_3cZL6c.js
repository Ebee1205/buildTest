import{B as Y,V as g,_ as q}from"./VLabel-DYwVHcjf.js";import{a as G,g as K,a2 as B,z as ee,P as C,a3 as te,E as H,a4 as le,u as ae,a5 as se,c as e,M as N,F as ne,e as ue,a6 as oe,V as ie,L as re,a7 as de,_ as ce,N as fe,O as me,a1 as ge,Q as ve,T as l,S as xe,X as a,Y as u,J as v,a8 as x,W as M}from"./index-CtgCsIXl.js";import{m as Ve,u as ye,V as T}from"./VInput-D1dW_Lv1.js";import{m as pe,V as U}from"./VSelectionControl-B1Op1lxU.js";const V="data:image/svg+xml,%3csvg%20width='27'%20height='4'%20viewBox='0%200%2027%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.7'%20d='M0.666667%202C0.666667%202.73638%201.26362%203.33333%202%203.33333C2.73638%203.33333%203.33333%202.73638%203.33333%202C3.33333%201.26362%202.73638%200.666667%202%200.666667C1.26362%200.666667%200.666667%201.26362%200.666667%202ZM26.5%202.25C26.6381%202.25%2026.75%202.13807%2026.75%202C26.75%201.86193%2026.6381%201.75%2026.5%201.75V2.25ZM3.02083%202.25C3.1589%202.25%203.27083%202.13807%203.27083%202C3.27083%201.86193%203.1589%201.75%203.02083%201.75V2.25ZM5.0625%201.75C4.92443%201.75%204.8125%201.86193%204.8125%202C4.8125%202.13807%204.92443%202.25%205.0625%202.25V1.75ZM7.10417%202.25C7.24224%202.25%207.35417%202.13807%207.35417%202C7.35417%201.86193%207.24224%201.75%207.10417%201.75V2.25ZM9.14583%201.75C9.00776%201.75%208.89583%201.86193%208.89583%202C8.89583%202.13807%209.00776%202.25%209.14583%202.25V1.75ZM11.1875%202.25C11.3256%202.25%2011.4375%202.13807%2011.4375%202C11.4375%201.86193%2011.3256%201.75%2011.1875%201.75V2.25ZM13.2292%201.75C13.0911%201.75%2012.9792%201.86193%2012.9792%202C12.9792%202.13807%2013.0911%202.25%2013.2292%202.25V1.75ZM15.2708%202.25C15.4089%202.25%2015.5208%202.13807%2015.5208%202C15.5208%201.86193%2015.4089%201.75%2015.2708%201.75V2.25ZM17.3125%201.75C17.1744%201.75%2017.0625%201.86193%2017.0625%202C17.0625%202.13807%2017.1744%202.25%2017.3125%202.25V1.75ZM19.3542%202.25C19.4922%202.25%2019.6042%202.13807%2019.6042%202C19.6042%201.86193%2019.4922%201.75%2019.3542%201.75V2.25ZM21.3958%201.75C21.2578%201.75%2021.1458%201.86193%2021.1458%202C21.1458%202.13807%2021.2578%202.25%2021.3958%202.25V1.75ZM23.4375%202.25C23.5756%202.25%2023.6875%202.13807%2023.6875%202C23.6875%201.86193%2023.5756%201.75%2023.4375%201.75V2.25ZM25.4792%201.75C25.3411%201.75%2025.2292%201.86193%2025.2292%202C25.2292%202.13807%2025.3411%202.25%2025.4792%202.25V1.75ZM2%202.25H3.02083V1.75H2V2.25ZM5.0625%202.25H7.10417V1.75H5.0625V2.25ZM9.14583%202.25H11.1875V1.75H9.14583V2.25ZM13.2292%202.25H15.2708V1.75H13.2292V2.25ZM17.3125%202.25H19.3542V1.75H17.3125V2.25ZM21.3958%202.25H23.4375V1.75H21.3958V2.25ZM25.4792%202.25H26.5V1.75H25.4792V2.25Z'%20fill='%23666666'/%3e%3c/svg%3e",Ce=G({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Ve(),...pe()},"VSwitch"),_=K()({name:"VSwitch",inheritAttrs:!1,props:Ce(),emits:{"update:focused":s=>!0,"update:modelValue":s=>!0,"update:indeterminate":s=>!0},setup(s,c){let{attrs:f,slots:n}=c;const o=B(s,"indeterminate"),y=B(s,"modelValue"),{loaderClasses:j}=ee(s),{isFocused:k,focus:i,blur:t}=ye(s),r=C(),d=te&&window.matchMedia("(forced-colors: active)").matches,J=H(()=>typeof s.loading=="string"&&s.loading!==""?s.loading:s.color),A=le(),O=H(()=>s.id||`switch-${A}`);function z(){o.value&&(o.value=!1)}function L(w){var S,b;w.stopPropagation(),w.preventDefault(),(b=(S=r.value)==null?void 0:S.input)==null||b.click()}return ae(()=>{const[w,S]=se(f),b=T.filterProps(s),R=U.filterProps(s);return e(T,N({class:["v-switch",{"v-switch--flat":s.flat},{"v-switch--inset":s.inset},{"v-switch--indeterminate":o.value},j.value,s.class]},w,b,{modelValue:y.value,"onUpdate:modelValue":F=>y.value=F,id:O.value,focused:k.value,style:s.style}),{...n,default:F=>{let{id:X,messagesId:E,isDisabled:$,isReadonly:D,isValid:h}=F;const I={model:y,isValid:h};return e(U,N({ref:r},R,{modelValue:y.value,"onUpdate:modelValue":[p=>y.value=p,z],id:X.value,"aria-describedby":E.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:$.value,readonly:D.value,onFocus:i,onBlur:t},S),{...n,default:p=>{let{backgroundColorClasses:Z,backgroundColorStyles:m}=p;return e("div",{class:["v-switch__track",d?void 0:Z.value],style:m.value,onClick:L},[n["track-true"]&&e("div",{key:"prepend",class:"v-switch__track-true"},[n["track-true"](I)]),n["track-false"]&&e("div",{key:"append",class:"v-switch__track-false"},[n["track-false"](I)])])},input:p=>{let{inputNode:Z,icon:m,backgroundColorClasses:W,backgroundColorStyles:Q}=p;return e(ne,null,[Z,e("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":m||s.loading},s.inset||d?void 0:W.value],style:s.inset?void 0:Q.value},[n.thumb?e(ue,{defaults:{VIcon:{icon:m,size:"x-small"}}},{default:()=>[n.thumb({...I,icon:m})]}):e(oe,null,{default:()=>[s.loading?e(re,{name:"v-switch",active:!0,color:h.value===!1?void 0:J.value},{default:P=>n.loader?n.loader(P):e(de,{active:P.isActive,color:P.color,indeterminate:!0,size:"16",width:"2"},null)}):m&&e(ie,{key:String(m),icon:m,size:"x-small"},null)]})])])}})}})}),{}}}),we="MBTI",Se="MBTI로 100% 정확하게 나의 성격을 표현할 순 없지만<br>서로를 알아가기에는 유용한 방법 중 하나 아닐까요?",be={__name:"SurveyPage2",setup(s){const c=C(0),f=C(0),n=C(0),o=C(0);fe(()=>{y()}),me(()=>{}),ge([c,f,n,o],()=>{const i=k();console.log(`--- MBTI updated to: ${i}`),j("mbti",i)});function y(){localStorage.setItem("userProgress",JSON.stringify({currentStep:2})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const i=localStorage.getItem("userSurvey");if(i){const r=JSON.parse(i).mbti||"INTJ";c.value=r[0]==="I"?0:1,f.value=r[1]==="N"?0:1,n.value=r[2]==="T"?0:1,o.value=r[3]==="J"?0:1}}function j(i,t){const r=JSON.parse(localStorage.getItem("userSurvey"))||{};r[i]=t,localStorage.setItem("userSurvey",JSON.stringify(r)),console.log(`Updated localStorage userSurvey: ${i} = ${t}`)}function k(){return[c.value===0?"I":"E",f.value===0?"N":"S",n.value===0?"T":"F",o.value===0?"J":"P"].join("")}return(i,t)=>{const r=q;return xe(),ve(Y,null,{default:l(()=>[e(r,{title:we,desc:Se}),e(M,{"no-gutter":"",justify:"center"},{default:l(()=>[e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[4]||(t[4]=[u("내향적")])),_:1})]),_:1}),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px"})]),_:1}),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",c.value===0?"custom-text-on":"custom-text-off"])},{default:l(()=>t[5]||(t[5]=[u(" I ")])),_:1},8,["class"]),e(_,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=d=>c.value=d),inset:"","hide-details":"",color:"#FF6161","base-color":"#FF6161",class:"mr-5 | ml-5",value:1,"false-value":0},null,8,["modelValue"]),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",c.value===1?"custom-text-on":"custom-text-off"])},{default:l(()=>t[6]||(t[6]=[u(" E ")])),_:1},8,["class"]),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px",style:{transform:"scaleX(-1)"}})]),_:1}),e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[7]||(t[7]=[u("외향적")])),_:1})]),_:1})]),_:1}),e(M,{"no-gutter":"",justify:"center",class:"margin-top-52"},{default:l(()=>[e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[8]||(t[8]=[u("이상적")])),_:1})]),_:1}),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px"})]),_:1}),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",f.value===0?"custom-text-on":"custom-text-off"])},{default:l(()=>t[9]||(t[9]=[u(" N ")])),_:1},8,["class"]),e(_,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=d=>f.value=d),inset:"","hide-details":"",color:"#FF6161","base-color":"#FF6161",class:"mr-5 | ml-5",value:1,"false-value":0},null,8,["modelValue"]),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",f.value===1?"custom-text-on":"custom-text-off"])},{default:l(()=>t[10]||(t[10]=[u(" S ")])),_:1},8,["class"]),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px",style:{transform:"scaleX(-1)"}})]),_:1}),e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[11]||(t[11]=[u("현실적")])),_:1})]),_:1})]),_:1}),e(M,{"no-gutter":"",justify:"center",class:"margin-top-52"},{default:l(()=>[e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[12]||(t[12]=[u("사고형")])),_:1})]),_:1}),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px"})]),_:1}),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",n.value===0?"custom-text-on":"custom-text-off"])},{default:l(()=>t[13]||(t[13]=[u(" T ")])),_:1},8,["class"]),e(_,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=d=>n.value=d),inset:"","hide-details":"",color:"#FF6161","base-color":"#FF6161",class:"mr-5 | ml-5",value:1,"false-value":0},null,8,["modelValue"]),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",n.value===1?"custom-text-on":"custom-text-off"])},{default:l(()=>t[14]||(t[14]=[u(" F ")])),_:1},8,["class"]),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px",style:{transform:"scaleX(-1)"}})]),_:1}),e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[15]||(t[15]=[u("감정형")])),_:1})]),_:1})]),_:1}),e(M,{"no-gutter":"",justify:"center",class:"margin-top-52"},{default:l(()=>[e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[16]||(t[16]=[u("계획성")])),_:1})]),_:1}),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px"})]),_:1}),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",o.value===0?"custom-text-on":"custom-text-off"])},{default:l(()=>t[17]||(t[17]=[u(" J ")])),_:1},8,["class"]),e(_,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=d=>o.value=d),inset:"","hide-details":"",color:"#FF6161","base-color":"#FF6161",class:"mr-5 | ml-5",value:1,"false-value":0},null,8,["modelValue"]),e(a,{class:x(["d-flex | justify-center | align-center | padding-0",o.value===1?"custom-text-on":"custom-text-off"])},{default:l(()=>t[18]||(t[18]=[u(" P ")])),_:1},8,["class"]),e(a,{class:"d-flex | justify-center | align-center | padding-0"},{default:l(()=>[e(v,{src:V,width:30,"max-width":"40px",style:{transform:"scaleX(-1)"}})]),_:1}),e(a,{class:"d-flex | justify-center | align-center"},{default:l(()=>[e(g,null,{default:l(()=>t[19]||(t[19]=[u("융통성")])),_:1})]),_:1})]),_:1})]),_:1})}}},Fe=ce(be,[["__scopeId","data-v-a7d4f7e2"]]);export{Fe as default};
