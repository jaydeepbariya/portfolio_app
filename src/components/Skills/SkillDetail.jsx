import React from 'react'

const SkillDetail = ({ skillDetail }) => {
  return (
    <div className='flex items-center outline outline-[1px] rounded-md gap-4 px-2 py-1 hover:outline-[2px] transition-all duration-200'>
      <skillDetail.icon />
      {skillDetail.name}
    </div>
  )
}

export default SkillDetail