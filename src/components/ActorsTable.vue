<template>
  <div class="actors-table--card col-xl-9 col-md-8">
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