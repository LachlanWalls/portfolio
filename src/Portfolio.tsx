import { useEffect, useState, useReducer } from 'react'
import './Portfolio.css'
import Triangulr from 'triangulr'
import Sidebar from './components/Sidebar'
import { projects } from './projects'
import Project from './components/Project'
import { Menu, X } from 'react-feather'

const TechFilterNames = ['JavaScript', 'TypeScript', 'Python', 'MySQL', 'Git', 'Docker', 'React'] as const
type TechFilterName = typeof TechFilterNames[number]
const TypeFilterNames = ['Frontend', 'Backend', 'Games', 'Libraries', 'Utilities', 'Open source'] as const
type TypeFilterName = typeof TypeFilterNames[number]

// Competent, Proficient, Advanced
const tech = {
  'HTML & CSS': { years: [1, 2, 3, 3, 3, 3], level: 'Advanced' },
  'JavaScript': { years: [0, 2, 3, 3, 3, 3], level: 'Advanced' },
  'TypeScript': { years: [0, 0, 0, 0, 1, 3], level: 'Advanced' },
  'Python': { years: [0, 1, 2, 2, 3, 3], level: 'Advanced' },
  'Java': { years: [0, 0, 0, 0, 0, 2], level: 'Competent' },
  'MySQL': { years: [0, 0, 1, 1, 2, 3], level: 'Advanced' },
  'Swift': { years: [2, 1, 0, 0, 0, 0], level: '' },

  'Git': { years: [0, 1, 2, 2, 2, 3], level: 'Proficient' },
  'Docker': { years: [0, 0, 0, 0, 1, 2], level: 'Competent' },
  'React': { years: [0, 0, 0, 2, 3, 3], level: 'Advanced' }
}

