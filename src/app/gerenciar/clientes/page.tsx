import Link from "next/link";
import ClienteData from "./ClienteData"

async function DeleteCliente(id: number) {
    "use server"
    const response = await fetch(`http://localhost:8080/clientes/${id}`, {
        method: "DELETE"
    })
    const status = await response.status;
    return status;
}

export default async function Page() {
    const response = await fetch("http://localhost:8080/clientes")
    const data = await response.json()
    return (
        <div className="flex flex-col justify-center items-center w-100">
            <h2 className="mx-auto text-3xl my-10 text-sky-500">Gerenciar Clientes</h2>
            <table className="table-fixed text-left w-5/6 border-2 border-sky-500">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cliente: any) => (
                        <ClienteData id={cliente.id} nome={cliente.nome} callbackDelete={DeleteCliente} />))}
                </tbody>
            </table>
            <div className="mt-4">
                <Link href="/gerenciar/clientes/criar">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                        Adicionar
                    </button>
                </Link>
            </div>
        </div>
    )
}