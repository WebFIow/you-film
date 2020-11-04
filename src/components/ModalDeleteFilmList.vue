<template>
  <div id="mdlDelete" @click="close" ref="modalWrapper">
    <div class="mdl">
      <div class="mdl-content">
        <p>
          Ти певен, що хочеш видалити фільм зі свого листу?
        </p>
        <button type="button" class="btn btn-mdl">Так</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data: () => ({}),
  methods: {
    close(e) {
      if (
        this.$refs.modalWrapper == e.target ||
        this.$refs.modalClose == e.target
      ) {
        this.$emit("close");
      }
    },
  },
};
</script>
