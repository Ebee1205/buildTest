import{B as y,_ as v}from"./SubTitle-DYUdpN33.js";import{_ as F,U as m,S as _,T as k,a5 as g,W as b,Y as l,X as V,c as o,a1 as d,$ as s}from"./index-9Dt7fLLO.js";import{a as f}from"./VInput-CvDtwG8R.js";import{V as p}from"./VSlider-x4dAc7gW.js";const x="청소/청결",I="청결에 대한 의견도 공동생활에서 중요합니다.<br>솔직하고 현실적인 생각을 말해주세요.",z={__name:"SurveyPage5",setup(D){const r=m(0),u=m(0),n=m(0);_(()=>{S()}),k(()=>{}),g(r,(e,t)=>{console.log(`--- clean changed from ${t} to ${e}`),i("clean",e)}),g(u,(e,t)=>{console.log(`--- bug changed from ${t} to ${e}`),i("bug",e)}),g(n,(e,t)=>{console.log(`--- eatIn changed from ${t} to ${e}`),i("eatIn",e)});function S(){localStorage.setItem("userProgress",JSON.stringify({currentStep:5})),console.log("Updated localStorage userProgress:",localStorage.getItem("userProgress"));const e=localStorage.getItem("userSurvey");if(e){const t=JSON.parse(e);r.value=t.clean||0,u.value=t.bug||0,n.value=t.eatIn||0}}function i(e,t){const c=JSON.parse(localStorage.getItem("userSurvey"))||{};c[e]=t,localStorage.setItem("userSurvey",JSON.stringify(c)),console.log(`Updated localStorage userSurvey: ${e} = ${t}`)}return(e,t)=>{const c=v;return V(),b(y,null,{default:l(()=>[o(c,{title:x,desc:I}),o(s,{"no-gutters":"",justify:"start"},{default:l(()=>[o(f,null,{default:l(()=>t[3]||(t[3]=[d("방청소 주기는 어느정도가 적당하다 생각하나요?")])),_:1})]),_:1}),o(s,{"no-gutters":"",justify:"center",class:"mt-4"},{default:l(()=>[o(p,{max:4,step:1,modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16"},null,8,["modelValue"])]),_:1}),o(s,{"no-gutters":"",justify:"start",class:"margin-top-52"},{default:l(()=>[o(f,null,{default:l(()=>t[4]||(t[4]=[d("벌레 잘 잡으시나요?")])),_:1})]),_:1}),o(s,{"no-gutters":"",justify:"center",class:"mt-4"},{default:l(()=>[o(p,{max:4,step:1,modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=a=>u.value=a),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16"},null,8,["modelValue"])]),_:1}),o(s,{"no-gutters":"",justify:"start",class:"margin-top-52"},{default:l(()=>[o(f,null,{default:l(()=>t[5]||(t[5]=[d("방 안에서 음식물 섭취, 어떻게 생각하시나요? (간식제외)")])),_:1})]),_:1}),o(s,{"no-gutters":"",justify:"center",class:"mt-4"},{default:l(()=>[o(p,{max:4,step:1,modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=a=>n.value=a),color:"#FF5858","thumb-color":"#FF5858","track-color":"#D9D9D9","track-fill-color":"#FF5858","tick-size":"4","show-ticks":"always","track-size":"4","thumb-size":"16"},null,8,["modelValue"])]),_:1})]),_:1})}}},N=F(z,[["__scopeId","data-v-ee9f70bf"]]);export{N as default};
