import React from 'react'
import './App.css'
import {triage, Triage} from './triage'

const emoji: {[key in Triage]: string} = {
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

  const severityString = `${severity}${!['cosmetic', 'critical'].includes(severity) ? ' priority' : ''}`

  const onChange = (
    setter: React.Dispatch<React.SetStateAction<number|undefined>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseFloat(e.currentTarget.value)
    if ((0 <= newValue && newValue <= 100) || !newValue) setter(newValue)
  }

  return (
    <>
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
              On a scale of 1 to 100, how much does this inhibit an affected user&rsquo;s ability to use the app?
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
      <footer>
        <a
          href='https://github.com/chadlavi/severity/blob/master/src/triage.ts'
          rel='noopener noreferrer'
          target='_blank'
        >
          How is this calculated?
        </a>
      </footer>
    </>
  )
}

export default App
