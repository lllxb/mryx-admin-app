<template>
    <div class="login">
        <a-form-model class="login-form" ref="loginForm" :model="loginForm" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="邮箱" prop="email">
                <a-input v-model="loginForm.email" />
            </a-form-model-item>
            <a-form-model-item has-feedback label="密码" prop="password">
                <a-input v-model="loginForm.password" type="password" autocomplete="off" />
            </a-form-model-item>

            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="submitForm('loginForm')">
                    提交
                </a-button>
                <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
                    重置
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>
import api from "@/api/user";
export default {
    data() {
        let emailReg = /^[\w-]+@[\w.-]+.com$/;
        let checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入邮箱！'));
            }
            if (emailReg.test(value)) {
                return callback();
            } else {
                return callback(new Error('邮箱格式不正确'));
            }
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            loginForm: {
                email: '',
                password: '',
            },
            rules: {
                email: [{ validator: checkEmail, trigger: 'change' }],
                password: [{ validator: validatePass, trigger: 'change' }],
            },
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    api.login(this.loginForm).then((res) => {
                        // console.log(res);
                        this.$router.push({
                            name: 'home',
                        });
                    }).catch((error) => {
                        this.$message.error(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>
<style lang="less">
@import url('~@/assets/css/login.less');
</style>