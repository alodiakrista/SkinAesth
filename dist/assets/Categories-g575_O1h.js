import{j as e,m as N,r as b,u as y}from"./index-edenBAHa.js";import{I as C}from"./index.esm-UmFNYDGW.js";import{g as v,a as k}from"./productsAPI-hIoBwC0F.js";import"./index.esm2017-5dfgHDqL.js";const F=({products:f,handleNavigateDetail:g,showFilters:d,toggleFilter:m,handleFilterChange:x,filters:t,handleRemoveFilter:h})=>e.jsxs("div",{className:"custom-container",children:[e.jsxs("div",{className:"flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"text-gray-400 text-sm font-manrope",children:"Home"}),e.jsx("p",{className:"text-gray-400 text-sm font-manrope",children:">"}),e.jsx("p",{className:"font-medium text-sm font-manrope",children:"Categories"})]}),e.jsxs("h1",{className:"text-xl font-semibold font-manrope mt-4 lg:mt-0",children:["Skincare ",e.jsxs("span",{className:"text-sm font-semibold",children:["(",f.length,")"]})]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 my-6",children:[e.jsxs("div",{className:"flex-none",children:[e.jsx("h2",{className:"text-lg font-semibold font-manrope",children:"Filter"}),e.jsx("hr",{className:"my-2"}),t&&Object.values(t).some(s=>s.length>0)&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-sm font-semibold font-manrope",children:"Applied Filters"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mt-4",children:Object.entries(t).map(([s,a])=>a.map(p=>e.jsxs("div",{className:"px-4 py-2 border border-gray-400 text-sm text-center rounded-md flex items-center justify-between",children:[`${p}`,e.jsx("button",{onClick:()=>h(s,p),children:e.jsx(C,{})})]},`${s}-${p}`)))}),e.jsx("hr",{className:"my-4"})]}),e.jsxs("div",{className:"flex flex-col gap-4 my-4",children:[e.jsxs("div",{className:"flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md",children:[e.jsxs("button",{onClick:()=>m("category"),className:"font-medium font-manrope items-center flex justify-between text-sm",children:["Category",e.jsx(N,{})]}),d.category&&e.jsxs("ul",{className:"w-full flex flex-col gap-3 text-sm",children:[e.jsx("hr",{className:"mb-2"}),["Cleanser","Toner","Moisturizer","Facial Wash","Sunscreen","Serum"].map(s=>{var a;return e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:s.toLowerCase(),onChange:x,value:s,name:"category",checked:((a=t.category)==null?void 0:a.includes(s))||!1}),e.jsx("label",{htmlFor:s.toLowerCase(),children:s})]},s)})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md",children:[e.jsxs("button",{onClick:()=>m("skinCondition"),className:"font-medium font-manrope items-center flex justify-between text-sm",children:["Skin Conditions",e.jsx(N,{})]}),d.skinCondition&&e.jsxs("ul",{className:"w-full flex flex-col gap-3 text-sm",children:[e.jsx("hr",{className:"mb-2"}),["Kulit Kering","Kulit Berminyak","Kulit Normal","Kulit Kombinasi","Kulit Sensitif"].map(s=>{var a;return e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:s.toLowerCase(),onChange:x,value:s,name:"skinCondition",checked:((a=t.skinCondition)==null?void 0:a.includes(s))||!1}),e.jsx("label",{htmlFor:s.toLowerCase(),children:s})]},s)})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md",children:[e.jsxs("button",{onClick:()=>m("price"),className:"font-medium font-manrope items-center flex justify-between text-sm",children:["Price",e.jsx(N,{})]}),d.price&&e.jsxs("ul",{className:"w-full flex flex-col gap-3 text-sm",children:[e.jsx("hr",{className:"mb-2"}),["UpTo100","Under100"].map(s=>{var a;return e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:s.toLowerCase(),onChange:x,value:s.toLowerCase(),name:"price",checked:((a=t.price)==null?void 0:a.includes(s.toLowerCase()))||!1}),e.jsx("label",{htmlFor:s.toLowerCase(),children:s})]},s)})]})]})]})]}),e.jsx("div",{className:"flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:f.map(s=>e.jsxs("div",{className:"rounded-md border border-gray-400 overflow-hidden bg-white px-4 py-6",onClick:()=>g(s.id),children:[e.jsx("div",{className:"aspect-w-3 aspect-h-4 sm:aspect-h-5 md:aspect-h-6 lg:aspect-h-7 overflow-hidden",children:e.jsx("img",{src:s.imageUrl,alt:"Product Image",className:"object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-2 mt-4",children:[e.jsx("p",{className:"text-base sm:text-lg font-semibold font-manrope text-pink-300 truncate",children:s.product_name}),e.jsx("p",{className:"font-manrope text-gray-400 text-sm sm:text-base line-clamp-2",children:s.product_subname}),e.jsxs("p",{className:"font-semibold font-manrope text-gray-400 text-sm sm:text-base",children:["Rp",s.product_price]})]})]},s.product_id))})]})]}),I=()=>{const[f,g]=b.useState([]),d=y(),[m,x]=b.useState({category:!1,skinCondition:!1,price:!1}),[t,h]=b.useState([]);b.useEffect(()=>{(async()=>{const o=await v(),i=await Promise.all(o.map(async n=>{const c=await k(n.product_img);return{...n,imageUrl:c}}));if(Object.values(t).flat().length===0)g(i);else{const n=i.filter(c=>Object.keys(t).every(u=>t[u].length?t[u].some(j=>{switch(u){case"category":return c.product_category===j;case"price":return j==="under100"?c.product_price<100:j==="upto100"?c.product_price>100:!0;case"skinCondition":return c.product_types.split(" | ").includes(j);default:return!0}}):!0));g(n)}})(),console.log(t)},[t]);const s=l=>{d(`/detail-product/${l}`)},a=l=>{x(o=>({...o,[l]:!o[l]}))},p=l=>{const{checked:o,value:i,name:r}=l.target;h(n=>{const c=n[r]||[];return o?{...n,[r]:[...c,i]}:{...n,[r]:c.filter(u=>u!==i)}})},w=(l,o)=>{h(i=>{const r={...i};return r[l]=r[l].filter(n=>n!==o),r[l].length===0&&delete r[l],r})};return e.jsx(F,{products:f,handleNavigateDetail:s,filters:t,showFilters:m,toggleFilter:a,handleFilterChange:p,handleRemoveFilter:w})};export{I as default};