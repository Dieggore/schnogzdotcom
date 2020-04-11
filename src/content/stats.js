import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Scrobbles from 'components/scrobbles'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

const Heading = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`
const ScrobbleSection = styled.div`
  padding: 1rem 0 2.5rem;
`
const GithubSection = styled.div`
  padding-top: 0.5rem;

  & > article > div.react-github-calendar__title {
    display: none;
  }

  & > article > div > div.react-github-calendar__meta {
    font-size: 1rem;
  }
`
const GithubInto = styled.div`
  margin: 0.25rem 0 1.75rem;
`
const Emoji = styled.span`
  font-size: 1.8rem;
  margin-left: 12px;
`

export default () => (
  <TwoColumns
    wide
    leftColumn={<SectionHeading>Stats</SectionHeading>}
    rightColumn={
      <>
        <Heading>
          Won't stop grooving
          <Emoji>
            <span role="img" aria-label="dance emoji">
              🕺🏻
            </span>
          </Emoji>
        </Heading>
        <ScrobbleSection>
          <Scrobbles />
        </ScrobbleSection>

        <Heading>
          Won't stop improving
          <Emoji>
            <span role="img" aria-label="weight lifter emoji">
              🏋️‍♂️
            </span>
          </Emoji>
        </Heading>
        <GithubSection>
          <GithubInto>
            As you can see in the calendar below, I contribute a ton of code to
            (mostly) open sourced projects on{' '}
            <a
              href="https://github.com/schnogz"
              rel="noopener noreferrer"
              target="blank"
            >
              GitHub
            </a>
            {'.  '}
            I'm always looking for the next project, so please reach out if
            you'd like to collaborate.
          </GithubInto>
          <GitHubCalendar fontSize="18" username="schnogz">
            <ReactTooltip delayShow={25} html />
          </GitHubCalendar>
        </GithubSection>
      </>
    }
  />
)
