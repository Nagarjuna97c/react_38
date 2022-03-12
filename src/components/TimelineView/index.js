import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const titles = timelineItemsList.map(eachItem => ({
    title: eachItem.title,
  }))

  return (
    <div className="main-container">
      <h1 className="main-heading">
        MY JOURNEY OF <span className="heading1">CCBP 4.0</span>
      </h1>
      <Chrono
        items={titles}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#2b237c',
          secondary: '#ffffff',
          cardForeColor: '#2b237c',
          titleColor: '#2b237c',
        }}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimeLineCard key={eachItem.id} cardDetails={eachItem} />
            )
          }
          return (
            <ProjectTimeLineCard key={eachItem.id} cardDetails={eachItem} />
          )
          // return <p key={eachItem.id}>pass</p>
        })}
      </Chrono>
    </div>
  )
}

export default TimeLineView
