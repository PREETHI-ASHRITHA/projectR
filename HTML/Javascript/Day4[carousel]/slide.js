$(document).ready(function(){
$('.parent').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  dots:true,
//   dots: true,
  centerMode: true,
  prevArrow:`<button class="prev_button"><<</button>`,
  nextArrow:`<button class="next_button">>></button>`,
  responsive:[
    {
      breakpoint:1024,
      settings:{
        slidesToShow:2,
        centerMode:true,
      }
    },
    {
      breakpoint:768,
      settings:{
        slidesToShow:1,
        centerMode:true,
      }
    },
  ]
  });
});