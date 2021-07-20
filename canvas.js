 let canvas = document.getElementById("canvas")
 let ctx = canvas.getContext("2d");

 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;
 window.addEventListener('resize',function(){
 canvas.width=window.innerWidth
 canvas.height=window.innerHeight
 })
 let x = canvas.width/2;
 let y = canvas.height/2;

 //angel,length,mass,velocity,gravity
 let a1 =Math.PI/1.1;
 let a2 = Math.PI/2;
 let ln1 = 380;
 let ln2 = 500;
 let m1=100000;
 let m2=2000;
 let a1_v = 0;
 let a2_v = 0;
 let g =.14;
 
 //stick length
 let stk1=y/2;
 let stk2=stk1/100*75;
 
function drow() {
    // double pendulum equation
  let num1 = -g*(2*m1+m2)*Math.sin(a1)-m2*g*Math.sin(a1-2*a2)-2*Math.sin(a1-a2)*m2*(a2_v*a2_v*ln2+a1_v*a1_v*ln2*Math.cos(a1-a2))
  let num2 =ln2*(2*m1+ m2 - m2 *Math.cos(2*a1 -2*a2))
  
  let a1_a = num1/num2  //acceleration stick 1 
 
  let num3 = 2*Math.sin(a1 - a2)*(a1_v*a1_v*ln1* (m1 + m2) + g*(m1 + m2)*Math.cos(a1)+ a2_v*a2_v*ln2* m2*Math.cos(a1 - a2))
  let num4 = ln2*(2*m1+ m2 - m2*Math.cos(2*a1 - 2*a2))

  let a2_a = num3/num4  //acceleration stick 2

  a1_v += a1_a 
  a2_v += a2_a	

  a1 += a1_v
  a2 -= a2_v
  
   //stick 1
  let x1 = x -(Math.sin(a1)) *stk1/100*35
  let y1 = y -(Math.cos(a1)) *stk1/100*35

   // join stick 1 
  let x2 = x+(Math.sin(a1))*stk1/100*75
  let y2 = y+(Math.cos(a1))*stk1/100*75


   // stick 2
  let x3 = x1+(Math.sin(a2))*stk2/100*45
  let y3 = y1+(Math.cos(a2))*stk2/100*45
  
  // join stick 2
  let x4 = x1-(Math.sin(a2))*stk2/100*65
  let y4 = y1 -(Math.cos(a2))*stk2/100*65
 
  //Stand
  ctx.beginPath();
  ctx.lineJoin = "miter"
  ctx.moveTo(x, y)
  ctx.lineTo(x/2, y*2-10)
  ctx.lineTo(x+x/2, y*2-10)
  ctx.closePath()
  ctx.strokeStyle = "#c0c0c0"
  ctx.stroke()

  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.lineWidth = "10"
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = "#72281e";
  ctx.moveTo(x1, y1)
  ctx.lineTo(x3, y3)
  ctx.lineTo(x4, y4)
  ctx.stroke() 
 
  

}


function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drow()

}

animate()

