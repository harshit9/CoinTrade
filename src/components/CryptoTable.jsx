import axios from 'axios';
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en'

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const CryptoTable = () => {
  const [loading, setLoading] = useState(true);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        await setCryptoData(response.data);
        setLoading(false);
        console.log(cryptoData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, []);

  if(loading){
    return(
      <div className="mt-8 w-9/12">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    )
  }

  return (
    <table className='w-9/12 mb-20'>
      <thead>
        <tr className='font-semibold'>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">1h %</th>
          <th className="px-4 py-2">24h %</th>
          <th className="px-4 py-2">7d %</th>
          <th className="px-4 py-2">Market Cap</th>
          <th className="px-4 py-2">Volume(24h)</th>
          <th className="px-4 py-2">Circulating Supply</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData.map((coin) => (
          <tr key={coin.market_cap_rank} className='text-xs font-bold'>
            <td className="border px-4 py-2">{coin.market_cap_rank}</td>
            <td className="border px-4 py-4 flex items-center">
              <img src={coin.image} alt={coin.name} className='h-[30px] w-[30px] mr-2'/>
              <div><span className='font-bold'>{coin.name} </span>
              <span className='text-white/[0.85]'>({coin.symbol})</span></div>
            </td>
            <td className="border px-4 py-2">{currencyFormat(coin.current_price)}</td>
            <td className="border px-4 py-2">{parseFloat(coin.price_change_percentage_1h_in_currency.toFixed(2))}%</td>
            <td className="border px-4 py-2">{parseFloat(coin.price_change_percentage_24h_in_currency.toFixed(2))}%</td>
            <td className="border px-4 py-2">{parseFloat(coin.price_change_percentage_7d_in_currency.toFixed(2))}%</td>
            <td className="border px-4 py-2">{currencyFormat(coin.market_cap)}</td>
            <td className="border px-4 py-2">{currencyFormat(coin.total_volume)}</td>
            <td className="border px-4 py-2">{coin.circulating_supply}<br/>{coin.total_supply}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable