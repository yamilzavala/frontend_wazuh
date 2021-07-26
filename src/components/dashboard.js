import {Bar} from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Dashboard = () => {
    const [chartData, setChartData] = useState({});

    const Chart = () => {      
        const labelsAgents = [];
        const agentsData = [];
        const url = 'http://localhost:3000';

        axios.get(`${url}/alertsByAgent`)
        .then(res => {              
            for (const agent of res.data) {                
                labelsAgents.push('Agent_' + agent.label.toString());
                agentsData.push(parseInt(agent.numberOfAlerts));
            }
            
            setChartData({
                labels: labelsAgents,
                datasets: [{
                    label: 'Number of Alerts by Agent',
                    data: agentsData,
                    backgroundColor: [                    
                        'rgba(54, 162, 235, 0.2)'                    
                    ],
                    borderColor: [                    
                        'rgba(54, 162, 235, 1)'                   
                    ],
                    borderWidth: 1
                }]
            });
        })
        .catch(err => {
            console.log(err);
        })
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