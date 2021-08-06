
import "./Chart.css"
import ChartBar from "./ChartBar"
export default function Chart(props) {
    const dataPointValue=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaxValue=Math.max(...dataPointValue);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return(
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label} />
                )
            })}
        </div>
    )
}
