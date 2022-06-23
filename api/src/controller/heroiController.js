import { inserirHeroi, listarHerois } from "../repository/heroiRepository.js";

import { Router } from "express";

const server =  Router();

server.post('/heroi' , async (req, resp) => {
    try{
        const novoHeroi = req.body;

        const heroiInserido = await inserirHeroi(novoHeroi);

        resp.send(heroiInserido);
    }  catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/listar',async (req, resp)=>{
    try {
        const resposta = await listarHerois();
        resp.send(resposta)
    } catch (err) {
            resp.status(400).send({
                erro: err.message
        })
    }
})

export default server;