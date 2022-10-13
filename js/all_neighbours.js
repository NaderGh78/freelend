  // this function will show the content dynamically of the neighbours page
  function drawAllNeighbours() {

    neighbour = neighbours.map((itm) => {

      return `

      <div class="col-md-4 p-0">

        <!-- start acitivity user content -->
        <div class="activity_user_content">

          <div class="img_holder">
            <img src="./images/${itm.neighbour_img}" alt="user_img3" class="av_obj_img">
            <div class="av_user_img"></div>
          </div>

          <div class="img_holder_desc">

            <a href="neighbour_profile.html">${itm.neighbour_name}</a>

            <div class="within">
              <i class="icofont-location-pin"></i>
              within <span>${itm.neighbour_miles}</span> miles
              <i class="las la-gift"></i>
              <h5 class="lolo">${itm.neighbour_item}</h5>
              items
            </div>

            <span class="date">${itm.neighbour_join}</span>

            <a href="" class="green_link send_msg" onClick='popup_msg(${itm.id})'>message</a>

          </div>

        </div>
        <!-- end acitivity user content -->

      </div> 

    `
    });

    my_neighbour.innerHTML = neighbour.join('');

  }

  drawAllNeighbours();

  /*===============================================*/

  // this function will show the popup msg with all the data of every user like [name , miles, user img, date of join of user], when will send a msg to this user

  function popup_msg(id) {

    let msg_to_user = neighbours.find((itmm) => itmm.id == id);

    neighbour_popup.innerHTML =

      `   
          <div class="row m-0">

                <div class="col-md-4 p-0">

                  <div class="left_content">
                    <div class="img_holder">
                      <img src="./images/${msg_to_user.neighbour_img}" alt="user_img3" class="av_obj_img">
                    </div>
                  </div>

                </div>

                <div class="col-md-8 p-0">

                  <div class="right_content">

                    <p>from <span>jhon doe</span></p>

                    <h3 class="blue_title">Message to 
                       <span class="text-capitalize">${msg_to_user.neighbour_name}</span>
                    </h3>

                    <div class="right_within">

                      <h3 class="d-inline-block">
                        <i class="icofont-location-pin"></i>
                        within
                        <span class="d-inline-block">
                        ${msg_to_user.neighbour_miles}
                        </span>
                        miles
                      </h3>

                      <h3 class="d-inline-block">
                        <i class="las la-gift"></i>
                        <span>
                        ${msg_to_user.neighbour_item}
                        </span>
                        items
                      </h3>

                      <span class="date">${msg_to_user.neighbour_join}</span>

                    </div>

                  </div>

                </div>

              </div>  

              <form action="" id="popup_form">

                <div class="form-group">
                  <label for="notice_title">message subject</label>
                  <input type="text" class="form-control my_input" id="notice_title" name="notice_title">
                </div>

                <div class="form-group">
                  <label for="notice_details">your message</label>
                  <textarea class="form-control my_input" id="notice_details" name="notice_details" rows="5"
                    placeholder="Enter your message here..."></textarea>
                </div>

                <button class="blue_link" id="popup_btn" name="popup_btn">send</button>

              </form>
            
          </div>

   `
  }