import CriarVeiculoForm from './CriarVeiculoForm';
interface veiculo {
    chassi: string;
    ano: number;
    marca: string;
    modelo: string;
    placa: string;
    proprietario: {
        id: number;
    }
  }
async function HandleCriar(clienteId: number, data: veiculo){
    'use server'
    data.proprietario = {id: clienteId}
    console.log(data)
    const res = await fetch(`http://localhost:8080/veiculos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(res)
    return res.status;
}
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = (await params);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Adicionar Veículo para o Cliente {id}</h1>
        <CriarVeiculoForm proprietarioId={id} criarCallback={HandleCriar} />
      </div>
    </div>
  );
}
