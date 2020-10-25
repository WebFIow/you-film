<template>
  <div id="categories">
    <div class="container">
      <div class="cat-wrap row">
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat1.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Comedy">Комедіі</router-link>
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat2.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Romance">Мелодрами</router-link>
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat3.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Detective"
                >Детективи</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="cat-wrap row">
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat4.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Thriller">Боєвики</router-link>
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat5.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Fantasy">Фентезі</router-link>
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat6.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Drama">Драми</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cat-wrap row">
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat7.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Family">Сімейні</router-link>
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat8.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=History"
                >Документальні</router-link
              >
            </div>
          </div>
        </div>
        <div class="cat-wrap--card col-4">
          <div class="cat-wrap--card---img">
            <img src="../../public/img/categories/cat9.png" alt="" />
            <div class="cat-wrap--card---text">
              <router-link to="film-main?genre=Horror">Жахи</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="categories-mob">
      <div class="categories-mob--bac">
        <h3>Жанри</h3>
        <div class="categories-mob--wrap">
          <router-link to="film-main?genre=Comedy">Комедіі</router-link>
          <router-link to="film-main?genre=Romance">Мелодрами</router-link>
          <router-link to="film-main?genre=Detective">Детективи</router-link>
          <router-link to="film-main?genre=Drama">Драми</router-link>
          <router-link to="film-main?genre=Thriller">Боєвики</router-link>
          <router-link to="film-main?genre=Fantasy">Фєнтезі</router-link>
          <router-link to="film-main?genre=Family">Cімейні</router-link>
          <router-link to="film-main?genre=Hisroty">Документальні</router-link>
          <router-link to="film-main?genre=Horror">Жахи</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>