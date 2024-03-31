import GaugeChart from 'react-gauge-chart'

const FearGreedIndex = () => {
  return (
      <div>
        <div className="pl-7 pt-3 pb-1 flex justify-around">
          <p className="text-lg font-semibold"><span className="text-blue-500">
          Fear</span> & <span className="text-red-600">Greed</span> Index:<br/>
          <span className='text-4xl'>80</span>
          <span className='text-base'>(Extreme Greed)</span>
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
