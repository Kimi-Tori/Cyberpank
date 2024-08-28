<template>
    <form class="form" @submit.prevent="v$.value.$validate">
        <v-text-field
            class="form__input Roboto-18-300 color-white"
            v-model="state.name"
            :counter="10"
            :error-messages="v$.value?.name?.$errors.map(e => e.$message) || []"
            label="Как тебя зовут?"
            required
            @blur="v$.value?.name?.$touch"
            @input="v$.value?.name?.$touch"
        ></v-text-field>

        <v-text-field
            class="form__input Roboto-18-300 color-white mt-3"
            v-model="state.email"
            :error-messages="v$.value?.email?.$errors.map(e => e.$message) || []"
            label="Твой е-mail"
            required
            @blur="v$.value?.email?.$touch"
            @input="v$.value?.email?.$touch"
        ></v-text-field>

        <v-checkbox
            class="form__input Roboto-18-300 color-white mt-3"
            v-model="state.checkbox"
            :error-messages="v$.value?.checkbox?.$errors.map(e => e.$message) || []"
            label="Согласен на обработку персональных данных"
            required
            @change="v$.value?.checkbox?.$touch"
        ></v-checkbox>
  
      <v-btn class="form__btn Roboto-18-700 text-capitalize color-black py-5 px-10 mt-3" type="submit">Отправить</v-btn>
    </form>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
  name: 'form-template',

  setup() {
    const initialState = {
      name: '',
      email: '',
      checkbox: null,
    }

    const state = reactive({ ...initialState })

    const rules = {
      name: { required },
      email: { required, email },
      checkbox: { required },
    }

    const v$ = useVuelidate(rules, state)

    function clear() {
      v$.value.$reset()

      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
      }
    }

    return {
      state,
      v$,
      clear,
    }
  }
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