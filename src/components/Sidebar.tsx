import React from 'react'
import { GitHub, Linkedin, Star } from 'react-feather'
import { projects } from '../data/projects'
import styles from './Sidebar.module.scss'

/**
 * Map of 'sections' to categories projects in.
 * Projects are already grouped, but this map defines where each group begins by mapping
 *   'first project id' => 'name of section'
 */
const SECTIONS: Record<string, string> = {
  'dynodel':    'Websites',
  'kettu-api':  'Project - Kettu',
  'moontime':   'Other Bits & Pieces'
}

interface SidebarProps {
  showing: boolean
  filteredProjectIds: Set<string>
}

export default function Sidebar ({ showing, filteredProjectIds }: SidebarProps) {
  return <div className={styles.sidebar} data-showing={showing}>
    <h1>Lachlan Walls</h1>
    <h3>Software Engineer // <br/>Full-Stack Web Developer</h3>

    <a href='https://github.com/LachlanWalls' target='_blank' rel='noreferrer'><GitHub size={16} color='white' style={{ marginRight: 6 }}/>Lachlan Walls (formal)</a>
    <a href='https://github.com/dawnniie' target='_blank' rel='noreferrer'><GitHub size={16} color='white' style={{ marginRight: 6 }}/>dawnniie (personal)</a>
    <a href='https://www.linkedin.com/in/lachlanwalls' target='_blank' rel='noreferrer'><Linkedin size={16} color='white' style={{ marginRight: 6 }}/>Lachlan Walls</a>

    {projects.map(project => {
      const section = SECTIONS[project.id]
      return <React.Fragment key={project.id}>
        {section && <span>{section}</span>}
        <a className={styles.link} href={`#${project.id}`} data-hidden={!filteredProjectIds.has(project.id)}>
          {project.title}{project.starred && <Star size={16}/>}
        </a>
      </React.Fragment>
    })}
  </div>
}