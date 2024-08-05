// import _ from "lodash";
// import myData from "./myData.json";
// import axios from "axios";
// import cube from "./modules.js";
// import * as R from "./modules.js";

// console.log(myData);

// const user = {
//   name: "park",
//   age: 20,
//   email: ["dngus@gmail.com", "kim@gmail.com"],
// };
// console.log(user);

// const str = JSON.stringify(user);
// console.log(str);
// const obj = JSON.parse(str);
// console.log(obj);

// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.getItem("user"));
// console.log(JSON.parse(localStorage.getItem("user")));

// const str = localStorage.getItem("user");
// const obj = JSON.parse(str);
// Object.age = 22;
// console.log(obj);
// localStorage.setItem("user", JSON.stringify(obj));
// console.log(R.arras);
// console.log(R.getName());

// console.log(cube(2, 4));
// const user = {
//   name: "Park",
//   age: 22,
//   email: ["lhj2778@naver.com"],
// };

// const copyUser = user;
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = {...user}
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('heeju@naver.com')
// console.log(user.email === copyUser.email);

// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kim@gmail.com');
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const userA = [
//     {userID: '1', name: "mingss"},
//     {userID: '2', name: "kim"},
// ]

// const userB = [
//     {userID: '3', name: "heeju"},
//     {userID: '4', name: "Lee"},
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userID'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);

// const users = [
//     {userId: '1', name: 'heeju'},
//     {userId: '2', name: 'kim'},
//     {userId: '3', name: 'lee'},
//     {userId: '4', name: 'park'}
// ]

// const foundUser = _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'lee'});
// console.log(foundUserIndex);
// _.remove(users, {name: 'mingss'});
// console.log(users);

// let array = [1, 2, 3, 4]
// let evens = _.remove(array, function(){
//     return n % 2 === 0
// })

// console.log(array);
// console.log(evens);

// let myFriend = [
//     {name: 'Kim', active: false},
//     {name: 'Lee', active: false},
// ]

// console.log(_.every(myFriend, {name: 'kim', active: false}));
// console.log(_.every(myFriend, ['avtive', false]));
// console.log(_.every(myFriend, 'active'));

// let mySister = [
//   { name: "kim", age: 22, city: "Seoul" },
//   { name: "lee", age: 22, city: "Daegu" },
//   { name: "park", age: 23, city: "Busan" },
//   { name: "you", age: 24, city: "Seoul" },
// ];

// console.log(_.filter(mySister), { age: 22, name: "kim" });
// console.log(_.filter(mySister, (sister) => sister.age === 22));

// function getMovies() {
//   axios
//     .get(
//       " "
//     )
//     .then((response) => {
//       console.log(response);
//       const h1El = document.querySelector("h1");
//       const imgEl = document.querySelector("img");
//       const h4El = document.querySelector("h4");
//       const h5El = document.querySelector("h5");
//       const h3El = document.querySelector("h3");
//       h1El.textContent = response.data.Search[0].Title;
//       imgEl.src = response.data.Search[0].Poster;
//       h4El.textContent = response.data.Search[0].Type;
//       h5El.textContent = response.data.Search[0].Year;
//       h3El.textContent = response.data.Search[0].Plot;
//     });
// }
// getMovies();

//자전거 지도 만들기

const API_KEY = "";
async function getData() {
  const url = $`{API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const locations = data.rentBikeStatus.row.map((spot) => [
    spot.stationName,
    spot.stationLatitude,
    spot.stationLongitude,
    spot.parkingBikeTotCnt,
  ]);
  console.log(data);
  console.log("locations", locations);
  drawMap(locations);
}

function drawMap(locations) {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(locations[0][1], locations[0][2]),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  const infowindow = new google.maps.InfoWindow();
  locations.forEach((location, i) => {
    const markerElement = new google.maps.marker.AdvancedMarkerElement({
      position: new google.maps.LatLng(location[1], location[2]),
      map: map,
      title: location[0],
    });
    markerElement.addListener("click", () => {
      infowindow.setContent(
        `<div><strong>${location[0]}</strong><br/>Bikes available: ${location[3]}</div>`
      );
      infowindow.open(map, markerElement);
    });
  });
}

window.onload = getData;
