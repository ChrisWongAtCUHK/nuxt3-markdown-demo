import{m as i,q as o,N as c,o as h,I as a,a4 as u,a5 as p,a1 as d,$ as l,Z as m}from"./BdDh1__8.js";const f="img",S=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(d(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return m(e,t.src)}return t.src});return(s,e)=>(h(),c(u(a(f)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
