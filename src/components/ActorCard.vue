<template>
  <div class="actors-table--card---item col-xl-3 col-md-6">
    <img :src="actor.url">
    <div class="actors-table--name">
      <router-link to="">{{ actor.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActorCard',
  props: ['actor'],
}
</script>