<template>
  <div class="register-container">
      <el-form
          ref="registerFrom"
          lobel-width="150px"
          class="register-form"
          :model="registerFrom"
          :rules="registerRules"
        >
            <el-form-item prop='email' label="邮箱">
               <el-input v-model="registerForm.email"></el-input>
            </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            registerForm: {
                email: '',
                password: '',
                comparePassword: ''
            },
            redisterRules: {
                email: { type: 'email', required: true, message: '请输入有效的邮箱地址' }
            }
        }
    }

}
</script>

<style>

</style>