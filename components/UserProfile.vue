<template>
  <v-card v-if="userData"
    max-width="375"
    class="mx-auto"
  >
    <v-img
      :src="userData.picture"
      height="300px"
      dark
    >
      <v-row class="fill-height align-end justify-center">
        <v-card-title class="white--text" >
          <div class="display-1">{{ fullName}}</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-play</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Age: {{userData.age}} years old</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-play</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Eye Color: {{userData.eyeColor}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-play</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Favorite Fruit: {{userData.favoriteFruit}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-play</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Email: {{userData.email}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-btn
        block
        rounded
        color="indigo"
        @click=logoutHandler
      >
        Logout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['user'],
  data: function() {
    return {
      userData: this.user
    }
  },
  computed: {
    fullName: function () {

        return `${this.userData.name.first || ''} ${this.userData.name.last || ''}`

      }
  },
  methods: {
    ...mapActions({
      logout: 'LOG_OUT'
    }),
    logoutHandler(e){
      e.preventDefault()
      this.logout()
      this.$router.push({name: 'login'})
    }
  }

}
</script>

<style lang="scss">

</style>

