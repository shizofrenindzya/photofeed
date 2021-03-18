<style></style>
<style scoped>
    #register {
        width: 50%;
        min-width: 300px;
        height: auto;
        display:block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
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
    <form id="register" method="POST">
        <input type="text" placeholder="Логин" v-model="username">
        <input type="password" placeholder="Пароль" v-model="password">
        <input type="password" placeholder="Повторите пароль" v-model="passwordRep">
        <button type="submit" @click="register">Зарегистироваться</button>
    </form>
</template>
<script>
// Служит в данном случае для работы с Vue.
    module.exports = {
        data:function() {
            return {
                username: "",
                password: "",
                passwordRep: ""
            }
        },
        methods: {
        register: function(event) {
event.preventDefault();
if(this.password === this.passwordRep) {
// Блокирует события, связанные с элементом.
let promise = this.$auth.register(this.username, this.password)
// Регистрируем пользователя.
promise.then (function(){
    console.log("готово")
    this.$router.push("/initialisation")
})
promise.catch(function(){
    console.log("не повезло")
    this.password = ""
    this.passwordRep = ""
    this.username = ""
})}
else {
    alert("Пароли не совпадают")
    this.password = ""
    this.passwordRep = ""
}
        }
        }
    }
</script>