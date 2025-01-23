import{a as Y,n as he,i as ke,E as n,aS as ae,av as W,ah as E,ab as le,P as J,aT as ye,ac as Se,aE as ie,m as oe,g as Q,R as pe,aa as ue,y as ge,aq as Ve,u as Z,aJ as I,c as r,G as ne,H as we,a6 as Ce,an as _e,aU as Te,C as xe,at as se,a2 as Fe,F as Pe,M as Ee}from"./index-CUIEMd7r.js";import{b as Me,m as Re,u as ze,V as re}from"./VInput-CcXlksu5.js";import{V as Le}from"./VLabel-BZoE55Z9.js";const ee=Symbol.for("vuetify:v-slider");function Ne(e,t,l){const o=l==="vertical",u=t.getBoundingClientRect(),k="touches"in e?e.touches[0]:e;return o?k.clientY-(u.top+u.height/2):k.clientX-(u.left+u.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=Y({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...he(),...ke({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),qe=e=>{const t=n(()=>parseFloat(e.min)),l=n(()=>parseFloat(e.max)),o=n(()=>+e.step>0?parseFloat(e.step):0),u=n(()=>Math.max(ae(o.value),ae(t.value)));function k(y){if(y=parseFloat(y),o.value<=0)return y;const v=ie(y,t.value,l.value),S=t.value%o.value,_=Math.round((v-S)/o.value)*o.value+S;return parseFloat(Math.min(_,l.value).toFixed(u.value))}return{min:t,max:l,step:o,decimals:u,roundValue:k}},Ie=e=>{let{props:t,steps:l,onSliderStart:o,onSliderMove:u,onSliderEnd:k,getActiveThumb:y}=e;const{isRtl:v}=W(),S=E(t,"reverse"),_=n(()=>t.direction==="vertical"),T=n(()=>_.value!==S.value),{min:f,max:g,step:x,decimals:L,roundValue:M}=l,D=n(()=>parseInt(t.thumbSize,10)),N=n(()=>parseInt(t.tickSize,10)),R=n(()=>parseInt(t.trackSize,10)),F=n(()=>(g.value-f.value)/x.value),q=E(t,"disabled"),P=n(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),i=n(()=>t.error||t.disabled?void 0:t.trackColor??t.color),V=n(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),m=le(!1),b=le(0),w=J(),C=J();function s(a){var te;const c=t.direction==="vertical",de=c?"top":"left",ce=c?"height":"width",ve=c?"clientY":"clientX",{[de]:me,[ce]:be}=(te=w.value)==null?void 0:te.$el.getBoundingClientRect(),fe=Be(a,ve);let H=Math.min(Math.max((fe-me-b.value)/be,0),1)||0;return(c?T.value:T.value!==v.value)&&(H=1-H),M(f.value+H*(g.value-f.value))}const z=a=>{k({value:s(a)}),m.value=!1,b.value=0},B=a=>{C.value=y(a),C.value&&(C.value.focus(),m.value=!0,C.value.contains(a.target)?b.value=Ne(a,C.value,t.direction):(b.value=0,u({value:s(a)})),o({value:s(a)}))},p={passive:!0,capture:!0};function O(a){u({value:s(a)})}function j(a){a.stopPropagation(),a.preventDefault(),z(a),window.removeEventListener("mousemove",O,p),window.removeEventListener("mouseup",j)}function U(a){var c;z(a),window.removeEventListener("touchmove",O,p),(c=a.target)==null||c.removeEventListener("touchend",U)}function G(a){var c;B(a),window.addEventListener("touchmove",O,p),(c=a.target)==null||c.addEventListener("touchend",U,{passive:!1})}function h(a){a.preventDefault(),B(a),window.addEventListener("mousemove",O,p),window.addEventListener("mouseup",j,{passive:!1})}const d=a=>{const c=(a-f.value)/(g.value-f.value)*100;return ie(isNaN(c)?0:c,0,100)},K=E(t,"showTicks"),A=n(()=>K.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(a=>({value:a,position:d(a),label:a.toString()})):Object.keys(t.ticks).map(a=>({value:parseFloat(a),position:d(parseFloat(a)),label:t.ticks[a]})):F.value!==1/0?ye(F.value+1).map(a=>{const c=f.value+a*x.value;return{value:c,position:d(c)}}):[]:[]),$=n(()=>A.value.some(a=>{let{label:c}=a;return!!c})),X={activeThumbRef:C,color:E(t,"color"),decimals:L,disabled:q,direction:E(t,"direction"),elevation:E(t,"elevation"),hasLabels:$,isReversed:S,indexFromEnd:T,min:f,max:g,mousePressed:m,numTicks:F,onSliderMousedown:h,onSliderTouchstart:G,parsedTicks:A,parseMouseMove:s,position:d,readonly:E(t,"readonly"),rounded:E(t,"rounded"),roundValue:M,showTicks:K,startOffset:b,step:x,thumbSize:D,thumbColor:P,thumbLabel:E(t,"thumbLabel"),ticks:E(t,"ticks"),tickSize:N,trackColor:i,trackContainerRef:w,trackFillColor:V,trackSize:R,vertical:_};return Se(ee,X),X},Oe=Y({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...oe()},"VSliderThumb"),Ke=Q()({name:"VSliderThumb",directives:{Ripple:pe},props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l,emit:o}=t;const u=ue(ee),{isRtl:k,rtlClasses:y}=W();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:v,step:S,disabled:_,thumbSize:T,thumbLabel:f,direction:g,isReversed:x,vertical:L,readonly:M,elevation:D,mousePressed:N,decimals:R,indexFromEnd:F}=u,q=n(()=>_.value?void 0:D.value),{elevationClasses:P}=ge(q),{textColorClasses:i,textColorStyles:V}=Ve(v),{pageup:m,pagedown:b,end:w,home:C,left:s,right:z,down:B,up:p}=Te,O=[m,b,w,C,s,z,B,p],j=n(()=>S.value?[1,2,3]:[1,5,10]);function U(h,d){if(!O.includes(h.key))return;h.preventDefault();const K=S.value||.1,A=(e.max-e.min)/K;if([s,z,B,p].includes(h.key)){const X=(L.value?[k.value?s:z,x.value?B:p]:F.value!==k.value?[s,p]:[z,p]).includes(h.key)?1:-1,a=h.shiftKey?2:h.ctrlKey?1:0;d=d+X*K*j.value[a]}else if(h.key===C)d=e.min;else if(h.key===w)d=e.max;else{const $=h.key===b?1:-1;d=d-$*K*(A>100?A/10:10)}return Math.max(e.min,Math.min(e.max,d))}function G(h){const d=U(h,e.modelValue);d!=null&&o("update:modelValue",d)}return Z(()=>{const h=I(F.value?100-e.position:e.position,"%");return r("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,y.value],style:[{"--v-slider-thumb-position":h,"--v-slider-thumb-size":I(T.value)},e.style],role:"slider",tabindex:_.value?-1:0,"aria-label":e.name,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!M.value,"aria-orientation":g.value,onKeydown:M.value?void 0:G},[r("div",{class:["v-slider-thumb__surface",i.value,P.value],style:{...V.value}},null),ne(r("div",{class:["v-slider-thumb__ripple",i.value],style:V.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),r(Ce,{origin:"bottom center"},{default:()=>{var d;return[ne(r("div",{class:"v-slider-thumb__label-container"},[r("div",{class:["v-slider-thumb__label"]},[r("div",null,[((d=l["thumb-label"])==null?void 0:d.call(l,{modelValue:e.modelValue}))??e.modelValue.toFixed(S.value?R.value:1)])])]),[[_e,f.value&&e.focused||f.value==="always"]])]}})])}),{}}}),Ae=Y({start:{type:Number,required:!0},stop:{type:Number,required:!0},...oe()},"VSliderTrack"),je=Q()({name:"VSliderTrack",props:Ae(),emits:{},setup(e,t){let{slots:l}=t;const o=ue(ee);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:k,rounded:y,showTicks:v,tickSize:S,trackColor:_,trackFillColor:T,trackSize:f,vertical:g,min:x,max:L,indexFromEnd:M}=o,{roundedClasses:D}=xe(y),{backgroundColorClasses:N,backgroundColorStyles:R}=se(T),{backgroundColorClasses:F,backgroundColorStyles:q}=se(_),P=n(()=>`inset-${g.value?"block":"inline"}-${M.value?"end":"start"}`),i=n(()=>g.value?"height":"width"),V=n(()=>({[P.value]:"0%",[i.value]:"100%"})),m=n(()=>e.stop-e.start),b=n(()=>({[P.value]:I(e.start,"%"),[i.value]:I(m.value,"%")})),w=n(()=>v.value?(g.value?k.value.slice().reverse():k.value).map((s,z)=>{var p;const B=s.value!==x.value&&s.value!==L.value?I(s.position,"%"):void 0;return r("div",{key:s.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":s.position>=e.start&&s.position<=e.stop,"v-slider-track__tick--first":s.value===x.value,"v-slider-track__tick--last":s.value===L.value}],style:{[P.value]:B}},[(s.label||l["tick-label"])&&r("div",{class:"v-slider-track__tick-label"},[((p=l["tick-label"])==null?void 0:p.call(l,{tick:s,index:z}))??s.label])])}):[]);return Z(()=>r("div",{class:["v-slider-track",D.value,e.class],style:[{"--v-slider-track-size":I(f.value),"--v-slider-tick-size":I(S.value)},e.style]},[r("div",{class:["v-slider-track__background",F.value,{"v-slider-track__background--opacity":!!u.value||!T.value}],style:{...V.value,...q.value}},null),r("div",{class:["v-slider-track__fill",N.value],style:{...b.value,...R.value}},null),v.value&&r("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":v.value==="always"}]},[w.value])])),{}}}),Ue=Y({...Me(),...De(),...Re(),modelValue:{type:[Number,String],default:0}},"VSlider"),Ge=Q()({name:"VSlider",props:Ue(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:l,emit:o}=t;const u=J(),{rtlClasses:k}=W(),y=qe(e),v=Fe(e,"modelValue",void 0,i=>y.roundValue(i??y.min.value)),{min:S,max:_,mousePressed:T,roundValue:f,onSliderMousedown:g,onSliderTouchstart:x,trackContainerRef:L,position:M,hasLabels:D,readonly:N}=Ie({props:e,steps:y,onSliderStart:()=>{o("start",v.value)},onSliderEnd:i=>{let{value:V}=i;const m=f(V);v.value=m,o("end",m)},onSliderMove:i=>{let{value:V}=i;return v.value=f(V)},getActiveThumb:()=>{var i;return(i=u.value)==null?void 0:i.$el}}),{isFocused:R,focus:F,blur:q}=ze(e),P=n(()=>M(v.value));return Z(()=>{const i=re.filterProps(e),V=!!(e.label||l.label||l.prepend);return r(re,Ee({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||D.value,"v-slider--focused":R.value,"v-slider--pressed":T.value,"v-slider--disabled":e.disabled},k.value,e.class],style:e.style},i,{focused:R.value}),{...l,prepend:V?m=>{var b,w;return r(Pe,null,[((b=l.label)==null?void 0:b.call(l,m))??(e.label?r(Le,{id:m.id.value,class:"v-slider__label",text:e.label},null):void 0),(w=l.prepend)==null?void 0:w.call(l,m)])}:void 0,default:m=>{let{id:b,messagesId:w}=m;return r("div",{class:"v-slider__container",onMousedown:N.value?void 0:g,onTouchstartPassive:N.value?void 0:x},[r("input",{id:b.value,name:e.name||b.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:v.value},null),r(je,{ref:L,start:0,stop:P.value},{"tick-label":l["tick-label"]}),r(Ke,{ref:u,"aria-describedby":w.value,focused:R.value,min:S.value,max:_.value,modelValue:v.value,"onUpdate:modelValue":C=>v.value=C,position:P.value,elevation:e.elevation,onFocus:F,onBlur:q,ripple:e.ripple,name:e.name},{"thumb-label":l["thumb-label"]})])}})}),{}}});export{Ge as V};
