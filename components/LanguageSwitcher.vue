<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        {{ defaultLang.title }}
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" @click.prevent="onClick(lang)" v-for="lang of langs" :key="lang.code">{{ lang.title }}</a>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "LanguageSwitcher",
    data() {
      return {
        defaultLang: {
          code: 'en',
          title: 'English'
        },
        langs: [
          {
            code: 'en',
            title: 'English'
          },
          {
            code: 'ru',
            title: 'Russian'
          },
          {
            code: 'ua',
            title: 'Ukrainian'
          }
        ]
      }
    },
    methods: {
      onClick(lang) {
        this.defaultLang = lang;
        this.$emit('langChange', lang.code)
      }
    }
  }
</script>

<style scoped>

</style>
