export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-sky-500 mb-6">
          Bem-vindo ao Mecatus
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A solução inovadora para autodiagnóstico de problemas em veículos.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-sky-500 mb-4">
            Sobre o Mecatus
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O Mecatus é um sistema avançado que permite identificar e solucionar problemas em veículos de forma rápida e eficiente. Com nossa plataforma, você pode gerenciar clientes, veículos e processos de manutenção, garantindo a satisfação e fidelização de seus clientes.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Nossa missão é facilitar o trabalho de mecânicos e oficinas, fornecendo ferramentas que otimizam o diagnóstico e agilizam o serviço prestado.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/gerenciar/clientes"
            className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Comece a Gerenciar
          </a>
        </div>
      </div>
    </div>
  );
}
