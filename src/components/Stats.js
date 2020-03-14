import React from "react"

import useStats from "../utils/useStats"

const Stats = ({ url }) => {
  const { stats, error } = useStats(url)
  if (error) return <p className="error">Something bad happened!</p>

  return (
    <div className="stats">
      <div className="stats__block">
        <h3 className="stats__block__data">
          Confirmed:
          {stats.confirmed ? <span>{stats.confirmed.value}</span> : null}
        </h3>
      </div>
      <div className="stats__block">
        <h3 className="stats__block__data">
          Deaths:
          {stats.deaths ? <span>{stats.deaths.value}</span> : null}
        </h3>
      </div>
      <div className="stats__block">
        <h3 className="stats__block__data">
          Recovered:
          {stats.recovered ? <span>{stats.recovered.value}</span> : null}
        </h3>
      </div>
    </div>
  )
}

export default Stats
