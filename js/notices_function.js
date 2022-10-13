 //  this will draw all notice page content dynamically
 function drawNoticePge() {

   noticePage = neighbours.map((itmx) => {

     return `
  
     <div class="col-md-4 p-0">

            <!-- start acitivity user content -->
            <div class="activity_user_content">
  
             <div class="img_holder">
               <img src="./images/${itmx.neighbour_img}" alt="user_img3" class="av_obj_img">
               <div class="av_user_img"></div>
             </div>

             <div class="img_holder_desc">

               <h2>${itmx.neighbour_needed}</h2>
               
               <div class="within">
                 <h5>${itmx.neighbour_name}</h5>
                 <a href="notices_clicked.html" onClick="goToRepliesUser(${itmx.id})">
                   <span>${itmx.neighbour_reply}</span>
                   replies
                 </a> 
               </div>

               <span class="date">${itmx.neighbour_join}</span>

               <a href="" class="green_link">more</a>
               
             </div>
  
           </div>
           <!-- end acitivity user content --> 
  
    </div>  

     `
   });

   notices.innerHTML = noticePage.join('');

 }

 drawNoticePge();

 let adData = [];

 function goToRepliesUser(id) {

   // chose the elem that we click on , in order to get all data of it
   let goToProfile = neighbours.find((itmx) => itmx.id == id);

   adData = [...adData, goToProfile];

   //  define saveClickedData var in localstorage
   localStorage.setItem('saveClickedData', JSON.stringify(adData));

 }