gsap.to(".nav",{
    backgroundColor: "#000",
    height: "75px",
    duration: 0.3,
    scrollTrigger: {
        trigger : ".nav", 
        scroller:"body", 
        start: "top -10%", 
        scrub: 0.2 
    }
})

gsap.from(".content",{
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
  scrollTrigger:{
      trigger: ".intrests",
      scroller: "body",
      scrub:4,
      end: "top 55%"
  }
})


let element = document.querySelector('#element')
let i = 0;
function changeElement(){
    let arr = ['Frontend developer', 'Backend Developer', 'Critical Thinker' ,'Passionate learner']
    element.textContent = arr[i]
    i = (i + 1) % arr.length;
}
setInterval(changeElement, 3000)

const triggers = document.querySelectorAll(".trigger");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', function(){
    modals[index].classList.add('active');
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', function(){
    modals.forEach((modal) => {
      modal.classList.remove('active');
    });
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', function(e){
    if(e.target !== this) return;
    modal.classList.remove('active');
  });
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        modals.forEach((modal) => {
          modal.classList.remove('active');
        });
    }
});
