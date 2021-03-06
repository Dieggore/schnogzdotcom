import loadable from '@loadable/component'
import React from 'react'

import Page from 'components/page'
import Hero from 'components/hero'
import Section from 'components/section'
import Footer from 'components/footer'

// lazy loaded content
const Hello = loadable(() => import('./../content/hello'))
const Resume = loadable(() => import('./../content/resume'))
const Stats = loadable(() => import('./../content/stats'))
const Projects = loadable(() => import('./../content/projects'))

export default () => (
  <Page>
    <Hero />
    <Section id="hello">
      <Hello />
    </Section>
    <Section id="stats">
      <Stats />
    </Section>
    <Section id="projects">
      <Projects />
    </Section>
    <Section id="resume">
      <Resume />
    </Section>
    <Footer />
  </Page>
)
