(this["webpackJsonppractice-project1"]=this["webpackJsonppractice-project1"]||[]).push([[0],[,,,,function(t,e,n){t.exports={cartItem:"CartItem_cartItem__3C0W8",img:"CartItem_img__eIA16",form:"CartItem_form__310SA",button:"CartItem_button__paBDF",removeBtn:"CartItem_removeBtn__3izd9"}},function(t,e,n){t.exports={cart:"Cart_cart__3GqLz","cart-icon-container":"Cart_cart-icon-container__fdejB","table-container":"Cart_table-container__2ONin","button-container":"Cart_button-container__3ruDO"}},function(t,e,n){t.exports={"cart-btn-container":"NavBar_cart-btn-container__3w0RE","cart-btn":"NavBar_cart-btn__3YbGw",bump:"NavBar_bump__1j8A-"}},,function(t,e,n){t.exports={counter:"CartCounter_counter__ngrqV",bump:"CartCounter_bump__35cfg"}},,function(t,e,n){t.exports={header:"Header_header__zSTUo","cart-btn-container":"Header_cart-btn-container__1poPU","cart-btn":"Header_cart-btn__22R2R"}},function(t,e,n){t.exports={main:"Main_main__O5A5f","main-image":"Main_main-image__3aDz6"}},function(t,e,n){t.exports={menu:"Menu_menu__1wQ3F"}},function(t,e,n){t.exports={meal:"Meal_meal__2Nv1-"}},function(t,e,n){t.exports={note:"StickyNote_note__1ufb0"}},function(t,e,n){t.exports={form:"MealForm_form__13V62"}},function(t,e,n){t.exports={button:"Button_button__6-R6B"}},function(t,e,n){t.exports={quantity:"QuantityInput_quantity__36DIf"}},function(t,e,n){t.exports={card:"Card_card__1m44e"}},function(t,e,n){t.exports={modal:"Modal_modal__4DXUe"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),o=(n(24),n(3)),m=(n(25),n(10)),s=n.n(m),u=n(0),l=function(t){return Object(u.jsx)("header",{className:s.a.header,children:t.children})},j=n(11),d=n.n(j),b=function(t){return Object(u.jsx)("div",{className:d.a.main,children:t.children})},O=n(12),x=n.n(O),h=n(13),p=n.n(h),f=n(14),_=n.n(f),A=function(t){return Object(u.jsx)("li",{className:_.a.note,children:t.children})},v=n(15),C=n.n(v),g=n(16),y=n.n(g),I=function(t){return Object(u.jsx)("button",{type:t.type,className:"".concat(t.className," ").concat(y.a.button),onClick:t.onClick,children:t.children})},N=n(17),k=n.n(N),B=function(t){return Object(u.jsx)("input",{className:k.a.quantity,name:"amount",type:"number",defaultValue:t.defaultValue,min:"0",onChange:t.onChange})},S=function(t){return Object(u.jsxs)("form",{className:C.a.form,onSubmit:t.onAddClick,children:[Object(u.jsx)(B,{type:"number",name:"amount",min:"0",defaultValue:0}),Object(u.jsx)(I,{type:"submit",children:"Add"})]})},T=function(t){return Object(u.jsx)(A,{children:Object(u.jsxs)("div",{className:p.a.meal,children:[Object(u.jsxs)("h4",{children:[" ",t.meal.name]}),Object(u.jsx)("img",{src:t.meal.img,alt:"".concat(t.meal.name)}),Object(u.jsxs)("h5",{children:[" $ ",t.meal.price," "]}),Object(u.jsx)(S,{onAddClick:function(e){t.meal.amount=parseInt(e.target.amount.value),t.onAddClick(e,t.meal)}})]})})},E=n(18),P=n.n(E),K=function(t){return Object(u.jsx)("div",{className:P.a.card,children:t.children})},M=a.a.createContext({items:{},totalAmount:0,totalPrice:0,addItem:function(t){},removeItem:function(t){},updateItem:function(t){},removeAll:function(){}}),J=[{id:1,name:"Kimbob",price:9.99,img:n.p+"static/media/kimbob.78dd01bf.jpeg"},{id:2,name:"Bibimbob",price:11.99,img:n.p+"static/media/bibimbob.4ea153db.jpeg"},{id:3,name:"Japchae",price:9.99,img:n.p+"static/media/japchae.16d206fc.jpeg"},{id:4,name:"Spicy Pork",price:11.99,img:n.p+"static/media/spicy-pork.d29ea019.jpg"},{id:5,name:"Bulgogi",price:11.99,img:n.p+"static/media/bulgogi.81dc31ad.jpeg"},{id:6,name:"Kimchi Soup",price:11.99,img:n.p+"static/media/kimchi-soup.4c86a177.jpeg"}],q=function(t){var e=Object(c.useContext)(M),n=function(t,n){t.preventDefault(),0!==n.amount&&e.addItem(n)},a=J.map((function(t){return Object(u.jsx)(T,{meal:t,onAddClick:n},t.name)}));return Object(u.jsx)(K,{children:Object(u.jsx)("ul",{className:x.a.menu,children:a})})},w=n(2),F=n(4),R=n.n(F),Q=function(t){var e=Object(c.useContext)(M),n=Object(c.useState)(t.item.amount),a=Object(o.a)(n,2),i=a[0],r=a[1],m=(t.item.price*t.item.amount).toFixed(2);return Object(u.jsxs)("tr",{className:R.a.cartItem,children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{className:R.a.img,src:t.item.img,alt:t.name})}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{children:t.item.name})}),Object(u.jsx)("td",{children:Object(u.jsx)(B,{defaultValue:t.item.amount,onChange:function(t){r(t.target.value)}})}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{children:"$".concat(m)})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:R.a.button,onClick:function(n){t.item.amount=i,e.updateItem(t.item)},children:"update"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:R.a.removeBtn,onClick:function(n){e.removeItem(t.item)},children:"remove"})})]})},V=function(t){return Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:" "}),t.heads.map((function(t,e){return Object(u.jsx)("th",{children:t},e)}))]})}),Object(u.jsx)("tbody",{children:t.children})]})},D=n(5),G=n.n(D),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIie2Wyy5DQQCG/xFp2EgXJayExKqNjQ0rCwtEYicuSeMFvIIX8BiegcRtI0TFwsZlK1pbJBKKlM+iI45jpqaaHgu+VTPn/+eb6XTSI/1JgEM+uATmkxIX+EwFGEhEHlnEqpUvJy2etuJC0uJ24AF4Abqa5WmJDxhjypJ27bPxZomdAEs0h/13x5cdW9abtKfemmJjzIWkc0/5WtKcpLSknKQtSZv2c1rSvM242Pl2acCK5+uaieVSQCo2NuvpLoSIRz3ljoBuh6P3SsgtAVqBW8cEfQHdfkfvOJrx/bhkjKmoenZx8t+uWlp0jG0H9KoAecfKH4HBGp0sUHb0xuoRZ6j+YcQ5Azod+S7g3JG/B9qCxXayA8dEACdAdyTXDZx6shvxeb1nHGHNM56TdASMACOSjiRlPdmtAM9ngB7gzrOTEG6ATN1iKx+m+rLwXIfwCdgDhn4k/bsAU8AVUAImG83VIy5Fzq/YaC7kOv0uwKTdTRGYaDT3T2K8Ae5J6adLXwrjAAAAAElFTkSuQmCC",z=function(t){var e=Object(c.useContext)(M),n=Object.keys(e.items).length,a=0===n?Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:" The cart is empty "})}):Object(u.jsx)(V,{heads:["NAME","QTY","PRICE"],children:Object.keys(e.items).map((function(t,n){return Object(u.jsx)(Q,{item:Object(w.a)({},e.items[t])},n)}))}),i=0===n?Object(u.jsx)(I,{onClick:t.onCancel,children:" Cancel "}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I,{onClick:t.onCancel,children:"Cancel"}),Object(u.jsx)(I,{onClick:t.onOrder,children:"Order"})]});return Object(u.jsxs)("div",{id:"cart",className:G.a.cart,children:[Object(u.jsx)("div",{className:G.a["cart-icon-container"],children:Object(u.jsx)("img",{src:H,alt:"cart icon"})}),Object(u.jsx)("div",{className:G.a["table-container"],children:a}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{children:["Total Order: ",e.totalAmount," "]}),Object(u.jsxs)("h3",{children:["Total Price: ","$".concat(e.totalPrice.toFixed(2))," "]})]}),Object(u.jsx)("div",{className:G.a["button-container"],children:i})]})},U=n(19),X=n.n(U),W=function(t){return Object(u.jsx)("div",{className:X.a.modal,children:t.children})},Y={items:{},totalAmount:0,totalPrice:0},L=function(t,e){var n=Object(w.a)(Object(w.a)({},t),{},{items:Object(w.a)({},t.items)}),c=e.item,a=e.item.name,i=e.item.price,r=e.item.amount;return n.items[a]=Object(w.a)({},t.items[a]),"add"===e.type?Z(t,n,c,a,i,r):"remove"===e.type?$(n,c,a,i,r):"update"===e.type?tt(n,c,a,i,r):"removeAll"===e.type&&et(n),n},Z=function(t,e,n,c,a,i){t.items[c]?e.items[c]=Object(w.a)(Object(w.a)({},t.items[c]),{},{amount:t.items[c].amount+i}):e.items[c]=Object(w.a)({},n),e.totalPrice+=a*i,e.totalAmount+=i},$=function(t,e,n,c,a){t.totalPrice-=t.items[n].amount*c,t.totalAmount-=t.items[n].amount,delete t.items[n]},tt=function(t,e,n,c,a){var i=t.items[n].amount;t.items[n].amount=a;var r=i-a,o=r*c;t.totalAmount-=r,t.totalPrice-=o},et=function(t){delete t.items,t.totalAmount=0,t.totalPrice=0},nt=function(t){var e=Object(c.useReducer)(L,Y),n=Object(o.a)(e,2),a=n[0],i=n[1],r={items:Object(w.a)({},a.items),totalAmount:a.totalAmount,totalPrice:a.totalPrice,addItem:function(t){i({type:"add",item:t})},removeItem:function(t){i({type:"remove",item:t})},updateItem:function(t){i({type:"update",item:t})},removeAll:function(){i({type:"removeAll",item:{}})}};return Object(u.jsx)(M.Provider,{value:r,children:t.children})},ct=n(6),at=n.n(ct),it=n(8),rt=n.n(it),ot=function(t){var e=Object(c.useContext)(M),n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],r=a[1],m="".concat(rt.a.counter," ").concat(i?rt.a.bump:"");return Object(c.useEffect)((function(){if(0!==e.totalAmount){r(!0);var t=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(t)}}}),[e.totalAmount]),Object(u.jsx)("div",{className:m,children:Object(u.jsxs)("span",{children:[t.quantity," "]})})},mt=function(t){var e=Object(c.useContext)(M),n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],r=a[1];Object(c.useEffect)((function(){if(0!==e.totalAmount){r(!0);var t=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(t)}}}),[e.totalAmount]);var m="".concat(at.a["cart-btn"]," ").concat(i?at.a.bump:"");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"KoreanMeals"})}),Object(u.jsxs)("div",{className:at.a["cart-btn-container"],children:[Object(u.jsx)(I,{className:m,onClick:t.onCartClicked,children:Object(u.jsx)("img",{src:H,alt:"cart icon"})}),Object(u.jsx)(ot,{quantity:e.totalAmount})]})]})};var st=function(){var t=Object(c.useState)(!1),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useContext)(M);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{children:Object(u.jsx)(mt,{onCartClicked:function(t){a(!n)}})}),n&&Object(u.jsx)(W,{children:Object(u.jsx)(z,{onCancel:function(){a(!1)},onOrder:function(){console.log(i.items),console.log("ordering "+Object.keys(i.items).map((function(t){return"".concat(i.items[t].amount," ").concat(i.items[t].name)})).join(", ")),i.removeAll(),a(!1)}})}),Object(u.jsx)(b,{children:Object(u.jsx)(q,{})})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(nt,{children:Object(u.jsx)(st,{})})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.ce48e230.chunk.js.map