<template>
  <div class="comment rComment container">
    <div class="row">
      <div class="col-xl-2 col-sm-3">
        <div class="usWrap">
          <img
            class="img-fluid"
            src="../../public/img/icon_user.svg"
            alt="user icon"
          />
          <p>Головна вовчиця</p>
          <div class="dtext d-xl-none d-md-none d-sm-none divMob">вчора</div>
        </div>
      </div>
      <div class="col-xl-10 col-sm-9">
        <div class="cTextWrap">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere metus et tortor pulvinar venenatis. Aliquam erat volutpat.
            Nam ultrices semper felis, at laoreet metus
          </p>
          <p>оцінка: <span class="points">7/10</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.getters.info ? this.$store.getters.info.name : false;
    },
    nameFirstLetter() {
      return this.$store.getters.info
        ? this.$store.getters.info.name[0].toUpperCase()
        : false;
    },
  },
};
</script>
