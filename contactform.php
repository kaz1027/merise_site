<?php
  session_start();
  $mode = 'input';
  $errmessage = array();
  if( isset($_POST['back']) && $_POST['back'] ){
    // 何もしない
  } else if( isset($_POST['confirm']) && $_POST['confirm'] ){
	  // 確認画面
    $_SESSION['company']	= htmlspecialchars($_POST['company'], ENT_QUOTES);
    if( !$_POST['company'] ) {
        $errmessage[] = "会社名・部署名を入力してください";
    } else if( mb_strlen($_POST['company']) > 100 ){
        $errmessage[] = "会社名・部署名は100文字以内にしてください";
    }
      $_SESSION['fullname']	= htmlspecialchars($_POST['fullname'], ENT_QUOTES);
      $_SESSION['fullname']	= htmlspecialchars($_POST['fullname'], ENT_QUOTES);
    if( !$_POST['fullname'] ) {
      $errmessage[] = "ご担当者名を入力してください";
    } else if( mb_strlen($_POST['fullname']) > 100 ){
      $errmessage[] = "ご担当者名は100文字以内にしてください";
    }
    $_SESSION['fullname']	= htmlspecialchars($_POST['fullname'], ENT_QUOTES);
    
    if( !$_POST['email'] ) {
      $errmessage[] = "メールアドレスを入力してください";
    } else if( mb_strlen($_POST['email']) > 200 ){
      $errmessage[] = "メールアドレスは200文字以内にしてください";
    } else if( !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
      $errmessage[] = "メールアドレスが不正です";
    }
    $_SESSION['email']	= htmlspecialchars($_POST['email'], ENT_QUOTES);

    if( !$_POST['message'] ){
      $errmessage[] = "お問い合わせ内容を入力してください";
    } else if( mb_strlen($_POST['message']) > 500 ){
      $errmessage[] = "お問い合わせ内容は500文字以内にしてください";
    }
    $_SESSION['message'] = htmlspecialchars($_POST['message'], ENT_QUOTES);

    if( $errmessage ){
      $mode = 'input';
    } else {
      $mode = 'confirm';
    }
  } else if( isset($_POST['send']) && $_POST['send'] ){
    // 送信ボタンを押したとき
    $message  = "以下の内容でお問い合わせを受け付けました \r\n\r\n"
              . "company: " . $_SESSION['company'] . "\r\n\r\n"
              . "fullname: " . $_SESSION['fullname'] . "\r\n\r\n"
              . "email: " . $_SESSION['email'] . "\r\n\r\n"
              . "お問い合わせ内容:\r\n"
              . preg_replace("/\r\n|\r|\n/", "\r\n", $_SESSION['message']);
    mail($_SESSION['email'],'お問い合わせありがとうございます',$message);
    mail('nspdesign2012@gmail.com','MeRISE ホームページよりお問い合わせを受け付けました',$message);
    $_SESSION = array();
    $mode = 'send';
  } else {
    $_SESSION['company'] = "";
    $_SESSION['fullname'] = "";
    $_SESSION['email']    = "";
    $_SESSION['message']  = "";
  }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせフォーム</title>
    <meta name="description" content="私たちMeRISE株式会社はデザインでブランディングをサポートしています。
    グラフィックデザイン、ウェブデザイン、店舗の内装からTシャツやライターに至るまで、店舗運営に必要なほぼ全てツールを制作いたします
    一人一人のお客様に寄り添い、一貫したデザインコンセプトでブランディングをサポートします。">
    <meta name="keywords"  content="東京,港区,デザイン会社,ブランディング,マーケティング,グラフィックデザイン,店舗デザイン,ウェブデザイン,HP制作,ロゴ制作,経営,コンサルタント,コンサル,経理業務">
    <!--=============Google Font ===============-->
    <link href="https://fonts.googleapis.com/css?family=Lato:900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script>
  (function(d) {
    var config = {
      kitId: 'vvv8wrz',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
  <title>お問い合わせフォーム</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="./css/reset.css">
  <link rel="stylesheet" type="text/css" href="./css/form.css">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body ontouchstart="">
    <div class="splashbg1"></div>
    <div class="splashbg2"></div>
    <header id="h-wrapper">
        <div id="header" class="fadeInTop">
            <h1><a href="./index.html">MeRISE<br>INC.</a></h1>
            <nav id="pc-nav">
                <ul id="page-link" class="gnavi">
                    <li><a href="./vision/vision.html">VISION</a></li>
                    <li><a href="./service/service.html">SERVICE</a></li>
                    <li><a href="./works/works.html">WORKS</a></li>
                    <li><a href="./company/company.html">COMPANY</a></li>
                    <li><a href="./recruit/index.html">RECRUIT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        <div class="openbtn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav id="g-nav">
            <div id="g-nav-list">
                <ul id="page-link">
                    <li class="g-nav-text"><a href="./vision/vision.html">VISION</a></li>
                    <li class="g-nav-text"><a href="./service/service.html">SERVICE</a></li>
                    <li class="g-nav-text"><a href="./works/works.html">WORKS</a></li>
                    <li class="g-nav-text"><a href="./company/company.html">COMPANY</a></li>
                    <li class="g-nav-text"><a href="./recruit/index.html">RECRUIT</a></li>
                    <li class="g-nav-text"><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </nav>
        </div>
    </header>
    <main>
    <div id="contact-wrapper">
    <?php if( $mode == 'input' ){ ?>
      <!-- 入力画面 -->
      <?php
        if( $errmessage ){
          echo '<div class="alert alert-danger" role="alert">';
          echo implode('<br>', $errmessage );
          echo '</div>';
        }
      ?>
      <h2 class="s-title fadeDownTop">FORM</h2>
      <p class="subtitle fadeDownTop">お問い合わせフォーム</p>
      <div class="contactform fadeUpTrigger">
        <form action="./contactform.php" method="post">
          <p class="form_contents">会社名・部署名</p>
          <input type="text"    name="company" value="<?php echo $_SESSION['company'] ?>" class="form-control"><br>
          <p class="form_contents">ご担当者名</p>
          <input type="text"    name="fullname" value="<?php echo $_SESSION['fullname'] ?>" class="form-control"><br>
          <p class="form_contents">メールアドレス</p>
          <input type="email"   name="email"    value="<?php echo $_SESSION['email'] ?>" class="form-control"><br>
          <p class="form_contents">お問い合わせ内容</p>
          <textarea cols="40" rows="8" name="message" class="form-control"><?php echo $_SESSION['message'] ?></textarea><br>
          <div class="C_Btn fadeUpTrigger"><input type="submit" name="confirm" value="確　認" class="btn"/></div>
        </form>
      </div>
    <?php } else if( $mode == 'confirm' ){ ?>
      <!-- 確認画面 -->
      <div class="center confirm">
      <h2 class="s-title fadeDownTop">CONFIRM</h2>
      <p class="subtitle fadeDownTop">送信前確認</p>
      </div>
      <div class="confirm_form fadeUpTrigger">
        <form action="./contactform.php" method="post">
          <p class="confirm_form_contents">会社名・部署名</p>
          <?php echo $_SESSION['company'] ?><br>
          <p class="confirm_form_contents">ご担当者名</p>
          <?php echo $_SESSION['fullname'] ?><br>
          <p class="confirm_form_contents">メールアドレス</p>
          <?php echo $_SESSION['email'] ?><br>
          <p class="confirm_form_contents">お問い合わせ内容</p>
          <?php echo nl2br($_SESSION['message']) ?><br>
          <div class="Btn- fadeUpTrigger">
            <input type="submit" name="back" value="戻　る" class="btn"/>
            <input type="submit" name="send" value="送　信" class="btn"/>
          </div>
        </form>
      </div>
    <?php } else { ?>
      <!-- 完了画面 -->
      <p class="form_conclusion fadeUpTrigger">送信しました。お問い合わせありがとうございました。<br>
      <div class="Btn- fadeUpTrigger">
              <a href="./index.html" class="btn">トップページへ</a>
      </div>
    <?php } ?>
    </div>
  </main>
  <!--jQuery-->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <!--機能編 8-1-9 スクロールの速さが変化-->     
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
  <!--機能編 6-1-3 ゆっくりズームアウトさせながら全画面で見せる-->   
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/vegas.min.js"></script>
  <!--自作のJS--> 
  <script src="./js/script.js"></script>
</body>
</html>