export default function Portfolio () {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false)
  const [techFilters, setTechFilters] = useState(TechFilterNames.reduce<Partial<Record<TechFilterName, boolean>>>((t, f) => ({ ...t, [f]: false }), {}))
  const [typeFilters, setTypeFilters] = useState(TypeFilterNames.reduce<Partial<Record<TypeFilterName, boolean>>>((t, f) => ({ ...t, [f]: false }), {}))

  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useEffect(() => {
    const onScroll = () => forceUpdate()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [triangle, setTriangle] = useState<SVGElement>()
  const [trianglePaths, setTrianglePaths] = useState<string>()
  useEffect(() => {
    const tri = new Triangulr(window.innerWidth, window.innerHeight * 1.5, 100, 40, path => {
      const yPositions = path.points.map(p => p.y).sort()
      const isFacingDown = Math.abs(yPositions[1] - yPositions[0]) > Math.abs(yPositions[2] - yPositions[1])
      const xPositions = path.points.map(p => p.x).sort()
      const isFacingRight = Math.abs(xPositions[1] - xPositions[0]) > Math.abs(xPositions[2] - xPositions[1])
      const aquaFactor = (Math.random() * 0.15 + 0.85) * (!isFacingDown && !isFacingRight ? 0.15 : 0.13)
      const purpleFactor = (Math.random() * 0.15 + 0.85) * (isFacingDown && isFacingRight ? 0.15 : 0.13)
      const red = Math.round(255 * purpleFactor)
      const green = Math.round(255 * aquaFactor)
      const blue = Math.round(255 * Math.max(purpleFactor, aquaFactor) * 1.8)
      return '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0') + 'ff'
    })

    console.log(tri.innerHTML)
    setTriangle(tri)

    let drawing = true
    const length = tri.innerHTML.split('</path><path').length
    const numHighlights = 50
    const highlights: number[] = []

    function draw () {
      if (highlights.length >= numHighlights) highlights.shift()
      highlights.push(Math.floor(Math.random() * length))

      const plain = tri.innerHTML.split('</path><path')
      highlights.forEach((index, value) => {
        const path = plain[index]
        const [beforeFill, fillAndAfter] = path.split('fill="')
        const [fill, afterFill] = fillAndAfter.split('" shape')
        const newopacity = Math.floor((Math.abs((value - numHighlights / 2) / (numHighlights / 2)) * 0.3 + 0.7) * 255)
        plain[index] = `${beforeFill}fill="${fill.slice(0, fill.length - 2)}${newopacity.toString(16).padStart(2, '0')}" shape${afterFill}`
      })

      setTrianglePaths(plain.join('</path><path'))

      if (drawing) window.requestAnimationFrame(draw)
    }

    draw()
    return () => { drawing = false }
  }, [])

  const relevantTechProjects = Object.entries(projects).filter(([_, p]) => Object.entries(techFilters).filter(f => f[1]).every(f => p.tags.includes(f[0] as TechFilterName)))
  const relevantTypeProjects = relevantTechProjects.filter(([_, p]) => Object.entries(typeFilters).filter(f => f[1]).every(f => p.tags.includes(f[0] as TypeFilterName)))

  return <>
    <div className='triangle'>
      {triangle && trianglePaths
        ? <svg
            version={triangle.getAttribute('version') || undefined}
            viewBox={triangle.getAttribute('viewBox') || undefined}
            enableBackground={triangle.getAttribute('enable-background') || undefined}
            preserveAspectRatio={triangle.getAttribute('preserveAspectRatio') || undefined}
            dangerouslySetInnerHTML={{ __html: trianglePaths }}
          />
        : ''}
    </div>

    <Sidebar isSidebarShowing={isSidebarShowing} setIsSidebarShowing={setIsSidebarShowing}/>

    <main data-sidebar-showing={isSidebarShowing}>
      <Menu size={24} onClick={() => setIsSidebarShowing(!isSidebarShowing)}/>

      <h2>Lachlan Walls</h2>

      <h2 id='interests'>Key Interests</h2>
      <ul>
        <li> - Creating aesthetic and bulletproof user interfaces</li>
        <li> - Optimising usability and providing a logical, interactive user experience</li>
        <li> - Working with unique data structures and efficient algorithms</li>
        <li> - Designing neat, failsafe backend architectures with scalability</li>
      </ul>

      <h2 id='tech'>Languages &amp; Tech</h2>
      <table>
        <thead>
          <tr><th></th><th>'17</th><th>'18</th><th>'19</th><th>'20</th><th>'21</th><th>'22</th><th>Level</th></tr>
        </thead>
        <tbody>
          {Object.entries(tech).map(([name, data], i) => <tr key={i}>
            <td style={name === 'Git' ? { paddingTop: 12 } : {}}>{name}</td>
            {data.years.map((level, j) => <td key={j} style={name === 'Git' ? { paddingTop: 12 } : {}}><div data-level={level}/></td>)}
            <td style={name === 'Git' ? { paddingTop: 12 } : {}}>{data.level}</td>
          </tr>)}
        </tbody>
      </table>

      <h1>The Projects</h1>
      <div className='filters'>
        {Object.entries(techFilters).map(([f, s], i) => <div key={i} className='filter' data-selected={s} onClick={() => setTechFilters(p => ({ ...p, [f]: !s }))}>{f}</div>)}
        <X size={18} onClick={() => setTechFilters(TechFilterNames.reduce<Partial<Record<TechFilterName, boolean>>>((t, f) => ({ ...t, [f]: false }), {}))}/>
      </div>
      <div className='filters bottom'>
        {Object.entries(typeFilters).map(([f, s], i) => <div key={i} className='filter' data-selected={s} onClick={() => setTypeFilters(p => ({ ...p, [f]: !s }))}>{f}</div>)}
        <X size={18} onClick={() => setTypeFilters(TypeFilterNames.reduce<Partial<Record<TypeFilterName, boolean>>>((t, f) => ({ ...t, [f]: false }), {}))}/>
      </div>
      {relevantTechProjects.length === 0 && <p>No matching projects found.</p>}
      {relevantTypeProjects.map(([id, project], i) => <Project key={i} id={id} project={project}/>)}
    </main>
  </>
}
