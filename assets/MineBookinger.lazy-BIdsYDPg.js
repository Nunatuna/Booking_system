import{e as b,r as d,j as e,B as u,M as k,G as x,a as h,c as C}from"./index-18sk25uz.js";import{P as p,S as B,N as R}from"./Spinner-DFkIJYwz.js";import{a as f,T as S}from"./Title-Bx4t_-jr.js";import{N as w}from"./NavBar-CkU5bnsS.js";function v(t){return b({...t,select:s=>t.select?t.select(s.context):s.context})}const y=({roomId:t,onCancel:s})=>{const[l,i]=d.useState(!1),[c,a]=d.useState(!1),o=async()=>{i(!0);const n=h(),{error:r}=await n.from("MeetingRooms").delete().eq("id",t);r?console.error("Error deleting the booking:",r):s(t),i(!1),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{style:{marginLeft:"auto"},onClick:()=>a(!0),disabled:l,variant:"filled",color:"#364FC7",radius:"xl",children:"Cancel Booking"}),e.jsxs(k,{opened:c,onClose:()=>a(!1),title:"Cancel Booking",centered:!0,children:[e.jsx(f,{style:{marginBottom:"20px"},children:"Are you sure you want to cancel this booking?"}),e.jsxs(x,{justify:"space-between",grow:!0,children:[e.jsx(u,{variant:"default",onClick:()=>a(!1),disabled:l,children:"No, Keep It"}),e.jsx(u,{onClick:o,disabled:l,color:"#364FC7",variant:"filled",children:"Cancel Booking"})]})]})]})};y.propTypes={roomId:p.number.isRequired,onCancel:p.func.isRequired};const M={display:"flex",justifyContent:"center",marginTop:"200px"},F={display:"flex",flexDirection:"column",padding:"40px",maxWidth:"800px",margin:"0 auto",backgroundColor:"#ffffff",border:"1px solid #e3e3e3",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},T={justifyContent:"center",backgroundColor:"#DBE4FF",borderRadius:"20px",padding:"20px",gap:"15px"},E={flex:"100%",padding:"0.8rem 1.5rem",border:"1px solid #364FC7",borderRadius:"2rem",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},D=()=>{const[t,s]=d.useState([]),[l,i]=d.useState(!0);d.useEffect(()=>{async function o(){i(!0);const n=h(),{data:{user:r},error:g}=await n.auth.getUser();if(g){console.error("Error getting user:",g),i(!1);return}if(r){const{data:j,error:m}=await n.from("MeetingRooms").select("id, Lokale, Dato, Tid, Isbooked").ilike("User",r.email);m?console.error("Error fetching meeting rooms:",m):s(j)}else console.error("No user logged in.");i(!1)}o()},[]);const c=o=>{s(n=>n.filter(r=>r.id!==o))};if(l)return e.jsxs("div",{style:M,children:[e.jsx(B,{})," "]});const a=o=>new Date(o).toLocaleString("da-DK",{year:"numeric",month:"2-digit",day:"2-digit",hour12:!1});return e.jsxs("div",{style:F,children:[e.jsx(S,{c:"#364FC7",order:1,style:{marginBottom:"2rem"},children:"My Bookings"}),e.jsx("div",{style:T,children:t.length>0?e.jsx(x,{justify:"space-between",gap:"xs",children:t.map(o=>e.jsxs(x,{style:E,children:[e.jsxs("div",{children:[e.jsx(f,{c:"#364FC7",fw:500,size:"md",children:o.Lokale}),e.jsxs(f,{fw:400,size:"md",children:[a(o.Dato),", kl.",o.Tid]})]}),e.jsx(y,{roomId:o.id,onCancel:c})]},o.id))}):e.jsxs("div",{children:[e.jsx("p",{children:"You don’t have any bookings yet."}),e.jsx(R,{})]})})]})},G=C("/MineBookinger")({component:L});function L(){const t=v({from:"/MineBookinger"});return console.log(t),e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(D,{})]})}export{G as Route};
