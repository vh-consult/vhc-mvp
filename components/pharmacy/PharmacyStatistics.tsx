import React from 'react'

type StatsProps = {
    title: string;
    figure: number ;
    scaleOfReference?: string;
    subtext?: string
}

export const StatCard = ({title, figure, scaleOfReference, subtext}:StatsProps) => {
    return(
        <div className='w-full p-3 hover:bg-gray-100'>
          <h1 className="text-sm">{title}</h1>
          <p className="">
            <span className="text-3xl font-semibold">
              {figure}
            </span>
            <span className="text-sm">
              {scaleOfReference}
            </span>
          </p>
          <p className="">{subtext && subtext}</p>
        </div>
    )
}

const PharmacyStatistics = ({statData}: {statData: Array<StatsProps>}) => {
  return (
    <div className='flex flex-col gap-5'>
      {
        statData.length > 0 ? statData.map((stat, index) => (
            <StatCard
              figure={stat.figure}
              title={stat.title}
              key={index}
              scaleOfReference={stat.scaleOfReference}
              subtext={stat.subtext}
            />
        )): (
          <span className="text-sm">No statistics yet</span>
        )
      }
    </div>
  )
}

export default PharmacyStatistics
