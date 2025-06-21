import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'

import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import MyChartBox2 from './charts/ChartBox2';
import MyLineChart from './charts/LineChart';
import PublicIcon from '@mui/icons-material/Public';
import StoreIcon from '@mui/icons-material/Store';
import MyDonutChart from './charts/DonutChart';
import PaymentIcon from '@mui/icons-material/Payment';


const Dashboard1 = () => {

    const [myData, setMyData] = useState([])
    const [myTotalRegionData, setMyTotalRegionData] = useState([])
    const [myRegionData, setMyRegionData] = useState([])
    const [myPaymentMethodData, setMyPaymentMethodData] = useState([])

    console.log("My Data", myPaymentMethodData)

    const GetData = () => {
        AxiosInstance.get(`sales/`)
        .then((res) => {

            setMyData(res.data)
        } )

        AxiosInstance.get(`regiondata/`)
        .then((res) => {
            setMyRegionData(res.data)
        } )

        AxiosInstance.get(`totalregiondata/`)
        .then((res) => {
            setMyTotalRegionData(res.data)
        } )

        AxiosInstance.get(`paymentmethoddata/`)
        .then((res) => {
            setMyPaymentMethodData(res.data)
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
            <MyChartBox
                icon1 = {<StoreIcon/>}
                title1 = {"Quantities per Region"}
                chart1 = { <MyPieChart
                               myData={myTotalRegionData}
                              />}
                icon2 = {<PaymentIcon/>}
                title2 = {"Quantities per Payment Method"}
                chart2 = { <MyDonutChart
                    data = {myPaymentMethodData}
                    centerlabel={myPaymentMethodData.reduce((sum, data) => sum + data.value, 0)}
                              />}
            />
            
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