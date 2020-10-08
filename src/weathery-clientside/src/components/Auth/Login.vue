<template>
  <div class="app">
    <main class="w-loginCenter">
      <Header title="Login" />
      <div v-if="errors">
        <div v-bind:key="err" v-for="err in errors">{{err}}</div>
      </div>
      <div class="w-inputSize">
        <InputField @return-value="fetchUsername" placeholder="username..." type="text"/>
        <InputField @return-value="fetchPassword" placeholder="password..." type="password"/>
        <Button title="Login" @click="login"/>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref} from "vue";

import Header from "../Header/Header.vue";
import InputField from "@/components/InputField/InputField.vue";
import Button from "@/components/Button/Button.vue";

export default defineComponent({
  components: {
    Header,
    InputField,
    Button
  },

  setup() {
    const username = ref('');
    const password = ref('');
    const errors = ref(Array<string>());

    const login = () => {
      // TODO: make the auth request to the API
    }

    const fetchUsername = (value: string) => {
      username.value = value;
    }
    const fetchPassword = (value: string) =>{
      password.value = value;
    }
    return{username,password,errors,fetchUsername,fetchPassword, login};
  },
});
</script>

<style>
.w-inputSize{
  width: 50%;
  display: inline-block;
}
.w-loginCenter{
  text-align: center;
}
</style>
