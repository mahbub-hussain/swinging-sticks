let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let width = canvas.width/2
let height = canvas.height/2
let a1 = 2*Math.PI/3
let a2 = 2*Math.PI/4
let ln1 = 380
let ln2 = 500
let m1=100000
let m2=1000
let a1_v = 0
let a2_v = 0

let g =.18

				

function drow() {

  let num1 = -g*(2*m1+m2)*Math.sin(a1)-m2*g*Math.sin(a1-2*a2)-2*Math.sin(a1-a2)*m2*(a2_v*a2_v*ln2+a1_v*a1_v*ln2*Math.cos(a1-a2))



  let num2 =ln2*(2*m1+ m2 - m2 *Math.cos(2*a1 -2*a2))

  let a1_a = num1/num2


  let num3 = 2*Math.sin(a1 - a2)*(a1_v*a1_v*ln1* (m1 + m2) + g*(m1 + m2)*Math.cos(a1)+ a2_v*a2_v*ln2* m2*Math.cos(a1 - a2))

  let num4 = ln2*(2*m1+ m2 - m2*Math.cos(2*a1 - 2*a2))

  let a2_a = num3/num4




    
  a2_v += a2_a
  a1_v += a1_a
  			
  a1 += a1_v
  a2 -= a2_v
  
   
  


  let x1 = width -(Math.sin(a1)) *60
  let y1 = height -(Math.cos(a1)) *60


  let x2 = width+(Math.sin(a1))*170
  let y2 = height +(Math.cos(a1))*170



  let x3 = x1+(Math.sin(a2))*70
  let y3 = y1+(Math.cos(a2))*70
  




  let x4 = x1-(Math.sin(a2))*100
  let y4 = y1 -(Math.cos(a2))*100





  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.moveTo(width, height)
  ctx.lineTo(width/2, height*2-10)
 
  ctx.lineTo(width+width/2, height*2-10)
  ctx.closePath()
  ctx.strokeStyle = "#c0c0c0"
  ctx.stroke()
  

  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.lineWidth = "10"

  ctx.moveTo(width, height)

  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = "#72281e";

  ctx.moveTo(x1, y1)

  ctx.lineTo(x3, y3)
  ctx.lineTo(x4, y4)



  ctx.stroke()

}

//drow()

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drow()

}

animate()



if(6==7){

if(a1_v  < -pos){
  				up = true
  				pos+=.1
  				
    }else if(a1_v  > pos){
    				up=false
    				pos+=.1
    }
  			//console.log(pos)
  			
  			if(up){
  			      
  							a1_v +=a1_a
  							
  			}else{
  			       
  							a1_v-=a1_a
  							
  			}
   
  
  a2_v += a2_a

}
