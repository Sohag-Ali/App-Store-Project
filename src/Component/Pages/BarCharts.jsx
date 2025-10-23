import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

const BarCharts = ({ ratings }) => {
    return (
        <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart layout="vertical" data={ratings} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>

                    <YAxis type="category" dataKey="name" width={60} tick={{ fontSize: 12 }}></YAxis>

                    <XAxis type="number" tick={{ fontSize: 12 }}></XAxis>

                    <Tooltip contentStyle={{ fontSize: 12 }} cursor={{ fill: 'rgba(63, 81, 255, 0.1)' }}></Tooltip>

                    <Legend wrapperStyle={{ fontSize: 12 }}></Legend>
                    <Bar dataKey="count" fill="orange" barSize={30} radius={[0, 8, 8, 0]}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;