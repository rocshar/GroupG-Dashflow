import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'


import MyChartBox2 from './charts/ChartBox2';
import MyLineChart from './charts/LineChart';
import PublicIcon from '@mui/icons-material/Public';

const Dashboard1 = () => {

    const [myData, setMyData] = useState([])
    const [myRegionData, setMyRegionData] = useState([])

    console.log("MyData", myRegionData)

    const GetData = () => {
        AxiosInstance.get(`sales/`)
        .then((res) => {

            setMyData(res.data)
        } )

        AxiosInstance.get(`regiondata/`)
        .then((res) => {
            setMyRegionData(res.data)
        } )


    }

    useEffect(() => {
        GetData()
    }, [])

    const myregionseries = 
        [
          { dataKey: 'quantityNorthAmerica', label: 'North America'}, 
          { dataKey: 'quantityEurope', label: 'Europe'}, 
          { dataKey: 'quantityAsia', label: 'Asia'}, 
        ]



    return(

        <div>
            
            <MyChartBox2
                 icon1 = {<PublicIcon/>}
                 title1 = {"Quantities per Month per Region"}
                 chart1={ <MyLineChart
                              mydata = {myRegionData} 
                              myxaxis = {"month_name"}
                              myseries = {myregionseries}
                             />}
            />

        </div>
    )

}

export default Dashboard1