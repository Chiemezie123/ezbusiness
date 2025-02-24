'use client'
import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Ticks } from 'chart.js';
import { color } from 'chart.js/helpers';
import { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const LineChart = () => {
    const chartRef = useRef<Chart | null>(null); 
    const canvasRef = useRef<HTMLCanvasElement | null>(null); 

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
            datasets: [
                {
                    data: [20, 40, 60, 80, 70, 90, 100], 
                    borderColor: '#BB26E4', 
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0, 
                    fill: false,
                },
            ],
        };

       
        const config: ChartConfiguration<'line', number[], string> = {
            type: 'line', 
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true, 
                        max: 100,
                        ticks: {
                            stepSize: 20, 
                            font: {
                                family: 'Inter, sans-serif', 
                                size: 10,
                                
                            },
                        },
                        grid: {
                            display: false,
                        },
                    },
                    x: {
                        grid: {
                            display: false, 
                        },
                        ticks:{
                            font: {
                                family: 'Inter, sans-serif', 
                                size: 10, 
                                
                            },
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false, 
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                responsive: true, 
                maintainAspectRatio: false, 
            },
        };

        
        chartRef.current = new Chart(ctx, config);

        
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '200px' }}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default LineChart;