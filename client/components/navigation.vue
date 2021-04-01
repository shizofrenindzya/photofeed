<style scoped> 
#header {
    display: flex;
    justify-content: space-between;
}
#button {
    padding: 15px;
    background-color: white;
    color: black;
    border: solid black;
    font-size: 20px;
}
a {
    padding: 15px;
    color: black;
    font-size: 20px;
    text-decoration: none;
    border: solid black;
}
a:hover {
    padding: 15px;
    color: gray;
    font-size: 20px;
    text-decoration: none;
    border: solid gray;
}
#button:hover{
    padding: 15px;
    background-color: white;
    color: gray;
    border: solid gray;
    font-size: 20px;
}
#feed {
padding: 10px;    
}
</style>
<template>
<div id="header">
<div id="feed">
<router-link to="/">Фотолента</router-link>
</div>
<div>
<router-link to="/upload">Опубликовать фото</router-link>
<button type="submit" id="button" @click="logOut">Выйти</button>    
</div>
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