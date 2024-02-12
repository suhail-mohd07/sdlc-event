import { topicData } from '@/constants/topicData'
import HoverCard from '@/ui/sub/hoverCards/HoverCards'
import PcTopics from '@/ui/sub/index/svgs/topics/PcTopics'
import TopicsHolder from '@/ui/sub/index/topics/TopicsHolder'
import React from 'react'

function Attendies() {

  return (
    <div className='w-full h-auto'>
        <div className='w-full p-10 flex justify-center mb-10'>
            <PcTopics/>
        </div>
        <TopicsHolder data={topicData.slice(0,5)}/>
        <TopicsHolder data={topicData.slice(5,10)} />
        <TopicsHolder data={topicData.slice(10)} />
    </div>
  )
}

export default Attendies