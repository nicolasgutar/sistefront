import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory';

export default function GraphComponent({ data1, data2 }) {
    return (
        <VictoryChart containerComponent={<VictoryVoronoiContainer />}>
            <VictoryAxis
                scale="time"
                tickFormat={(x) => new Date(x).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
                label="Month"
                tickCount={6}  // Adjust to limit x-axis ticks
                style={{
                    tickLabels: { angle: -45, fontSize: 8, padding: 15 }
                }}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => `${x}`}  // Display full numbers without "k"
                label="Amount Sold"
                style={{
                    axisLabel: { padding: 30 },
                    tickLabels: { fontSize: 8, padding: 5 }
                }}
            />
            {/* Line for data1 */}
            <VictoryLine
                data={data1}
                x="date"
                y="amount"
                labels={({ datum }) => `${datum.amount} units`}
                labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                style={{
                    data: { stroke: '#8884d8', strokeWidth: 2 },  // First line color
                }}
            />
            {/* Line for data2 */}
            <VictoryLine
                data={data2}
                x="date"
                y="amount"
                labels={({ datum }) => `${datum.amount} units`}
                labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                style={{
                    data: { stroke: '#82ca9d', strokeWidth: 2 },  // Second line color
                }}
            />
        </VictoryChart>
    );
}
