(this["webpackJsonpburguer-queen"]=this["webpackJsonpburguer-queen"]||[]).push([[0],{23:function(e,n,c){},25:function(e,n,c){},34:function(e,n,c){},35:function(e,n,c){},36:function(e,n,c){},37:function(e,n,c){"use strict";c.r(n);var t=c(1),a=c.n(t),i=c(16),s=c.n(i),o=(c(23),c(0)),r=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Ordenes por cocinar"})})},l=c.p+"static/media/logo2.1.8aa6ece0.png",d=c(2),j=(c(25),function(){var e=Object(d.f)();return Object(o.jsxs)("div",{className:"containerInicio",children:[Object(o.jsx)("nav",{className:"navBar",children:Object(o.jsx)("img",{src:l,alt:"palicoscafe",className:"logo"})}),Object(o.jsxs)("div",{className:"containerButton",children:[Object(o.jsx)("button",{onClick:function(){e.push("/menu")},className:"buttonIndex",id:"ButtonOne",children:"TOMAR PEDIDO"}),Object(o.jsx)("button",{onClick:function(){e.push("/ready")},className:"buttonIndex",id:"ButtonTwo",children:"PEDIDOS LISTOS"}),Object(o.jsx)("button",{onClick:function(){e.push("/cooking")},className:"buttonIndex",id:"ButtonThree",children:"COCINA"})]})]})}),u=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Ordenes listas"})})},m=c(8),A=c(14),b=c(15),O=c(7),h=(c(34),function(e){var n=e.actuallyData,c=e.addItemCart;return Object(o.jsx)("div",{className:"bodyMenu",children:Object(o.jsx)("div",{className:"divMenu",children:n.map((function(e){return Object(o.jsxs)("div",{className:"individualMenuB",children:[Object(o.jsx)("h2",{className:"menuName",children:e.name}),Object(o.jsx)("h3",{className:"menuInfo",children:e.info}),Object(o.jsx)("img",{src:e.img,alt:"menuimg",className:"menuImg"}),Object(o.jsxs)("p",{children:["$",e.price]}),Object(o.jsx)("button",{className:"menuBtn",onClick:function(){return c(e)},children:"AGREGAR"})]},e.id)}))})})}),p=(c(35),function(e){var n=e.actuallyCart,c=e.removeItemCart;return console.log(n),Object(o.jsx)("div",{className:"orderTable",children:Object(o.jsxs)("div",{className:"containerOrder",children:[Object(o.jsx)("p",{className:"pOrder",children:"DETALLE ORDEN"}),n.map((function(e){return Object(o.jsxs)("div",{className:"itemOrder",children:["".concat(e.name," $").concat(e.price," "),Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEdElEQVR4nO2aO2wcVRSGvzPetTcoGEWCpAIEBRVdClwAEoIiFkFuEsSj5tGGxFZMwxbIiYx5lICoEA0EEUVIIAuijSBCUUCpwAIpPLSbKHGQ8b7t3Z2ZQ7GeZYyCvb53HpGYv7rF3HOv/jnn3P+ceyFDhgwZMvx/IUktdHxhcb+o94j6jG25IYeOqPPN3MyBS0nsK34CVGV2fvE9RF/YyTSB9+emD7yMiMa1NYCROI0DzO6eeAl4zWDq/oe/+/XK+a8+itUTcnEaB0B5dmNUV2EK1ytvvaORe0Q5A4wL+hzwQZzbi58AuAtAYenk9OS5Ib7/7fj8l0sCE8DeeLcGTtwLBBAYOpZD38aeo4Za4OjC53fmNTfjKHfsdAGFw8Ae0GVBzgw3R6dA9gGrAqd2vqZWcUfnT7z6xMp23w4VAmOaP6aq03bpWPYpvDjkt8Fgz/Bz/jU/1/OB2e2+HC4EPC0hNHe+kZQgNBUtpb2NDBkyZLjlYSw0jrz1ya5dvfEJ34m/ntgKjo+3lq9fePuVp9dM5htL4YJ3+4cqeijeWm17qEDBHf8YeMZkvrkUVrnbeG7k0PtNZ5oXQ6IVlIdyOeHw4/cZm7HBp2f/oOf6KFw3tWFMgCoVAVxXeeDeccbyyaYC11V6rg+AA9dM7RiHgAOVYFxt9EzNGKPRDq2pKRCgqgMCas2uqRljNEMEqOiyqR3zJOhoyAM6xmZMUU/bAyQ3Mmht1ZrJh0DYAxyLJGhMwGjtwjLQBag2kg+BRtsdjD1fkiegWCz6wFVIPwd0xhop5ABAVCoA1RQIqLcGBKyaymCwJEClnwjrze7wHc+IEHiAYO7+YOsBQhnA9XSTSyaBQAcoanwCgK0HpKQFFGiuBUlQ0/MAGElFDbbXXTyvL4PRFEPA90MekKAYaoaOQLHQAGB9CrgDMVRtJecBjdBammYSPDl7cDW4L0gyB4QLIXXMZTBEcTeoXIFk1eBmGZyiB2ygDFBLkICwB3SkmzIB2u8LNNs9XC8ZORTKAd03jx7c9gJ0K1gToE6fAKWvCJNAyAOWbZ/QROABob5AKxkCQseglftDFASI809fIKE8EBRCNs3QANYE5EJiKImq0PWUTrfvATbN0AD2BKy5ITUYvxhqtHqDytNWBEEEBBSLT7WBFUhGC2yuOv30Ceij3xipNeOvB+qbusG3gAf0oWVIpiIMe8CIb9cLgOieyVUAOj2P9a4XkcmbI6pmaICoQmBwFP5VizcMQncQatMMDRBVCPwYjH4p16IxebNVVLlcqffH6GWbZmiASAhYzzVKwCrAt5dusFKNxwvOXrw2EEECp6OwGQkBG39iHmC96/LuZz/z/dKfkRyLrqtcvdHi1Ne/U/ohyHlSlbzzjrVxInwsPdYuLHRvW59QmGqtuZwubf0o3AI90OfnjkxanwAQ4WPpYvExd7RdOAS8DljH5n/gJ0f10RMzk19EZTCW19jH3ljcm/f1SdAHRdhtY0sRD/zrKpwvtC6e27iSy5AhQ4YMGSLA37T3BcFzRlWvAAAAAElFTkSuQmCC",alt:"delete",className:"xBtn",onClick:function(){return c(e)}})]},e.id)})),Object(o.jsx)("button",{className:"sendOrder",children:"ENVIAR"})]})})}),g=(c(36),function(){var e=Object(d.f)(),n=a.a.useState(O.MenuPrincipal),c=Object(b.a)(n,2),t=c[0],i=c[1],s=a.a.useState([]),r=Object(b.a)(s,2),j=r[0],u=r[1];return Object(o.jsxs)("div",{className:"containerMenu",children:[Object(o.jsx)("nav",{className:"navMenu",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVRIie2Uv0vDUBDHv5eEikUXEUcH/wM3KRRcBNtNRAVdpYujtKZODxFro45uTuKkDoKSFLG4VKF/hFMFN0GE0gabczGQ2h9Jyiui9jveu/f93N3jHvDfRL1c0nM3U6SqZwApKpy13Uzyqe/grFGIA3wJYOIr9MpEK/vp+bswPkqYZN2wUgAXPVAAGCPmgp43t8J4BepYiPOIHR09ZmDdx+wkUn3fEGLZ1g+sB2LEiFDaSyfiocGbh9fjEUe7ADAbpEgmPDbYWdSgvLixXCbRwtG6mehH5jQ1cAVgMggUAIgR00Blv7yOb6wb1hI1qARQYKgH73unZQRCCMUentlh4u12571oqFpWhRBOR7AQ9yN2tHbKwIIMoEem42ireX3uzQ00jboerRX7AAWApKJ83HoDTWAi2H2Auqo3sdplZA2LZRLbrVOon0umuu5xGH3vym9qP9bxADwA/z2wtD0O+9t16vhZQi2uKoHBpHBKErzCoJQEn4F+oT4BzjFp/bscpTUAAAAASUVORK5CYII=",alt:"Home",className:"btnHome",onClick:function(){e.push("/")}})}),Object(o.jsx)("div",{className:"imgLogo",children:Object(o.jsx)("img",{src:l,alt:"palicoscafe",className:"logo"})}),Object(o.jsxs)("div",{className:"subMenu",children:[Object(o.jsx)("section",{className:"client",children:Object(o.jsxs)("select",{id:"tableClient",children:[Object(o.jsx)("option",{selected:!0,value:"0",children:"Seleccione Mesa \u25bc"}),Object(o.jsx)("option",{value:"1",className:"tables1",id:"table1",children:"Mesa 1"}),Object(o.jsx)("option",{value:"2",className:"tables2",id:"table2",children:"Mesa 2"}),Object(o.jsx)("option",{value:"3",className:"tables3",id:"table3",children:"Mesa 3"}),Object(o.jsx)("option",{value:"4",className:"tables4",id:"table4",children:"Mesa 4"})]})}),Object(o.jsx)("section",{className:"waiter",children:Object(o.jsxs)("select",{id:"waiterlist",children:[Object(o.jsx)("option",{selected:!0,value:"0",children:"Mesero \u25bc"}),Object(o.jsx)("option",{value:"1",className:"waiters",id:"navirou",children:"Navirou"}),Object(o.jsx)("option",{value:"2",className:"waiters",id:"hinoa",children:"Hinoa"}),Object(o.jsx)("option",{value:"3",className:"waiters",id:"fuhen",children:"Fuhen"})]})}),Object(o.jsx)("button",{className:"buttonMenu",id:"breakfastButton",onClick:function(){i(O.Desayuno)},children:"DESAYUNO"}),Object(o.jsx)("button",{className:"buttonMenu",id:"principalMenuButton",onClick:function(){i(O.MenuPrincipal)},children:"PRINCIPAL"}),Object(o.jsx)("button",{className:"buttonMenu",id:"drinkButton",onClick:function(){i(O.Bebidas)},children:"BEBIDAS"})]}),Object(o.jsx)(h,{actuallyData:t,addItemCart:function(e){u([].concat(Object(A.a)(j),[e]))}}),Object(o.jsx)(p,{actuallyCart:j,removeItemCart:function(e){var n=Object(A.a)(j);n=n.filter((function(n){return n.id!==e.id})),u(n)}})]})});var x=function(){return Object(o.jsxs)(m.a,{children:[Object(o.jsx)("div",{className:"container"}),Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/menu",children:Object(o.jsx)(g,{})}),Object(o.jsx)(d.a,{path:"/cooking",children:Object(o.jsx)(r,{})}),Object(o.jsx)(d.a,{path:"/ready",children:Object(o.jsx)(u,{})}),Object(o.jsx)(d.a,{path:"/",children:Object(o.jsx)(j,{})})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;c(e),t(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),f()},7:function(e){e.exports=JSON.parse('{"Desayuno":[{"name":"FelyneLatte","info":"Caf\xe9 americano con leche","img":"https://imgur.com/NKzf1ie.png","price":1200,"id":1},{"name":"MelynxPan","info":"Pancakes con variedad de salsas dulces","img":"https://imgur.com/P5sl1uA.png","price":2300,"id":2}],"MenuPrincipal":[{"name":"CurryPao","info":"Curry de verduras, con variedad de prote\xednas","img":"https://imgur.com/jdifh0X.png","price":4500,"id":3},{"name":"Omelyne","info":"Omelette, acompa\xf1ado de huevo frito, ensalada y sopa","img":"https://imgur.com/Znze46n.png","price":5500,"id":4},{"name":"PanPanFestin","info":"Pan de huevo relleno de carne de cerdo y verduras salteadas","img":"https://imgur.com/JGweYrp.png","price":4300,"id":5}],"Bebidas":[{"name":"NyanCoffe","info":"Caf\xe9 fr\xedo con bola de helado de vainilla","img":"https://imgur.com/iqyRB8w.png","price":1200,"id":6},{"name":"PawCoffe","info":"Caf\xe9 helado con salsa de manjar y crema","img":"https://imgur.com/aLgej7l.png","price":1500,"id":7},{"name":"PoogieSoda","info":"Soda az\xfal con crema de leche y helado de pi\xf1a","img":"https://imgur.com/FAxjb9W.png","price":1300,"id":8},{"name":"RamuNyan","info":"Soda ramune con helado de pi\xf1a","img":"https://imgur.com/XrfKK1y.png","price":1100,"id":9}]}')}},[[37,1,2]]]);
//# sourceMappingURL=main.ce0ed664.chunk.js.map