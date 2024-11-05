import CreateClientForm from './CreateClientForm';

interface Cliente{
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    confiabilidade: number;
}
async function HandleCreate(cliente: Cliente){
    'use server'
    const res = await fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    return res.status;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6">Criar Novo Cliente</h1>
        <CreateClientForm criarCallback={HandleCreate}/>
      </div>
    </div>
  );
}
