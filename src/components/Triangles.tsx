import { MutableRefObject, useEffect, useRef, useState } from 'react'
import Triangulr, { type Triangle } from 'triangulr'
import styles from './Triangles.module.scss'

const NUM_HIGHLIGHTS = 50
const MOUSE_HIGHLIGHT_CYCLES = 50

export default function Triangles () {
  const [triangulr, setTriangulr] = useState<SVGElement>()
  const [trianglesInnerHTML, setTrianglesInnerHTML] = useState<string>()

  const [dimensions, setDimensions] = useState({ w: window.innerWidth, h: window.innerHeight })
  const [pathDataToIndexMap, setPathDataToIndexMap] = useState<Map<string, number>>()
  const highlights = useRef({ auto: [] as number[], mouse: [] as [number, number][] })

  useEffect(() => {
    function handleResize () {
      setDimensions({ w: window.innerWidth, h: window.innerHeight })
    }

    function handleMouseMove (e: MouseEvent) {
      const elements = document.elementsFromPoint(e.clientX, e.clientY)
      const path = elements.find(e => e.tagName === 'path')
      if (path && pathDataToIndexMap) {
        const index = pathDataToIndexMap.get(path.getAttribute('d')!)
        if (index) highlights.current.mouse.push([index, MOUSE_HIGHLIGHT_CYCLES])
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('resize', handleResize)
  }, [pathDataToIndexMap])

  useEffect(() => {
    const element = new Triangulr(dimensions.w, dimensions.h * 1.5, 100, 40, triangleRenderingFunction)
    setTriangulr(element)

    const paths = element.innerHTML.split('</path><path')
    const newPathDataToIndexMap = new Map<string, number>()
    for (let i = 0; i < paths.length; i++) {
      const data = paths[i].split('d="')[1].split('"')[0]
      newPathDataToIndexMap.set(data, i)
    }
    setPathDataToIndexMap(newPathDataToIndexMap)

    highlights.current = { auto: [], mouse: [] }
    let drawing = true

    function draw () {
      if (!drawing) return
      while (highlights.current.auto.length >= NUM_HIGHLIGHTS) highlights.current.auto.shift()
      highlights.current.auto.push(Math.floor(Math.random() * paths.length))
      applyHighlightsToPaths(paths, highlights)
      setTrianglesInnerHTML(paths.join('</path><path'))
      if (drawing) window.requestAnimationFrame(draw)
    }

    draw()
    return () => { drawing = false }
  }, [dimensions])

  if (!triangulr || !trianglesInnerHTML) return <></>
  
  return <div className={styles.triangles}>
    <svg
      version={triangulr.getAttribute('version') || undefined}
      viewBox={triangulr.getAttribute('viewBox') || undefined}
      enableBackground={triangulr.getAttribute('enable-background') || undefined}
      preserveAspectRatio={triangulr.getAttribute('preserveAspectRatio') || undefined}
      dangerouslySetInnerHTML={{ __html: trianglesInnerHTML }}
    />
  </div>
}

function triangleRenderingFunction (triangle: Triangle) {
  const yPositions = triangle.points.map(p => p.y).sort()
  const xPositions = triangle.points.map(p => p.x).sort()
  const isFacingDown = Math.abs(yPositions[1] - yPositions[0]) > Math.abs(yPositions[2] - yPositions[1])
  const isFacingRight = Math.abs(xPositions[1] - xPositions[0]) > Math.abs(xPositions[2] - xPositions[1])
  const aquaFactor = (Math.random() * 0.15 + 0.85) * (!isFacingDown && !isFacingRight ? 0.15 : 0.13)
  const purpleFactor = (Math.random() * 0.15 + 0.85) * (isFacingDown && isFacingRight ? 0.15 : 0.13)
  const red = Math.round(255 * purpleFactor)
  const green = Math.round(255 * aquaFactor)
  const blue = Math.round(255 * Math.max(purpleFactor, aquaFactor) * 1.8)
  return '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0') + 'ff'
}

function applyHighlightsToPaths (paths: string[], highlights: MutableRefObject<{ auto: number[], mouse: [number, number][] }>) {
  /**
   * Apply an opacity to a path element at a certain index.
   */
  function apply (index: number, opacity: number) {
    const currentFill = paths[index].match(/ fill="(#[0-9a-f]{8})" shape/)
    if (currentFill) {
      const newFill = currentFill[1].slice(0, 7) + opacity.toString(16).padStart(2, '0')
      paths[index] = paths[index].replace(currentFill[1], newFill)
    }
  }

  // Apply highlights from mouse cursor movement
  const visited = new Set<number>()
  const remove = new Set<number>()
  for (let i = 0; i < highlights.current.mouse.length; i++) {
    visited.add(highlights.current.mouse[i][0])
    highlights.current.mouse[i][1] -= 1
    if (highlights.current.mouse[i][1] <= 0) {
      remove.add(i)
      apply(highlights.current.mouse[i][0], 255)
    } else {
      const opacity = Math.floor((1 - (highlights.current.mouse[i][1] / MOUSE_HIGHLIGHT_CYCLES) * 0.4) * 255)
      apply(highlights.current.mouse[i][0], opacity)
    }
  }

  // Remove mouse highlights that are 'expired'/done
  for (const index of remove) {
    highlights.current.mouse.splice(index, 1)
  }
  
  // Apply automatic highlights (if not already done by mouse)
  for (let i = 0; i < highlights.current.auto.length; i++) {
    const pathIndex = highlights.current.auto[i]
    if (visited.has(pathIndex)) continue
    // Opacity/duration through the fade is determined by the position in the list
    const opacity = Math.floor((Math.abs((i - NUM_HIGHLIGHTS / 2) / (NUM_HIGHLIGHTS / 2)) * 0.1 + 0.9) * 255)
    apply(pathIndex, opacity)
  }
}
