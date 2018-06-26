import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'

import docs from './documentation.svg'
import manage from './manage.svg'
import register from './register.svg'
import wallet from './wallet.svg'

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
          <img src={'https://pbs.twimg.com/profile_images/940349100297297920/7aglaO4Q_400x400.jpg'} />
        </div>
        <p>Infura</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <img src={'https://wiki.aragon.one/design/logo/png/isotype.png'} />
        </div>
        <p>Aragon</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <img src={'https://pbs.twimg.com/profile_images/966759182589308928/s5rZXoWk_400x400.jpg'} />
        </div>
        <p>Status.im</p>
      </div>
    </div>
  </GetStarted>
)
