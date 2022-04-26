const jsonServer = require('json-server')
const jwt = require('jsonwebtoken');
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(jsonServer.bodyParser)
// Add custom routes before JSON Server router
server.post('/auth/login', (req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "A123") {
        // public data
        let token = jwt.sign({ username, role: ["read_users"] }, 'this_is_a_private_key');
        res.jsonp({
            success: true,
            username: username,
            token
        })
    }
    else {
        res.jsonp({
            success: false,
            message: 'username or password is incorrect'
        })
    }

})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

server.use((req, res, next) => {
    let data = req.headers.authorization && req.headers.authorization.split(" ")
    if (data && data.length === 2) {
        let token = data[1]
        try {
            let decoded = jwt.verify(token, 'this_is_a_private_key');

            if (decoded.username) {
                next()
            } else {
                res.sendStatus(401) // ko có quyền (authorized)
            }
        } catch {
            res.sendStatus(401)
        }

        // console.log(token);
    } else {
        res.sendStatus(401)
    }
})

// Use default router
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running at port 3001')
})