'use client';
import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

interface HorizontalChartProps {
    isDarkMode?: boolean; 
}

const HorizontalChart = ({ isDarkMode }: HorizontalChartProps) => {
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
            labels: ['May'], 
            datasets: [
                {
                    label: 'Personalized',
                    data: [50], 
                    backgroundColor: '#FF3D3D', 
                },
                {
                    label: 'instant',
                    data: [70], 
                    backgroundColor: '#97D1FA', 
                },
            ]
        };

        const config: ChartConfiguration<'bar', number[], string> = {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y',
                plugins: {
                    title: {
                        display: false,
                        text: 'Monthly Issuance' 
                    },
                    legend: {
                        display: false, 
                        position: 'bottom',
                        labels: {
                            boxWidth: 12, 
                            padding: 10, 
                            usePointStyle: true,
                            font: {
                                family: 'Inter, sans-serif',
                                size: 10, 
                            },
                            color: isDarkMode ? 'white' : 'black',
                        },
                    }   
                },
                scales: {
                    x: {
                        title: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                family: 'Inter, sans-serif',
                                size: 10,
                            },
                            color: isDarkMode ? 'white' : 'black', 
                            stepSize: 10, 
                        },
                    },
                    y: {
                        title: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                family: 'Inter, sans-serif',
                                size: 10,
                            },
                            color: isDarkMode ? 'white' : 'black',
                        },
                    }
                },
                responsive: true, 
                interaction: {
                    mode: 'index'
                }
            }
        };

        chartRef.current = new Chart(ctx, config);

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [isDarkMode]);

    return (
        <div>
            <canvas ref={canvasRef} width="380" height="200"></canvas>
        </div>
    );
};

export default HorizontalChart;