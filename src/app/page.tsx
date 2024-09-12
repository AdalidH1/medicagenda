import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-between items-center p-8 sm:p-20 font-sans">
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-blue-900 mb-4">
          Sistema de Gestión y Agendamiento de Citas Médicas
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Esta plataforma te permite gestionar, agendar y asistir a tus citas médicas, tanto online como presencialmente, conectando pacientes con doctores especializados.
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <Image 
          src="/medical-icon.png" 
          alt="Ícono médico" 
          width={150} 
          height={150} 
          className="rounded-full shadow-lg"
        />
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
          Agendar Cita
        </button>
      </main>

      <footer className="text-center text-gray-500">
        <p>© 2024 Sistema de Citas Médicas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
