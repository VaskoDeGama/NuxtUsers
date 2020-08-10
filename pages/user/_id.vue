<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <user-profile :user="user" ></user-profile>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import {mapGetters} from 'vuex'

export default {
  validate({params, store}) {
    return store.getters['GET_USER_ID'] === params.id
  },
  components: {
    UserProfile,
  },
  middleware: 'isAuthenticated',
  computed: {
    ...mapGetters({
      user: 'GET_USER_DATA'
    })
  },
}
</script>

<style>

</style>

