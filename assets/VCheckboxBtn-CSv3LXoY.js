import{g as i,b3 as g,b4 as V,m as h,b5 as v,a as I,I as b,O as r,E as s,u as k,N as x,c as p,M as C}from"./index-9Dt7fLLO.js";import{m as y,V as m}from"./VSelectionControl-Dx9nBNlp.js";function O(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",c=arguments.length>2?arguments[2]:void 0;return i()({name:c??g(V(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...h()},setup(t,a){let{slots:n}=a;return()=>{var o;return v(t.tag,{class:[e,t.class],style:t.style},(o=n.default)==null?void 0:o.call(n))}}})}const P=I({indeterminate:Boolean,indeterminateIcon:{type:b,default:"$checkboxIndeterminate"},...y({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),$=i()({name:"VCheckboxBtn",props:P(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{slots:c}=l;const t=r(e,"indeterminate"),a=r(e,"modelValue");function n(u){t.value&&(t.value=!1)}const o=s(()=>t.value?e.indeterminateIcon:e.falseIcon),d=s(()=>t.value?e.indeterminateIcon:e.trueIcon);return k(()=>{const u=x(m.filterProps(e),["modelValue"]);return p(m,C(u,{modelValue:a.value,"onUpdate:modelValue":[f=>a.value=f,n],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:d.value,"aria-checked":t.value?"mixed":void 0}),c)}),{}}});export{$ as V,O as c,P as m};
