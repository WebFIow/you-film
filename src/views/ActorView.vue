<template>
  <div id="actor-view">
    <div class="actor-view--wrap container">
      <div class="actor-view--info row">
        <div class="actor-info--text col-5">
          <h3 class="hText">Том Фелтон</h3>
          <div class="fTable">
            <table class="table">
              <tbody>
                <tr>
                  <td>Дата народження</td>
                </tr>
                <tr>
                  <td>Вік</td>
                </tr>
                <tr>
                  <td>Країна</td>
                </tr>
                <tr>
                  <td>Фільми:</td>
                </tr>
                <div class="actor-info--films row">
                  <div class="actor-info--films---wrap col-4">
                    <img src="../../public/img/actor-film.png" />
                    <a href="#">Гаррі Поттер</a>
                  </div>
                  <div class="actor-info--films---wrap col-4">
                    <img src="../../public/img/actor-film.png" />
                    <a href="#">Гаррі Поттер</a>
                  </div>
                  <div class="actor-info--films---wrap col-4">
                    <img src="../../public/img/actor-film.png" />
                    <a href="#">Гаррі Поттер</a>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
        <div class="actor-info--img col-4">
          <div class="actor-info--img---wrap">
            <img src="../../public/img/actors.jpg" />
          </div>
          <div class="actor-rating">
            <a class="like">
              <i class="fa fa-thumbs-o-up"></i>
              <input
                class="qty1"
                name="qty1"
                readonly="readonly"
                type="text"
                value="130"
              />
            </a>
            <a class="dislike">
              <i class="fa fa-thumbs-o-down"></i>
              <input
                class="qty1"
                name="qty1"
                readonly="readonly"
                type="text"
                value="30"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="hText">Відгуки</h3>
          <div class="comment crComment container">
            <div class="row">
              <div class="col-xl-2 col-sm-3">
                <div class="usWrap">
                  <span class="profile-img"
                    ><span class="profile-img--name">{{
                      nameFirstLetter
                    }}</span></span
                  >
                  <p>Головна вовчиця</p>
                  <div class="imgStars imgStarsMob d-md-none d-sm-block">
                    <div class="rating">
                      <span></span><span></span><span></span><span></span
                      ><span></span> <span></span><span></span><span></span
                      ><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-10 col-sm-9 px-mob-none">
                <form id="cForm">
                  <textarea
                    id="cArea"
                    rows="3"
                    placeholder="Залишити відгук"
                  ></textarea>
                </form>
                <div class="row">
                  <div class="col-12 col-left">
                    <button class="btn btn-comment">Надіслати</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActorView",
};
</script>