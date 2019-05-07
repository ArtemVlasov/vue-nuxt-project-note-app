<template>
  <div>
    <TheHeader/>
    <main class="main">
      <nuxt/>
    </main>

    <footer class="footer">
      footer
    </footer>
  </div>
</template>
<script>
  import TheHeader from "../components/TheHeader";
  export default {
    components: { TheHeader }
  }
</script>
