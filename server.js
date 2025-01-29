require('dotenv').config();
const express=require('express')
const cors=require('cors')
const router=require('./Router/router')
require('./db/connection')

const dnsserver=express()
dnsserver.use(cors())
dnsserver.use(express.json());

dnsserver.use(router)

const PORT=8000 || process.env.PORT

dnsserver.listen(PORT,()=>{
    console.log(`Project server started at PORT ${PORT}`);
})

dnsserver.get("/",(req,res)=>{
    res.status(200).send(`<h1>Project started and waiting for client request</h1>`)
})

