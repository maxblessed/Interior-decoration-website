<template>
  <nav class="container-fluid cont pt-4">
    <ul class='container-fluid'>
    <h2 class=' float-left logo '>Thompson Yeboah</h2>
    <p v-on:click='getEl()' v-bind:class='{style3:bool}' class='menu float-right'><i class="fas fa-bars"></i></p>
    <li v-bind:class='{style1:bool}'class='row float-right right' id='right'>
    <router-link to='/'  class='list px-3 py-2 '>Home</router-link>
    <router-link to='/about' class='list px-3 py-2 ' >About</router-link>
    <router-link to='/blog' class='list px-3 py-2  ' >blog</router-link>
    <router-link to='/contact' class='list px-3 py-2  border border-#fff' >Hire us</router-link>
    </li>
    </ul>
    <router-view/>
  </nav>
</template>
<script>
       export default{
     name:'headerc',
     data:function(){
     	return{
     		style1:'style1',
     		bool:false,
     		bool2:true,
     		style3:'style3'

     	}
     },
     methods:{
     	getEl:function(){
     		if(this.bool===false){
             this.bool=true;
     		console.log(this.bool)
     		this.bool2=false;
     		}else{
     			this.bool=false
     		}
     		},

     		remo:function(){
     			this.bool=false;
     			console.log('hi');
     		}

}

}

</script>

<style scoped>
.cont{
	position:absolute;
}
.logo{
	color:#fff;
	margin-left: -10px;
}
.list{
	color:#fff;
	font-size:80%;
	font-weight:200px;
	text-transform:uppercase;
	font-family:verdana;
  text-decoration: none;
}
.list:hover{
  color:#778899;
}
.menu{
	display: none;
}
@media (max-width: 568px){
	.logo{
		font-size:110%;
	}
	.right{
		display: none;
	}
	 .menu{
		color:#fff;
		display:flex;
		font-size: 150%;
	}
	.style1{
		position:fixed;
     	background:#000;
     	width:80%;
     	height:100%;
     	right:0px;
     	z-index:1000;
     	top:0px;
     	color:#fff;
     	display: grid;
     	grid-template-rows: repeat(4,40px);
	}
	.style1 .list:last-child{
		color:red;
		width:90px;
	}
	.style3{
	z-index:1000;
	background:#000;
	 position:fixed;
     float:left;
     padding: 20px;
	}
}

</style>
