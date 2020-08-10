<template>
  <v-row align="center"  justify="center" >
    <v-col cols="12" sm="8" md="4" >
      <v-spacer></v-spacer>
      <v-avatar color="orange" size="100" class="mb-2">
        <span class="white--text headline">62</span>
      </v-avatar>
      <v-card class="elevation-12 ">
        <v-toolbar color="primary d-flex justify-space-around " dark flat >
          <v-toolbar-title>Username</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          about user
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="text-center">

            <v-btn block rounded color="primary" dark>Logout</v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>

