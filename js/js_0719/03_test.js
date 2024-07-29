// window.onload = function () {
     
//       let header = document.getElementById('header');

     
//       header.style.color = 'orange';
//       header.style.background = 'red';
//       header.innerHTML = 'From JavaScript';
//   };
// -----------------------------------------------------------
// window.onload = function () {
      
//       let headers = document.querySelectorAll('h1');
      
//       for (let i = 0; i < headers.length; i++) {
         
//           let header = headers[i];
          
//           header.style.color = 'orange';
//           header.style.background = 'red';
//           header.innerHTML = 'From JavaScript';
//       }
//   };
// -----------------------------------------------------------
//   window.onload = function () {
     
//       let output = '';
//       for (let i = 0; i <= 99; i++) {
//           output += '<h1>가 - ' + i + '</h1>';
//       }
      
      
//       // document.body.textContent = output;
      
//       document.body.innerHTML = output;
//   };
// -----------------------------------------------------------
// window.onload = () => {
//       let output = '';
//       for (let i = 0; i < 256; i++) {
//           output += '<div></div>';
//       }
//       document.body.innerHTML = output;

//       let a = document.querySelectorAll('div');
//       for (let i = 0; i < a.length; i++) {
//           let div = a[i];

          
//           let r = Math.floor(Math.random() * 256);
//           let g = Math.floor(Math.random() * 256);
//           let b = Math.floor(Math.random() * 256);


//           div.style.height = '3px';
//           div.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
//       }
//   };
// -----------------------------------------------------------  
//   window.onload = function () {
     
//       let image = document.getElementById('image');
      
      
//       image.src = 'http://via.placeholder.com/1200x600';
//       image.width = 1200;
//       image.height = 600;
//   };
// window.onload = function () {
//       let clock = document.getElementById('clock');
//       setInterval(()=>{
//             let now =new Date();
//             clock.innerHTML = now.toString();
//       },1000); 
// };
// -----------------------------------------------------------

      document.getElementById('button').onclick = function (){
            this.textContent = this.textContent +'ო̤̫';
      };

