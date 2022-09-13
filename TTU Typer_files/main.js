let source="",speed=3,index=0,altCount=0,shiftCount=0,overlayShown=!1;const links=[];
function relink_activated(a,b){

b.active&&a.classList.remove("d-none")

}
relink({callback:relink_activated});

function getFromStore(a,b) { 
  if(!localStorage)
    return b;
 let c=localStorage.getItem(a);
 return null===c?b:c
}

function setStore(a,b){
localStorage&&localStorage.setItem(a,b)
}

function toggleCursor(){
cursor.style.color="transparent"===cursor.style.color?"inherit":"transparent"
}

function type(a){let b=source.substring(index,index+a).replace(/[\u00A0-\u9999<>\&]/gim,function(a){return"&#"+a.charCodeAt(0)+";"});
typer.innerHTML+=b,index+=a,bottom_padding.scrollIntoView(!1)}

function onColorChange(){/#[a-f0-9]{3,9}/.test(theme_color_input.value)&&setThemeColor(theme_color_input.value)}

function onSpeedChange(a){if(/\d+/.test(a.target.value)){let b=parseInt(a.target.value);if(b<speed_range.min||b>speed_range.max)return;speed_range.value=b,speed_input.value=b,speed=b,setStore("speed",b)}}

function onFontSizeChange(a){if(/\d+/.test(a.target.value)){let b=parseInt(a.target.value);if(b<font_size_range.min||b>font_size_range.max)return;font_size_range.value=b,font_size_input.value=b,setFontSize(b),setStore("font_size",b)}}

function onFontChange(a){setFont(a.target.value),setStore("font",a.target.value)}function 

onFileChange(a){if(!(1>a.length)){let b=new FileReader;b.onload=function(a){source=a.target.result,setStore("source",source),typer.innerHTML="",index=0},b.readAsText(a[0],"utf8")}}

function setDefaults(){speed=parseInt(getFromStore("speed",3)),speed_range.value=speed,speed_input.value=speed;const a=getFromStore("color","#00ff00");theme_color_input.value=a,setThemeColor(a);const b=parseInt(getFromStore("font_size",15));font_size_range.value=b,font_size_input.value=b,setFontSize(b);const c=getFromStore("font","Courier");font_select.value=c,setFont(c);const d=getFromStore("source","");}
function chooseColor(a){theme_color_input.value=a,setThemeColor(a)}
function setThemeColor(a){document.body.style.color=a;for(const b of document.querySelectorAll(".theme_border_color"))b.style.borderColor=a;for(const b of document.querySelectorAll(".theme_color"))b.style.color=a;for(const b of document.querySelectorAll(".theme_bg_color"))b.style.background=a;for(const b of document.querySelectorAll(".theme_fill_color"))b.style.fill=a;setStore("color",a)}
function setFont(a){const b=a.replace(/\s/,"+");font_div.innerHTML=`<link href="${`https://fonts.googleapis.com/css?family=${b}&display=swap`}" rel="stylesheet" />`,typer.style.fontFamily=a}
function setFontSize(a){typer.style.fontSize=a+"px",cursor.style.fontSize=a+"px"}
function showModal(a){hideOverlay(),showOverlay(),a.style.display="block"}
function showAlert(a){showOverlay(),a.style.display="block"}
function showMenu(){showOverlay(),menu.classList.add("visible")}
function showOverlay(){overlayShown=!0,overlay.style.display="grid",footer.classList.add("blurred"),main.classList.add("blurred")}
function hideOverlay(){overlayShown=!1,overlay.style.display="none",menu.classList.remove("visible"),footer.classList.remove("blurred"),main.classList.remove("blurred");for(const a of document.querySelectorAll(".modal"))a.style.display="none";for(const a of document.querySelectorAll(".alert"))a.style.display="none"}
function bindEvents(){setInterval(toggleCursor,500)}
function closeFooter(){footer.style.display="none"}
function makeLink(){const a=Math.random()*links.length,b=links[parseInt(a)];for(const a of document.querySelectorAll(".dynamic-link"))a.setAttribute("href",b.url),a.innerText=b.title}// window.addEventListener("load",()=>{
// makeLink();
setDefaults(),bindEvents();

//# sourceMappingURL=main.js.map