import { APP_NAME, APP_DESCRIPTION } from '@/utils/constants'

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-4xl w-full space-y-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                    {APP_NAME}
                </h1>

                <p className="text-xl text-gray-600">
                    {APP_DESCRIPTION}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Começar Agora
                    </button>
                    <button className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                        Saiba Mais
                    </button>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Organize seus Estudos</h3>
                        <p className="text-gray-600">Crie planos de estudo personalizados para seus concursos</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Acompanhe seu Progresso</h3>
                        <p className="text-gray-600">Monitore seu desempenho e evolução em tempo real</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Alcance seus Objetivos</h3>
                        <p className="text-gray-600">Prepare-se de forma eficiente para sua aprovação</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
