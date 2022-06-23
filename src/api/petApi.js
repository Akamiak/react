import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirHeroi(nome, superPoder, voa){
    const resposta = await api.post('/heroi', {
    nome: nome,
    superPoder: superPoder,
    voa : voa

    })
    return resposta.data;
}

export async function listarTodosHeroi(){
    const resposta = await api.get('/listar');
    return resposta.data;
}