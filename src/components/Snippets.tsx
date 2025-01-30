import { useEffect, useState } from 'react'
import { Snippet as ISnippet } from '../data/projects'
import hljs from 'highlight.js'
import styles from './Snippets.module.scss'

export default function Snippets ({ snippets }: { snippets: ISnippet[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return <>
    <div className={styles.selection}>
      {snippets.map((snippet, i) => <button key={i} data-selected={selectedIndex === i} onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}>{snippet.title}</button>)}
    </div>

    <div className={styles.snippets}>
      {snippets.map((snippet, i) => <Snippet key={i} snippet={snippet} selected={selectedIndex === i}/>)}
    </div>
  </>
}

function Snippet ({ snippet, selected }: { snippet: ISnippet, selected: boolean }) {
  const [code, setCode] = useState<string>()

  useEffect(() => {
    const rawCode = snippet.code.split('\n').map(k => k.startsWith('        ') ? k.slice(8) : k).join('\n')
    setCode(hljs.highlight(rawCode, { language: snippet.lang || 'js' }).value)
  }, [snippet.code, snippet.lang])

  return <div className={styles.snippet} data-selected={selected}>
    {snippet.caption && <p dangerouslySetInnerHTML={{ __html: snippet.caption.split('\n').map(k => k.startsWith('        ') ? k.slice(8) : k).join('\n') }}/>}
    {code
      ? <div className={styles.hljs} dangerouslySetInnerHTML={{ __html: code }}/>
      : <p>Loading code highlighter...</p>}
  </div>
}