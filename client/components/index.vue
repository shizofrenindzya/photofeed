<template>
    <p>Перенаправление</p>

</template>
<script>
module.exports = {
    mounted: function(){
        if(this.$auth.isLoggedIn()){
            this.$router.push("/feed")
        } else {
            this.$router.push("/initialisation")
        }
    }
}
</script>