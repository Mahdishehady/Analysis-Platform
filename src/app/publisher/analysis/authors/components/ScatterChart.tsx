import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 10, y: 200, z: 200 },
  { x: 12, y: 100, z: 260 },
  { x: 17, y: 300, z: 400 },
  { x: 14, y: 250, z: 280 },
  { x: 15, y: 400, z: 500 },
  { x: 20, y: 280, z: 200 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit=".sep" />
          <YAxis type="number" dataKey="y" name="weight" unit="k" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}