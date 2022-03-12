import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeLineCard = props => {
  const {cardDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = cardDetails

  return (
    <div className="course-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-and-calendar-container">
        <h1 className="project-title">{projectTitle}</h1>
        <AiFillCalendar className="icon" />
        <p className="calendar">{duration}</p>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
