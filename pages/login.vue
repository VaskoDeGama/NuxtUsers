<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <login-form></login-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import {mapActions} from 'vuex'
  export default {
    serverPrefetch() {
      this.getCookie()
      console.log('get cookey')
    },
    components: {
      LoginForm,
    },
    mounted() {
      this.getCookie()
    },
    methods: {
      ...mapActions({
        getCookie: 'GET_COOKIES'
      })
    },
  }
</script>
