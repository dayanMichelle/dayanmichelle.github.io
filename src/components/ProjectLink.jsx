import React from 'react'

const ProjectLink = ({projecto}) => {
  return (
    <>
    {projecto === 1 ? <div>Projecto 1</div> : <div>Projecto 2</div> }
    </>
  )
}

export default ProjectLink