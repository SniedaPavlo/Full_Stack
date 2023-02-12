import express from 'express'
import jwt from 'jsonwebtoken'
//создание сервера с помощью библиотеки
const app = express()

//используем логику json с самого експресса, чтобы могло читать json
//по другому будет undefined рпи отправке в json формате на сервер
app.use(express.json())

//ответ клиенту в случае запроса на главный путь
app.get('/', (req, res) => {
    res.send('6 Hello world')
})

app.post('/auth/login', (req, res) => {
    //при приходе запроса генерируем токен и передаем информацию которую будем шифровать
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Pavlo'
    }, 'secretPPP')

    // отправляем обьект статуса и сам токен клиенту
    res.json({
        seccess: true,
        token
    })
})

//запускаем приложения на указаный нами порт и сообщаем об успехе запуска
app.listen(4858, (err) => {
    if (err) {
        console.log('не смог запуститься сервер', err)
    }
    console.log('server OK')
})

 //после этого запускаем веб сервер и можем открыть его на порту 4858



