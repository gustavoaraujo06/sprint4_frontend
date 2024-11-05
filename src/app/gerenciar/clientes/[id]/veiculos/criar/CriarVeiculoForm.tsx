'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface veiculo {
    id: number;
    chassi: string;
    ano: number;
    marca: string;
    modelo: string;
    placa: string;
}

export default function CriarVeiculoForm({ proprietarioId, criarCallback }: { proprietarioId: number, criarCallback: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm<veiculo>();
    const router = useRouter();

    const onSubmit = async (data: veiculo) => {
        console.log(data)
        console.log(proprietarioId)
        criarCallback(proprietarioId, data).then((response: any) => {
            if (response == 201) {
                alert("Criado com sucesso!")
                router.push(`/gerenciar/clientes/${proprietarioId}/veiculos`)
            } else { 
                alert("Erro ao criar")
            }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="id" className="block text-gray-700 font-semibold mb-2">
                    ID
                </label>
                <input
                    id="id"
                    type="text"
                    {...register('id', { required: 'ID é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.id ? 'border-red-500' : ''}`}

                />
                {errors.id && <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="chassi" className="block text-gray-700 font-semibold mb-2">
                    Chassi
                </label>
                <input
                    id="chassi"
                    type="text"
                    {...register('chassi', { required: 'Chassi é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.chassi ? 'border-red-500' : ''}`}

                />
                {errors.chassi && <p className="text-red-500 text-sm mt-1">{errors.chassi.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="ano" className="block text-gray-700 font-semibold mb-2">
                    Ano
                </label>
                <input
                    id="ano"
                    type="number"
                    {...register('ano', {
                        required: 'Ano é obrigatório',
                        min: { value: 1900, message: 'Ano mínimo é 1900' },
                        max: { value: new Date().getFullYear(), message: `Ano máximo é ${new Date().getFullYear()}` },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.ano ? 'border-red-500' : ''}`}
                />
                {errors.ano && <p className="text-red-500 text-sm mt-1">{errors.ano.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="marca" className="block text-gray-700 font-semibold mb-2">
                    Marca
                </label>
                <input
                    id="marca"
                    type="text"
                    {...register('marca', { required: 'Marca é obrigatória' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.marca ? 'border-red-500' : ''}`}
                />
                {errors.marca && <p className="text-red-500 text-sm mt-1">{errors.marca.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="modelo" className="block text-gray-700 font-semibold mb-2">
                    Modelo
                </label>
                <input
                    id="modelo"
                    type="text"
                    {...register('modelo', { required: 'Modelo é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.modelo ? 'border-red-500' : ''}`}
                />
                {errors.modelo && <p className="text-red-500 text-sm mt-1">{errors.modelo.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="placa" className="block text-gray-700 font-semibold mb-2">
                    Placa
                </label>
                <input
                    id="placa"
                    type="text"
                    {...register('placa', { required: 'Placa é obrigatória' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.placa ? 'border-red-500' : ''}`}
                />
                {errors.placa && <p className="text-red-500 text-sm mt-1">{errors.placa.message}</p>}
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
