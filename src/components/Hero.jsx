const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-yellow-500 dark:text-yellow-400 text-lg mb-4 tracking-widest uppercase">Hola, soy</p>
        <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white leading-none mb-6">
          Pablo
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mb-8">
          Diseñador Industrial <span className="text-gray-900 dark:text-white">&</span> Desarrollador Web
        </p>
        <p className="text-gray-500 max-w-xl text-lg mb-10">
           Del modelamiento 3D/BIM al desarrollo web
        </p>
        <div className="flex gap-4">
          <a href="#web-projects" className="bg-yellow-500 dark:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 dark:hover:bg-yellow-300 transition">
            Ver proyectos
          </a>
          <a href="#contact" className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-8 py-4 rounded-full font-bold text-lg hover:border-yellow-500 dark:hover:border-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero