<template>
  <div id="register">
    <div class="container container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 text-left ">
          <img class="img-fluid imgAbout" src="../../public/img/reg.jpg" alt="about">
            <div class="rect">
                <p class="rText">Made in Ukraine.</p>
                <p class="rText">Жодної реклами.</p>
                <p class="rText mb-0">Безкоштовно.</p>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 hMobDiv">
            <div class="blockCenter">
              <h1 class="hText">Реєстрація</h1>
              <h4 class="hSubText">Залишайся з нами 24/7.<br>Твої YouFilm ♥️</h4>

              <div class="formWrap">
                <form class="regForm">
                  <div class="form-group">
                    <!--                <label for="exampleInputEmail1">Email address</label>-->
                    <input type="name" class="form-control" id="name" placeholder="Ім’я в YouFilm">
                  </div>
                  <div class="form-group">
    <!--                <label for="exampleInputEmail1">Email address</label>-->
                    <input type="email" class="form-control" id="email" placeholder="Email">
                  </div>
                  <div class="form-group">
    <!--                <label for="exampleInputPassword1">Password</label>-->
                    <input type="password" class="form-control" id="password" placeholder="Пароль">
                  </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="checkRules">
                        <label class="form-check-label" for="checkRules">Погоджуюсь з <a class="aLink" href="#">правилами</a></label>
                    </div>
                  <button type="submit" class="btn btn-gold">Зареєструватися</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
      <div class="container-fluid no-gutters px-0">
          <div class="row no-gutters">
              <div class="divMob">
                  <img src="../../public/img/reg_mob.png" alt="mob banner registration">
                  <div class="textOnImg">
                      <p>Made in Ukraine.</p>
                      <p>Жодної реклами.</p>
                      <p>Безкоштовно.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
