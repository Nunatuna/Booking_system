import{r as a,u as c,b as i,d as v}from"./index-18sk25uz.js";function f({value:s,defaultValue:t,finalValue:o,onChange:e=()=>{}}){const[r,d]=a.useState(t!==void 0?t:o),n=(l,...u)=>{d(l),e==null||e(l,...u)};return s!==void 0?[s,e,!0]:[r,n,!1]}function y({classNames:s,styles:t,props:o,stylesCtx:e}){const r=c();return{resolvedClassNames:i({theme:r,classNames:s,props:o,stylesCtx:e||void 0}),resolvedStyles:v({theme:r,styles:t,props:o,stylesCtx:e||void 0})}}export{y as a,f as u};