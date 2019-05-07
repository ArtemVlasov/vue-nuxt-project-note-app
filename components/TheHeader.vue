<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" :to="{ name: 'home', params: {lang} }">Navbar</nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'home', params: {lang} }">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'about', params: {lang} }">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{ name: 'us', params: {lang} }">us</nuxt-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <LanguageSwitcher @langChange="onLangChange"/>
      </div>
    </nav>
  </header>
</template>

<script>
  import LanguageSwitcher from "./LanguageSwitcher";

  export default {
    name: "TheHeader",
    components: { LanguageSwitcher },
    data() {
      return {
        lang: 'en'
      }
    },
    methods: {
      onLangChange(code) {
        this.lang = code;
        this.$nuxt.$router.replace({ params: { lang: code} });
      }
    }
  }
</script>

<style scoped>

</style>
