<style scoped>
#upld {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%); 
}
#form {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
}
.button {
    display: none;
}
label {
    padding: 5px;
    background-color: white;
    color: black;
    border: solid black;
    font-size: 20px;
}
#uploadbutton {
    padding: 5px;
    background-color: white;
    color: black;
    border: solid black;
    font-size: 20px;
}
#uploadbutton:disabled {
    padding: 5px;
    background-color: white;
    color: gray;
    border: solid gray;
    font-size: 20px;
}
img {
    max-height: 640px;
}
</style>
<template>
<div id="main">
    <nav-penal></nav-penal>
    <div id="upld">
    <img v-bind:src="imageUrl">
    <form v-on:sumbit="uploadd">
        <div id="form">
        <label for="select">Выбрать файл</label>
        <input type="file" accept="image/*" name="picture" v-on:change="preview" class="button" id="select"> 
        <button id="uploadbutton" type="submit" v-bind:disabled="isDisabled" v-on:click="test">Загрузить</button>
        </div>
    </form>
    </div>
</div>
</template>
<script>
    let nav = require("./navigation.vue")
    module.exports = {
        data: function(){
            return {
                imageUrl: "https://via.placeholder.com/640x480",
                isDisabled: true
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
                        self.isDisabled = false;
                        self.imageUrl = readerEvent.target.result;
                    }
                    reader.readAsDataURL(selectedFiles[0])
                }
            },
            uploadd: function(event) {
                event.preventDefault();
                alert("Зашел в функцию")
                console.log("зашел в функцию")
                let form = event.target;
                let formData = new FormData(form);
                this.$htpp.post("/upload",formData, {bearer: true})
                .then(function(){console.log("ничего себе, получилось")})
                .catch(function(){console.log("ничего себе, не получилось")})
            },
            test: function(event) {
                event.preventDefault();
                alert("Зашел в функцию")
                console.log("зашел в функцию")
                let form = event.target;
                let formData = new FormData(form);
                this.$htpp.post("/upload",formData, {bearer: true})
                .then(function(){console.log("ничего себе, получилось")})
                .catch(function(){console.log("ничего себе, не получилось")})
            }
        }
    }
</script>