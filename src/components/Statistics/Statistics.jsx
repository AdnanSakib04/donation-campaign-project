import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Statistics = () => {
    const donationData = useLoaderData();
    const [donations, setDonations] = useState([]);
    let x = 0;
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donations"));
        setDonations(donatedItems);
        
        if(donatedItems){
            x = donations.length;
        }


    }, []);

    const data = [
        { name: 'Group A', value: donationData.length },
        { name: 'Group B', value: x },

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    return (
        <div className='mt-20'>
            <ResponsiveContainer width="100%" height="100%"><div className='max-w-[1320px] mx-auto border border-red-500 flex justify-center'>
                <div className=''>
                    <PieChart width={360} height={360}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={180}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div></ResponsiveContainer>
        </div>

    );
};

export default Statistics;