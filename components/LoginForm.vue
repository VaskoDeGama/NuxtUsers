<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary d-flex justify-space-around"
          dark
          flat
        >

          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              :error-messages=validateEmail
              prepend-icon="mdi-account"
              type="text"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"

            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              :error-messages=validatePassword
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            block
            color="primary"
            @click=loginHandler
          >
            Login
          </v-btn>
        </v-card-actions>
        <v-alert v-if="errors && errors.length > 0"
                 type="error"
                 class="mt-3"
        > <span v-for="(error, index) in errors" :key="index">{{error}}</span>
        </v-alert>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions} from 'vuex'
import { validationMixin } from 'vuelidate'
const { required, minLength, email } = require('vuelidate/lib/validators')

export default {
  mixins: [validationMixin],
  data: () => ({
    userId: null,
    email: null,
    password: null,
    errors: []
  }),
  validations: {
    email: {required, email},
    password: {required,minLength: minLength(6)}
  },
  computed: {
    validateEmail(){
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }
      !this.$v.email.required && errors.push('Email is required')
      !this.$v.email.email && errors.push('Email is not email')
      return errors
    },
    validatePassword(){
      const errors = []
      if (!this.$v.password.$dirty) {
        return errors
      }
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength && errors.push('Password must be longer than 6 characters')
      return errors
    }
  },
  methods: {
    ...mapActions({
      login: 'LOG_IN',
      setCookies: 'SET_COOKIES'
    }),
    async loginHandler(){
      this.errors = []
      this.$v.email.$touch()
      this.$v.password.$touch()
      if(!this.$v.$invalid) {
        const user = await this.getUserByEmail(this.email)
        if (user) {
           if(this.password === user.password) {
             this.userId = user._id
             this.login(this.userId).then((_) => {
               const appData = {isAuth: true, userId: this.userId }
               this.setCookies(appData)
               this.$router.push({path: `/user/${this.userId}`})
             })
           } else {
             this.errors.push('Wrong email or password')
           }
        } else {
          this.errors.push('User with this email does not exist')
        }
      } else {
        this.errors.push('All fields must be filled')
      }

      //e.preventDefault()

    },
    async getUserByEmail(emailFromForm) {
      try {
        const {data} = await this.$axios.get('/api/mockData.json')
        const [user] = data.filter(({email}) => emailFromForm === email)
        return user
      } catch (e) {
        console.log(e)
      }

    }

  }

}
</script>


<style lang="scss">


</style>
