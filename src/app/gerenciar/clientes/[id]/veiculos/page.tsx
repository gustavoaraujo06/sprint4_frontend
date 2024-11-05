import Link from "next/link";
import VeiculoData from "./VeiculoData";



async function handleDelete(id: number){
    'use server'
    const res = await fetch(`http://localhost:8080/veiculos/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        console.log(res)
        return false
    }return true
}

interface Veiculo {
  id: number;
  chassi: string;
  ano: number;
  marca: string;
  modelo: string;
  placa: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = (await params);
  const response = await fetch(`http://localhost:8080/veiculos?proprietarioId=${id}`, { cache: 'no-store' });
  console.log(response);
  const data: Veiculo[] = await response.json();
  console.log(data)

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="mx-auto text-3xl my-10 text-sky-500">Veículos do Cliente {id}</h2>
      <table className="table-fixed text-left w-5/6 border-2 border-sky-500">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Modelo</th>
            <th className="px-4 py-2">Marca</th>
            <th className="px-4 py-2">Placa</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((veiculo) => (
            <VeiculoData veiculo={veiculo} key={veiculo.id} deleteCallback={handleDelete}/>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link href={`/gerenciar/clientes/${id}/veiculos/criar`}>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Adicionar Veículo
          </button>
        </Link>
      </div>
    </div>
  );
}
