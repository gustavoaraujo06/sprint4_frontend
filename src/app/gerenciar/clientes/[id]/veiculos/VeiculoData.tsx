'use client';

import { useRouter } from 'next/navigation';

interface Veiculo {
    id: number;
    chassi: string;
    ano: number;
    marca: string;
    modelo: string;
    placa: string;
}

export default function VeiculoData({ veiculo, deleteCallback }: { veiculo: Veiculo, deleteCallback: any }) {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/veiculos/editar/${veiculo.id}`);
    };

    const handleDelete = async () => {
        const response = await deleteCallback(veiculo.id);
        if (!response) {
            alert('Erro ao excluir');
        } else {
            alert('Excluído com sucesso');
            router.refresh();

        };
    }

    return (
        <tr>
            <td className="border px-4 py-2">{veiculo.id}</td>
            <td className="border px-4 py-2">{veiculo.modelo}</td>
            <td className="border px-4 py-2">{veiculo.marca}</td>
            <td className="border px-4 py-2">{veiculo.placa}</td>
            <td className="border px-4 py-2">
                <button onClick={handleEdit} className="bg-green-500 text-white p-2 rounded">
                    Editar
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white mx-2 p-2 rounded">
                    Excluir
                </button>
            </td>
        </tr>
    );
}

