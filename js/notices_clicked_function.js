// get the saveClickedData from local storage
var getFromLocalStorage = localStorage.getItem('saveClickedData');

// if saveClickedData already exist with data ,back it to obj again in order to map it
if (getFromLocalStorage) {

  let item = JSON.parse(getFromLocalStorage);

  show_all_user_replies(item);
  //show_view_page(item);

}

function show_all_user_replies(replies) {

  neighbour = replies.map((itm) => {

    return `
  
      <div class="row m-0" id="activity_user"> 

          <div class="col-md-4 p-0">

            <!-- start acitivity user content -->
            <div class="activity_user_content">

              <div class="first_content">

                <div class="img_holder">
                  <img src="./images/${itm.neighbour_img}" alt="user_img3" class="av_obj_img">
                  <div class="av_user_img"></div>
                  </div>
                  <div class="img_holder_desc">
                  <h2>${itm.neighbour_needed}</h2>
                </div>

              </div>  

              <div class="reply_form">

                <div class="reply_form_img">
                  <img src="./images/user_foto.png" class="img-fluid" alt="user_foto">
                </div>

                <form action="" id="reply_user">
                  <div class="form-group">
                    <label for="reply_text">jhon doe</label>
                    <textarea class="form-control my_input" id="reply_text" name="reply_text" rows="5"
                      placeholder="Type your replay here..."></textarea>
                  </div>
                  <button class="blue_link">reply</button>
                </form>

              </div>

            </div>
            <!-- end acitivity user content -->

          </div>
          <!-- end col md 4 -->
           
          <div class="col-md-7 p-0">

            <div class="user_intrests">

              <div class="user_intrests_title">

                <h4>${itm.neighbour_name}</h4>

                <span class="date">${itm.neighbour_join}</span>

                <a href="">
                  <span>${itm.neighbour_reply}</span>
                  replies
                </a>

              </div>  

              <div class="user_intrests_desc">
                <p>
                  I’d like to get a small group of people together who want
                  to cook and eat together once a week or once a fortnight.
                  I am a single Mum with one child. We moved to Rugby
                  recently so are new to the area and don’t know many
                  people yet. We used to be involved in a community meals
                  project where we used to live and it was great.
                  Anyone interested?
                </p>
              </div> 

              <div class="user_replies">
                <h4>Replies</h4>
              </div>

              <div class="all_replies"> 

                <div class="reply_desc">

                  <div class="img_reply">
                    <img src="./images/user_img2.png" class="img-fluid" alt="user_img2">
                  </div>

                  <div>
                    <h4>marion claire</h4>
                    <i class="icofont-location-pin"></i>
                    within <span>5.8</span> miles
                    <span>04 june 2020</span>
                  </div> 

                  <div class="user_msg">
                    <h4 class="text-capitalize">hello <span>george</span></h4>
                    <p>
                      Your request sounds great. I would be interested,possibly once a fortnight?
                    </p>
                  </div>

                </div>

                <div class="reply_desc">

                  <div class="img_reply">
                    <img src="./images/user_img3.png" class="img-fluid" alt="user_img3">
                  </div>

                  <div>
                    <h4>George Best</h4>
                    <i class="icofont-location-pin"></i>
                    within <span>5.8</span> miles
                    <span>04 june 2020</span>
                  </div> 

                  <div class="user_msg">
                    <h4 class="text-capitalize">hello <span>george</span></h4>
                    <p>
                      Your request sounds great. I would be interested,possibly once a fortnight?
                    </p>
                  </div>

                </div>

                <div class="reply_desc">

                  <div class="img_reply">
                    <img src="./images/user_foto.png" class="img-fluid" alt="user_foto">
                  </div>

                  <div>
                    <h4>Steffi Graf</h4>
                    <i class="icofont-location-pin"></i>
                    within <span>5.8</span> miles
                    <span>04 june 2020</span>
                  </div> 

                  <div class="user_msg">
                    <h4 class="text-capitalize">hello <span>george</span></h4>
                    <p>
                      Hi George, (and Marion), I can see this is a very old post, but
                      I’ve thought about doing something similar too,
                      please feel free to click on my name and send me a message
                      if youre still interested and we can swap addresses and get
                      some dates :)
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      `
  });

  clicked_activity.innerHTML = neighbour.join('');

}


 