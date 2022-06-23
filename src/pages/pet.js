import { useEffect, useState } from 'react'
import '../pages/heroi.scss'


import { inserirHeroi, listarTodosHeroi  } from '../api/petApi'


export default function Index(){
    const [nome, setNome] = useState('');
    const [superPoder, setPoder] = useState('');
    const [voa, setVoa] = useState(false);
    const [heroi, setHeroi] = useState([]);

   async function carregarTodosHeroi(){
        const resp = await listarTodosHeroi();
        setHeroi(resp);
    }
    
    useEffect(()=> {
    carregarTodosHeroi();
    }, [])
    
    async function salvarClick(){
        try {
             await inserirHeroi(nome, superPoder, voa)
            alert('Heroi Cadastrado com sucesso')
        } catch (err) {
            alert(err.response.data.erro);
        }
    }

    return(
       <main>
        <label>Cadastrar Heroi</label> 
        <br/>
        <input type='text' placeholder='nome do heroi' value={nome} onChange={e=> setNome(e.target.value)}/>
        <input type='text' placeholder='poder do heroi' value={superPoder} onChange={e=> setPoder(e.target.value)}/>
        <input type='text' placeholder='voa o heroi' checked={voa} onChange={e=> setVoa(e.target.checked)}/>

        <div>
            <button onClick={salvarClick}>Registrar</button>
        </div>

        <table> 
                 <thead>
                    <tr>
                        <th>Nome heroi</th>
                        <th>Poder</th>
                        <th>Voa?</th>
                    </tr>
                </thead>
                <tbody>

                    {heroi.map(item => 
                        
                        <tr>
                            <td>{item.nome}</td>
                            <td>{item.superPoder}</td>
                            <td>{item.voa}</td>
                            
                               
                        </tr>
                        )}
                   
                </tbody>
                        
        </table>
       </main>
      
       
      
    )
}