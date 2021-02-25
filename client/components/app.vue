<style scoped>
    div, .view {
        height: 100%;
        width: 100%;
    }
    .view {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<template>
    <div>
        <router-link to="/register">Регистрация</router-link>
        <div class="view"><router-view></router-view></div>
    </div>
</template> 