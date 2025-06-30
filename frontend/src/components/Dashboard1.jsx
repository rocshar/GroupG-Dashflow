import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'

import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import MyChartBox2 from './charts/ChartBox2';
import MyLineChart from './charts/LineChart.jsx';
import PublicIcon from '@mui/icons-material/Public';
import StoreIcon from '@mui/icons-material/Store';
import MyDonutChart from './charts/DonutChart';
import PaymentIcon from '@mui/icons-material/Payment';
import MyStackedBarChart from "./charts/StackedBarChart.jsx";
import CategoryIcon from '@mui/icons-material/Category';

import MyTableBox from "./Tables/TableBox.jsx";

import PaidIcon from '@mui/icons-material/Paid';




const Dashboard1 = () => {

    const [myData, setMyData] = useState([])
    const [myTotalRegionData, setMyTotalRegionData] = useState([])
    const [myRegionData, setMyRegionData] = useState([])
    const [myPaymentMethodData, setMyPaymentMethodData] = useState([])
    const [MyProductRegionData, setMyProductRegionData] = useState([])

    console.log("My Data", MyProductRegionData)

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

        AxiosInstance.get(`productregiondata/`)
        .then((res) => {
            setMyProductRegionData(res.data)
        } )

    }

    useEffect(() => {
        GetData()
    }, [])

    const myseries =
        [
        { dataKey: 'quantityRegionNorthAmerica', label: 'North America', stack:"A" },
        { dataKey: 'quantityRegionEurope', label: 'Europe', stack:"A"},
        { dataKey: 'quantityRegionAsia', label: 'Asia', stack:"A"},
     ]
    const myregionseries = [
        {dataKey: 'quantityNorthAmerica', label: 'North America', showMark: true, stack: 'total'},
        {dataKey: 'quantityEurope', label: 'Europe',  showMark: true},
        {dataKey: 'quantityAsia', label: 'Asia',  showMark: true},
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
                icon1={<PublicIcon/>}
                title1={"Quantities per Month per Region"}
                chart1={
                    <MyLineChart
                        mydata={myRegionData}
                        myxaxis={"month_name"}
                        myseries={myregionseries}

                    />
                }
                icon2={<CategoryIcon/>}
                title2={"Quantities per Product Category & Region"}
                chart2={<MyStackedBarChart
                    dataset={MyProductRegionData}
                    XlabelName={'productcategory__name'}
                    series={myseries}
                />
                }

            />

            <MyTableBox
                icon1={<PaidIcon/>}
                title1={"Transactions"}
                table = {<MyTableBox/>}
            />


        </div>
    )

}

export default Dashboard1