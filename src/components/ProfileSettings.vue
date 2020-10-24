<template>
  <div class="tab-content">
    <form>
      <div class="form-group">
        <label for="name_login">Ім’я в YouFilm</label>
        <div class="d-flex justify-content-between">
          <input type="text" class="form-control" id="name_login" placeholder="Одри Хепбёрн" disabled>
          <button type="submit" class="btn btn-mdl">Змінити</button>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <div class="d-flex justify-content-between">
          <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="moviesaremylife@you-film.ua" disabled>
          <button type="submit" class="btn btn-mdl">Змінити</button>
        </div>
      </div>

      <p class="accordion" @click="showAcc">Змінити пароль</p>
      <div class="panel">
        <ul class="accUL">
          <li>
            <div class="form-group">
              <label for="exampleInputPassword1">Старий пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Старий пароль">
            </div>
          </li>
          <li>
            <div class="form-group">
              <label for="exampleInputPassword1">Новий пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Новий пароль">
            </div>
          </li>
          <li>
            <div class="form-group">
              <label for="exampleInputPassword1">Повторити новий пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Новий пароль">
            </div>
          </li>
        </ul>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
    methods: {
      showAcc(e) {
        const el = e.target;
        el.classList.toggle("active");
        const panel = el.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 70 + "px";
        }
      },
    },
  };
</script>
