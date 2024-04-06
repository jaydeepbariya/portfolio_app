import React from 'react'
import SkillDetail from './SkillDetail'

const SkillsCard = ( { skillData } ) => {
  return (
    <div className='min-w-[300px] min-h-[250px] flex flex-col justify-start items-center rounded-md border-[1px] border-solid to-blue-500 p-4'>
        <h2 className='text-xl text-center my-3 font-semibold text-blue-700'>{skillData.category}</h2>

        <div className='grid grid-cols-2 grid-rows-3 gap-3'>
            {
                skillData?.skills.map((skillDetail, index) => {
                    return (
                        <SkillDetail skillDetail={skillDetail} key={index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default SkillsCard