const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var main = document.querySelector("#main");
var crsr = document.querySelector("#cursorcircle");

function mousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursorcircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
mousefollower();

//jab mouse move ho to humlog skew kar paye aur maximum skew and minimium skew define kar paye, jab mouse move ho to chapta ki value badhe,aur jab mouse chalna ya move hona band ho jaye to chapta hatalo
function circleChaptaKaro() {
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;
    //clamps meaning taking one max and one min value which is the limit other no round around these nos.
    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mousefollower(xscale, yscale);
  });
}
circleChaptaKaro();
function firstpageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -0.1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -0.1,
      ease: Expo.easeInOut,
    });
}
firstpageAnim();

//for that animation
//teeno elements ko select kro, uske baad teeno par ek mouse move lgao,jab mouse move ho to pt kromouse kaha par hai,mtlb x or y ki position pta kro, ab mouse ki x and y postion kinjagha us image ko lgado,move krte waqt rotate kro, or jaise jaise ouse tej chl rha h  wiase waise rotaion bhi tej ho jaye


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

