// this function will show the content dynamically of the activity page
function drawActivityPage() {

  activity_content = neighbours.map((itm) => {

    return `
  
      <div class="col-md-4 p-0">

        <div class="activity_user_content">

          <div class="img_holder">
            <img src="./images/${itm.neighbour_img}" alt="user_img3" class="av_obj_img">
            <div class="av_user_img">
              <img src="./images/new_user.png" alt="new_user" class="img-fluid w-100">
            </div>
          </div>

          <div class="img_holder_desc">
            <h2>${itm.neighbour_name}</h2>
            <h3>${itm.neighbour_name}</h3>
            <p>joined your neighbourhood</p>
            <span>${itm.neighbour_join}</span>
          </div>
          
        </div>
    
      </div>  
  
      `
  });


  activity.innerHTML = activity_content.join('');

}

drawActivityPage();