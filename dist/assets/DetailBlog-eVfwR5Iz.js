import{j as e,F as c,h as m,i as d,r}from"./index-edenBAHa.js";import{b as x,a as g,c as h}from"./blogsAPI-OAnYojBI.js";import"./index.esm2017-5dfgHDqL.js";const p=({blog:s})=>e.jsxs("div",{children:[e.jsx("section",{className:"blog__header bg-pink-400",children:e.jsx("div",{className:"custom-container",children:e.jsxs("div",{className:"flex flex-col gap-4 items-center my-16 lg:my-32",children:[e.jsxs("p",{className:"blog__title font-manrope text-sm text-white",children:[s.blog_author," | ",s.blog_subtitle]}),e.jsx("h1",{className:"blog__subtitle text-4xl lg:text-5xl text-center font-playfair font-semibold text-white",children:s.blog_title})]})})}),e.jsxs("section",{className:"flex flex-col lg:flex-row gap-8 mt-4 lg:mt-12 mb-8 lg:mb-24 custom-container",children:[e.jsx("div",{className:"flex-none lg:w-1/3",children:e.jsxs("div",{className:"bg-pink-200 px-4 pt-4 pb-8 rounded-md border border-pink-400",children:[e.jsxs("div",{className:"flex items-center flex-col lg:flex-row gap-4 lg:gap-6 rounded-md",children:[e.jsx("div",{className:"overflow-hidden",children:e.jsx("img",{src:s.authorUrl,alt:"Author Image",className:"w-24 lg:w-32 rounded-full"})}),e.jsxs("div",{className:"flex flex-col gap-2 text-center lg:text-left",children:[e.jsxs("p",{className:"font-semibold font-playfair",children:["Author - ",s.blog_author]}),e.jsx("p",{className:"text-sm font-manrope",children:s.blog_author_jobs}),e.jsx("div",{className:"px-2 py-2 bg-pink-400 text-sm text-white mt-2",children:s.blog_subtitle})]})]}),e.jsx("p",{className:"my-4 font-manrope text-sm lg:w-80",children:s.blog_author_about}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("p",{className:"font-playfair font-semibold text-sm",children:"Share us on:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 border border-pink-400",children:e.jsx("a",{href:"https://discord.gg/your_discord_invite",target:"_blank",rel:"noopener noreferrer",children:e.jsx(c,{})})}),e.jsx("div",{className:"p-2 border border-pink-400",children:e.jsx("a",{href:"https://www.instagram.com/your_instagram_username",target:"_blank",rel:"noopener noreferrer",children:e.jsx(m,{})})})]})]})]})}),e.jsx("div",{className:"flex-wrap lg:w-2/3",children:s.blog_details&&s.blog_details.split(`
`).map((a,t)=>e.jsx("p",{className:`font-manrope ${t>0?"mt-4":""}`,children:a},t))})]})]}),_=()=>{const{id:s}=d(),[a,t]=r.useState({});return r.useEffect(()=>{(async()=>{const l=await x(s),o=await g(l.blog_img),i=await h(l.blog_author_img),n=l.blog_details.replace(/\\n/g,`
`);t({...l,imageUrl:o,authorUrl:i,blog_details:n})})()},[]),e.jsx(p,{blog:a})};export{_ as default};