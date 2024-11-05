import EditClientForm from './EditClientForm'
import { notFound } from 'next/navigation'

interface Cliente {
  id: number
  nome: string
  cpf: string
  rg: string
  confiabilidade: number
}


async function getCliente(id: string) {
  try {
    const res = await fetch(`http://localhost:8080/clientes/${id}`, { cache: 'no-store' })
    if (!res.ok) {
      return null
    }
    const data: Cliente = await res.json()
    return data
  } catch (error) {
    console.error('Erro ao buscar cliente:', error)
    return null
  }
}

export default async function Page({params}: {params: {id: string}}) {
  const cliente = await getCliente((await params).id)
  
  async function saveCliente(clienteSave: Cliente){
    'use server'
    if (cliente) {
        clienteSave.id = cliente.id
      fetch('http://localhost:8080/clientes/' + cliente.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteSave)
      }).then((response) => {
        if (response.ok) {
          return true
        } else {
          return false
        }
      })
    }
}
  if (!cliente) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-sky-500">Editar Cliente</h1>
        <EditClientForm cliente={cliente} salvarCallback={saveCliente} />
      </div>
    </div>
  )
}
