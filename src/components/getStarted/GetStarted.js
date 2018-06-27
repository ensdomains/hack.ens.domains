import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'

import docs from './documentation.svg'
import manage from './manage.svg'
import register from './register.svg'
import wallet from './wallet.svg'
import infura from '../supportedApps/sponsors/infura.jpg'
import aragon from '../supportedApps/sponsors/aragon.png'
import status from '../supportedApps/sponsors/status.jpg'

const GetStarted = styled('section')`
  padding: 100px 0 0;

  ${mq.medium`
    padding: 100px 0;
    `};

  .icons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .icon {
    width: 40%;

    ${mq.medium`
      width: 20%;
    `};
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    img {
      max-width: 80%;
      ${mq.medium`
        max-width: 100%;
      `};
    }
  }

  p {
    font-size: 16px;
    color: #3252c8;
    text-align: center;
    ${mq.medium`
      font-size: 20px;
    `};
  }
`

export default () => (
  <GetStarted>
    <h2>Sponsors</h2>
    <div className="icons container">
      <div className="icon">
        <div className="img-wrapper">
          <a href="https://www.infura.io"><img src={infura} /></a>
        </div>
        <p>Infura</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <a href="https://aragon.one"><img src={aragon} /></a>
        </div>
        <p>Aragon</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <a href="http://status.im"><img src={status} /></a>
        </div>
        <p>Status.im</p>
      </div>
    </div>
  </GetStarted>
)
