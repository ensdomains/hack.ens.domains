import React from 'react'
import styled from 'react-emotion'
import Explainer from './Explainer'
import secure from '../../assets/secure.svg'
import hexagonBG from './hexagonFaded.png'
import circleBG from './circleFaded.png'
import distributed from '../../assets/distributed.svg'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

class ValueCard extends React.Component {
  render() {
    return (
      <div className="value-prop-card">
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

const PitchContainer = styled.div`
  margin: 100px auto 0;

  .value-prop {
    color: #2B2B2B;
    position: relative;
    padding: 20px 0;
    margin: 0 auto 0;
    font-size: 22px;
    font-weight: 100;
    line-height: 1.3em;
    text-align: center;
    max-width: 75%;
    strong {
      font-weight: 500;
    }

    ${mq.medium(`
      padding: 100px 0;
      font-size: 34px;
    `)};

    .hexagon {
      display: block;
      content: '';
      background: url('${hexagonBG}');
      background-size: cover;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 180px;
      height: 207px;
      ${mq.medium(`
        width: 240px;
        height: 276px;
      `)};
    }

    .circle {
      display: block;
      content: '';
      background: center / cover url('${circleBG}');
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 195px;
      height: 195px;

      ${mq.medium(`
        width: 260px;
        height: 260px;
      `)};
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 100px;

    ${mq.medium(`
      flex-direction: row;
    `)};
  }

  .value-prop-card {
    width: 100%;
    display: flex;
    flex-direction: column;


    ${mq.medium(`
      align-items: flex-start;
      width: 45%;
    `)};
    p {
      font-weight: 300;
    }

    img {
      align-self: center;
      max-width: 80%;
      ${mq.medium(`
        align-self: flex-start;
        max-width: 100%;
      `)};
    }
  }
`

class Pitch extends React.Component {
  constructor(props) {
    super(props)
    this.circle = React.createRef()
    this.hexagon = React.createRef()
    this.valueProp = React.createRef()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll)

    this.interval = setInterval(() => {
      if (this.didScroll === true) {
        this.didScroll = false
        this.handleScroll()
      }
    }, 50)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
    clearInterval(this.interval)
  }

  scroll = () => {
    this.didScroll = true
  }

  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let valueProp = this.valueProp.current
    let elementOffsetTop = valueProp.offsetTop - bodyHeight
    let elementOffsetBottom = valueProp.offsetTop + bodyHeight + bodyHeight

    let scrollRange1 = [elementOffsetTop + 200, elementOffsetTop + 600]

    const circleX = modulate(window.pageYOffset, scrollRange1, [-50, -15], true)
    const hexagonX = modulate(
      window.pageYOffset,
      scrollRange1,
      [-50, -85],
      true
    )

    this.hexagon.current.style.transform = 'translate(' + hexagonX + '%, -50%)'
    this.circle.current.style.transform = 'translate(' + circleX + '%, -50%)'
  }
  render() {
    return (
      <PitchContainer>
        <p className="value-prop" ref={this.valueProp}>
          The second ENS workshop, on <strong>August 10th</strong>, will bring together experts from around the Ethereum community to discuss technical improvements and the way forward for the Ethereum Name Service. Topics will include dispute resolution, user experience, and design of the permanent registrar.
          This will be followed on <strong>August 11th-12th</strong> by a two day ENS focused hackathon
          <div className="hexagon" ref={this.hexagon} />
          <div className="circle" ref={this.circle} />
        </p>
      </PitchContainer>
    )
  }
}

export default Pitch
