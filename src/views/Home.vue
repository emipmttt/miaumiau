<script setup>
import "@/assets/css/homeScreen.css"
</script>

<template>
  <main class="row">
    <div class="col">
      <h1>
        Pixel Game
      </h1>
    </div>
    <div class="col">
      <div>
        <RouterLink to="/signup">
          <div class="button" style="margin-bottom: 15px;">Sign Up</div>
        </RouterLink>
        <RouterLink to="/signin">
          <div class="button" style="margin-bottom: 15px;">Sign In</div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
