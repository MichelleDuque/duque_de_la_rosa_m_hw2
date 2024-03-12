export function gsapanimation(){   
    const playerBoxes = document.querySelectorAll(".player-box");
  
    playerBoxes.forEach(playerBox => {
      const hoverAnimation = gsap.to(playerBox, {
        scale: 1.1,
        duration: 0.3,
        paused: true
      });

      function hoverWorking() {
        hoverAnimation.play();
      }

      function hoverOff() {
        hoverAnimation.reverse();
      };
  
      playerBox.addEventListener("mouseenter", hoverWorking) 
  
      playerBox.addEventListener("mouseleave", hoverOff) 
    });


}



  

  