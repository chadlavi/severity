import React from 'react'
import './App.css'
import {triage, Triage} from './triage'
import {
  CSSVariables,
  GlobalStyles,
  Grid,
  GridItem,
  Header,
  Input,
  Link,
  Page,
  Paragraph,
} from '@chadlavi/clear'

const emoji: {[key in Triage]: string} = {
  cosmetic: '🙃',
  low: '🤔',
  medium: '🙁',
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
    const newValue = parseFloat(e.currentTarget.value || '0')
    if ((0 <= newValue && newValue <= 100) || !newValue) setter(newValue)
  }

  return (
    <>
      <CSSVariables/>
      <GlobalStyles/>
      <Page>
        <Grid spacing={16}>
          <GridItem>
            <Header>
              Bug prioritizer
            </Header>
          </GridItem>
          <GridItem>
            <Input
              inputMode={'decimal'}
              max={100}
              min={0}
              name={'customers'}
              onChange={onChange(setCustomers)}
              type={'number'}
              value={customers}
              label={'What percentage of users does this impact?'}
            />
          </GridItem>
          <GridItem>
            <Input
              inputMode={'decimal'}
              max={100}
              min={0}
              name={'impact'}
              onChange={onChange(setImpact)}
              pattern={'[0-9.]*'}
              type={'number'}
              value={impact}
              label={'On a scale of 1 to 100, how much does prevent an affected user from using the app?'}
            />
          </GridItem>
          {
            (customers && impact)
              ? <GridItem>
                <Paragraph className={`result ${severity}`}>
                  {emoji[severity]} Sounds like this is a <u>{severityString}</u> bug
                </Paragraph> 
              </GridItem>
              : null
          }
          <GridItem>
            <Paragraph margins={false} className={'footer'}>
              Built with <Link href={'https://chadlavi.github.io/clear/'}>Clear</Link>
              &nbsp;&middot;&nbsp;<Link href='https://github.com/chadlavi/severity/blob/master/src/triage.ts'>How is
              this calculated?</Link>
            </Paragraph>
          </GridItem>
        </Grid>
      </Page>
      
    </>
  )
}

export default App
