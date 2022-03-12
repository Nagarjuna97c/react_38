import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeLineCard = props => {
  const {cardDetails} = props
  const {courseTitle, duration, description, tagsList} = cardDetails

  return (
    <div className="course-card">
      <div className="title-and-duration-container">
        <h1 className="card-title">{courseTitle}</h1>
        <AiFillClockCircle className="icon" />
        <p className="duration">{duration}</p>
      </div>
      <p className="card-description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachItem => {
          console.log(eachItem)
          return (
            <li key={eachItem.id} className="tag">
              <p>{eachItem.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
