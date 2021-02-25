<style></style>
<style scoped>
    #register {
        width: 50%;
        min-width: 300px;
        height: auto;
        display:block;
    }
    input, button {
        font-size: 1.1rem;
        width: 100%;
        margin: 7px 0px;
        padding: 10px 20px;
        border-radius: 5px;
        outline: none;
    }
    input {
        border: 1px solid black;
    }
    button {
        color: white;
        background-color: red;
        border:none;
    }
</style>
<template>
    <form id="register" action="/auth/register" method="POST">
        <input type="text" placeholder="Логин" v-model="username">
        <input type="password" placeholder="Пароль" v-model="password">
        <input type="password" placeholder="Повторите пароль" v-model="passwordRep">
        <button type="submit" @click="register">Зарегистироваться</button>
    </form>
</template>
<script>
    module.exports = {
        methods: {
        register: function(event) {
event.preventDefault();
let promise = this.$auth.register(this.username, this.password)
promise.then(function(){
    console.log("ready")
})
        }
        }
    }
</script>