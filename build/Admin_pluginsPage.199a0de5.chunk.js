"use strict";(self.webpackChunkbackend_dogo=self.webpackChunkbackend_dogo||[]).push([[3677],{51397:(x,y,t)=>{t.r(y),t.d(y,{default:()=>F});var e=t(53547),c=t(68547),P=t(15482),E=t(97132),p=t(92699),T=t(67422),d=t(35395),f=t(80117),m=t(33483),l=t(43546),M=t(23724),L=t(63955),C=(n,s,o)=>new Promise((h,i)=>{var u=a=>{try{r(o.next(a))}catch(g){i(g)}},v=a=>{try{r(o.throw(a))}catch(g){i(g)}},r=a=>a.done?h(a.value):Promise.resolve(a.value).then(u,v);r((o=o.apply(n,s)).next())});const b=()=>C(void 0,null,function*(){const{data:n}=yield L.be.get("/admin/plugins");return n}),I=n=>{const s=(0,c.useNotification)();return(0,M.useQuery)("list-enabled-plugins",()=>b(),{onSuccess:()=>{n&&n()},onError:()=>{s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},N=()=>{const{formatMessage:n}=(0,E.useIntl)(),{notifyStatus:s}=(0,T.useNotifyAT)();(0,c.useFocusWhenNavigate)();const o=n({id:"global.plugins",defaultMessage:"Plugins"}),h=()=>{s(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:o}))},{status:i,data:u}=I(h);return i!=="success"&&i!=="error"?e.createElement(d.Layout,null,e.createElement(f.Main,{"aria-busy":!0},e.createElement(c.LoadingIndicatorPage,null))):e.createElement(d.Layout,null,e.createElement(f.Main,null,e.createElement(d.HeaderLayout,{title:o,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(d.ContentLayout,null,e.createElement(l.Table,{colCount:2,rowCount:(u==null?void 0:u.plugins.length)+1},e.createElement(l.Thead,null,e.createElement(l.Tr,null,e.createElement(l.Th,null,e.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(l.Th,null,e.createElement(m.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(l.Tbody,null,u.plugins.map(({name:r,displayName:a,description:g})=>e.createElement(l.Tr,{key:r},e.createElement(l.Td,null,e.createElement(m.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),e.createElement(l.Td,null,e.createElement(m.Typography,{textColor:"neutral800"},g)))))))))},F=()=>{const{formatMessage:n}=(0,E.useIntl)(),s=n({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(c.CheckPagePermissions,{permissions:p.Z.marketplace.main},e.createElement(P.Helmet,{title:s}),e.createElement(N,null))}}}]);