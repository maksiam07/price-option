import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const mathMarksData = [

        {"name": "Alice", "math_mark": 85},
        {"name": "Bob", "math_mark": 78},
        {"name": "Charlie", "math_mark": 92},
        {"name": "David", "math_mark": 65},
        {"name": "Emma", "math_mark": 80},
        {"name": "Frank", "math_mark": 88},
        {"name": "Grace", "math_mark": 70},
        {"name": "Hannah", "math_mark": 95},
        {"name": "Isaac", "math_mark": 82},
        {"name": "Jasmine", "math_mark": 75}
    ]

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey="math_mark" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;