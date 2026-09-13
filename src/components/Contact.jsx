const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-500 dark:text-yellow-400">Contacto</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="flex flex-col gap-4">
          <a href="mailto:tu@email.com" className="bg-yellow-500 dark:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition">
            Enviar email
          </a>
          <a href="https://github.com/m4vl0" target="_blank" rel="noreferrer" className="border border-yellow-500 dark:border-yellow-400 text-yellow-500 dark:text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:text-black transition">
            GitHub
          </a>
          <a href="https://www.instagram.com/atletico27f.c/" target="_blank" rel="noreferrer" className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-6 py-3 rounded-full hover:border-yellow-500 dark:hover:border-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition">
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact