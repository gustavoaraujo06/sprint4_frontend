'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { useForm } from "react-hook-form";

interface Cliente {
  id: number
  nome: string
  cpf: string
  rg: string
  confiabilidade: number
}



export default function EditClientForm({ cliente, salvarCallback }: { cliente: Cliente, salvarCallback: any }) {
  const isSubmitting = useState(false)
  const { register, handleSubmit } = useForm();
  const router = useRouter();


  const onSubmit = (data: any) => {
    salvarCallback(data).then((response: any) => {
      if(response){
        alert("Erro ao salvar")
      }else	{
        alert("Salvo com sucesso")
        router.push("/gerenciar/clientes")
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="nome" className="block text-sky-400 font-semibold mb-2">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          defaultValue={cliente.nome}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("nome", {required: true})}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-sky-400 font-semibold mb-2">
          CPF
        </label>
        <input
          type="text"
          id="cpf"
          defaultValue={cliente.cpf}
          {...register("cpf", {required: true})}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rg" className="block text-sky-400 font-semibold mb-2">
          RG
        </label>
        <input
          type="text"
          id="rg"
          defaultValue={cliente.rg}
          {...register("rg", {required: true})}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confiabilidade" className="block text-sky-400 font-semibold mb-2">
          Confiabilidade
        </label>
        <input
          type="number"
          id="confiabilidade"
          defaultValue={cliente.confiabilidade}
          {...register("confiabilidade", {required: true})}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          min="0"
          max="100"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}
