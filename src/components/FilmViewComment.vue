<template>
  <div class="comment rComment container">
    <div class="row">
      <div class="col-xl-2 col-sm-3">
        <div class="usWrap">
          <span class="profile-img"><span class="profile-img--name">{{nameFirstLetter}}</span></span>
          <p>{{name}}</p>
          <div class="dtext d-xl-none d-md-none d-sm-none">tut budet time</div>
        </div>
      </div>
      <div class="col-xl-10 col-sm-9">
        <div class="cTextWrap">
          <p>
            {{text}}
          </p>
          <p>оцінка: <span class="points">{{rating}}/10</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'text', 'rating'],
  computed: {
    name() {
      return this.user
    },
    nameFirstLetter() {
      return this.user[0].toUpperCase()
    }
  },
};
</script>
