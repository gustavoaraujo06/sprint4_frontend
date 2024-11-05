'use client'

import { useRouter } from "next/navigation"

export default function ClienteData({id, nome, callbackDelete}: {id: number, nome:string, callbackDelete: any}) {
    const router = useRouter();
    return(
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>
                <button className="bg-green-500 text-white p-2 rounded" onClick={() => router.push("/gerenciar/clientes/editar/" + id)}>Editar</button>
                <button className="bg-red-500 text-white mx-2 p-2 rounded" onClick={() => {
                    callbackDelete(id).then((response: any) => {
                        if(response == 200){
                            alert("Excluido com sucesso")
                            router.refresh()
                        }else alert("Erro ao excluir")
                    })
                    }}>Excluir</button>
                <button className="bg-blue-500 text-white p-2 rounded" onClick={() => router.push("/gerenciar/clientes/" + id + "/veiculos")}>Carros</button>
            </td>
        </tr>
    )
}