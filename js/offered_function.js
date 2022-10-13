

// this function will show the content dynamically of the offered page
function drawOfferedPage() {

  offered_content = neighbours.map((itm) => {

    return `
    
      <!-- start offered single product -->
      
      <div class="offered_single_product">
   
       <div class="row m-0">
   
         <div class="col-md-5">
   
           <!-- start offered single product image -->
           <div class="offered_single_product_img">
   
             <div class="img_holder">
               <img src="./images/${itm.neighbour_itm_img}" alt="sewing_img" class="av_obj_img">
               <div class="av_user_img">
                 <img src="./images/${itm.neighbour_img}" alt="user_foto" class="img-fluid">
               </div>
             </div>
             <!-- end img holder -->
   
             <div class="img_holder_desc">
   
               <a href="">${itm.neighbour_name}</a>
   
               <div class="within">
                 <i class="icofont-location-pin"></i>
                 within <span>${itm.neighbour_miles}</span> miles
               </div>
   
             </div>
             <!-- end image holder desc -->
   
           </div>
           <!-- end offered single product image -->
   
         </div>
         <!-- end col -->
   
         <div class="col-md-7 p-0">
   
           <!-- start single product content -->
           <div class="single_product_content">
   
             <!-- start single product desc -->
             <div class="single_product_desc">
               <h4>${itm.neighbour_itm_name}</h4>
               <p>
               ${itm.neighbour_itm_img_desc}
               </p>
             </div>
             <!-- end single product desc -->
   
             <ul class="offred_ul">
               <li>
                 <a href="offered_view.html" onClick="goToRepliesUser(${itm.id})">view</a>
               </li>
               <li>
                 <a href="" class="show_popup" onClick='offered_popup_msg(${itm.id})'>tell me more</a>
               </li>
               <li>
                 <a href="">borrow</a>
               </li>
             </ul>
   
             <div class="lending">
               <h5>for lending</h5>
               <span>${itm.neighbour_join}</span>
             </div>
   
           </div>
           <!-- end single product content -->
   
         </div>
         <!-- end col 7 -->
   
       </div>
       <!-- end row -->
   
     </div>
     <!-- end offered single product -->
    
        `
  });


  offered_all_products.innerHTML = offered_content.join('');

}

drawOfferedPage();



// this function will show the popup msg with all the data of every user like [name , miles, user img, date of join of user], when will send a msg to this user

function offered_popup_msg(id) {

  let msg_to_user = neighbours.find((itm) => itm.id == id);

  offered_popup.innerHTML =

    `   
      <div class="row m-0">

      <div class="col-md-4 p-0">
        <div class="left_content">
          <div class="img_holder">
            <img src="./images/${msg_to_user.neighbour_itm_img}" alt="sewing_img" class="av_obj_img">
          </div>
        </div>
      </div>

      <div class="col-md-8 p-0">

        <!-- start right content -->
        <div class="right_content">
          <h3 class="blue_title">Message via Freelend</h3>
          <div class="item_borrow">
            <h5>${msg_to_user.neighbour_itm_name}</h5>
            <div class="item_borrow_desc">
              <p class="item_desc">
              ${msg_to_user.neighbour_itm_img_desc}
              </p>
            </div>
          </div>
        </div>
        <!-- end right content -->

      </div>

    </div>
    <!-- end row -->

    <!-- start user borrow -->
    <div class="user_borrow">

      <div class="row m-0 align-items-center">

        <div class="col-md-4 p-0">
          <div class="user_borrow_left">
            <div class="user_borrow_img">
              <img src="./images/${msg_to_user.neighbour_img}" alt="user_img3" class="img-fluid">
            </div>
            <h4>${msg_to_user.neighbour_name}</h4>
          </div>
        </div>

        <div class="col-md-8 p-0">

          <!-- start user borrow right -->
          <div class="user_borrow_right">

            <h3 class="d-inline-block mb-0">
              <i class="icofont-location-pin"></i>
              within
              <span class="d-inline-block">
              ${msg_to_user.neighbour_miles}
              </span>
              miles
            </h3>

            <h3 class="d-inline-block mb-0">
              <i class="las la-gift"></i>
              <span>
              ${msg_to_user.neighbour_item}
              </span>
              items
            </h3>

            <span class="date">${msg_to_user.neighbour_join}</span>

          </div>
          <!-- end user borrow right -->

        </div>

      </div>
      <!-- end row -->

    </div>
    <!-- end user borrow -->

    <!-- start form -->
    <form action="" id="offered_popup_form">

      <div class="form-group">
        <label for="offred_title">message subject</label>
        <input type="text" class="form-control my_input" id="offred_title" name="offred_title">
      </div>

      <div class="form-group">
        <label for="offred_details">your message</label>
        <textarea class="form-control my_input" id="offred_details" name="offred_details" rows="5"></textarea>
      </div>

      <button class="blue_link" id="offred_popup_btn" name="offred_popup_btn">send</button>

    </form>
    <!-- end form -->

   `
}


let adData = [];

 function goToRepliesUser(id) {

   // chose the elem that we click on , in order to get all data of it
   let goToProfile = neighbours.find((itmx) => itmx.id == id);

   adData = [...adData, goToProfile];

   //  define saveClickedData var in localstorage
   localStorage.setItem('saveClickedData', JSON.stringify(adData));

 }