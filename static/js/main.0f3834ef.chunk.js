(this["webpackJsonpfurniture-visualizer-react-app"]=this["webpackJsonpfurniture-visualizer-react-app"]||[]).push([[0],{53:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(35),c=a.n(n),i=(a(53),a(17)),s=a(18),o=a(9),l=a(64),j=a(33),h=a(42),m=a(10),b=Object(j.proxy)({current:null,items:{pillow:"#37372f",chair:"#2f1f33"}});function u(){var e=Object(j.useSnapshot)(b);return Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{className:"picker",color:e.items[e.current],onChange:function(t){return b.items[e.current]=t}}),Object(m.jsx)("h1",{className:"part",children:e.current})]})}function d(e){var t=Object(r.useRef)(),a=Object(j.useSnapshot)(b),n=Object(l.a)("models/armchair.glb"),c=n.nodes,i=n.materials;return Object(m.jsx)("group",Object(o.a)(Object(o.a)({ref:t},e),{},{dispose:null,onPointerDown:function(e){e.stopPropagation(),e.object.material.name.startsWith("fabric")?b.current=null:b.current=e.object.material.name},onPointerMissed:function(){return b.current=null},children:Object(m.jsxs)("group",{children:[Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.legs.geometry,material:i["fabric.002"]}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.base.geometry,material:c.base.material,"material-color":a.items.chair,"material-name":"chair"}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.chair.geometry,material:c.chair.material,"material-color":a.items.chair,"material-name":"chair"}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.cushion.geometry,material:c.cushion.material,"material-color":a.items.chair,"material-name":"chair"}),Object(m.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.pillow.geometry,material:i["fabric.003"],"material-color":a.items.pillow,"material-name":"pillow"})]})}))}l.a.preload("models/armchair.glb");var O,p,x,f,g,w,y,v=a(12),S=a(63),P=a(65),k=a(66),z=function(){return Object(m.jsxs)(I,{children:[Object(m.jsxs)(v.a,{shadows:!0,dpr:[1,2],camera:{position:[0,3,4],fov:50},children:[Object(m.jsx)("ambientLight",{intensity:.5}),Object(m.jsx)("spotLight",{intensity:.5,angle:.1,penumbra:1,position:[10,15,10],castShadow:!0}),Object(m.jsxs)(r.Suspense,{fallback:Object(m.jsx)(S.a,{children:Object(m.jsx)("h1",{children:"loading..."})}),children:[Object(m.jsx)(d,{scale:2,rotation:[0,0,0],position:[0,-1,0]}),Object(m.jsx)(P.a,{preset:"city"})]}),Object(m.jsx)(k.a,{enablePan:!1,enableZoom:!1,minPolarAngle:Math.PI/2-.2,maxPolarAngle:Math.PI/2+.2})]}),Object(m.jsx)(u,{})]})},I=s.a.div(O||(O=Object(i.a)(["\n    width: 100%;\n    height: calc(100vh - 140px);\n"]))),A=function(){return Object(m.jsxs)(M,{children:[Object(m.jsx)(C,{src:"images/logo.png",alt:"logo"}),Object(m.jsx)(J,{children:"Customize your furniture like never before."}),Object(m.jsxs)(L,{children:["Select from 100s of styles created by"," ",Object(m.jsx)(N,{children:"Award Winning"})," artists."]})]})},M=s.a.div(p||(p=Object(i.a)(["\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: calc(100vh - 140px);\n"]))),C=s.a.img(x||(x=Object(i.a)(["\n    width: 300px;\n"]))),J=s.a.h1(f||(f=Object(i.a)(["\n    font-family: 'Inter', sans-serif;\n    font-size: 80px;\n    color: #e76f51;\n"]))),L=s.a.p(g||(g=Object(i.a)(["\n    color: #264653;\n    font-size: 20px;\n"]))),N=s.a.span(w||(w=Object(i.a)(["\n    background: #e9c46a;\n"]))),W=function(){return Object(m.jsxs)(B,{children:[Object(m.jsx)(A,{}),Object(m.jsx)(z,{})]})},B=s.a.div(y||(y=Object(i.a)(["\n    display: flex;\n    padding: 70px;\n"])));function D(){return Object(m.jsx)(W,{})}c.a.render(Object(m.jsx)(D,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0f3834ef.chunk.js.map