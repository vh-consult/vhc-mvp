import React from 'react'

const AboutComponent = ({companyDescription}: {companyDescription: string}) => {
  return (
    <div>
      {companyDescription}
    </div>
  )
}

export default AboutComponent