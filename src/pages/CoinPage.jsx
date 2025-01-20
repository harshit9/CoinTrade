import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import TradingViewWidget from "../components/TradingViewWidget"

const CoinPage = () => {

  const { id } = useParams();
  const { symbol } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true`;

  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setCoinData(response.data);
        setLoading(false);
        console.log(coinData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, []);


  if (loading) {
    return <div className=" text-center">Loading...</div>;
  }


  return (
    <div className=' mt-6 mx-auto flex-col w-[80%] items-center'>
      <div className='flex gap-2 items-center'>
        <img src={coinData.image.small} alt={coinData.name} />
        <h1 className='text-2xl my-2 capitalize font-bold'>{coinData.name}</h1>
      </div>
      <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: coinData.description.en }}></p>

      <div className=" flex h-80 py-4"><TradingViewWidget symbol={symbol} /></div>
      
    </div>
  )
};

export default CoinPage
