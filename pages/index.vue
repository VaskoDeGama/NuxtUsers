<template>
  <v-app>
    <v-main>
      <v-container class="fill-height justify-center" fluid>
        <div class="text-center">
          <nuxt-link v-bind:to="'/user/' + userId">User profile</nuxt-link>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  async serverPrefetch() {
    await this.getCookie()

  },
  components: {

  },
  middleware: 'isAuthenticated',
  computed: {
    ...mapGetters({
      userId: 'GET_USER_ID'
    }),
  },
  methods: {
    ...mapActions({
      getCookie: 'GET_COOKIES'
    })
  }


}
</script>

<style lang="scss">
</style>

