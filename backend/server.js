// start the server with `npm run server`

import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import locationRouter from "./routes/locationRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import queryRouter from "./routes/queryRoute.js"

const app = express()
const port = 4000


app.use(express.json())
app.use(cors())

connectDB()

console.log(`
  Your aniwhere server will start shortly:

  ⣴⣿⣿⣿⣿⠿⠟⢉⣚⣋⣴⣿⣿⣿⣿⠿⠟⠛⠛⣫⣥⣶⣶⣶⠶⠬⢭⡛⠻⣿⣿⣿⣿⣿⣿⠟⢊⠉⠲⢊⣩⣿⣿⣿⣿⣿⡏⣼⣿⣿
⣿⣿⣿⣿⡏⠀⣄⠀⠩⠛⠿⡿⢛⣩⠴⠶⢶⣶⣶⢛⣿⣿⣿⣷⡰⣭⣄⡈⢑⢦⣙⠿⠛⣉⠄⠀⣠⣾⡇⢹⠿⠟⣿⣿⣿⡿⢠⣿⣿⣿
⠁⠀⢀⣶⡏⠀⢿⣷⣄⡀⠀⠀⠉⠂⠀⣴⢾⡿⢃⣾⣿⣿⡿⢿⣷⠀⠻⣿⣶⣄⠩⠐⠀⠰⠄⠚⢿⣿⡇⠁⠀⣼⣿⣿⣿⡇⣾⣿⣿⣿
⣶⣤⣾⣿⡇⠀⢻⣿⠓⠀⠀⠀⢀⢄⣾⠃⡼⢁⣾⣿⣿⡟⠀⠀⣿⡀⡇⠀⠝⠻⣿⣄⠲⡄⠀⠀⣿⣿⠄⣸⣶⣿⣿⣿⡟⢸⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠀⠙⣷⡤⠀⠠⢰⡟⣸⡿⠘⠀⠁⣿⣿⠏⢂⡄⠀⣿⡇⢁⣤⣤⣀⣈⠻⣆⠘⣄⠸⣿⠋⠀⣾⣿⡟⠛⠛⠁⣿⣿⣿⣿⣿
⣿⣿⣿⡿⠋⠄⠀⢿⠏⣼⢠⣿⢃⣿⠇⠰⡀⠀⠛⣀⣴⣿⣧⣼⣿⣧⣿⣿⣿⣿⣿⣷⣄⠀⠈⢧⡙⣀⠂⠀⠀⣨⣷⡞⢸⣿⣿⣿⣿⣿
⣿⣿⢏⡴⠐⠰⠀⠈⣼⡟⢸⣿⠀⢹⢠⣾⣇⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣷⡄⠈⢷⡀⠀⣨⣾⣿⡿⠀⣿⣿⣿⣿⣿⡟
⣿⡏⠸⠃⠃⠋⠾⠃⣿⠇⣾⡗⠀⢨⣬⣿⣿⣿⠟⣼⣿⣿⣿⣿⣿⣿⣿⣷⣦⣝⣛⠻⠿⢿⣿⡄⢈⠻⡄⠙⣿⣿⠁⣸⣿⣿⣿⣿⣿⠰
⠛⠁⠀⢀⡀⠈⠐⠄⣿⡇⢸⣧⠀⣾⣿⣿⠟⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢧⡱⡄⡘⠟⢰⣿⣿⣿⣿⣿⠃⠀
⣀⠀⠀⠩⠐⣠⣼⡄⣿⡇⠸⡇⠀⣿⣯⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢛⣻⠿⠻⣿⡇⠈⢧⠹⡜⢆⠙⢿⣿⣿⣿⡏⣸⠀
⣿⣿⠀⠀⠈⠭⣭⣀⣿⣧⢠⢣⢸⣿⠛⠻⠿⠯⠭⣭⣝⣻⣿⣿⣿⣿⣿⣿⣭⠶⠚⠉⣁⣠⣤⣿⡇⡀⡀⢳⠹⣎⢆⠠⡙⢿⣿⢡⣿⠀
⣿⣿⢰⠀⣴⡆⡌⠙⢸⣿⣆⠈⢸⣿⣶⣶⣶⣶⣶⡦⢄⡉⣹⣿⣿⣿⢿⣿⣦⣔⣒⠩⠍⣛⠿⢿⢃⡁⡇⠆⢣⢹⣦⠀⠙⣎⠋⣸⣿⡀
⣿⣿⡆⠀⢿⡇⡇⢲⢠⢹⣏⠆⣿⣿⣿⠿⠋⠵⣂⣥⣶⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⡿⡿⢶⢦⡜⢸⡇⠁⠀⣤⠀⢿⣧⠀⠘⣷⡜⢿⠃
⣿⣿⣷⡀⢸⡇⣇⠀⡘⣇⣿⡖⡌⢿⣿⣴⡾⢿⠋⢿⣿⠣⢢⣶⣿⣿⣿⣿⣿⣿⡆⣷⣱⣢⣣⣧⡸⣿⢀⣷⣌⠃⠘⢿⣧⠀⠈⢻⡌⠀
⢿⣿⣿⣷⠈⡇⡿⣠⣤⠹⡘⣿⣌⠘⢿⣿⣧⣦⣵⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣼⣿⣿⣿⣦⠈⠻⣇⡄⢀⠻⡀
⡄⠻⣿⣿⡆⠸⡇⣟⣥⣤⠳⣸⣿⣎⠈⢿⣿⢿⢿⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⡿⠃⡄⠀⣿⣿⣿⣿⣿⣷⠁⠹⢸⡘⣷⡅
⣿⣦⡈⠻⣧⢁⠀⢿⣿⣿⣧⡀⣻⣿⣷⡈⢻⣦⣼⣿⣿⣷⡸⣿⣿⣿⣿⣿⣿⣿⢁⣿⣿⠏⣡⣧⠁⠀⠈⠙⠻⢿⣿⡟⠣⡀⢀⣇⢸⣿
⣿⣿⣿⣦⡈⠰⡖⣌⠛⠿⣿⣷⡜⢿⣿⣿⣆⠻⣿⣿⣿⣿⣷⣬⣿⣿⣿⣿⣿⣷⡾⠛⠁⢸⣿⣿⡆⢸⣦⣄⡀⠀⠉⠁⠁⡀⠀⣿⠈⣿
⣿⣿⣿⣿⣷⣤⠀⠄⠀⠐⢶⠀⠀⠀⠈⠻⣿⣆⢀⠈⠋⢉⡉⠛⠛⠛⠛⠛⣉⠁⢠⣆⠀⡈⡙⣿⣷⡀⠛⠿⣿⣷⣶⡦⢠⡇⠁⣿⠀⣯
⣿⣿⣿⣿⣿⣿⡟⠀⠀⡈⣶⠀⠀⠀⠠⠠⠙⣿⣆⠀⠀⠸⢿⣿⠿⠟⠛⠁⠈⣀⣌⡁⠀⠁⠰⠹⣿⣷⠀⠀⠀⠀⠉⠀⢾⡇⠀⠘⠀⣿
⠻⣿⣿⣿⠿⠋⠀⠀⠀⣱⠇⠀⠘⠛⠻⢷⡀⠘⡿⡀⠀⢀⠀⠀⠀⠀⠀⠀⠈⠭⠭⠍⠂⠀⠀⠐⠹⣿⡇⢂⠀⣄⠀⠰⣶⠈⠀⠀⢡⣿
⠀⠈⠋⠁⠀⠀⠀⢀⣾⠋⠀⠀⣐⠿⢶⣄⠀⠰⠀⣧⠸⣿⣿⣆⠀⠄⠶⠾⠛⠋⣉⣉⠥⠀⠀⠀⠐⠘⢿⡈⣷⣴⠂⠄⠀⣤⠌⢀⠿⠿
⢀⣀⠀⢀⣀⣐⣴⠿⠃⠀⠀⣤⢹⣿⣶⣬⣛⠀⠀⣿⠀⠻⣿⣿⣆⠀⠀⠀⠀⠸⠿⣿⣿⡄⠀⠀⠀⠀⠈⢳⠘⡟⣰⠃⣼⠏⢠⠆⣴⡸
⢷⡾⠿⠟⠛⠉⠁⠀⠀⣀⡌⣿⡈⣿⣿⣿⣿⠀⡇⡟⠀⠁⠉⠛⢻⠧⠀⠀⠀⠀⠀⠼⢿⣧⠀⠀⠀⠀⠀⠀⠀⢀⡿⢰⡟⢠⡟⢰⢇⢀
⣄⠀⠀⠀⢀⡤⠀⡀⣾⣿⠇⣿⡇⣿⣿⣿⣿⠀⢸⠃⠀⠀⢣⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠀⠀⠘⡇⣜⠀⢾⠀⣾⣼⢀
  `)


app.use("/api/user", userRouter)
app.use("/api/location", locationRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/query",queryRouter)

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))