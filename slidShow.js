let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
  "https://japan-map.com/wp-content/uploads/hokkaido.png",
  "https://japan-map.com/wp-content/uploads/tohoku.png",
  "https://japan-map.com/wp-content/uploads/kanto.png",
  "https://japan-map.com/wp-content/uploads/chubu.png",
  "https://japan-map.com/wp-content/uploads/kinki.png",
  "https://japan-map.com/wp-content/uploads/chugoku.png",
  "https://japan-map.com/wp-content/uploads/shikoku.png",
  "https://japan-map.com/wp-content/uploads/kyushu.png",
  "https://japan-map.com/wp-content/uploads/okinawa.png",


  ];


function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src',url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 1000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
