import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'
import RoadMap from '../components/roadMap/RoadMap'
import GetInvolved from '../components/getInvolved/GetInvolved'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <Fragment>
    <Pitch />
    <Quote
      quote="11-12th August, 2018"
      author="Central London"
    />
    <GetStarted />
    <Supported />
    <RoadMap />
    <GetInvolved />
  </Fragment>
)

export default IndexPage
