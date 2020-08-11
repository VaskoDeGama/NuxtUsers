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
import {mapActions, mapGetters} from 'vuex'

export default {
  validate({params}){
    return Boolean(params.id)
  },
  async serverPrefetch() {
    await this.getCookie()
  },
  methods: {
    ...mapActions({
      getCookie: 'GET_COOKIES'
    })
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

