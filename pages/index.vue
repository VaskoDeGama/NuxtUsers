<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <user-profile></user-profile>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UserProfile from '@/components/UserProfile'

export default {
  components: {
    UserProfile,
  },
  middleware: 'isAuthenticated',
  computed: {

  }
}
</script>

<style>

</style>

