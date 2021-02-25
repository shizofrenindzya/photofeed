const Vue = require("vue");
const VueRouter = require("vue-router");
const VueResourse = require("vue-resource");
const VueJwtMongo = require("vue-jwt-mongo")
const App = require("../components/app.vue");
const register = require("../components/register.vue");
Vue.use(VueResourse);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            path: "/register",
        component: register        
    }]})
let vm = new Vue({
    el: "#root",
    router: router,
    render: function(createEl) {
        return createEl(App)
    }
})

console.log("fhghk")