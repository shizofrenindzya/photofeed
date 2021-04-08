// Подключаем Express и получаем объект модуля.
let Express = require("express"), app = Express();
// App - объект модуля Express, дающий доступ ко всем функциям.
const vjm = require("vue-jwt-mongo");
// vjm - пользовательский модуль для идентификации и регистрации пользователя.
const secret = "4vlNwUVbftrnyyG03QqG9gg29lHq270Y8MmStuTOBrqcYncvbvNmW8LGkzf1ghx";
// Секретный ключ, который нужен для генерации токенов.
const vjmServer = vjm.Server({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: secret
})
const multer = require("multer")
let UPLOADS = "./server/Pictures";
let upload = multer({ dest: UPLOADS });
app.post("/upload", [vjmServer.jwtProtector, upload.single("picture")], function(request, response) {
    console.log("Получилось");
    response.sendStatus(200)
})
app.post("/auth/register", vjmServer.registerHandler)
// Post-запрос, вызывающий функции ниже.
app.post("/auth/logIn", vjmServer.loginHandler)
app.use(Express.static("client"));
// При запросе сразу открывается нужная папка.
app.listen(80);
// Устанавливает порт.