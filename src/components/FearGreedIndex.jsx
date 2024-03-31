import { useState , useEffect } from 'react';
import GaugeChart from 'react-gauge-chart'
import axios from 'axios';

const FearGreedIndex = () => {

  const url = 'https://api.alternative.me/fng/'
  const [fng, setfng] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setfng(response.data);
        console.log(fng);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };
    fetchData();
  }, []);


  return (
      <div>
        <div className="pl-7 pt-3 pb-1 flex justify-around">
          <p className="text-lg font-semibold"><span className="text-blue-500">
          Fear</span> & <span className="text-red-600">Greed</span> Index:<br/>
          <span className='text-4xl'>{fng.data[0].value} </span>
          <span className='text-base font-light text-white/[0.90]'>({fng.data[0].value_classification}) </span>
          
          </p>
          <GaugeChart className= "max-h-[100px] max-w-[200px]" id="gauge-chart"
            nrOfLevels={100}
            arcWidth={0.15}
            arcsLength={[0.25, 0.25, 0.25, 0.25]}
            colors={['#D22B2B', '#ff8c1a', '#0096FF','#0047AB']}
            percent={0.37}
            arcPadding={0}
            formatTextValue={(string) => string}
            hideText={true}
            needleColor="#00FFFF"
            needleBaseColor="#0FFFFF"
            marginInPercent={0.07}
          />
        </div>
      </div>
  )
}

export default FearGreedIndex
