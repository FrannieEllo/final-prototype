(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&y(f)}).observe(document,{childList:!0,subtree:!0});function h(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function y(r){if(r.ep)return;r.ep=!0;const l=h(r);fetch(r.href,l)}})();console.log("Game start!");let e,m,a,i,s,S,O,d,g,w,T,D,U,Y,I,b,n,P,x,j,H,A;var u=0,c=3,o=1;let E="Carrots: "+u,N="Lives: "+c;window.setup=()=>{if(x=loadImage("./assets/heart.png"),j=loadImage("./assets/carrot-uncollected.png"),H=loadImage("./assets/carrot-small.png"),A=loadImage("./assets/barn.png"),createCanvas(800,500),background("lightblue"),world.gravity.y=90,u=0,e=new Sprite(-750,450),e.width=48,e.height=112,e.rotationLock=!0,T=loadAnimation("./assets/player-idle-1.png","./assets/player-idle-2.png"),T.frameDelay=30,D=loadAnimation("./assets/player-jump.png"),D.frameDelay=200,U=loadAnimation("./assets/player-success.png"),Y=loadAnimation("./assets/player-damage-1.png"),I=loadAnimation("./assets/bug-1.png","./assets/bug-2.png"),I.frameDelay=64,w=new Group,w.width=26,w.height=104,w.collider="static",w.img="./assets/spikes.png",n=new Group,n.width=30,n.height=4e3,n.collider="static",n.visible=!1,d=new Group,d.width=200,d.height=400,d.collider="static",d.img="./assets/barn.png",m=new Group,m.collider="static",m.friction=0,O=new Sprite(0,800,1e5,50),O.collider="static",a=new Group,a.w=115,a.h=25,a.tile="=",a.collider="static",a.friction=0,a.img="./assets/Platform.png",s=new Group,s.w=115,s.h=20,s.collider="static",s.friction=0,s.img="./assets/falling.png",i=new Group,i.w=50,i.h=50,i.collider="static",P=loadAnimation("./assets/carrot-1.png","./assets/carrot-2.png","./assets/carrot-3.png","./assets/carrot-4.png"),P.frameDelay=32,g=new Group,g.w=56,g.h=56,g.friction=0,g.collider="kinematic",o==1){c=3,u=0,console.log("You're on level "+o);let t=new n.Sprite(400,0);t.rotation=90,new n.Sprite(-790,250),new n.Sprite(3800,250);let p=new m.Sprite(0,500,1550,50);p.img="./assets/g1.png";let h=new m.Sprite(1250,500,700,50);h.img="./assets/g2.png";let y=new m.Sprite(3500,500,2e3,50);y.img="./assets/g4.png";let r=new g.Sprite;r.x=1e3,r.y=450;let l=new i.Sprite;l.x=250,l.y=125;let f=new i.Sprite;f.x=900,f.y=425;let k=new i.Sprite;k.x=1850,k.y=400;let L=new i.Sprite;L.x=2750,L.y=400;let v=new i.Sprite;v.x=2975,v.y=50,e.overlaps(i,R);for(let C=0;C<4;C++)S=new s.Sprite,S.x=1660+115*C,S.y=350;new Tiles(["............................","............................","..=.........................","........=................=..",".=.=...................=...",".......................=....",".............=....=.........","......=.....==....=..==.....","......=....===....==........","......=....===....==........"],0,200,a.w+4,a.h+4);let G=new d.Sprite(3300,275);e.overlaps(G)}else if(o==2){console.log("You're on level "+o),c=3,u=0;let t=new n.Sprite(400,-500);t.rotation=90,new n.Sprite(-790,250),new n.Sprite(5250,250),new m.Sprite(0,500,5600,50),new m.Sprite(4e3,500,3e3,50);let p=new g.Sprite;p.x=1250,p.y=450;let h=new g.Sprite;h.x=1750,h.y=450;let y=new i.Sprite;y.x=300,y.y=-125;let r=new i.Sprite;r.x=1535,r.y=425;let l=new i.Sprite;l.x=2677,l.y=100;let f=new i.Sprite;f.x=3e3,f.y=300;let k=new i.Sprite;k.x=4400,k.y=10,e.overlaps(i,R),S=new s.Sprite,S.x=4300,S.y=120;let L=new w.Sprite;L.x=2545,L.y=385;let v=new w.Sprite;v.x=2810,v.y=385,v.mirror.x=!0,new Tiles(["........................................","........................................","........................................","....=...................................","......===...............................","........................................","........................................","..........=.............................","...........==...........................","........................................","........................................","..............==........................","...................................=....","........................................","........................................","........................................","........................................","......................==.........==.....",".................=....==................",".......=.........=....==........=.......","...=...=.........=....==................","...=...=.........=....==................"],0,-150,a.w+4,a.h+4);let G=new d.Sprite(5e3,275);e.overlaps(G)}};window.draw=()=>{if(clear(),background("lightblue"),e.overlaps(d),o==0&&(e.x=0,e.y=0,text("Carrot Hero",375,100),image(A,245,150,A.width/2,A.height/2),rect(100,390,250,80),text("Level 1",225,430),rect(400,390,250,80),text("Level 2",525,430)),o!=0){c==3?(image(x,150,50),image(x,100,50),image(x,50,50)):c==2?(image(x,100,50),image(x,50,50)):c==1&&image(x,50,50);for(let t=1;t<6;t++)image(j,450+t*50,40);for(let t=0;t<u;t++)image(H,500+t*50,40);E="Carrots: "+u,text(E,400,60),N="Lives: "+c,text(N,300,60)}if(b="",o==1&&(e.x>-800&&e.x<-375?b="Welcome to Carrot Hero! Use your Right and Left arrow keys to move.":e.x>-400&&e.x<540?b="Use your Up arrow key to jump!":e.x>600&&e.x<1250?b="Avoid the stink bugs...":e.x>1400&&e.x<2e3&&(b="and watch out for surprises ;)")),text(b,width/2,150),textAlign(CENTER),text("("+mouseX+", "+mouseY+")",mouseX,mouseY),allSprites.debug=mouse.pressing(),i.ani=P,e.overlapped(i)&&(u+=1,console.log("You collected a carrot!"),console.log(u)),g.ani=I,camera.x=e.x,e.y<30?camera.y=e.y-50:camera.y=275,kb.pressing("right")?(e.vel.x=5,e.mirror.x=!1):kb.pressing("left")?(e.vel.x=-5,e.mirror.x=!0):(e.vel.x=0,e.ani=T),kb.presses("up")?(e.vel.y=-27,e.ani=D):kb.pressing("down")&&(e.vel.y=50),o==1)for(let t=0;t<4;t++)e.collides(s[t])&&(s[t].collider="dynamic");else o==2&&e.collides(s)&&(s.collider="dynamic");if(e.overlapping(d)){let t="Woohoo! You made it to the end with "+u+" carrots!! Starting next level in 5 seconds...";text(t,width/2,90),textAlign(CENTER),console.log("That's the end! Thanks for playing."),o+=1,console.log(o),e.ani=U}else e.collides(O)?(c-=1,M(),console.log("Uh oh, you fell!")):e.overlapped(d)&&(o+=1,console.log(o));(e.collides(g)||e.collides(w))&&(c-=1,e.ani=Y),c==0&&W()};window.mouseClicked=()=>{};function M(){e.vel.x=0,e.vel.y=0,e.x=-750,e.y=450}function R(t,p){p.remove()}function W(){e.remove();let t="Game Over. You ran out of lives! Refresh to restart.";text(t,250,200)}