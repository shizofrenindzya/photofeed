<template>
<div id="main">
    <nav-penal></nav-penal>
    <img v-bind:src="imageUrl">
    <form v-on:sumbit="upload">
        <input type="file" accept="image/*" name="picture" v-on:change="preview"> 
        <button type="submit">Загрузить</button>
    </form>
</div>
</template>
<script>
    let nav = require("./navigation.vue")
    module.exports = {
        data: function(){
            return {
                imageUrl: ""
            }
        },
        components: {
    navPenal: nav},
        methods: {
            preview: function(event){
                let selectedFiles = event.target.files;
                let self, reader;
                if(selectedFiles.length == 1) {
                    self = this;
                    reader = new FileReader();
                    reader.onload = function(readerEvent) {
                        self.imageUrl = readerEvent.target.result
                    }
                    reader.readAsDataURL(selectedFiles[0])
                }
            },
            upload: function(event) {
                event.preventDefault();
                let form = event.target;
                let formData = new FormData(form);
                this.$htpp.post("/upload",formData, {bearer: true})
                .then(function(){console.log("ничего себе, получилось")});
            }
        }
    }
</script>