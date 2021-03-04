<style></style>
<style scoped>
    #register {
        width: 50%;
        min-width: 300px;
        max-width: 675px;
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
        background-color: rgb(69, 69, 190);
        border:none;
    }
    button:hover {
     background-color: cornflowerblue;   
    }
    #link {
        display: block;
        color: rgb(69, 69, 190);
        text-align: center;
        text-decoration: none;
        font-family: sans-serif;
    }
</style>
<template>
    <form id="register" method="POST">
        <input type="text" placeholder="Логин" v-model="username">
        <input type="password" placeholder="Пароль" v-model="password">
        <button type="submit" @click="register">Войти</button>
        <router-link id="link" to="/register">Регистрация</router-link>
    </form>
</template>
<script>
// Служит в данном случае для работы с Vue.
    module.exports = {
        data:function() {
            return {
                username: "",
                password: "",
            }
        },
        methods: {
        register: function(event) {
event.preventDefault();
// Блокирует события, связанные с элементом.
let promise = this.$auth.register(this.username, this.password)
// Регистрируем пользователя.
promise.then (function(){
    console.log("готово")
})
promise.catch(function(){
    console.log("не повезло")
    this.password = ""
    this.passwordRep = ""
    this.username = ""
})
        }
        }
    }
</script>