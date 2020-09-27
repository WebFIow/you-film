<template>
  <div id="register">
    <div class="container container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 text-center">
          <img class="img-fluid imgAbout" src="../../public/img/reg.jpg" alt="about">
        </div>
        <div class="col-lg-6 col-md-6">
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
              <button type="submit" class="btn btn-primary">Зареєструватися</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
