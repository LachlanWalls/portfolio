import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import { projects, TECH_FILTERS, TYPE_FILTERS } from './data/projects'
import Project from './components/Project'
import { Menu, X } from 'react-feather'
import { Button } from './components/Button'
import Triangles from './components/Triangles'
import AboutMe from './components/AboutMe'
import styles from './Portfolio.module.scss'

export default function Portfolio () {
  const showInitially = window.innerWidth > 1000
  const [sidebarShowing, setSidebarShowing] = useState(showInitially)

  const [techFilters, setTechFilters] = useState(Object.fromEntries(TECH_FILTERS.map(filter => [filter, false])))
  const [typeFilters, setTypeFilters] = useState(Object.fromEntries(TYPE_FILTERS.map(filter => [filter, false])))
  const toggleFilter = (type: 'tech' | 'type', name: string) =>
    (type === 'tech' ? setTechFilters : setTypeFilters)(current => ({ ...current, [name]: !current[name] }))

  const [filteredProjects, filteredProjectIds] = useMemo(() => {
    const filtered = projects.filter(project =>
      (!Object.values(techFilters).includes(true) || Object.entries(techFilters).filter(f => f[1]).some(filter => project.tags.includes(filter[0]))) &&
      (!Object.values(typeFilters).includes(true) || Object.entries(typeFilters).filter(f => f[1]).some(filter => project.tags.includes(filter[0])))
    )
    return [filtered, new Set(filtered.map(project => project.id))]
  }, [techFilters, typeFilters])

  return <>
    <Triangles/>

    <Sidebar showing={sidebarShowing} filteredProjectIds={filteredProjectIds}/>

    <main className={styles.main} data-sidebar-showing={sidebarShowing}>
      <Menu size={24} onClick={() => setSidebarShowing(!sidebarShowing)}/>

      <h1>Hi, I'm Lachlan.</h1>
      <div className={styles.blurb}>
        <p>I'm studying Computer Science @ The University of Technology Sydney.</p>
        <p>I've been working with software for <strong>{new Date().getFullYear() - 2017} years</strong> & in the professional industry for <strong>{new Date().getFullYear() - 2022} years</strong>.</p>
        <p>I have a passion for learning and using my problem solving skills to develop innovative software solutions.</p>
      </div>
      <AboutMe/>
      

      <h1>The Projects</h1>
  
      <div className={styles.filters}>
        {Object.entries(techFilters).map(([f, e], i) => <Button key={i} text={f} color={e ? 'primary' : 'secondary'} onClick={() => toggleFilter('tech', f)}/>)}
        <X size={18} onClick={() => setTechFilters(Object.fromEntries(TECH_FILTERS.map(filter => [filter, false])))}/>
      </div>

      <div className={styles.filters + ' ' + styles.bottom}>
        {Object.entries(typeFilters).map(([f, e], i) => <Button key={i} text={f} color={e ? 'primary' : 'secondary'} onClick={() => toggleFilter('type', f)}/>)}
        <X size={18} onClick={() => setTypeFilters(Object.fromEntries(TYPE_FILTERS.map(filter => [filter, false])))}/>
      </div>
  
      {filteredProjects.length === 0 && <p>No matching projects found.</p>}
      {filteredProjects.map(project => <Project key={project.id} project={project}/>)}
    </main>
  </>
}
