"use strict";(self.webpackChunkproject_shop=self.webpackChunkproject_shop||[]).push([[857],{3857:function(n,r,e){e.r(r),e.d(r,{Cart:function(){return p},Products:function(){return P},Whoops404:function(){return E}});var t=e(885),c=e(2791),s=e(7022),i=e(9743),a=e(2677),o=e(8993),u=e(8180),l=e(6030),d=e(3253),f=e(6914),h=e(184),p=function(){var n=(0,u.i)((function(n){return n.cart})),r=n.cart,e=n.role,p=(0,l.I0)(),x=(0,c.useState)(0),v=(0,t.Z)(x,2),j=v[0],m=v[1];return(0,c.useEffect)((function(){var n=(0,f.b)(r,e);!function(n){var r=n.reduce((function(n,r){return n+r.price}),0).toFixed(2);m(+r)}(n),p((0,d.productCount)(n.length))}),[r,e,p]),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(i.Z,{children:(0,h.jsx)(a.Z,{children:r?r.map((function(n){return(0,h.jsx)(o.CartItem,{cart:n},n.id)})):"cart is Empry"})}),(0,h.jsx)(i.Z,{children:(0,h.jsxs)(a.Z,{children:[" ",(0,h.jsxs)("h2",{className:"text-center",children:["Total: ",j]})]})})]})},x=e(1413),v=e(5987),j=e(1694),m=e.n(j),Z=e(162),N=["bsPrefix","variant","animation","size","as","className"],b=c.forwardRef((function(n,r){var e=n.bsPrefix,t=n.variant,c=n.animation,s=n.size,i=n.as,a=void 0===i?"div":i,o=n.className,u=(0,v.Z)(n,N);e=(0,Z.vE)(e,"spinner");var l="".concat(e,"-").concat(c);return(0,h.jsx)(a,(0,x.Z)((0,x.Z)({ref:r},u),{},{className:m()(o,l,s&&"".concat(l,"-").concat(s),t&&"text-".concat(t))}))}));b.displayName="Spinner";var g=b,C={spinner:"Product_spinner__eVW3G"},P=function(){var n=(0,u.i)((function(n){return n.products})),r=n.products,e=n.error,t=n.loading,s=(0,u.i)((function(n){return n.cart})),i=s.cart,a=s.role,p=(0,l.I0)();return(0,c.useEffect)((function(){var n=(0,f.b)(i,a);p((0,d.productCount)(n.length))}),[i,a,p]),(0,h.jsxs)(h.Fragment,{children:[t?(0,h.jsx)("div",{className:C.spinner,children:(0,h.jsx)(g,{animation:"border",variant:"primary"})}):null,(0,h.jsxs)("div",{className:C.content,children:[e?(0,h.jsxs)("div",{className:C.spinner,children:[(0,h.jsx)("div",{style:{color:"red",fontSize:"50px"},children:"Error"})," "]}):null,(0,h.jsx)("h1",{style:{textAlign:"center",margin:"20px"},children:"Products"}),(0,h.jsx)(o.ProductsItems,{info:r})]})]})},y=e(6871);function E(){var n=(0,y.TH)();return console.log(n),(0,h.jsx)("div",{children:(0,h.jsxs)("h1",{children:["Resource not found at ",n.pathname]})})}}}]);
//# sourceMappingURL=857.3003edaf.chunk.js.map