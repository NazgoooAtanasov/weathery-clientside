<template>
  <div class="app">
    <main class="w-registerCenter">
      <Header title="Register" />
      <div v-if="errors">
        <div v-bind:key="err" v-for="err in errors">{{err}}</div>
      </div>
      <div class="w-inputSize">
        <InputField @return-value="fetchUsername" placeholder="username..." type="text"/>
        <InputField @return-value="fetchEmail" placeholder="email..." type="text"/>
        <InputField @return-value="fetchPassword" placeholder="password..." type="password"/>
        <InputField @return-value="fetchConfirmPass" placeholder="confirm password..." type="password"/>
        <Button title="Register" @click="register"/>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import InputField from "@/components/InputField/InputField.vue";
import Button from "@/components/Button/Button.vue";
import Header from "@/components/Header/Header.vue";

export default defineComponent({
  components:{
    InputField,
    Header,
    Button
  },
  setup(){
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errors = ref(Array<string>());

    const fetchUsername = (value: string) => {
      username.value = value;
    }
    const fetchEmail = (value: string) => {
      email.value = value;
    }
    const fetchPassword = (value: string) => {
      password.value = value;
    }
    const fetchConfirmPass = (value: string) => {
      confirmPassword.value = value;
    }

    const register = () =>{
      // TODO: make register.
    }
    return{username, email, password, confirmPassword, errors, fetchUsername, fetchEmail, fetchPassword, fetchConfirmPass, register}
  }
});
</script>

<style scoped>
.w-inputSize{
  width: 50%;
  display: inline-block;
}
.w-registerCenter{
  text-align: center;
}
</style>