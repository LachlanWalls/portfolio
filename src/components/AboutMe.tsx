import { useEffect, useRef, useState } from 'react'
import { ChevronDown, X } from 'react-feather'
import { concepts, conceptsStart, languages, languagesStart, tools, toolsStart } from '../data/experience'
import styles from './AboutMe.module.scss'

const experienceCategories = [
  { name: 'Language', data: languages, start: languagesStart },
  { name: 'Tool', data: tools, start: toolsStart },
  { name: 'Concept', data: concepts, start: conceptsStart }
]

export default function AboutMe () {
  const [expanded, setExpanded] = useState(false)
  const [mini, setMini] = useState(window.innerWidth < 500)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  function toggleExpanded() {
    setExpanded(!expanded)
    updateExpanded(!expanded)
  }

  function updateExpanded (expanded: boolean) {
    if (!wrapperRef.current || !moreRef.current || !innerRef.current) return
    if (!expanded) {
      wrapperRef.current.style.height = `${moreRef.current.clientHeight}px`
    } else {
      const height = moreRef.current.clientHeight + innerRef.current.clientHeight
      wrapperRef.current.style.height = `${height}px`
    }
  }

  useEffect(() => {
    function onResize () {
      updateExpanded(expanded)
      setMini(window.innerWidth < 500)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [expanded])

  return <div className={styles.wrapper} ref={wrapperRef} style={{ height: 63 }}>
    <div className={styles.more} ref={moreRef} onClick={toggleExpanded}>
      <h4>More about me, my interests, and my skills/experience</h4>
      <div className={styles.spin} data-expanded={expanded}>{expanded ? <X size={20} strokeWidth={3}/> : <ChevronDown size={20} strokeWidth={3}/>}</div>
    </div>
    
    <div className={styles.inner} ref={innerRef} data-expanded={expanded}>

      <div className={styles.across}>
        <div>
          <h2>Key Interests</h2>
          <ul>
            <li>• Creating aesthetically pleasing and functionally bulletproof user interfaces</li>
            <li>• Optimising usability and providing a logical, interactive, and enjoyable user experience</li>
            <li>• Working with unique data structures and algorithm optimisations</li>
            <li>• Producing nontrivial solutions to solve unique problems and business requirements</li>
            <li>• Designing secure and reliable backend architectures with scalability and extensibility in mind</li>
          </ul>
        </div>
      </div>

      

      

      <h2>Languages &amp; Tech</h2>
      <div className={styles.across + ' ' + styles.tables}>
        {experienceCategories.map(({ name, data, start }, i) => (
          <table key={i} data-mini={mini}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>{name}</th>
                {new Array(Object.values(data)[0]!.years.length).fill(null).map((_, i) => <th key={i}>'{start + i}</th>)}
                <th style={{ paddingLeft: 12, textAlign: 'left' }}>Level</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([name, experience], j) => (
                <tr key={j}>
                  <td>{name}</td>
                  {experience.years.map((level, k) => <td key={k}><div data-level={level}/></td>)}
                  <td style={{ paddingLeft: 12 }}>{experience.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    
    </div>
  </div>
}