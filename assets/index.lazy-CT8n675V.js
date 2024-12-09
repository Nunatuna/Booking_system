import{s as z,f as j,h as A,j as e,i as P,k as G,q as be,p as L,U as Pe,T as _e,z as Ne,x as B,y as re,u as Re,A as Ae,C as Ee,I as ze,D as Ge,r as R,v as Le,w as ke,E as $e,a as De,t as Fe,G as Te,B as Me,L as We,c as Ve}from"./index-18sk25uz.js";import{T as Ze,a as te}from"./Title-Bx4t_-jr.js";import{u as Ue,I as _}from"./use-input-props-DrM3MwWx.js";import{u as Be,a as qe}from"./use-resolved-styles-api-DYIBjSg8.js";var k={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};const oe={orientation:"horizontal"},Oe=G((t,{borderWidth:o})=>({group:{"--ai-border-width":be(o)}})),K=z((t,o)=>{const s=j("ActionIconGroup",oe,t),{className:a,style:l,classNames:n,styles:p,unstyled:i,orientation:u,vars:c,borderWidth:r,variant:g,mod:h,...v}=j("ActionIconGroup",oe,t),m=A({name:"ActionIconGroup",props:s,classes:k,className:a,style:l,classNames:n,styles:p,unstyled:i,vars:c,varsResolver:Oe,rootSelector:"group"});return e.jsx(P,{...m("group"),ref:o,variant:g,mod:[{"data-orientation":u},h],role:"group",...v})});K.classes=k;K.displayName="@mantine/core/ActionIconGroup";const Ke={},Xe=G((t,{size:o,radius:s,variant:a,gradient:l,color:n,autoContrast:p})=>{const i=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:l,variant:a||"filled",autoContrast:p});return{root:{"--ai-size":B(o,"ai-size"),"--ai-radius":s===void 0?void 0:re(s),"--ai-bg":n||a?i.background:void 0,"--ai-hover":n||a?i.hover:void 0,"--ai-hover-color":n||a?i.hoverColor:void 0,"--ai-color":i.color,"--ai-bd":n||a?i.border:void 0}}}),$=L((t,o)=>{const s=j("ActionIcon",Ke,t),{className:a,unstyled:l,variant:n,classNames:p,styles:i,style:u,loading:c,loaderProps:r,size:g,color:h,radius:v,__staticSelector:m,gradient:I,vars:w,children:C,disabled:y,"data-disabled":x,autoContrast:b,mod:D,...F}=s,N=A({name:["ActionIcon",m],props:s,className:a,style:u,classes:k,classNames:p,styles:i,unstyled:l,vars:w,varsResolver:Xe});return e.jsxs(Pe,{...N("root",{active:!y&&!c&&!x}),...F,unstyled:l,variant:n,size:g,disabled:y||c,ref:o,mod:[{loading:c,disabled:y||x},D],children:[e.jsx(_e,{mounted:!!c,transition:"slide-down",duration:150,children:T=>e.jsx(P,{component:"span",...N("loader",{style:T}),"aria-hidden":!0,children:e.jsx(Ne,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...r})})}),e.jsx(P,{component:"span",mod:{loading:c},...N("icon"),children:C})]})});$.classes=k;$.displayName="@mantine/core/ActionIcon";$.Group=K;const Ye={__staticSelector:"InputBase",withAria:!0},E=L((t,o)=>{const{inputProps:s,wrapperProps:a,...l}=Ue("InputBase",Ye,t);return e.jsx(_.Wrapper,{...a,children:e.jsx(_,{...s,...l,ref:o})})});E.classes={..._.classes,..._.Wrapper.classes};E.displayName="@mantine/core/InputBase";const He={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var ae={root:"m_8bffd616"};const Je={},X=L((t,o)=>{const s=j("Flex",Je,t),{classNames:a,className:l,style:n,styles:p,unstyled:i,vars:u,gap:c,rowGap:r,columnGap:g,align:h,justify:v,wrap:m,direction:I,...w}=s,C=A({name:"Flex",classes:ae,props:s,className:l,style:n,classNames:a,styles:p,unstyled:i,vars:u}),y=Re(),x=Ae(),b=Ee({styleProps:{gap:c,rowGap:r,columnGap:g,align:h,justify:v,wrap:m,direction:I},theme:y,data:He});return e.jsxs(e.Fragment,{children:[b.hasResponsiveStyles&&e.jsx(ze,{selector:`.${x}`,styles:b.styles,media:b.media}),e.jsx(P,{ref:o,...C("root",{className:x,style:Ge(b.inlineStyles)}),...w})]})});X.classes=ae;X.displayName="@mantine/core/Flex";var ne={root:"m_9e117634"};const Qe={},es=G((t,{radius:o,fit:s})=>({root:{"--image-radius":o===void 0?void 0:re(o),"--image-object-fit":s}})),Y=L((t,o)=>{const s=j("Image",Qe,t),{classNames:a,className:l,style:n,styles:p,unstyled:i,vars:u,onError:c,src:r,radius:g,fit:h,fallbackSrc:v,mod:m,...I}=s,[w,C]=R.useState(!r);R.useEffect(()=>C(!r),[r]);const y=A({name:"Image",classes:ne,props:s,className:l,style:n,classNames:a,styles:p,unstyled:i,vars:u,varsResolver:es});return w&&v?e.jsx(P,{component:"img",ref:o,src:v,...y("root"),onError:c,mod:["fallback",m],...I}):e.jsx(P,{component:"img",ref:o,...y("root"),src:r,onError:x=>{c==null||c(x),C(!0)},mod:m,...I})});Y.classes=ne;Y.displayName="@mantine/core/Image";const ss=({reveal:t})=>e.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:e.jsx("path",{d:t?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})});var q={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};const ts={visibilityToggleIcon:ss},os=G((t,{size:o})=>({root:{"--psi-icon-size":B(o,"psi-icon-size"),"--psi-button-size":B(o,"psi-button-size")}})),H=z((t,o)=>{const s=j("PasswordInput",ts,t),{classNames:a,className:l,style:n,styles:p,unstyled:i,vars:u,required:c,error:r,leftSection:g,disabled:h,id:v,variant:m,inputContainer:I,description:w,label:C,size:y,errorProps:x,descriptionProps:b,labelProps:D,withAsterisk:F,inputWrapperOrder:N,wrapperProps:T,radius:Q,rightSection:ie,rightSectionWidth:le,rightSectionPointerEvents:ce,leftSectionWidth:de,visible:pe,defaultVisible:ue,onVisibilityChange:me,visibilityToggleIcon:ye,visibilityToggleButtonProps:d,rightSectionProps:ge,leftSectionProps:he,leftSectionPointerEvents:ve,withErrorStyles:xe,mod:fe,...Ce}=s,M=Le(v),[W,Se]=Be({value:pe,defaultValue:ue,finalValue:!1,onChange:me}),V=()=>Se(!W),Z=A({name:"PasswordInput",classes:q,props:s,className:l,style:n,classNames:a,styles:p,unstyled:i,vars:u,varsResolver:os}),{resolvedClassNames:U,resolvedStyles:ee}=qe({classNames:a,styles:p,props:s}),{styleProps:je,rest:se}=ke(Ce),Ie=ye,we=e.jsx($,{...Z("visibilityToggle"),disabled:h,radius:Q,"aria-hidden":!d,tabIndex:-1,...d,variant:"subtle",color:"gray",unstyled:i,onTouchEnd:f=>{var S;f.preventDefault(),(S=d==null?void 0:d.onTouchEnd)==null||S.call(d,f),V()},onMouseDown:f=>{var S;f.preventDefault(),(S=d==null?void 0:d.onMouseDown)==null||S.call(d,f),V()},onKeyDown:f=>{var S;(S=d==null?void 0:d.onKeyDown)==null||S.call(d,f),f.key===" "&&(f.preventDefault(),V())},children:e.jsx(Ie,{reveal:W})});return e.jsx(_.Wrapper,{required:c,id:M,label:C,error:r,description:w,size:y,classNames:U,styles:ee,__staticSelector:"PasswordInput",errorProps:x,descriptionProps:b,unstyled:i,withAsterisk:F,inputWrapperOrder:N,inputContainer:I,variant:m,labelProps:{...D,htmlFor:M},mod:fe,...Z("root"),...je,...T,children:e.jsx(_,{component:"div",error:r,leftSection:g,size:y,classNames:{...U,input:$e(q.input,U.input)},styles:ee,radius:Q,disabled:h,__staticSelector:"PasswordInput",rightSectionWidth:le,rightSection:ie??we,variant:m,unstyled:i,leftSectionWidth:de,rightSectionPointerEvents:ce||"all",rightSectionProps:ge,leftSectionProps:he,leftSectionPointerEvents:ve,withAria:!1,withErrorStyles:xe,children:e.jsx("input",{required:c,"data-invalid":!!r||void 0,"data-with-left-section":!!g||void 0,...Z("innerInput"),disabled:h,id:M,ref:o,...se,autoComplete:se.autoComplete||"off",type:W?"text":"password"})})})});H.classes={...E.classes,...q};H.displayName="@mantine/core/PasswordInput";const rs={},O=z((t,o)=>{const{w:s,h:a,miw:l,mih:n,...p}=j("Space",rs,t);return e.jsx(P,{ref:o,...p,w:s,miw:l??s,h:a,mih:n??a})});O.displayName="@mantine/core/Space";const as={},J=z((t,o)=>{const s=j("TextInput",as,t);return e.jsx(E,{component:"input",ref:o,...s,__staticSelector:"TextInput"})});J.classes=E.classes;J.displayName="@mantine/core/TextInput";const ns="/Booking_system/assets/login-graphic-DjGvTA4x.png",is={display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},ls={display:"grid",gridTemplateColumns:"3fr 2fr"},cs={width:"90%"},ds={textDecoration:"none",backgroundColor:"#4C6EF5",padding:"6px 18px",borderRadius:"24px",textAlign:"center",color:"white",fontSize:"14px",fontWeight:"500"};function ps(){const[t,o]=R.useState(""),[s,a]=R.useState(""),[l,n]=R.useState(""),p=De(),i=Fe();async function u(){try{const{error:r}=await p.auth.signInWithPassword({email:t,password:s});r?(console.error("Error signing in:",r.message),n("Invalid email or password. Please try again.")):(n(""),i({to:"/OpretBooking"}))}catch(r){console.error("Unexpected error:",r),n("An unexpected error occurred. Please try again later.")}}const c=r=>{r.preventDefault(),u()};return e.jsx("div",{style:is,children:e.jsxs("div",{style:ls,children:[e.jsx(Y,{style:cs,radius:"md",src:ns}),e.jsxs(X,{justify:"center",direction:"column",style:{height:"100%"},children:[e.jsx(Ze,{style:{marginBottom:"1rem",color:"#364FC7"},order:1,children:"Login"}),e.jsx(te,{style:{marginBottom:"1rem",color:"#364FC7"},children:"Velkommen til Cphbusiness’ bookingsystem. Log ind for at se dine bookinger."}),e.jsxs("form",{children:[e.jsx(J,{placeholder:"email",value:t,onChange:r=>o(r.target.value)}),e.jsx(O,{h:"lg"}),e.jsx(H,{placeholder:"password",required:!0,value:s,onChange:r=>a(r.target.value)}),e.jsx(O,{h:"lg"}),l&&e.jsx(te,{color:"red",size:"14px",style:{marginBottom:"1rem"},children:l}),e.jsxs(Te,{grow:!0,children:[e.jsx(Me,{onClick:c,variant:"filled",color:"#364FC7",radius:"xl",children:"Login"}),e.jsx(We,{style:ds,variant:"filled",to:"/sign-up",children:"Sign Up"})]})]})]})]})})}const us={padding:"1rem 10rem"},xs=Ve("/")({component:ms});function ms(){return e.jsx("div",{style:us,children:e.jsx(ps,{})})}export{xs as Route};
