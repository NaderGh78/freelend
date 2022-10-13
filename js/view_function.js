// get the saveClickedData from local storage
var getFromLocalStorage = localStorage.getItem('saveClickedData');

// if saveClickedData already exist with data ,back it to obj again in order to map it
if (getFromLocalStorage) {

  let item = JSON.parse(getFromLocalStorage);

  show_view_page(item);

}


function show_view_page(view) {

  view_content = view.map((itm) => {

    return `

        <div class="col-md-4 p-0">

        <!-- start activity user content -->
        <div class="activity_user_content">

          <div class="img_holder owl-carousel owl-theme">

            <div class="item">
              <img src="./images/${itm.neighbour_itm_img}" alt="sewing" class="av_obj_img">
            </div>

            <div class="item">
              <img src="./images/${itm.neighbour_itm_img}" alt="sewing" class="av_obj_img">
            </div>

          </div>
          <!-- end img holder -->

          <div class="img_holder_desc">
            <h2>${itm.neighbour_itm_name}</h2>
          </div>

        </div>
        <!-- end activity user content -->

      </div>
      <!-- end col md 5 -->

      <div class="col-md-7 p-0">

        <!-- start activity_user_right -->
        <div class="activity_user_right">

          <!-- start show product details -->
          <div class="show_product_details">

            <div class="title">
              <h5 class="text-capitalize">${itm.neighbour_itm_name}</h5>
              <p>${itm.neighbour_itm_img_desc}</p>
            </div>

            <div class="lending">
              <h5 class="mb-0">for lending</h5>
              <span>${itm.neighbour_join}</span>
            </div>

            <!-- style offered by -->
            <div class="offered_by">
              <h5>
                Offered by
                <span class="text-capitalize">${itm.neighbour_name}</span>
              </h5>
              <div>
                <img src="./images/${itm.neighbour_img}" alt="user_foto" class="img-fluid rounded-circle">
              </div>
            </div>
            <!-- end offered by -->

            <div class="within">
              <h5>
                <i class="icofont-location-pin"></i>
                within
                <span>${itm.neighbour_miles}</span>
                miles
              </h5>
              <h5>
                <i class="las la-gift"></i>
                <span>${itm.neighbour_item}</span>
                item
              </h5>
            </div>

            <a href="" class="green_link send_msg" onClick='show_borrow_popup(${itm.id})'>borrow</a>

          </div>
          <!-- end show product details -->

        </div>
        <!-- end activity_user_right -->

      </div>
      <!-- end col md 7 -->

`
  });

  view_page_content.innerHTML = view_content.join('');

}


function show_borrow_popup(id) {
  el = neighbours.find((itm) => itm.id == id);

  offered_borrow.innerHTML =
    `   
      <div class="row m-0">

      <div class="col-md-4 p-0">
          <div class="left_content">
              <div class="img_holder">
              <img src="./images/${el.neighbour_itm_img}" alt="sewing_img" class="av_obj_img">
              </div>
          </div>
      </div>

      <div class="col-md-8 p-0">

      <!-- start right content -->
      <div class="right_content">

          <h3 class="blue_title">ask to borrow</h3>

          <div class="item_borrow">
              <h5>${el.neighbour_itm_name}</h5>
              <div class="item_borrow_desc">
                  <p class="item_desc">
                  ${el.neighbour_itm_img_desc}
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
                  <img src="./images/${el.neighbour_img}" alt="user_img3" class="img-fluid">
              </div>
              <h4>${el.neighbour_name}</h4>
          </div>
      </div>

      <div class="col-md-8 p-0">

          <!-- start user borrow right -->
          <div class="user_borrow_right">

          <h3 class="d-inline-block mb-0">
              <i class="icofont-location-pin"></i>
              within
              <span class="d-inline-block">
              ${el.neighbour_miles}
              </span>
              miles
          </h3>

          <h3 class="d-inline-block mb-0">
              <i class="las la-gift"></i>
              <span>
              ${el.neighbour_item}
              </span>
              items
          </h3>

          <span class="date">${el.neighbour_join}</span>

          </div>
          <!-- start user borrow right -->

      </div>

      </div>
      <!-- end row -->

      </div>
      <!-- end user borrow -->

      <!-- start form -->
      <form action="" id="prfl_popup_form">

      <div class="form-group">
      <label for="prfl_title">message subject</label>
      <input type="text" class="form-control my_input" id="prfl_title" name="prfl_title">
      </div>

      <div class="form-group">
      <label for="prfl_details">your message</label>
      <textarea class="form-control my_input" id="prfl_details" name="prfl_details" rows="5"></textarea>
      </div>

      <button class="blue_link" id="prfl_popup_btn" name="prfl_popup_btn">send</button>

      </form>
      <!-- end form -->

`

}