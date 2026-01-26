gsap.set('body', {
  opacity: 1,
});

var webStorage = function () {
  if (sessionStorage.getItem('access')) {
    gsap.set('.js-mv-lead', {
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

