

// jquery jquery_select
// $(document).ready(function(){
//     $('h1').css('color','blue');
//     $('h1').css('background','black');
    
// }); 


// $(document).ready(function(){
//     let src = $('script').attr('src');
//     alert(src);
// });



// $(document).ready(function () {

//     $('img').attr('alt', 'jQuery 라이브러리를 사용한 속성 지정');
//     $('img').attr('src', 'http://via.placeholder.com/100x100');
//     $('img').attr('width', '100');
    
// });

// $(document).ready(function () {

//     $('img').attr({
//          alt: 'jQuery 라이브러리를 사용한 속성 지정'
//         ,src: function (index) {
//             let size = (index +1)*100;

//             return 'http://via.placeholder.com/100x100' + size + 'x100';
//         }
//     });
// });

// $(document).ready(function () {
//     $('img').attr('alt','jQuery 라이브러리를 사용한 속성 지정')
//     .attr('src','http://via.placeholder.com/100x100' + size + 'x100')
// });

// $(document).ready(function () {
   
//     $('.box').css('float', 'left');
//     $('.box').css('margin', 10);
//     $('.box').css('width', 100);
//     $('.box').css('height', 100);
//     $('.box').css('backgroundColor', 'blue');
// });

// $(document).ready( () => {
//       let output = '';
//       for (let i = 0; i < 256; i++) {
//           output += '<div></div>';
//       }
    
//         $('body').html(output);

//         $('div').each(function() {
//           let r = Math.floor(Math.random() * 256);
//           let g = Math.floor(Math.random() * 256);
//           let b = Math.floor(Math.random() * 256);
        
//         $(this).css({
//             'height':'3px'
//             ,'background': 'rgb(' + r + ',' + g + ',' + b + ')'
//         });
         
//       });
//   });

// $(document).ready(() => {
//     let output = '';
//     for (let i = 0; i < 256; i++) {
//         output += '<div></div>';
//     }

//     $('body').html(output);

//     $('div').each(function() {
//         let r1 = Math.floor(Math.random() * 256);
//         let g1 = Math.floor(Math.random() * 256);
//         let b1 = Math.floor(Math.random() * 256);

//         let r2 = Math.floor(Math.random() * 256);
//         let g2 = Math.floor(Math.random() * 256);
//         let b2 = Math.floor(Math.random() * 256);

//         $(this).css({
//             'height': '3px',
//             'background': 'linear-gradient(to bottom, rgb(' + r1 + ',' + g1 + ',' + b1 + '), rgb(' + r2 + ',' + g2 + ',' + b2 + '))'
//         });
//     });
// });

// $(document).ready(()=>{
//     $('h1:nth-child(1)').text('<a href="#">text()</a>');
//     $('h1:nth-child(2)').html('<a href="#">html()</a>');
// });

// $(document).ready(()=>{

//     let text =$('h1').text();
//     let html =$('h1').html();

//     alert("text:" + text);
//     alert("html:" + html);



// });

// $(document).ready(()=>{
// $('#box').hover(()=>{
// $('#box').addClass('hover');
// }, () => {
//     $('#box').removeClass('hover'); 
// });
// });


// $(document).ready(()=>{
//     $('h1').click(()=>{
//         alert('ㅁ');
//     });
// });

// $(document).ready(function () {
   
//     $('h1').hover(function () {
       
//         $(this).css({
//             background: 'red',
//             color: 'white'
//         });
//     }, 
//     function () {
      
//         $(this).css({
//             background: '',
//             color: ''
//         });
//     });
// });

// $(document).ready( () => {
// $('#box').css({
//     width: 100,
//     height: 100,
//     background: 'orange'
// }).on('click', function () {
//     $(this).css('background', 'red');
// }).on('mouseenter', function () {
//     $(this).css('background', 'blue');
// }).on('mouseleave', function () {
//     $(this).css('background', 'orange');
// });
// });

// $(document).ready( () => {
//     $('a').click(()=>{
//         alert('가기싫다');
//         event.preventDefault();
//     });
// });

// $(document).ready( () => {

//     $('from').submit((event)=>{
//         let value =$('input').val();

//     });

// });

// $(document).ready( () => {
// $('button').click(()=>{
// $('.page').fadeToggle('2000');
// });
// });


// $(document).ready( function() {
// $('box').css({
//     width:100
//     ,height: 100
//     ,background: 'orange'
// }).animate({
//     width:300
//     ,opacity:0.5
//     }, 500);
// })

$(document).ready(function () {
  
    $('#box').css({
        width: 100
        ,height: 100
        ,background: 'red'
        ,position: 'absolute'
        ,left: 10
        ,top: 10
    }).animate({
        height: '+=200'
        ,width: '-=30'
        ,left: '+300'
        ,opacity: 0.5
    }, 500);
});