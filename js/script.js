/*===========================================================*/
/*機能編  6-1-3 ゆっくりズームアウトさせながら全画面で見せる*/
/*===========================================================*/

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/top-img1.png'},
				{ src: './img/top-img2.png'},
				{ src: './img/top-img3.png'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/top-img1.png'},
				{ src: './img/top-img2.png'},
				{ src: './img/top-img3.png'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
        timer: false,
	});

/*===========================================================*/
/* ハンバーガーメニュー
/*===========================================================*/

	$(".openbtn").click(function () {//ボタンがクリックされたら
		$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
		$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
	});
	
	$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
		$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
		$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	});

/*===========================================================*/
/* 指定の位置にスクロール
/*===========================================================*/

	$('#page-link a[href*="#"]').click(function () {
		var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
		var pos = $(elmHash).offset().top-120;//idの上部の距離からHeaderの高さを引いた値を取得
		$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
		return false;
	});


/*===========================================================*/
/* 印象編 4 最低限おぼえておきたい動き*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
    // 4-1 ふわっ（下から）
    
$('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
		});
    //4-1 ふわっ（左から）
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
	$('.fadeLeftTrigger1').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft1');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft1');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
	$('.fadeLeftTrigger2').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft2');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft2');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
    //4-1 ふわっ（右から）
	$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
		$(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
		}
		});
	$('.fadeRightTrigger1').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeRight1');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
		$(this).removeClass('fadeRight1');// 画面外に出たらfadeRightというクラス名を外す
		}
		});
	$('.fadeRightTrigger2').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeRight2');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
		$(this).removeClass('fadeRight2');// 画面外に出たらfadeRightというクラス名を外す
		}
		});


		$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
			var elemPos = $(this).offset().top-50;//要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
			$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
			}else{
			$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
			}
			}); 
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


/*===========================================================*/
/* 印象編 4-12 順番に現れる（CSS x jQuery）*/
/*===========================================================*/

function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
            ScrollTimelineAnime();//機能編 9-1-5 スクロールをするとエリアの高さに合わせて線が伸びる関数を呼ぶ
            ScrollAnime();//機能編 5-1-9スクロール途中でヘッダーが消え、上にスクロールすると復活の関数を呼ぶ
            moveAnimation();//印象編 4-13 ランダムに現れる（CSS x jQuery）	
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() {    
        fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});
