var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
rover_image="rover.png";
background_img="mars.jpg"
function add(){
    rover_image_tag=new Image();
    rover_image_tag.src=rover_image;
    rover_image_tag.onload=uploadrover;
    mars_image_tag=new Image();
    mars_image_tag.src=background_img;
    mars_image_tag.onload=uploadbackground;
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height )
}
function uploadbackground(){
    ctx.drawImage(mars_image_tag,0,0,canvas.width,canvas.height )
}
window.addEventListener("keydown",Mykeydown);
function Mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
}