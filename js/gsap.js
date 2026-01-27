// gsap.set('body', {
//   opacity: 1,
// });
gsap.set('.js-mv-lead', {
  opacity: 0,
});
gsap.set('.js-mv-label', {
  opacity: 0,
});
gsap.set('.p-mv__catch', {
  opacity: 0,
});
gsap.set('.p-mv__btn-wrapper', {
  opacity: 0,
});

var webStorage = function () {
  if (sessionStorage.getItem('access')) {
    gsap.set('.js-mv-lead', {
      opacity: 1,
    });
    gsap.set('.js-mv-label', {
      opacity: 1,
    });
    gsap.set('.p-mv__catch', {
      opacity: 1,
    });
    gsap.set('.p-mv__btn-wrapper', {
      opacity: 1,
    });
    

  } else {
    sessionStorage.setItem('access', 0);

    const opening = gsap.timeline();

    opening.fromTo('.js-mv-lead', {
      y: 50,
      opacity: 0,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
    opening.fromTo('.js-mv-label', {
      opacity: 0,
      scale: 0.4,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      scale: 1,
    },
      "-=0.8");
    opening.fromTo('.p-mv__catch', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    }, "-=0.4");
    opening.fromTo('.p-mv__btn-wrapper', {
      opacity: 0,
      filter: 'blur(10px)',
    }, {
      opacity: 1,
      duration: 0.3,
      filter: 'blur(0px)',
      ease: 'power2.inOut',
    }, "-=0.1");

  }
}
webStorage();

let fades = document.querySelectorAll('.js-fade');

fades.forEach(fade => {
  gsap.fromTo(fade, {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 1,    
    stagger: 0.1, 
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: fade,
      start: 'top 90%',
    },
  });
});
let clipPaths = document.querySelectorAll('.js-clip-path');

clipPaths.forEach(clipPath => {
  gsap.fromTo(clipPath, {
    clipPath: 'inset(100% 0 0 0)',
  }, {
    clipPath: 'inset(0 0 0 0)',
    duration: 0.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: clipPath,
      start: 'top 90%',
    },
  });
});

let markers = document.querySelectorAll('.js-marker');

markers.forEach(marker => {
  gsap.to(marker, {
    duration: 1.5,
    delay: 0.7,
    '--width': '100%',
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: marker,
      start: 'top 90%',
    },
  });
});

// gsap.to(".js-marker", {
//   duration: 1.5,
//   delay: 0.7,
//   '--width': '100%',
//   ease: 'power2.inOut',
//   scrollTrigger: {
//     trigger: "js-marker",
//     start: 'top 90%',
//   },
// });

let bigs = document.querySelectorAll('.js-big');
bigs.forEach(big => {
  gsap.fromTo(big, {
    scale: 0.5,
  }, {
    scale: 1,
    duration: 0.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: big,
      start: 'top 90%',
    },
  });
});
let pointCards = document.querySelectorAll('.js-point-card');
pointCards.forEach(pointCard => {
  gsap.fromTo(pointCard, {
    scale: 0.7,
  }, {
    scale: 1,
    duration: 0.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: pointCard,
      start: 'top 90%',
    },
  });
}); 