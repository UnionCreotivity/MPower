<template>
  <router-view v-slot="{ Component, route }">
    <FadeIn><component :is="Component" :key="route.path"></component></FadeIn>
  </router-view>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import { RouterView } from 'vue-router'
import FadeIn from './components/transition/FadeIn.vue'
import axios from 'axios'

onMounted(() => {
  axios
    .post(
      'https://web-board.tw/sys/login_axios.php',
      {
        type: 'admin',
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage['token']}`,
          'Refresh-Token': localStorage['refresh_token'],
        },
        onUploadProgress: function () {
          //document.querySelector('.ajax_loading').classList.add('show_in');
        },
      },
    )
    .then(function (response) {
      console.log(response.data)
      if (response.data.success) {
        // -- 刷新 token --
        if (response.data.jwt !== undefined && response.data.refresh_jwt !== undefined) {
          sessionStorage['token'] = response.data.jwt
          localStorage['refresh_token'] = response.data.refresh_jwt
        }
      } else {
        alert(response.data.msg)
        window.location.href = 'https://web-board.tw'
      }
    })
    .catch(function (error) {
      console.error(error)
    })
    .finally(function () {
      //document.querySelector('.ajax_loading').classList.remove('show_in');
    })
})
</script>

<style scoped></style>
