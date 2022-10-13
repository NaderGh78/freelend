 // all variables 
 var my_neighbour = document.querySelector('.neighbours_activity');

 var neighbour_popup = document.querySelector('.my_popup_form');

 var offered_borrow = document.querySelector('.offered_view .ask_to_borrow .my_popup_form');


 var notices = document.querySelector('.notices_activity');

 var activity = document.querySelector('.activity_page');

 var notices_clicked = document.querySelector('.first_content');

 var clicked_activity = document.querySelector('.clicked_activity');

 var offered_all_products = document.querySelector('.offered_all_products div');

 var offered_popup = document.querySelector('.offered .ask_to_borrow .my_popup_form');

 var view_page_content = document.querySelector('.offered_view #activity_user');

 /*========================================================*/

 // this array of obj that contain all data that will fetch it in all pages,in order to make all content display dynamically

 var neighbours = [{
     id: 1,
     neighbour_img: 'user_img3.png',
     neighbour_name: 'salim helo',
     neighbour_miles: '8.5',
     neighbour_item: '2',
     neighbour_join: '14 DEC 2022',
     neighbour_needed: 'Shared Cooking And Eating Togther',
     neighbour_reply: '2',
     neighbour_itm_img: 'sewing.png',
     neighbour_itm_name: 'sewing machine',
     neighbour_itm_img_desc: 'sewing machine Lorem ipsum dolor sit amet consectetur.',
   },
   {
     id: 2,
     neighbour_img: 'person1.jpg',
     neighbour_name: 'toto wolf',
     neighbour_miles: '3.5',
     neighbour_item: '1',
     neighbour_join: '04 JUNE 2022',
     neighbour_needed: 'needed one',
     neighbour_reply: '5',
     neighbour_itm_name: 'camera',
     neighbour_itm_img: 'camera.jpg',
     neighbour_itm_img_desc: 'camera Lorem ipsum dolor sit amet consectetur.',
   },
   {
     id: 3,
     neighbour_img: 'person4.jpg',
     neighbour_name: 'steffi graf',
     neighbour_miles: '3.3',
     neighbour_item: '4',
     neighbour_join: '11 NOV 2021',
     neighbour_needed: 'needed thow',
     neighbour_reply: '2',
     neighbour_itm_name: 'chair',
     neighbour_itm_img: 'chair.jpg',
     neighbour_itm_img_desc: 'chair Lorem ipsum dolor sit amet consectetur.',
   },
   {
     id: 4,
     neighbour_img: 'person2.jpg',
     neighbour_name: 'mike tayson',
     neighbour_miles: '11',
     neighbour_item: '1',
     neighbour_join: '05 JAN 2022',
     neighbour_needed: 'needed three',
     neighbour_reply: '8',
     neighbour_itm_name: 'old bicycle',
     neighbour_itm_img: 'old_bicycle.jpg',
     neighbour_itm_img_desc: 'old bicycle Lorem ipsum dolor sit amet consectetur.',
   },
   {
     id: 5,
     neighbour_img: 'user_img2.png',
     neighbour_name: 'sharon stone',
     neighbour_miles: '6.4',
     neighbour_item: '7',
     neighbour_join: '21 NOV 2020',
     neighbour_needed: 'needed four',
     neighbour_reply: '2',
     neighbour_itm_name: 'dishes set',
     neighbour_itm_img: 'dishs_set.jpg',
     neighbour_itm_img_desc: 'dishes set Lorem ipsum dolor sit amet consectetur.',
   },

   {
     id: 6,
     neighbour_img: 'person3.jpg',
     neighbour_name: 'halle berry',
     neighbour_miles: '1.4',
     neighbour_item: '22',
     neighbour_join: '01 JUN 2021',
     neighbour_needed: 'needed five',
     neighbour_reply: '11',
     neighbour_itm_name: 'old vespa',
     neighbour_itm_img: 'old_vespa.jpg',
     neighbour_itm_img_desc: 'old vespa Lorem ipsum dolor sit amet consectetur.',
   }

 ]

 //save neighboursStorage in localstorag as a string
 localStorage.setItem('neighboursStorage', JSON.stringify(neighbours));