
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C2B24] flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-typewriter mb-2">Babel</h1>
      <p className="text-md font-belgian italic mb-8">by Algobvio</p>
      <input
        type="text"
        placeholder="Usuario"
        className="w-72 px-4 py-2 border border-[#1C2B24] rounded mb-2 bg-transparent text-[#1C2B24] font-lora"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-72 px-4 py-2 border border-[#1C2B24] rounded mb-2 bg-transparent text-[#1C2B24] font-lora"
      />
      <button className="w-72 px-4 py-2 border-2 border-[#1C2B24] rounded bg-[#1C2B24] text-white mb-2 font-lora">
        Iniciar Sesión
      </button>
      <a href="#" className="underline text-sm text-[#1C2B24] mb-8 font-lora">Crear cuenta</a>
      <p className="text-center text-sm max-w-sm text-[#1C2B24] font-lora">
        Subí tus poemas, escribí en colaboración y participá en concursos trimestrales sin mostrar tu nombre real. Leé desde el misterio, escribí desde el gesto.
      </p>
    </div>
  );
}
