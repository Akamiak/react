
import { con } from "./connection.js";


export async function inserirHeroi(heroi) {
    const comando =
    `INSERT INTO tb_super_heroi(nm_super_heroi, ds_super_poder, bt_voa)
    values (?, ?, ?)`

    const [reposta] = await con.query(comando, [heroi.nome, heroi.superPoder, heroi.voa]);
    heroi.id = reposta.insertId;
    return heroi;
}

export async function listarHerois () {
        const comando=
       
    `select id_super_heroi id,
    nm_super_heroi nome,
    ds_super_poder superPoder,
    bt_voa 		  voa
from tb_super_heroi;`

const [linhas] =await con.query(comando);
        return linhas;
}