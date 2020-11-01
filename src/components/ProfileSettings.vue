<template>
  <div class="tab-content">

      <div class="form-group">
        <label for="name_login">Ім’я в YouFilm</label>
        <div class="d-flex justify-content-between">
          <input type="text" class="form-control" id="name_login" placeholder="Новий псевдонім" v-model="name">
          <button type="button" @click.prevent="changeUserName" @keyup.enter.prevent="changeUserName" class="btn btn-mdl mobNotVisible">Змінити</button>
          <a href="#" class="btn-edit"></a>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <div class="d-flex justify-content-between">
          <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Новий email" v-model="email">
          <button type="button" class="btn btn-mdl mobNotVisible">Змінити</button>
          <a href="#" class="btn-edit"></a>
        </div>
      </div>

      <p class="accordion" @click="showAcc">Змінити пароль</p>
      <div class="panel">
        <ul class="accUL mlMobNone">
          <li>
            <div class="form-group">
              <label for="old_pass">Старий пароль</label>
              <input type="password" class="form-control form-password" id="old_pass" placeholder="*********">
            </div>
          </li>
          <li>
            <div class="form-group">
              <label for="new_pass">Новий пароль</label>
              <input type="password" class="form-control form-password" id="new_pass" placeholder="*********">
            </div>
          </li>
          <li>
            <div class="form-group">
              <label for="repeat_new">Повторити новий пароль</label>
              <div class="d-flex justify-content-between">
                <input type="password" class="form-control form-password" id="repeat_new" placeholder="*********">
                <button type="submit" class="btn btn-mdl mobNotVisible">Змінити</button>
                <a href="#" class="btn-edit"></a>
              </div>
            </div>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
  export default {
    props: ['userName', 'userEmail'],
    data() {
      return {
        name: this.userName,
        email: this.userEmail
      }
    },
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
      changeUserName() {
        if (this.name !== this.$store.getters.info.name) {
          this.$store.dispatch('updateInfo', {name: this.name})
        }
      }
    },
  };
</script>
