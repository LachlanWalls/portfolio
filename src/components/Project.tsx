import { Star } from 'react-feather'
import { Project as IProject } from '../data/projects'
import { ButtonLink } from './Button'
import Snippets from './Snippets'
import styles from './Project.module.scss'

export default function Project ({ project }: { project: IProject }) {
  return <div className={styles.project}>
    <h2 id={project.id}>{project.title} {project.starred && <Star size={28}/>}</h2>
    <p dangerouslySetInnerHTML={{ __html: project.description.split('\n').map(k => k.startsWith('    ') ? k.slice(4) : k).join('\n') }}/>

    {project.snippets?.length && <Snippets snippets={project.snippets}/>}

    {project.image && <img src={'/images/' + project.image} alt={project.title + ' image'} width='100%'/>}

    {project.buttons?.length && <div className={styles.buttons}>
      {project.buttons.map((button, i) => <ButtonLink key={i} {...button}/>)}
    </div>}
  </div>
}
