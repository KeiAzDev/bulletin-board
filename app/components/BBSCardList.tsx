import React from 'react'
import BBSCard from './BBSCard'
import { BBSData } from '../types/types'

interface BBSCardListProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({bbsAllData}: BBSCardListProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  )
}

export default BBSCardList