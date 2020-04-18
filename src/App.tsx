import React from 'react'
import './App.css'

const triage = (impact: number, customers: number): 'cosmetic' | 'low' | 'medium' | 'high' | 'critical' => {
  if (impact < 12.5) return 'cosmetic'
  if (impact < 25 && customers < 25) return 'low'
  if (
    (impact < 90 && customers < 25) ||
    (impact < 75 && customers < 50) ||
    (impact < 50)
  ) return 'medium'
  if (impact < 90 && impact >=50 && customers >= 25 && (
    (impact >= 75 || customers >= 50) &&
    !(customers >= 75 && impact >= 75)
  )) return 'high'
  return 'critical'
}

const emoji = {
  cosmetic: '🙃',
  low: '🤔',
  medium: '☹️',
  high: '😫',
  critical: '🥵',
}

const App = (): JSX.Element => {
  const [impact, setImpact] = React.useState<number|undefined>()
  const [customers, setCustomers] = React.useState<number|undefined>()

  const severity = triage(impact || 0, customers || 0)

  const severityString = `${severity}${!['cosmetic', 'critical'].includes(severity) && ' priority'}`

  const onChange = (
    setter: React.Dispatch<React.SetStateAction<number|undefined>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseFloat(e.currentTarget.value)
    if ((0 <= newValue && newValue <= 100) || !newValue) setter(newValue)
  }

  return (
    <main>
      <h1>
        Bug prioritizer
      </h1>
      <form
        autoComplete={'false'}
      >
        <label>
          <span>
            What percentage of users does this impact?
          </span>
          <input
            inputMode={'decimal'}
            max={100}
            min={0}
            name={'customers'}
            onChange={onChange(setCustomers)}
            type={'number'}
            value={customers || ''}
          />
        </label>
        <label>
          <span>
            On a scale of 0 to 100, how much does this inhibit an affected user&rsquo;s ability to use the app?
          </span>
          <input
            inputMode={'decimal'}
            max={100}
            min={0}
            name={'impact'}
            onChange={onChange(setImpact)}
            pattern={'[0-9.]*'}
            type={'number'}
            value={impact || ''}
          />
        </label>
      </form>
      {(customers && impact) ? <div className={`result ${severity}`}>
        {emoji[severity]} Sounds like this is a <u>{severityString}</u> bug
      </div> : ''}
    </main>
  )
}

export default App
