import{S as ve,f as L,u as P,o as C,j as b,B as j,q as T,z as W,i as D,p as ye,r as se,D as he,N as ae,y as re,s as fe}from"./index-DOvz6QZO.js";const[_e,Q]=ve({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var I={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const oe={},Se=T((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${W(e)} - ${D(2)})`}})),U=L((s,e)=>{const t=P("InputDescription",oe,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,vars:u,size:m,__staticSelector:_,__inheritStyles:v=!0,variant:S,...l}=P("InputDescription",oe,t),o=Q(),n=C({name:["InputWrapper",_],props:t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,rootSelector:"description",vars:u,varsResolver:Se}),d=v&&(o==null?void 0:o.getStyles)||n;return b.jsx(j,{component:"p",ref:e,variant:S,size:m,...d("description",o!=null&&o.getStyles?{className:i,style:a}:void 0),...l})});U.classes=I;U.displayName="@mantine/core/InputDescription";const be={},Ie=T((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${W(e)} - ${D(2)})`}})),X=L((s,e)=>{const t=P("InputError",be,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,vars:u,size:m,__staticSelector:_,__inheritStyles:v=!0,variant:S,...l}=t,o=C({name:["InputWrapper",_],props:t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,rootSelector:"error",vars:u,varsResolver:Ie}),n=Q(),d=v&&(n==null?void 0:n.getStyles)||o;return b.jsx(j,{component:"p",ref:e,variant:S,size:m,...d("error",n!=null&&n.getStyles?{className:i,style:a}:void 0),...l})});X.classes=I;X.displayName="@mantine/core/InputError";const ne={labelElement:"label"},ge=T((s,{size:e})=>({label:{"--input-label-size":W(e),"--input-asterisk-color":void 0}})),Y=L((s,e)=>{const t=P("InputLabel",ne,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,vars:u,labelElement:m,size:_,required:v,htmlFor:S,onMouseDown:l,children:o,__staticSelector:n,variant:d,mod:$,...c}=P("InputLabel",ne,t),r=C({name:["InputWrapper",n],props:t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,rootSelector:"label",vars:u,varsResolver:ge}),g=Q(),E=(g==null?void 0:g.getStyles)||r;return b.jsxs(j,{...E("label",g!=null&&g.getStyles?{className:i,style:a}:void 0),component:m,variant:d,size:_,ref:e,htmlFor:m==="label"?S:void 0,mod:[{required:v},$],onMouseDown:N=>{l==null||l(N),!N.defaultPrevented&&N.detail>1&&N.preventDefault()},...c,children:[o,v&&b.jsx("span",{...E("required"),"aria-hidden":!0,children:" *"})]})});Y.classes=I;Y.displayName="@mantine/core/InputLabel";const ie={},ee=L((s,e)=>{const t=P("InputPlaceholder",ie,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,vars:u,__staticSelector:m,variant:_,error:v,mod:S,...l}=P("InputPlaceholder",ie,t),o=C({name:["InputPlaceholder",m],props:t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,rootSelector:"placeholder"});return b.jsx(j,{...o("placeholder"),mod:[{error:!!v},S],component:"span",variant:_,ref:e,...l})});ee.classes=I;ee.displayName="@mantine/core/InputPlaceholder";function Ne(s,{hasDescription:e,hasError:t}){const p=s.findIndex(u=>u==="input"),i=s.slice(0,p),a=s.slice(p+1),y=e&&i.includes("description")||t&&i.includes("error");return{offsetBottom:e&&a.includes("description")||t&&a.includes("error"),offsetTop:y}}const Pe={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},$e=T((s,{size:e})=>({label:{"--input-label-size":W(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${W(e)} - ${D(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${W(e)} - ${D(2)})`}})),te=L((s,e)=>{const t=P("InputWrapper",Pe,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,vars:u,size:m,variant:_,__staticSelector:v,inputContainer:S,inputWrapperOrder:l,label:o,error:n,description:d,labelProps:$,descriptionProps:c,errorProps:r,labelElement:g,children:E,withAsterisk:N,id:R,required:x,__stylesApiProps:O,mod:F,...V}=t,A=C({name:["InputWrapper",v],props:O||t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,vars:u,varsResolver:$e}),w={size:m,variant:_,__staticSelector:v},z=ye(R),Z=typeof N=="boolean"?N:x,G=(r==null?void 0:r.id)||`${z}-error`,H=(c==null?void 0:c.id)||`${z}-description`,J=z,k=!!n&&typeof n!="boolean",h=!!d,K=`${k?G:""} ${h?H:""}`,q=K.trim().length>0?K.trim():void 0,M=($==null?void 0:$.id)||`${z}-label`,le=o&&b.jsx(Y,{labelElement:g,id:M,htmlFor:J,required:Z,...w,...$,children:o},"label"),ce=h&&b.jsx(U,{...c,...w,size:(c==null?void 0:c.size)||w.size,id:(c==null?void 0:c.id)||H,children:d},"description"),pe=b.jsx(se.Fragment,{children:S(E)},"input"),de=k&&se.createElement(X,{...r,...w,size:(r==null?void 0:r.size)||w.size,key:"error",id:(r==null?void 0:r.id)||G},n),ue=l.map(me=>{switch(me){case"label":return le;case"input":return pe;case"description":return ce;case"error":return de;default:return null}});return b.jsx(_e,{value:{getStyles:A,describedBy:q,inputId:J,labelId:M,...Ne(l,{hasDescription:h,hasError:k})},children:b.jsx(j,{ref:e,variant:_,size:m,mod:[{error:!!n},F],...A("root"),...V,children:ue})})});te.classes=I;te.displayName="@mantine/core/InputWrapper";const we={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},ze=T((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":re(e.size,"input-height"),"--input-fz":W(e.size),"--input-radius":e.radius===void 0?void 0:fe(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?D(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?D(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?re(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),B=he((s,e)=>{const t=P("Input",we,s),{classNames:p,className:i,style:a,styles:y,unstyled:f,required:u,__staticSelector:m,__stylesApiProps:_,size:v,wrapperProps:S,error:l,disabled:o,leftSection:n,leftSectionProps:d,leftSectionWidth:$,rightSection:c,rightSectionProps:r,rightSectionWidth:g,rightSectionPointerEvents:E,leftSectionPointerEvents:N,variant:R,vars:x,pointer:O,multiline:F,radius:V,id:A,withAria:w,withErrorStyles:z,mod:Z,inputSize:G,...H}=t,{styleProps:J,rest:k}=ae(H),h=Q(),K={offsetBottom:h==null?void 0:h.offsetBottom,offsetTop:h==null?void 0:h.offsetTop},q=C({name:["Input",m],props:_||t,classes:I,className:i,style:a,classNames:p,styles:y,unstyled:f,stylesCtx:K,rootSelector:"wrapper",vars:x,varsResolver:ze}),M=w?{required:u,disabled:o,"aria-invalid":!!l,"aria-describedby":h==null?void 0:h.describedBy,id:(h==null?void 0:h.inputId)||A}:{};return b.jsxs(j,{...q("wrapper"),...J,...S,mod:[{error:!!l&&z,pointer:O,disabled:o,multiline:F,"data-with-right-section":!!c,"data-with-left-section":!!n},Z],variant:R,size:v,children:[n&&b.jsx("div",{...d,"data-position":"left",...q("section",{className:d==null?void 0:d.className,style:d==null?void 0:d.style}),children:n}),b.jsx(j,{component:"input",...k,...M,ref:e,required:u,mod:{disabled:o,error:!!l&&z},variant:R,__size:G,...q("input")}),c&&b.jsx("div",{...r,"data-position":"right",...q("section",{className:r==null?void 0:r.className,style:r==null?void 0:r.style}),children:c})]})});B.classes=I;B.Wrapper=te;B.Label=Y;B.Error=X;B.Description=U;B.Placeholder=ee;B.displayName="@mantine/core/Input";function We(s,e,t){const p=P(s,e,t),{label:i,description:a,error:y,required:f,classNames:u,styles:m,className:_,unstyled:v,__staticSelector:S,__stylesApiProps:l,errorProps:o,labelProps:n,descriptionProps:d,wrapperProps:$,id:c,size:r,style:g,inputContainer:E,inputWrapperOrder:N,withAsterisk:R,variant:x,vars:O,mod:F,...V}=p,{styleProps:A,rest:w}=ae(V),z={label:i,description:a,error:y,required:f,classNames:u,className:_,__staticSelector:S,__stylesApiProps:l||p,errorProps:o,labelProps:n,descriptionProps:d,unstyled:v,styles:m,size:r,style:g,inputContainer:E,inputWrapperOrder:N,withAsterisk:R,variant:x,id:c,mod:F,...$};return{...w,classNames:u,styles:m,unstyled:v,wrapperProps:{...z,...A},inputProps:{required:f,classNames:u,styles:m,unstyled:v,size:r,__staticSelector:S,__stylesApiProps:l||p,error:y,variant:x,id:c}}}export{B as I,We as u};
