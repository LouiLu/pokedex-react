import React from 'react';

const chartSize = 180;
const numberOfScales = 4;
const scale = value => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="#FAFAFA"
    stroke="#999"
    strokeWidth="0.2"
  />
);

const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance;
const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance;
const pathDefinition = points => {
  let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
  for (let i = 1; i < points.length; i++) {
    d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
  }
  return d + 'z';
};
const shape = columns => (chartData, i) => {
  const data = chartData;
  return (
    <path
      key={`shape-${i}`}
      d={pathDefinition(
        columns.map(col => {
          const value = data[col.key];
          return [
            polarToX(col.angle, (value * chartSize) / 2),
            polarToY(col.angle, (value * chartSize) / 2)
          ];
        })
      )}
      stroke={`#edc951`}
      fill={`#edc951`}
      fillOpacity=".5"
    />
  );
};

const StatsCanvas = ({ stat }) => {
  console.log(stat);
  const data = [
    { attack: 0.7, defense: 1, SAttack: 0.9, SDefense: 0.67, Speed: 0.8 }
  ];

  const groups = [];
  const scales = [];
  const middleOfChart = (chartSize / 2).toFixed(4);
  for (let i = numberOfScales; i > 0; i--) {
    scales.push(scale(i));
  }
  groups.push(<g key={`scales`}>{scales}</g>);

  const captions = Object.keys(data[0]);
  const columns = captions.map((key, i, all) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / all.length
    };
  });
  groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>);

  return (
    <div className="text-center">
      <svg
        version="1"
        xmlns="http://www.w3.org/2000/svg"
        width="180 "
        height="180"
        viewBox={`0 0 ${chartSize} ${chartSize}`}
      >
        <g transform={`translate(${middleOfChart},${middleOfChart})`}>
          {groups}
        </g>
      </svg>
    </div>
  );
};

export default StatsCanvas;
