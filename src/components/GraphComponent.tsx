// GraphComponent.jsx
import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory';

export default function GraphComponent({ data }) {
    return (
        <VictoryChart containerComponent={<VictoryVoronoiContainer />}>
            <VictoryAxis
                scale="time"
                tickFormat={(x) => new Date(x).toLocaleDateString('en-US', { month: 'short' })}
                label="Month"
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => `${x / 1000}k`}
                label="Amount Sold"
            />
            <VictoryLine
                data={data}
                x="date"
                y="amount"
                labels={({ datum }) => `${datum.amount} units`}
                labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                style={{
                    data: { stroke: '#8884d8', strokeWidth: 2 },
                }}
            />
        </VictoryChart>
    );
}
