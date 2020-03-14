import React, { useState } from "react"

import Stats from "./Stats"
import useStats from "../utils/useStats"

const CountrySelector = () => {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  )

  const [country, setCountry] = useState("USA")
  if (loading || !countries) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Something bad happened...</p>

  return (
    <div className="country">
      <label className="country__label" for="country">
        <input
          type="text"
          name="country"
          className="country__input"
          id="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          list="countries"
        />
      </label>
      <datalist id="countries">
        {Object.entries(countries.countries).map(([country, code]) => (
          <option key={code} value={countries.iso3[code]}>
            {country}
          </option>
        ))}
      </datalist>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${
          country ? country : "USA"
        }`}
      />
    </div>
  )
}
export default CountrySelector
