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
import { mapGetters } from "vuex";

export default {

  components: {

  },
  middleware: 'isAuthenticated',
  computed: {
    ...mapGetters({
      userId: 'GET_USER_ID'
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>

