type ExperienceData = {
  years: number[],
  level: 'Learning' | 'Competent' | 'Proficient' | 'Advanced',
  relevance: ('Frontend' | 'Backend' | 'Mobile' | 'DevOps')[]
}

export const languagesStart = 17
export const languages: Record<string, ExperienceData> = {
  'HTML & CSS': { years: [1, 2, 3, 3, 3, 3, 3, 3, 3], level: 'Advanced', relevance: ['Frontend'] },
  'JavaScript': { years: [0, 2, 3, 3, 3, 3, 3, 3, 3], level: 'Advanced', relevance: ['Frontend', 'Backend'] },
  'TypeScript': { years: [0, 0, 0, 0, 1, 3, 3, 3, 3], level: 'Advanced', relevance: ['Frontend', 'Backend', 'Mobile'] },
  'Python': { years: [0, 1, 2, 2, 3, 3, 1, 1, 1], level: 'Advanced', relevance: ['Backend', 'DevOps'] },
  'SQL': { years: [0, 0, 1, 1, 2, 3, 3, 3, 3], level: 'Advanced', relevance: ['Backend', 'DevOps'] },
  'Java': { years: [0, 0, 0, 0, 0, 2, 2, 1, 1], level: 'Competent', relevance: ['Backend', 'Mobile', 'DevOps'] },
  'C++': { years: [0, 0, 0, 0, 0, 0, 0, 2, 1], level: 'Learning', relevance: ['Backend', 'Mobile', 'DevOps'] },
  'Swift': { years: [2, 1, 0, 0, 0, 0, 1, 2, 2], level: 'Learning', relevance: ['Mobile'] },
  'PHP': { years: [0, 0, 0, 0, 0, 0, 2, 3, 3], level: 'Proficient', relevance: ['Frontend', 'Backend'] },
  'Go': { years: [0, 0, 0, 0, 0, 0, 0, 2, 3], level: 'Learning', relevance: ['Backend', 'DevOps'] }
}

export const toolsStart = 19
export const tools: Record<string, ExperienceData> = {
  'Git': { years: [2, 2, 2, 3, 3, 3, 3], level: 'Advanced', relevance: ['Frontend', 'Backend', 'Mobile', 'DevOps'] },
  'Docker': { years: [0, 0, 1, 2, 3, 3, 3], level: 'Advanced', relevance: ['Backend', 'DevOps'] },
  'React': { years: [0, 2, 3, 3, 3, 3, 3], level: 'Advanced', relevance: ['Frontend'] },
  'Vite': { years: [0, 0, 0, 1, 2, 3, 3], level: 'Advanced', relevance: ['Frontend'] },
  'React Native': { years: [0, 0, 0, 2, 2, 1, 1], level: 'Proficient', relevance: ['Mobile'] },
  'Node.js': { years: [2, 2, 3, 3, 3, 3, 3], level: 'Advanced', relevance: ['Backend', 'DevOps'] },
  'MySQL': { years: [0, 0, 1, 2, 2, 1, 1], level: 'Proficient', relevance: ['Backend', 'DevOps'] },
  'PostgreSQL': { years: [0, 0, 0, 1, 1, 2, 3], level: 'Proficient', relevance: ['Backend', 'DevOps'] },
  'Redis': { years: [0, 0, 0, 1, 2, 2, 2], level: 'Proficient', relevance: ['Backend', 'DevOps'] },
  'Nginx': { years: [0, 2, 2, 3, 3, 2, 2], level: 'Advanced', relevance: ['Backend', 'DevOps'] }
}

export const conceptsStart = 20
export const concepts: Record<string, ExperienceData> = {
  'REST APIs': { years: [2, 2, 2, 3, 3, 3], level: 'Advanced', relevance: ['Frontend', 'Backend', 'Mobile'] },
  'Microservices': { years: [0, 0, 1, 2, 3, 3], level: 'Proficient', relevance: ['Backend', 'DevOps'] },
  'CI/CD Pipelines': { years: [0, 0, 2, 1, 2, 3], level: 'Proficient', relevance: ['Backend', 'DevOps'] },
  'Containerization': { years: [0, 0, 2, 2, 3, 3], level: 'Advanced', relevance: ['DevOps'] },
  'Authorization': { years: [0, 1, 2, 3, 3, 3], level: 'Advanced', relevance: ['Frontend', 'Backend', 'Mobile', 'DevOps'] },
  'Perf. Optimization': { years: [0, 0, 2, 3, 3, 3], level: 'Advanced', relevance: ['Backend', 'DevOps'] },
  'State Management': { years: [0, 1, 2, 2, 2, 3], level: 'Proficient', relevance: ['Frontend', 'Mobile'] },
  'Cloud Infrastructure': { years: [2, 3, 3, 3, 3, 3], level: 'Advanced', relevance: ['Backend', 'DevOps' ] }
}
