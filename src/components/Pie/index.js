import React from 'react'
import PieChart from 'react-svg-piechart'

import './Pie.css'

const data = [
  { title: 'Designing and developing code', value: 40, color: '#7D2000' },
  { title: 'Learning and researching', value: 20, color: '#A72B00' },
  { title: 'Networking with fellow developers', value: 10, color: '#c30' },
  { title: 'Reading the latest tech news', value: 5, color: '#F85117' },
  { title: 'Working on personal projects', value: 15, color: '#FF7A4D' },
  { title: 'Relaxation and self-care', value: 10, color: '#FFAA7D' },
]

class Pie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: 'How a typical day breaks down',
    }
    this.changeLabel = this.changeLabel.bind(this)
  }

  changeLabel(data) {
    this.setState({ label: data })
  }

  render() {
    return (
      <div className="pie-chart">
        <PieChart
          data={data}
          expandOnHover
          expandSize={1}
          shrinkOnTouchEnd={false}
          strokeColor="#fff"
          strokeLinejoin="round"
          strokeWidth={0.5}
          viewBoxSize={20}
          onSectorHover={(d, i, e) => {
            const string = d && `${d.title} ${d.value}%`
            this.setState({ label: d && string })
          }
          }
        />
        <div className="section-label">
          {this.state.label}
        </div>
      </div>
    )
  }
}

export default Pie