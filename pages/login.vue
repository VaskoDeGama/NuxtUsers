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
  export default {
    components: {
      LoginForm,
    }
  }
</script>
