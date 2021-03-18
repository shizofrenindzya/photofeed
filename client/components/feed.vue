<style scoped> 
#header {
    display: flex;
    justify-content: space-between;
}
#button {
    width: 130px;
    height: 50px;
    background-color: white;
    color: grey;
    border: solid grey;
    font-size: 20px;
}
</style>
<template>
<div id="header">
<router-link to="/">На главную</router-link>
<button type="submit" id="button" @click="logOut">ВЫЙТИ</button>    
</div>
</template>
<script>
module.exports = { 
methods: {
logOut() {this.$auth.logOut();
    this.$router.push("/initialisation")}
}
}
</script> 