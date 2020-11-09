<template>
  <div class="comment rComment container">
    <div class="row">
      <div class="col-xl-2 col-sm-3">
        <div class="usWrap">
          <span class="profile-img"><span class="profile-img--name">{{nameFirstLetter}}</span></span>
          <p>{{name}}</p>
          <p>{{commentTime}}</p>
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
  props: ['user', 'text', 'rating', 'date'],
  data: () => ({
  }),
  computed: {
    name() {
      return this.user
    },
    nameFirstLetter() {
      return this.user[0].toUpperCase()
    },
    commentTime() {
      const date = new Date(this.date)
      return date.getDate() + '.' + (1 + +date.getMonth()) + '.' + date.getFullYear()
    }
  },
};
</script>
