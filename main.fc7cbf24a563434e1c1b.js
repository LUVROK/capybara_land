!function(e){function t(t){for(var l,n,i=t[0],o=t[1],s=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(m&&m(t);u.length;)u.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(l=!1)}l&&(c.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},r={0:0},c=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var m=o;c.push([128,1]),a()}({128:function(e,t,a){a(129),e.exports=a(342)},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),c=a(127),n=(a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(29)),i=a.p+"d906487070020e94bf0b722671e14354.png",o=function(){var e=Object(n.useLocomotiveScroll)().scroll,t=Object(l.useRef)(null),a=function(t,a,l){var r=document.querySelector("".concat(t));console.log(e),e&&e.scrollTo(r,{offset:l,duration:"".concat(a),easing:[.5,.1,.4,1],disableLerp:0===a})};return r.a.createElement("nav",{ref:t,"data-scroll":!0,"data-scroll-sticky":!0,"data-scroll-target":"#main-cont"},r.a.createElement("div",{className:"nav__scrollTo",onClick:function(){return a(".main-cont",1e3,"0")}},r.a.createElement("img",{src:i,className:"imageLogo",title:"navLogo",id:"imageLogo"})),r.a.createElement("div",{className:"nav__scrollTo",onClick:function(){return a(".gallery",1e3,"0")}},r.a.createElement("div",{id:"Move_gallery",className:"nav_element"},"gallery")),r.a.createElement("div",{className:"nav__scrollTo",onClick:function(){return a(".roadmap",1e3,"0")}},r.a.createElement("div",{id:"Move_roadmap",className:"nav_element"},"roadmap")),r.a.createElement("div",{className:"nav__scrollTo",onClick:function(){return a(".team",1e3,"0")}},r.a.createElement("div",{id:"Move_team",className:"nav_element"},"team")),r.a.createElement("div",{className:"nav__scrollTo",onClick:function(){return a(".faq",1e3,"-250px")}},r.a.createElement("div",{id:"Move_questions",className:"nav_element"},"questions")))},s=a(50),m=(a(341),a.p+"ba8795961801be2c14fe0d160cefda77.png"),d=function(){return r.a.createElement(s.motion.div,{className:"containerLoader",initial:"hidden",animate:"visible",variants:{hidden:{y:0,rotate:0},visible:{y:"-115vh",rotate:-4,transition:{delay:2,duration:1.5}}}},r.a.createElement("div",{className:"boxALL__preloader"},r.a.createElement("div",{className:"container__preloader"},r.a.createElement("div",{className:"boxFirst__preloader"},r.a.createElement("img",{src:m,className:"logo__preloader",alt:"logo.png"}),r.a.createElement("div",{className:"background_Vector__preloader"},r.a.createElement("div",{className:"Vector1__preloader"}),r.a.createElement("div",{className:"Vector2__preloader"}),r.a.createElement("div",{className:"Vector3__preloader"}),r.a.createElement("div",{className:"Rectangle__preloader"}))))))},u=a.p+"6562de5982e437f1499926e401e0ec49.webp";function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,c,n,i=[],o=!0,s=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=c.call(a)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{if(!o&&null!=a.return&&(n=a.return(),Object(n)!==n))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var f=function(){var e=Object(l.useRef)(null),t=Object(l.useRef)(null),a=Object(l.useRef)(null),c=Object(n.useLocomotiveScroll)().scroll;Object(l.useLayoutEffect)((function(){c&&console.log("wrapper gsap")}),[c]);var i=y(Object(l.useState)(0),2),o=i[0],s=i[1],m=Object(l.useRef)(0),d=Object(l.useRef)(),b=d.current;Object(l.useEffect)((function(){d.current=o})),Object(l.useLayoutEffect)((function(){if(c){var e=new MutationObserver((function(e){e.forEach((function(e){s(c.scroll.instance.delta.y)}))})),t=document.getElementById("main-cont");e.observe(t,{attributes:!0,attributeFilter:["style"]})}}),[c]),Object(l.useEffect)((function(){if(c){var t=["0px","6px","12px","12px","12px","12px","18px","24px"],a=["1","0.95","0.75","0.55","0.35","0.25","0.15","0"];o<window.innerHeight/10?m.current=0:o<1.5*window.innerHeight?o>b?m.current+1<=t.length?m.current++:m.current=t.length:o<b&&(o>window.innerHeight?m.current=t.length-1:m.current-1>=0?m.current--:m.current=0):o>=1.5*window.innerHeight&&(m.current=t.length-1),console.log(m.current),t[m.current]&&a[m.current]&&(e.current.style.filter="blur(".concat(t[m.current],")"),e.current.style.opacity="".concat(a[m.current]))}}),[o]);return r.a.createElement("div",{className:"boxFirst",id:"boxFirst",key:"boxFirst","data-scroll":!0,"data-scroll-sticky":!0,"data-scroll-target":"#main-cont",ref:e,style:{opacity:1,filter:"blur(0px)"}},r.a.createElement("div",{className:"boxFirst__block",ref:t},r.a.createElement("div",{className:"boxFirst__block-opacity",ref:a},r.a.createElement("div",{className:"capybara_welcome_block",id:"capybara_welcome_block"},r.a.createElement("img",{src:u,className:"capybara_welcome",alt:"capybara_welcome.png"}),r.a.createElement("div",{className:"MintNow",onClick:function(){return e="#section1",t=1e3,a=document.querySelector("".concat(e)),console.log(c),void(c&&c.scrollTo(a,{offset:"0",duration:"".concat(t),easing:[.5,.1,.4,1],disableLerp:0===t}));var e,t,a}},"LEARN MORE")),r.a.createElement("h1",{className:"title_welcome"},"COPYBARA",r.a.createElement("br",null),"CHILL CLUB"))))},h=a.p+"890db9be06ee585cc22f8fc98e3ce8b3.webp",p=a.p+"369331848bccfdeac2fb9ec5e7aa70f7.webp",v=a.p+"c7a35577b20b8467ff27c73ebb7bb96d.webp",_=a.p+"68560208a0187dbf01d81cf5366546a2.webp",E=a.p+"4f0fc11bc3cdad9f26553606433f54d4.png",g=a.p+"2b287ee59447e36fab4f01a20ccfc90c.png";a.p,a.p,a.p,a.p,a.p,a.p;function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,c,n,i=[],o=!0,s=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=c.call(a)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{if(!o&&null!=a.return&&(n=a.return(),Object(n)!==n))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var x=function(){var e=N(Object(l.useState)(0),2),t=e[0],a=e[1];Object(l.useEffect)((function(){var e=document.querySelectorAll(".team-all-one_block"),a=document.querySelectorAll(".team-all-one_block .team-all-one_block__name"),l=document.querySelectorAll(".team-all-one_block .team-all-one_block__name_text"),r=document.querySelectorAll(".team-all-one_block .team-all-one_block__img img");console.log(r),e.forEach((function(e,c){window.innerWidth>720&&c!==t?(e.style.backgroundColor="rgb(220, 254, 253)",e.style.backgroundSize="none",a[c].style.color="rgb(28, 172, 185)",l[c].style.color="rgb(28, 172, 185)",r[c].style.opacity="0"):(e.style.backgroundColor="rgb(220, 254, 253, 0)",e.style.background='url("../img/gradientTeamBackground.png") no-repeat',e.style.backgroundSize="105%",a[c].style.color="rgb(51, 129, 136)",l[c].style.color="rgb(51, 129, 136)",r[c].style.opacity="1")}))}),[t]),Object(l.useEffect)((function(){document.querySelectorAll(".team-all-one_block").forEach((function(e,t){e.addEventListener("mouseover",(function(e){a(t)})),e.addEventListener("mouseout",(function(e){}))}));var e=document.querySelectorAll(".block_number_conteiner_block_number")[0],t=document.querySelectorAll(".block_number_conteiner_block_number")[1],l=document.querySelectorAll(".block_number_conteiner_block_number")[2],r=document.querySelectorAll(".numBlockNm")[0],c=document.querySelectorAll(".numBlockNm")[1],n=(document.querySelectorAll(".numBlockNm")[2],document.querySelectorAll(".textBlockNumber")[0]),i=document.querySelectorAll(".textBlockNumber")[1],o=document.querySelectorAll(".textBlockNumber")[2],s=document.querySelector(".TheChillClubRules_block_text");e.addEventListener("mouseover",(function(a){s.classList.remove("active"),n.style.opacity="1",n.style.zIndex="10";var r=window.screen.width;r>=1510?(e.style.width="100%",t.style.width="169px",l.style.width="169px"):r>=1034?(e.style.width="100%",t.style.width="129px",l.style.width="129px"):r>=734&&(e.style.width="100%",t.style.width="89px",l.style.width="89px")})),e.addEventListener("mouseout",(function(a){var r=window.screen.width;r>=1510?(e.style.width="169px",t.style.width="169px",l.style.width="169px",e.style.minWidth="169px",t.style.minWidth="169px",l.style.minWidth="169px"):r>=1034?(e.style.width="129px",t.style.width="129px",l.style.width="129px",e.style.minWidth="129px",t.style.minWidth="129px",l.style.minWidth="129px"):r>=734&&(e.style.width="89px",t.style.width="89px",l.style.width="89px",e.style.minWidth="89px",t.style.minWidth="89px",l.style.minWidth="89px"),s.classList.add("active"),n.style.opacity="0",n.style.zIndex="-1"})),t.addEventListener("mouseover",(function(a){var c=window.screen.width;s.classList.remove("active"),i.style.opacity="1",i.style.zIndex="10",c>=1510?(e.style.width="0px",t.style.width="100%",l.style.width="169px",l.style.minWidth="169px"):c>=1034?(e.style.width="0px",t.style.width="100%",l.style.width="129px",l.style.minWidth="129px"):c>=734&&(e.style.width="0px",t.style.width="100%",l.style.width="89px",l.style.minWidth="89px"),r.style.opacity="0",e.style.minWidth="0px"})),t.addEventListener("mouseout",(function(a){var c=window.screen.width;c>=1510?(e.style.width="169px",t.style.width="169px",l.style.width="169px",e.style.minWidth="169px",t.style.minWidth="169px",l.style.minWidth="169px"):c>=1034?(e.style.width="129px",t.style.width="129px",l.style.width="129px",e.style.minWidth="129px",t.style.minWidth="129px",l.style.minWidth="129px"):c>=734&&(e.style.width="89px",t.style.width="89px",l.style.width="89px",e.style.minWidth="89px",t.style.minWidth="89px",l.style.minWidth="89px"),s.classList.add("active"),i.style.opacity="0",i.style.zIndex="-1",r.style.opacity="1"})),l.addEventListener("mouseover",(function(a){var n=window.screen.width;s.classList.remove("active"),e.style.opacity="0",t.style.opacity="0",e.style.minWidth="0px",t.style.minWidth="0px",o.style.opacity="1",o.style.zIndex="10",c.style.opacity="0",r.style.opacity="0",(n>=1510||n>=1034||n>=734)&&(e.style.width="0px",t.style.width="0px",l.style.width="100%")})),l.addEventListener("mouseout",(function(a){var n=window.screen.width;s.classList.add("active"),e.style.opacity="1",t.style.opacity="1",n>=1510?(e.style.width="169px",t.style.width="169px",l.style.width="169px",l.style.minWidth="169px",t.style.minWidth="169px",e.style.minWidth="169px"):n>=1034?(e.style.width="129px",t.style.width="129px",l.style.width="129px",l.style.minWidth="129px",t.style.minWidth="129px",e.style.minWidth="129px"):n>=734&&(e.style.width="89px",t.style.width="89px",l.style.width="89px",e.style.minWidth="89px",t.style.minWidth="89px",l.style.minWidth="89px"),o.style.opacity="0",o.style.zIndex="-1",c.style.opacity="1",r.style.opacity="1"}));for(var m=document.querySelectorAll(".capybara_none"),d=document.querySelectorAll(".filterimage"),u=document.querySelectorAll(".rectOparcity"),y=function(e){m[e].addEventListener("mouseenter",(function(t){var a=document.querySelectorAll(".filter_gallery");d[e].style.transition="0.5s",u[e].style.opacity="0",d[e].classList.add("noneFilter"),a[e].style.transition="1s",a[e].style.opacity="0"})),m[e].addEventListener("mouseleave",(function(t){var a=document.querySelectorAll(".filter_gallery");d[e].style.transition="4s",u[e].style.opacity="1",d[e].classList.remove("noneFilter"),a[e].style.transition="3s",a[e].style.opacity="1"}))},b=0;b<=7;b++)y(b)}),[]);var c=Object(l.useRef)(null),o=Object(n.useLocomotiveScroll)().scroll,s=function(e,t){var a=document.querySelector("".concat(e));console.log(o),o&&o.scrollTo(a,{offset:"0",duration:"".concat(t),easing:[.5,.1,.4,1],disableLerp:0===t})};return r.a.createElement("div",{className:"boxALL",key:"boxALL"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"block-bacground",ref:c,style:{backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"}},r.a.createElement("div",{className:"welcome-block block-scroll block-scroll-mobile","data-section-name":"welcome-block",id:"section1"},r.a.createElement("div",{className:"welcome-block-content",id:"welcome-block-content-id"},r.a.createElement("div",{className:"welcome-block-title"},r.a.createElement("div",{className:"welcome-block-title__title"},r.a.createElement("div",null,"Welcome to"),r.a.createElement("img",{src:i,className:"logoWelcome",alt:""})),r.a.createElement("div",{className:"welcome-block-title__text"},"The Unique Mix Of Fashion, Art, Culture And Good Vibes. Cut The Stress, ",r.a.createElement("br",null),"Welcome To The Club!"),r.a.createElement("div",{className:"CapybaraLenta_block"},r.a.createElement("div",{className:"CapybaraLenta"}))))),r.a.createElement("div",{className:"TheChillClubRules_block",id:"TheChillClubRules_block"},r.a.createElement("div",{className:"TheChillClubRules_block_title",id:"TheChillClubRules_block_title_1"},r.a.createElement("h1",{className:"TheChillClubRules_block_title_h1"},"The ",r.a.createElement("br",null),"Chill ",r.a.createElement("br",null),"Club",r.a.createElement("br",null),"Rules"),r.a.createElement("div",{name:"MOBILE_zero_textBlockNumber"},r.a.createElement("svg",{className:"scrollICON",id:"hash_scrollICON_1",width:"63",height:"34",viewBox:"0 0 63 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return s("#TheChillClubRules_block_title_3",1e3)}},r.a.createElement("path",{d:"M2 1.59082L31.5908 31.1816L61.1817 1.59082",stroke:"#01AAA0",strokeWidth:"3"})))),r.a.createElement("div",{className:"TheChillClubRules_block_text active",id:"TheChillClubRules_block_title_2"},r.a.createElement("div",{className:"TheChillClubRules_block_text_text"},"This is a set of rules you have to follow if you'd like to join the movement."),r.a.createElement("div",{className:"textBlockNumber first_textBlockNumber"},r.a.createElement("div",{className:"topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Talk about the Club",r.a.createElement("br",null)),"Social media presence is the most crucial part. Share your thoughts, shill the project and don't forget to @ us!")),r.a.createElement("div",{className:"textBlockNumber second_textBlockNumber"},r.a.createElement("div",{className:"topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Vibe",r.a.createElement("br",null)),"Vibe with us. Feel the vibe. Become the vibe.")),r.a.createElement("div",{className:"textBlockNumber third_textBlockNumber"},r.a.createElement("div",{className:"topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Be chill",r.a.createElement("br",null)),"Become the better version of yourself. Pretend that you're high af and you don't care about your problems"))),r.a.createElement("div",{className:"MOBILE_TheChillClubRules_block_text",id:"TheChillClubRules_block_title_3"},r.a.createElement("div",{className:"MOBILE_textBlockNumber MOBILE_zero_textBlockNumber",id:"MOBILE_zero_textBlockNumber"},r.a.createElement("div",{className:"MOBILE_topTextBlockNumber"},"This is a set of rules you have to follow if you'd like to join the movement."),r.a.createElement("div",{name:"MOBILE_first_textBlockNumber",href:"#MOBILE_first_textBlockNumber"},r.a.createElement("svg",{className:"scrollICON",id:"hash_scrollICON_1",width:"63",height:"34",viewBox:"0 0 63 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return s("#TheChillClubRules_block_title_4",1e3)}},r.a.createElement("path",{d:"M2 1.59082L31.5908 31.1816L61.1817 1.59082",stroke:"#01AAA0",strokeWidth:"3"})))),r.a.createElement("div",{className:"MOBILE_textBlockNumber MOBILE_first_textBlockNumber",id:"TheChillClubRules_block_title_4"},r.a.createElement("div",{className:"MOBILE_topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Talk about the Club",r.a.createElement("br",null)),"Social media presence is the most crucial part. Share your thoughts, shill the project and don't forget to @ us!"),r.a.createElement("div",{name:"MOBILE_second_textBlockNumber",href:"#MOBILE_second_textBlockNumber"},r.a.createElement("svg",{className:"scrollICON",id:"hash_scrollICON_1",width:"63",height:"34",viewBox:"0 0 63 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return s("#TheChillClubRules_block_title_5",1e3)}},r.a.createElement("path",{d:"M2 1.59082L31.5908 31.1816L61.1817 1.59082",stroke:"#01AAA0",strokeWidth:"3"})))),r.a.createElement("div",{className:"MOBILE_textBlockNumber MOBILE_second_textBlockNumber",id:"TheChillClubRules_block_title_5"},r.a.createElement("div",{className:"MOBILE_topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Vibe",r.a.createElement("br",null)),"Vibe with us. Feel the vibe. Become the vibe."),r.a.createElement("div",{name:"MOBILE_third_textBlockNumber",href:"#MOBILE_third_textBlockNumber"},r.a.createElement("svg",{className:"scrollICON",id:"hash_scrollICON_1",width:"63",height:"34",viewBox:"0 0 63 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return s("#TheChillClubRules_block_title_6",1e3)}},r.a.createElement("path",{d:"M2 1.59082L31.5908 31.1816L61.1817 1.59082",stroke:"#01AAA0",strokeWidth:"3"})))),r.a.createElement("div",{className:"MOBILE_textBlockNumber MOBILE_third_textBlockNumber",id:"TheChillClubRules_block_title_6"},r.a.createElement("div",{className:"MOBILE_topTextBlockNumber"},r.a.createElement("div",{className:"boldFontWeight"},"Be chill",r.a.createElement("br",null)),"Become the better version of yourself. Pretend that you're high af and you don't care about your problems"),r.a.createElement("div",{name:"gallery",href:"#gallery"},r.a.createElement("svg",{className:"scrollICON",id:"hash_scrollICON_1",width:"63",height:"34",viewBox:"0 0 63 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return s("#gallery",1e3)}},r.a.createElement("path",{d:"M2 1.59082L31.5908 31.1816L61.1817 1.59082",stroke:"#01AAA0",strokeWidth:"3"}))))),r.a.createElement("div",{className:"block_number_conteiner_block_number first"},r.a.createElement("div",{className:"numBlockNm"},"1")),r.a.createElement("div",{className:"block_number_conteiner_block_number second"},r.a.createElement("div",{className:"numBlockNm"},"2")),r.a.createElement("div",{className:"block_number_conteiner_block_number third"},r.a.createElement("div",{className:"numBlockNm"},"3"))),r.a.createElement("div",{className:"gallery",id:"gallery"},r.a.createElement("div",{className:"gallery_Block"},r.a.createElement("div",{className:"capybara_none first_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none second_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none third_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none fourth_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none fifth_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none sixth_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none seventh_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})),r.a.createElement("div",{className:"capybara_none eighth_capybara_gallery"},r.a.createElement("div",{className:"filterimage"},r.a.createElement("img",{className:"filter_gallery",style:{transition:"1s",opacity:.6},src:E,id:"filter_gallery",alt:""})),r.a.createElement("div",{className:"def rectOparcity"})))),r.a.createElement("div",{className:"roadmap",id:"roadmap"},r.a.createElement("div",{className:"roadmap_block"},r.a.createElement("div",{className:"rect_CCC_RM",alt:""}),r.a.createElement("img",{src:g,className:"roadmap_block_noise",alt:""}))),r.a.createElement("div",{className:"team",id:"team"},r.a.createElement("div",{className:"team-container"},r.a.createElement("div",{className:"team__title"},"The team of ",r.a.createElement("img",{src:i,className:"logoWelcome"})),r.a.createElement("div",{className:"team-all activeTeam",id:"team-all_Web"},r.a.createElement("div",{className:"team-all-one_block",id:"team_img_1",style:{backgroundColor:"rgb(220, 254, 253)"}},r.a.createElement("div",{className:"teamtextblock"},r.a.createElement("div",{className:"team-all-one_block__name",style:{color:"rgb(28, 172, 185)"}},"Bakii"),r.a.createElement("div",{className:"team-all-one_block__name_text",style:{color:"rgb(28, 172, 185)"}},"CEO/Investment Analyst")),r.a.createElement("div",{className:"team-all-one_block__img"},r.a.createElement("img",{src:p,alt:"",style:{opacity:"0"}}))),r.a.createElement("div",{className:"team-all-one_block",id:"team_img_2",style:{backgroundColor:"rgb(220, 254, 253)"}},r.a.createElement("div",{className:"teamtextblock"},r.a.createElement("div",{className:"team-all-one_block__name",style:{color:"rgb(28, 172, 185)"}},"claide"),r.a.createElement("div",{className:"team-all-one_block__name_text",style:{color:"rgb(28, 172, 185)"}},"graphic designer")),r.a.createElement("div",{className:"team-all-one_block__img"},r.a.createElement("img",{src:v,alt:"",style:{opacity:"0"}}))),r.a.createElement("div",{className:"team-all-one_block",id:"team_img_3",style:{backgroundColor:"rgb(220, 254, 253)"}},r.a.createElement("div",{className:"teamtextblock"},r.a.createElement("div",{className:"team-all-one_block__name",style:{color:"rgb(28, 172, 185)"}},"Jeffrey"),r.a.createElement("div",{className:"team-all-one_block__name_text",style:{color:"rgb(28, 172, 185)"}},"IT Team Lead")),r.a.createElement("div",{className:"team-all-one_block__img"},r.a.createElement("img",{src:h,alt:"",style:{opacity:"0"}}))),r.a.createElement("div",{className:"team-all-one_block",id:"team_img_4",style:{backgroundColor:"rgb(220, 254, 253)"}},r.a.createElement("div",{className:"teamtextblock"},r.a.createElement("div",{className:"team-all-one_block__name",style:{color:"rgb(28, 172, 185)"}},"Lem00n"),r.a.createElement("div",{className:"team-all-one_block__name_text",style:{color:"rgb(28, 172, 185)"}},"Social manager")),r.a.createElement("div",{className:"team-all-one_block__img"},r.a.createElement("img",{src:_,alt:"",style:{opacity:"0"}})))))),r.a.createElement("div",{className:"faq",id:"faq"},r.a.createElement("div",{className:"faqtitle"},"FAQ"),r.a.createElement("div",{className:"faq-block"},r.a.createElement("div",{className:"faq-full"},r.a.createElement("details",null,r.a.createElement("summary",null,"NO TO GAMBLING, YES TO INCOME"),r.a.createElement("div",{className:"faq-details-bottom"},"First and foremost - we are scraping the gambling part of the project and replacing it with a more healthy version of passive income - (much needed especially in recession times) Safe Investments & More."," "))),r.a.createElement("div",{className:"faq-full"},r.a.createElement("details",null,r.a.createElement("summary",null,"HMM, SHOULD YOU STAY TUNED?"),r.a.createElement("div",{className:"faq-details-bottom"},"- ABSOLUTELY F-ING YES!"))),r.a.createElement("div",{className:"faq-full"},r.a.createElement("details",null,r.a.createElement("summary",null,"WHAT TO EXPECT NEXT?"),r.a.createElement("div",{className:"faq-details-bottom"},"Elevated Art, New Branding, New Logo, New Name, New Premise, New Utility, New Roadmap, New Animal, New, New, New...EVERYTHING.")))))),r.a.createElement("footer",{className:"footer",id:"social"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-top"},r.a.createElement("div",{className:"footer-container-left"},r.a.createElement("img",{src:i,alt:"",height:"42.8px"}),r.a.createElement("div",{className:"footer-left__title"},"Copybaras Chill Club")),r.a.createElement("div",{className:"footer-container-right"},r.a.createElement("div",{className:"footer-right-socials"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://discord.gg/QwUUYGuxWJ",className:"social_icons__discord",target:"_blank"},r.a.createElement("svg",{style:{color:"rgb(255, 255, 255)"},xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",className:"bi bi-discord",viewBox:"0 0 16 16",fill:"#ffffff"},r.a.createElement("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/CapyChillClub",className:"social_icons__twitter",target:"_blank"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:"social_icon__twitter",width:"45",height:"45",viewBox:"0 0 24 24",fill:"#ffffff"},r.a.createElement("path",{d:"M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"})))))))),r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("div",{className:"footer-left__rights"},"©2022 CCC",r.a.createElement("br",null),"All rights reserved"),r.a.createElement("div",{className:"footer-right-links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Terms & Conditions")))))))))};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,r,c,n,i=[],o=!0,s=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=c.call(a)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{if(!o&&null!=a.return&&(n=a.return(),Object(n)!==n))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var O=function(){var e=Object(l.useRef)(null),t=k(Object(l.useState)(!1),2),a=t[0],c=t[1];return Object(l.useEffect)((function(){setTimeout((function(){c(!0)}),4e3)}),[]),r.a.createElement(n.LocomotiveScrollProvider,{options:{smooth:!0,lerp:window.innerWidth>2560?.025:.05,smartphone:{smooth:!1,lerp:1},tablet:{smooth:!1,lerp:1}},watch:[],containerRef:e},r.a.createElement(s.AnimatePresence,null,a?null:r.a.createElement(d,null)),r.a.createElement("main",{className:"main-cont","data-scroll-container":!0,id:"main-cont",ref:e},r.a.createElement(s.AnimatePresence,null,a?null:r.a.createElement(d,null),r.a.createElement(o,{key:"navbar"}),r.a.createElement("div",{className:"background_Vector",key:"background_Vector"},r.a.createElement("div",{className:"Vector1"}),r.a.createElement("div",{className:"Vector2"}),r.a.createElement("div",{className:"Vector3"}),r.a.createElement("div",{className:"Vector4"}),r.a.createElement("div",{className:"Vector5"}),r.a.createElement("div",{className:"Vector9"}),r.a.createElement("div",{className:"Vector10"}),r.a.createElement("div",{className:"Vector6"}),r.a.createElement("div",{className:"Vector7"}),r.a.createElement("div",{className:"rectangle"})),r.a.createElement("div",{className:"mobileBackground",key:"mobileBackground"},r.a.createElement("div",{className:"mobileVector1"}),r.a.createElement("div",{className:"mobileVector2"}),r.a.createElement("div",{className:"mobileVector3"})),r.a.createElement("div",{className:"navSvgIcon",key:"navSvgIcon",id:"navSvgIcon","data-scroll":!0,"data-scroll-sticky":!0,"data-scroll-target":window.innerWidth<1034?"#boxFirst":"#main-cont"},r.a.createElement("a",{href:"https://discord.gg/QwUUYGuxWJ",className:"social_icons__discord",target:"_blank"},r.a.createElement("svg",{className:"limk_svg",viewBox:"0 0 71 55",xmlns:"http://www.w3.org/2000/svg",fill:"#00ada3"},r.a.createElement("g",{clipPath:"url(#clip0)"},r.a.createElement("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"})),r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0"},r.a.createElement("rect",{width:"71",height:"55"}))))),r.a.createElement("a",{href:"https://twitter.com/CapyChillClub",className:"social_icons__twitter",target:"_blank"},r.a.createElement("svg",{viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg",className:"limk_svg",fill:"#00ada3"},r.a.createElement("path",{d:"M56 13.874C54.086 14.724 52.03 15.296 49.872 15.554C52.076 14.234 53.766 12.144 54.562 9.65201C52.502 10.874 50.218 11.762 47.786 12.242C45.84 10.168 43.068 8.87201 40 8.87201C34.108 8.87201 29.332 13.65 29.332 19.54C29.332 20.376 29.428 21.192 29.608 21.97C20.742 21.526 12.882 17.278 7.61799 10.822C6.70199 12.398 6.17599 14.23 6.17599 16.188C6.17599 19.888 8.05798 23.154 10.92 25.066C9.17198 25.01 7.52598 24.53 6.08799 23.732C6.08799 23.778 6.08799 23.82 6.08799 23.866C6.08799 29.036 9.76398 33.348 14.646 34.326C13.752 34.57 12.808 34.7 11.834 34.7C11.148 34.7 10.478 34.632 9.82798 34.51C11.186 38.748 15.126 41.834 19.794 41.92C16.144 44.782 11.544 46.488 6.54399 46.488C5.68399 46.488 4.83399 46.438 3.99799 46.338C8.71999 49.364 14.326 51.13 20.352 51.13C39.976 51.13 50.704 34.874 50.704 20.776C50.704 20.314 50.694 19.854 50.674 19.396C52.76 17.89 54.57 16.012 56 13.874Z"})))),r.a.createElement(f,{key:"wrapper"}),r.a.createElement(x,null))))};Object(c.createRoot)(document.getElementById("app")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)))}});