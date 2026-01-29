
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });




  // スムーススクロール
  // - 同一ページ内の #hash のみ対象
  // - 該当IDがある時だけ preventDefault してスクロール
  $(document).on('click', 'a[href*="#"]', function (e) {
    const hash = this.hash;
    if (!hash || hash === '#') return;

    // 同一ページ以外（外部URL+hash）は対象外
    if (this.pathname && this.pathname !== location.pathname) return;

    const $target = $(hash);
    if (!$target.length) return;

    e.preventDefault();

    const time = 400;
    const headerH = $('.p-header').outerHeight() ?? $('header').outerHeight() ?? 0;
    const targetY = $target.offset().top - headerH;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  });

});
