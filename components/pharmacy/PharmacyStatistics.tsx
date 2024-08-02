import React from 'react'

type StatsProps = {
    title: string;
    stat: number | string;
    scaleOfReference?: string;
    subtext?: string
}

const StatCard = ({title, stat, scaleOfReference, subtext}:StatsProps) => {
    return(
        <div className=''>
          <h1 className="text-sm">{title}</h1>
          <p className="">
            <span className="text-3xl font-semibold">
              {stat}
            </span>
            <span className="text-sm">
              {scaleOfReference}
            </span>
          </p>
          <p className="">{subtext}</p>
        </div>
    )
}

const PharmacyStatistics = ({statData}: {statData: Array<StatsProps>}) => {
  return (
    <div>
      {
        statData.length > 0 ? statData.map((stat, index) => (
            <StatCard
              stat={stat.stat}
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
