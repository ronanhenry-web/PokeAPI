<template>
  <div class="language-switch">
    <button class="language-button" @click="changeLanguage('fr')">FR</button>
    <button class="language-button" @click="changeLanguage('en')">EN</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const changeLanguage = (language: string) => {
  i18n.locale.value = language
}
</script>

<style scoped>
.language-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}
.language-button:hover {
  background-color: #2980b9;
}
</style>
