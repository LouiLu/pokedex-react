import React from 'react';
import StatsCanvas from './StatsCanvas';

function PokemonStatus({ statsData }) {
  let statData = {};
  if (statsData !== undefined) {
    statData = statsData.map(stat => {
      let key = stat.stat.name;
      let value = stat.base_stat;

      return { key: key, value: value };
    });
  }

  return (
    <div>
      {/* {statContent} */}
      <StatsCanvas stat={statData} />
    </div>
  );
}

export default PokemonStatus;
