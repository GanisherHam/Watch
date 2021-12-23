const hour = document.querySelector(`.h`),
      min = document.querySelector(`.m`),
      sec = document.querySelector(`.s`),
      digitalHour = document.querySelector(`.hours`),
      digitalMin = document.querySelector(`.minutes`),
      swHour = document.querySelector(`.stopwatch__hours`),
      swMin = document.querySelector(`.stopwatch__minutes`),
      swSec = document.querySelector(`.stopwatch__seconds`);
        
        
// let time = new Date();

// console.log(time);
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMilliseconds());
// console.log(time.getMonth());


function clock() {
  let time = new Date(),
      second = time.getSeconds() * 6,
      minutes = time.getMinutes() * 6,
      hours = time.getHours() * 30;

      sec.style = `transform: rotate(${second}deg)`;
      min.style = `transform: rotate(${minutes}deg)`;
      hour.style = `transform: rotate(${hours}deg)`;

      digitalHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
      digitalMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

      // if(digitalHour.innerHTML < 10){
      //   digitalHour.innerHTML = '0' + time.getHours();
      // }else {
      //   digitalHour.innerHTML = time.getHours();
      // }
      // if(digitalMin.innerHTML < 10){
      //   digitalMin.innerHTML = '0' + time.getMinutes();
      // }else {
      //   digitalMin.innerHTML = time.getMinutes();
      // }

      setTimeout(() => clock(), 1000);
      // Рекурсия это когда функция вызывает саму себя внутри себя
}

clock();


// setTimeout(() => {
//   console.log(`asdasd`);
// }, 5000)

// setInterval(() => {
//   console.log(`asadsda`);
// }, 1000);

const tabsItem = document.querySelectorAll(`.tabsItem`),
      tabsContent = document.querySelectorAll(`.tabsContentItem`),
      btn = document.querySelector(`.stopwatch__btn`),
      starter = document.querySelector(`.tabsLink__span`);


tabsItem.forEach((item, i) => {
  item.addEventListener(`click`, function(event) {
    event.preventDefault(); /* обьект событий - отменяет обычное поведение элементов в браузере */
    removeActiveClass();
    this.classList.add(`active`);
    tabsContent[i].classList.add(`active`);
  })
})

function removeActiveClass() {
  tabsItem.forEach((item, i) => {
    item.classList.remove(`active`)
    tabsContent[i].classList.remove(`active`)
  })
}

// function timer() {
//   btn.addEventListener(`click`, () => {
//     if(btn.innerHTML == `start`){
//       btn.innerHTML = `stop`;
//       starter.classList.add(`active`)
//       intervals();
//     }else if(btn.innerHTML == `stop`){
//       starter.classList.remove(`active`);
//       starter.classList.add(`active_clear`);
//       btn.innerHTML = `reset`;
//     }else if(btn.innerHTML == `reset`){
//       swSec.innerHTML = 0;
//       swMin.innerHTML = 0;
//       swHour.innerHTML = 0;
//       btn.innerHTML = `start`;
//     }
//   })
// }

// timer();



// const timer1 = document.querySelector(`.tabsItem:nth-of-type(1)`),
//       timer2 = document.querySelector(`.tabsItem:nth-of-type(2)`),
//       clockMin = document.querySelector(`.clock.tabsContentItem`),
//       stopWatcher = document.querySelector(`.stopwatch.tabsContentItem`),
//       btn = document.querySelector(`.stopwatch__btn`),
//       starter = document.querySelector(`.tabsLink__span`);

// timer1.addEventListener(`click`, () => {
//   timer2.classList.remove(`active`)
//   timer1.classList.add(`active`);
//   stopWatcher.classList.remove(`active`)
//   if(timer1.classList.add(`active`) == clockMin.classList.add(`active`)){
//     clockMin.classList.add(`active`)
//   }
// })

// timer2.addEventListener(`click`, () => {
//   timer1.classList.remove(`active`)
//   timer2.classList.add(`active`);
//   clockMin.classList.remove(`active`)
//   if(timer2.classList.add(`active`) == stopWatcher.classList.add(`active`)){
//     stopWatcher.classList.add(`active`)
//     starter.classList.add(`active`)
//     intervals();
//   }
//   btn.addEventListener(`click`, () => {
//     starter.classList.add(`active_clear`)
//   })
// })


// function intervals() {
//   if(swSec.innerHTML < 59){
//     swSec.innerHTML++
//   }else if(swSec.innerHTML == 59){
//     swSec.innerHTML = 0;
//     if(swMin.innerHTML < 59){
//       swMin.innerHTML++;
//     }else if(swMin.innerHTML == 59){
//       swMin.innerHTML = 0;
//       if(swHour.innerHTML < 100){
//         swHour.innerHTML++;
//       }else if(swHour.innerHTML == 100){
//         swHour.innerHTML = 0;
//       }
//     }
//   }
//   setTimeout(() => intervals(), 1000)
// }


function timer() {
  btn.addEventListener(`click`, () => {
    if(btn.innerHTML == `start`){
      btn.innerHTML = `stop`;
      starter.classList.add(`active`)
      intervals();
    }else if(btn.innerHTML == `stop`){
      clearTimeout(timeOutId)
      starter.classList.remove(`active`);
      starter.classList.add(`active_clear`);
      btn.innerHTML = `reset`;
    }else if(btn.innerHTML == `reset`){
      starter.classList.remove(`active_clear`);
      swSec.innerHTML = 0;
      swMin.innerHTML = 0;
      swHour.innerHTML = 0;
      btn.innerHTML = `start`;
    }
  })
}

timer();

let timeOutId;

function intervals() {
  if(swSec.innerHTML < 59){
    swSec.innerHTML++
  }else if(swSec.innerHTML == 59){
    swSec.innerHTML = 0;
    if(swMin.innerHTML < 59){
      swMin.innerHTML++;
    }else if(swMin.innerHTML == 59){
      swMin.innerHTML = 0;
      if(swHour.innerHTML < 100){
        swHour.innerHTML++;
      }else if(swHour.innerHTML == 100){
        swHour.innerHTML = 0;
      }
    }
  }
  timeOutId = setTimeout(() => intervals(), 1000)
}

