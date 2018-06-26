import React from 'react'
import styled from 'react-emotion'
import people from './people.svg'
import mq from '../../mediaQuery'

const RoadMapContainer = styled('section')`
  padding: 100px 0 0;
  position: relative;
  overflow: hidden;

  .roadmap-container {
    margin-bottom: 100px;
  }

  h3 {
    margin-bottom: 50px;
    ${mq.small`
      margin-bottom: 100px;
    `};

    img {
      margin-right: 5px;
    }
    text-align: center;
  }

  .bg {
    position: absolute;
  }

  .small-blue-hexagon {
    top: -200px;
    right: 0;
  }

  .blue-hexagon {
    bottom: 0;
    left: 0;
  }

  .cyan-circle {
    bottom: 0;
    right: 0;
  }

  .cyan-hexagon {
    left: 0;
    top: 0;
  }

  .rootkey-holders-title {
    margin-top: 50px;

    ${mq.medium`
      margin-top: 100px;
    `};
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-family: Karma;
    font-weight: 100;
    margin-bottom: 50px;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      ${mq.small`
        margin-bottom: 50px;
        width: 50%;
      `};
    }

    dt {
      font-weight: 100;
      font-size: 22px;
      margin-bottom: 10px;
      ${mq.medium`
        font-size: 34px;
      `};
    }

    dd {
      font-weight: 100;
      font-size: 18px;
      margin-bottom: 0;
      ${mq.medium`
        font-size: 22px;
      `};
    }
  }
`

class RoadMap extends React.Component {
  render() {
    return (
      <RoadMapContainer innerRef={this.roadmap} className="roadmap">
        <div className="container-small roadmap-container">
        </div>
      </RoadMapContainer>
    )
  }
}

export default RoadMap
