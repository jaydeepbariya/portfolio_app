import React from 'react'

const SkillDetail = ( {skillDetail} ) => {
  return (
    <div className='flex items-center outline outline-1 rounded-md gap-5 px-2 py-1 hover:outline-[3px] hover:shadow-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200'>
        {skillDetail.icon}
        {skillDetail.name}
    </div>
  )
}

export default SkillDetail