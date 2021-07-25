import {Bar} from 'react-chartjs-2';
import { useState, useEffect } from 'react';

export const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [numberOfAlertsByAgent, setNumberOfAlertsByAgent] = useState([]);
    const [agents, setAgents] = useState([]);

    const Chart = () => {
        setChartData({
            labels: ['Agent_01', 'Agent_02', 'Agent_03', 'Agent_04', 'Agent_05', 'Agent_06'],
            datasets: [{
                label: 'Number of Alerts by Agent',
                data: [5,10,15,3,55,48],
                backgroundColor: [                    
                    'rgba(54, 162, 235, 0.2)'                    
                ],
                borderColor: [                    
                    'rgba(54, 162, 235, 1)'                   
                ],
                borderWidth: 1
            }]
        });
    }

    useEffect(() => {
        Chart();
    }, []);

    return (
            <div className="container" style={{width: '800px',height: '800px', marginTop: '3%'}}>               
                <div>
                    <Bar 
                        data={chartData} 
                        options={{
                            responsive: true,
                            title: {text: 'Dashboard', display: true},
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}
                    />
                </div>
        </div>
    )
}