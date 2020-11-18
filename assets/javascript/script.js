$(document).ready(function () {
  $('h1').typeIt({
    strings: ["{Hello world!}", "{My name is Arben Allmeta}"],
    speed: 150,
    breakLines: false,
    deleteDelay: 800,
    autoStart: true
  });

  $('.scrolltext').typeIt({
    strings: ["{Scroll Down}"],
    speed: 150,
    startDelay: 5000,
    breakLines: false,
    deleteDelay: 800,
    autoStart: true
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < 300) {
      pix1();
      pix2();
      pix3();
    }
  });

  function pix1 () {
    $('#aboutme').typeIt({
      strings: ['{About me}'],
      speed: 75,
      autoStart: true
    });
    return;
  }

  function pix2 () {
    $('#esbp').typeIt({
      strings: ['{Summer Bridge}'],
      speed: 100,
      autoStart: true
    });
    return;
  }

  function pix3 () {
    $('#resume').typeIt({
      strings: ['{Resume}'],
      speed: 100,
      autoStart: true
    });
    return;
  }
});
