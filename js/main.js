/*var theme = document.getElementById("icon"); 
      theme.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){ 
        theme.src ="img/moon.png"; } 
        else { theme.src = "img/sun.png"; } }*/



// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


var Typer=function(a){this.element=a;var b=a.dataset.delim||",",c=a.dataset.words||"override these,sample typing";this.words=c.split(b).filter(a=>a),this.delay=a.dataset.delay||200,this.loop=a.dataset.loop||"true","false"===this.loop&&(this.loop=1),this.deleteDelay=a.dataset.deletedelay||a.dataset.deleteDelay||800,this.progress={word:0,char:0,building:!0,looped:0},this.typing=!0;var d=a.dataset.colors||"black";this.colors=d.split(","),this.element.style.color=this.colors[0],this.colorIndex=0,this.doTyping()};Typer.prototype.start=function(){this.typing||(this.typing=!0,this.doTyping())},Typer.prototype.stop=function(){this.typing=!1},Typer.prototype.doTyping=function(){var b,d=this.element,a=this.progress,c=a.word,e=a.char,f=[...this.words[c]].slice(0,e).join("");this.cursor&&(this.cursor.element.style.opacity="1",this.cursor.on=!0,clearInterval(this.cursor.interval),this.cursor.interval=setInterval(()=>this.cursor.updateBlinkState(),400)),d.innerHTML=f,a.building?(b=a.char===this.words[c].length)?a.building=!1:a.char+=1:0===a.char?(a.building=!0,a.word=(a.word+1)%this.words.length,this.colorIndex=(this.colorIndex+1)%this.colors.length,this.element.style.color=this.colors[this.colorIndex]):a.char-=1,a.word===this.words.length-1&&(a.looped+=1),!a.building&&this.loop<=a.looped&&(this.typing=!1),setTimeout(()=>{this.typing&&this.doTyping()},b?this.deleteDelay:this.delay)};var Cursor=function(a){this.element=a,this.cursorDisplay=a.dataset.cursordisplay||a.dataset.cursorDisplay||"_",a.innerHTML=this.cursorDisplay,this.on=!0,a.style.transition="all 0.1s",this.interval=setInterval(()=>this.updateBlinkState(),400)};function TyperSetup(){var a={};for(let c of document.getElementsByClassName("typer"))a[c.id]=new Typer(c);for(let d of document.getElementsByClassName("typer-stop")){let g=a[d.dataset.owner];d.onclick=()=>g.stop()}for(let e of document.getElementsByClassName("typer-start")){let h=a[e.dataset.owner];e.onclick=()=>h.start()}for(let f of document.getElementsByClassName("cursor")){let b=new Cursor(f);b.owner=a[f.dataset.owner],b.owner.cursor=b}}Cursor.prototype.updateBlinkState=function(){this.on?(this.element.style.opacity="0",this.on=!1):(this.element.style.opacity="1",this.on=!0)},TyperSetup()