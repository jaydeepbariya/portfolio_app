import React from 'react'
import SkillDetail from './SkillDetail'

const SkillsCard = ({ skillData }) => {
    return (
        <div className='flex flex-col justify-start items-center rounded-md border-[1px] border-solid to-blue-500 p-4 hover:scale-105 transition-all duration-200'>
            <h2 className='text-xl text-center my-4 font-semibold text-blue-700'>{skillData.category}</h2>

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