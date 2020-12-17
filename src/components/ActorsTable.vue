<template>
  <div class="actors-table--card col-xl-12 col-md-8">
    <ActorCard v-for="actor in actors" :key="actor.name" :actor="actor" />
  </div>
</template>

<script>
import ActorCard from "./ActorCard";

export default {
  name: "ActorsTable",
  props: ['actors'],
  components: {
    ActorCard,
  },
};
</script>

<style lang="scss" scoped>
  .actors-table--card {
    margin-bottom: 50px;
  }
</style>