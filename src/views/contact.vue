<template>
  <div id="contact" class='container-fluid'>
  <div class='bgc row'>
  <div class='darkbg'>
   <header1></header1>

    </div>
   </div>
   <div class='container py-5 my-5 '>
        <div class='text-center'>
         <h4 class='display-4 '>Contact Us</h4>
         <p>We specialise in transforming any space to a paradise </p>
         <p>We provide comfort to home with our amazing style and decoration</p>
        </div>
        <div class='row  justify-content-center'>
      <form action="/action_page.php" class=' col-sm-7 p-3'>
  <div class="form-group col-sm-12">
    <label for="email">First Name:</label>
    <input type="text" class="form-control" id="email">
  </div>
   <div class="form-group col-sm-12">
    <label for="last">Last Name</label>
      <input class="form-control" type="text">

  </div>
  <div class="form-group col-sm-12">
    <label for="pwd">Email:</label>
    <input type="email" class="form-control" id="pwd">
  </div>
  <div class="form-group col-sm-12">
  <label for="comment">Message:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
  <div class="form-group col-sm-12 text-center">
  <button type="submit" class="btn btn-secondary col-sm-3 ">Let's Talk</button>
  </div>
  </form>
  </div>

    </div>
    <footer1></footer1>
  </div>
</template>

<style scoped>
#contact {

}
.bgc{
	background-image: url('../assets/imagefolder/contactus.jpg');
	background-position:center;
	background-size: cover;
	height: 250px;
}
.darkbg{
	background-color: hsla(0,0%,0%,0.7);
	position: absolute;
	width: 100%;
	height: 250px;
}
.fc{
	/*background: #ddd;*/
}

</style>
