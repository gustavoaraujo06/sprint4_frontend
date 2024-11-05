'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    confiabilidade: number;
}

export default function CreateClientForm({ criarCallback }: { criarCallback: any }) {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = (data: any) => {
        criarCallback(data).then((response: any) => {
            console.log(response)
            if (response == 201) {
                alert("Criado com sucesso!");
                router.push("/gerenciar/clientes");
            } else if (response == 409) {
                alert("Erro ao criar: Conflito");
            } else {
                alert("Erro ao criar");
            }
        });
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="id" className="block text-gray-700 font-semibold mb-2">
                    ID
                </label>
                <input
                    type="number"
                    id="id"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register('id', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                    Nome
                </label>
                <input
                    type="text"
                    id="nome"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register('nome', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="cpf" className="block text-gray-700 font-semibold mb-2">
                    CPF
                </label>
                <input
                    type="text"
                    id="cpf"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register('cpf', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="rg" className="block text-gray-700 font-semibold mb-2">
                    RG
                </label>
                <input
                    type="text"
                    id="rg"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register('rg', { required: true })}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confiabilidade" className="block text-gray-700 font-semibold mb-2">
                    Confiabilidade
                </label>
                <input
                    type="number"
                    id="confiabilidade"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    {...register('confiabilidade', { required: true, min: 0, max: 100 })}
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Criar
                </button>
            </div>
        </form>
    );

}
