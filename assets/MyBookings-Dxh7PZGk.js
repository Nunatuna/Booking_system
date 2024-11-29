import{X as b,r as d,j as e,v as u,M as C,Q as x,g as h}from"./index-CshX0Usn.js";import{S as k,N as S}from"./Spinner-DzCF6IO0.js";import{P as p}from"./index-Bh6HxMF5.js";import{T as f}from"./Text-BwQU1Wt_.js";import{T as w}from"./Title-BWHtgqtw.js";function I(t){return b({...t,select:s=>t.select?t.select(s.context):s.context})}const y=({roomId:t,onCancel:s})=>{const[l,i]=d.useState(!1),[c,a]=d.useState(!1),o=async()=>{i(!0);const r=h(),{error:n}=await r.from("MeetingRooms").delete().eq("id",t);n?console.error("Error deleting the booking:",n):s(t),i(!1),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{style:{marginLeft:"auto"},onClick:()=>a(!0),disabled:l,variant:"filled",color:"#364FC7",radius:"xl",children:"Cancel Booking"}),e.jsxs(C,{opened:c,onClose:()=>a(!1),title:"Cancel Booking",centered:!0,children:[e.jsx(f,{style:{marginBottom:"20px"},children:"Are you sure you want to cancel this booking?"}),e.jsxs(x,{justify:"space-between",grow:!0,children:[e.jsx(u,{variant:"default",onClick:()=>a(!1),disabled:l,children:"No, Keep It"}),e.jsx(u,{onClick:o,disabled:l,color:"#364FC7",variant:"filled",children:"Cancel Booking"})]})]})]})};y.propTypes={roomId:p.number.isRequired,onCancel:p.func.isRequired};const B={display:"flex",justifyContent:"center",marginTop:"200px"},R={display:"flex",flexDirection:"column",padding:"40px",maxWidth:"800px",margin:"0 auto",backgroundColor:"#ffffff",border:"1px solid #e3e3e3",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},v={justifyContent:"center",backgroundColor:"#DBE4FF",borderRadius:"20px",padding:"20px",gap:"15px"},M={flex:"100%",padding:"0.8rem 1.5rem",border:"1px solid #364FC7",borderRadius:"2rem",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},N=()=>{const[t,s]=d.useState([]),[l,i]=d.useState(!0);d.useEffect(()=>{async function o(){i(!0);const r=h(),{data:{user:n},error:g}=await r.auth.getUser();if(g){console.error("Error getting user:",g),i(!1);return}if(n){const{data:j,error:m}=await r.from("MeetingRooms").select("id, Lokale, Dato, Tid, Isbooked").ilike("User",n.email);m?console.error("Error fetching meeting rooms:",m):s(j)}else console.error("No user logged in.");i(!1)}o()},[]);const c=o=>{s(r=>r.filter(n=>n.id!==o))};if(l)return e.jsxs("div",{style:B,children:[e.jsx(k,{})," "]});const a=o=>new Date(o).toLocaleString("da-DK",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1});return e.jsxs("div",{style:R,children:[e.jsx(w,{c:"#364FC7",order:1,style:{marginBottom:"2rem"},children:"My Bookings"}),e.jsx("div",{style:v,children:t.length>0?e.jsx(x,{justify:"space-between",gap:"xs",children:t.map(o=>e.jsxs(x,{style:M,children:[e.jsxs("div",{children:[e.jsx(f,{c:"#364FC7",fw:500,size:"md",children:o.Lokale}),e.jsx(f,{fw:400,size:"md",children:a(o.Dato)})]}),e.jsx(y,{roomId:o.id,onCancel:c})]},o.id))}):e.jsxs("div",{children:[e.jsx("p",{children:"You don’t have any bookings yet."}),e.jsx(S,{})]})})]})};export{N as M,I as u};