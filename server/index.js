let Express = require("express"), app = Express();
const vjm = require("vue-jwt-mongo");
const secret = "4vlNwUVbftrnyyG03QqG9gg29lHq270Y8MmStuTOBrqcYncvbvNmW8LGkzf1ghx";
const vjmServer = vjm.Server({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: secret
})
app.post("/auth/register", vjmServer.registerHandler)
app.use(Express.static("client"));
app.listen(80);