const ProjectCard = ({ title, description, tags, link, cardBg = 'bg-white dark:bg-gray-950' }) => {
  return (
    <div className={`${cardBg} rounded-2xl p-6 hover:border border-yellow-500 dark:border-yellow-400 transition`}>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="text-yellow-600 dark:text-yellow-400 text-sm hover:underline">
        Ver proyecto →
      </a>
    </div>
  )
}

export default ProjectCard
