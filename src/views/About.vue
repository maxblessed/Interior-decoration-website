<template>
  <div  class="about container-fluid ">

   <div  class='row   bgk1'>
      <div class='darka'></div>
      <header1></header1>
      <div class='container text-center  cont1'>
      <div class='row '>
      <h2 class='col-sm-12 display-3 p-2'>We Are Passionate</h2>
      <p class='col-sm-12 cont2 lead'>ABOUT OUR WORK</p>

      </div>
      </div>
  </div>
<div class='container fc p-5 my-4 text-center'>
 <div class=' founder col-sm-12 mix-auto '>
      <img src='../assets/imagefolder/founder.jpg' class='img-fluid'/>

 </div>
  <p class='lead seccont col-sm-12 col-xs-10 text-black'>Founded by award-winning architect Thompson Yeboah in 1958,</p>
  <p class='lead seccont col-sm-12 col-xs-10 text-black'> the Thompson Collective is one of the most respected architectural</p>
   <p class='lead seccont col-sm-12 col-xs-10 text-black'>and interior design firms in the world.</p>
   <p class='seccont1  pt-1'>We specailise in modern interior decoration, outdoor decoration and design</p>
  <p class='seccont1  pt-1'> Wedding decoration and design conference setting and stage setting. </p>
</div>
<div class='row ourteam text-center justify-content-center my-5'>
<div class='aboutdark'></div>

<h3 class='col-sm-10 display-2 my-5'>Our Team</h3>
<p class='col-sm-10 mt-5 '>THE BEST IN INTERIOR DECORATION</p>

</div>
<div class='row py-5 my-5 justify-content-center'>
   <div class='container-fluid '>
   <div class='col-sm-12 mb-5 pb-5'>
   <div class='row text-center'>
     <p class='lead teamp col-sm-12'>We have dedicated team that are passionate about their work</p>
     <p class='lead teamp col-sm-12'>They implement the modern design with the modern technology</p>
     <p class='lead teamp col-sm-12'>Our staff get the job done in the due time</p>
     </div>
   </div>
   <div class='col-sm-12 card-deck justify-content-center text-center'>
     <div class='card col-md-10  team'>
     <div class='card-body'>
         <h6>THOMPSON YEBOAH</h6>
         <p>Team Manager</p>
         <div class='row pt-5'>
            <p class='icont'><i class="fab fa-facebook-f"></i></p>
            <p class='icont '><i class="fab fa-instagram"></i></p>
            <p class='icont'><i class="fab fa-twitter"></i></p>
         </div>
        </div>
     </div>
      <div class=' card col-md-10 team'>
      <div class='card-body'>
         <h6>SINEAD JAMES</h6>
         <p>Lead Achitecture</p>
         <div class='row pt-5'>
            <p class='icont'><i class="fab fa-facebook-f"></i></p>
            <p class='icont '><i class="fab fa-instagram"></i></p>
            <p class='icont'><i class="fab fa-twitter"></i></p>
         </div>
         </div>
      </div>
      <div class='card col-md-10 team'>
       <div class='card-body '>
         <h6>ASHLEY HAN</h6>
         <p>Team Leader</p>
         <div class='row pt-5'>
            <p class='icont'><i class="fab fa-facebook-f"></i></p>
            <p class='icont '><i class="fab fa-instagram"></i></p>
            <p class='icont'><i class="fab fa-twitter"></i></p>
         </div>
        </div>
      </div>
      <div class='card col-md-10  team'>
      <div class='card-body'>
        <h6>MAX IMADE</h6>
         <p>Team Supervisor</p>
         <div class='row pt-5'>
            <p class='icont'><i class="fab fa-facebook-f"></i></p>
            <p class='icont '><i class="fab fa-instagram"></i></p>
            <p class='icont'><i class="fab fa-twitter"></i></p>
         </div>
         </div>
      </div>
   </div>
   </div>
</div>
<footer1></footer1>

  </div>
</template>
<script>
export default{
  name: "about"

};
</script>
<style scoped>
  .bgk1{
  	background-image:url('../assets/imagefolder/aboutbanner.jpg');
  	background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover;
  }
  .darka{
  	background-color: hsla(0,0%,0%,0.6);
  	height: 400px;
  	width:100%;

  }
  .cont1{
  	position: absolute;
  	top:20%;
  	left:50%;
  	transform: translateX(-50%);
  	color:#fff;

  }
  .cont2{
  	font-size:160%;
  	color:#ddd;
  }
  .seccont{
  	font-size: 200%;
  	color:#000;
  }
  .teamp{
  	font-size: 160%;
  	color:#000;
  }
  .founder img{
  	 box-shadow: 10px -10px;
  	background: #ddd;
  }
  .founder{
  	min-height: 250px;
  }
  .seccont1{
  	font-size: 110%;
  	color:gray;
  }
  .ourteam{
  	background-image: url('../assets/imagefolder/this.jpg');
  	background-attachment: fixed;
  	background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  	height: 300px;
  	color:#fff;
  	align-content: center;
  }
  .aboutdark{
  	background-color: hsla(0,0%,0%,0.4);
  	width:100%;
  	height: 300px;
  	position: absolute;
  }
  .aboutdark+h3{
  	line-height: 0px;
  	background: red;
  }
  .aboutdark+h3+p{
  	line-height: 1px;
  }
  .about .team{
  	height: 250px;
  	padding-top: 8%;
   box-sizing: border-box;
   position: relative;
   color: hsla(0,0%,0%,0.8);
   cursor: pointer;
   font-size: 80%;
   font-family: sans-serif;
   font-weight: lighter;
  }
  .team div{
  	margin-top: -40px;
  	border-radius: 5px;
  }
  {
  	background-color: #000;
  }
  .about .team::before{
  	  content: '';
  	  width:100px;
  	  height: 100px;
  	  position: absolute;
  	  z-index: 1000;
  	  top:-1%;
  	  left:50%;
  	  transform: translate(-50%,-50%);
  	  border-radius: 50%;
  	  border:4px solid hsla(0,0%,0%,0.6);
  	  box-sizing: border-box;
  }
  .about .team:nth-child(1)::before{
  	content: url('../assets/imagefolder/face.jpg');
     overflow: hidden;
  }
  .about .team:nth-child(2)::before{
  	content: url('../assets/imagefolder/face1.jpg');
     overflow: hidden;
  }
  .about .team:nth-child(3)::before{
  	content: url('../assets/imagefolder/face2.jpg');
     overflow: hidden;
  }
  .about .team:nth-child(4)::before{
  	content: url('../assets/imagefolder/face3.jpg');
     overflow: hidden;
  }
  .about .team:hover{
  	background-color: #ddd;
  	color:#000;
  	cursor: pointer;
  }
  .about .team .icont{
  	 color: hsla(0,0%,0%,0.4);
  	padding: 3px;
  	margin: 0 auto;
  font-size: 150%;
  }

  @media (max-width: 768px){
  	.seccont{
         font-size: 150%;
         text-align: justify-all;
  	}
  	.seccont1{
  		display: none;
  	}
  	.aboutdark+h3{
  		font-size: 300%;
  	}
  	.team div h6{
      font-size: 100%;
  	}
  	.team div{
  		margin-top: 10px;
  		font-size: 90%;
  	}

  }

</style>
