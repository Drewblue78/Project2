<template>
  <div>
    <div class="player-container">
      <video :src="`/${$root.currentmovie}`" controls autoplay></video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>