<template>
  <div class="foot row text-center py-5 mt-5 ">
    <div class='icon active'><i class="fab fa-facebook-f "></i></div>
    <div class='icon'><i class="fab fa-instagram "></i></div>
    <div class='icon'><i class="fab fa-twitter "></i></div>
    <div class='row col-lg-12'>

    <div class='col-md-12 mt-3  foot2' >
    <div class=' border border-dark'></div>
    <div class='pl-2 mt-5 contact'>

   THE THOMPSON COLLECTIVE, 777 KELLYHO AVE, NEW YORK, NY212-555-9876
   </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'footer1'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot{
	justify-content: center;
	background: #121212;
}
.foot .icon{
	padding: 3px;
	font-size:130%;
	 color:#ddd;

}
.foot .icon+.icon{
	margin-left: 6px;
}
.foot .icon:hover{
	color:#f1f1f1;
  cursor: pointer;
}
.foot2{
	overflow: hidden;
}
.foot2 .contact{
	font-size:100%;
	color:#ddd;
}

</style>
