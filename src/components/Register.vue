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
                <form class="regForm" @submit.prevent="register">
                  <div class="form-group">
                    <!--                <label for="exampleInputEmail1">Email address</label>-->
                    <input 
                      type="name" 
                      v-model="name" 
                      class="form-control" 
                      id="name" 
                      placeholder="Ім’я в YouFilm"
                      :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                    >
                  </div>
                  <div class="form-group">
    <!--                <label for="exampleInputEmail1">Email address</label>-->
                    <input 
                      type="email" 
                      v-model="email" 
                      class="form-control" 
                      id="email" 
                      placeholder="Email"
                      :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                    >
                  </div>
                  <div class="form-group">
    <!--                <label for="exampleInputPassword1">Password</label>-->
                    <input 
                      type="password" 
                      v-model="password"
                      class="form-control" 
                      id="password" 
                      placeholder="Пароль"
                      :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                    >
                  </div>
                    <div class="form-group form-check">
                        <input
                         type="checkbox" 
                         v-model="agreed" 
                         class="form-check-input"
                          id="checkRules"
                          :class="{invalid: !agreed}"
                          >
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

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    agreed: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(8)},
    name: {required, minLength: minLength(1)},
    agreed: {required}
  },
  methods: {
    async register() {
      if(this.$v.$invalid || !this.agreed) {
        this.$v.$touch()
        //alert('Дані введені некоректно')
        return
      }
       const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
  input.invalid {
    border-bottom: 2px solid red !important;
  }

  input[type=checkbox].invalid {
    outline: 1px solid red;
  }
</style>