import { ArrowDown2 } from 'iconsax-react'
import React from 'react'
import Chart from "react-apexcharts";

const state = {
    options: {
        chart: {
            id: "basic-bar"
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
};

const TicketAreaChart = () => {
    return (
        <div className='border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-7'>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl">Ticket Sales Chart</h1>
                <div className="flex items-center gap-1">
                    <p className="text-grayColor">june 2022</p>
                    <ArrowDown2 size={20} />
                </div>
            </div>
            <div>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    width="500"
                />
            </div>
        </div>
    )
}

export default TicketAreaChart