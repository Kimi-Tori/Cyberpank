<template>
  <v-form class="form" v-model="valid">
    <v-text-field
      class="form__input Roboto-18-300 color-white"
      v-model="firstname"
      :rules="nameRules"
      label="Как тебя зовут?"
      required
    ></v-text-field>

    <v-text-field
      class="form__input Roboto-18-300 color-white mt-3"
      v-model="email"
      :rules="emailRules"
      label="Твой е-mail"
      required
    ></v-text-field>

    <v-checkbox
      class="form__input Roboto-18-300 color-white mt-3"
      v-model="checkbox"
      :rules="checkboxRules"
      label="Согласен на обработку персональных данных"
      required
    ></v-checkbox>

    <v-btn class="form__btn Roboto-18-700 text-capitalize color-black py-5 px-10 mt-3" type="submit">Отправить</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'form-template',
  data: () => ({
    checkbox: false,
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Введите ваше имя'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true

        return 'Введите ваш e-mail'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'Ваш e-mail выглидит не корректно'
      },
    ],
    checkboxRules: [
      value => !!value || 'Согласитесь на обработку персональных данных',
    ],
  }),
}
</script>

<style lang="scss">
.form {
    &__btn {
        height: auto !important;
        border-radius: 0;
        background-color: $yellow;
    }
}

</style>