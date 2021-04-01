const Vue = require("vue");
const VueRouter = require("vue-router");
const VueResourse = require("vue-resource");
// Vue-resourse работает вместе с jwt-mongo.
const VueJwtMongo = require("vue-jwt-mongo")
const App = require("../components/app.vue");
const register = require("../components/register.vue");
const initialisation = require("../components/initialisation.vue")
const index = require("../components/index.vue")
const feed = require("../components/feed.vue")
const upload = require("../components/upload.vue")
Vue.use(VueResourse);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);
// Подключаем плагины.

let router = new VueRouter({
    routes: [
        {
            path: "/register",
        component: register        
    },
{path: "/initialisation",
component: initialisation}, {
    path: "/", component: index
}, {
    path: "/feed", component: feed
},
{path: "/upload", component: upload}]})
// Маршрутизация.    
let vm = new Vue({
    el: "#root",
    router: router,
    render: function(createEl) {
        return createEl(App)
    }
})

