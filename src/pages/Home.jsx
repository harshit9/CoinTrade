import BitcoinHalvingCountdown from '../components/BitcoinHalvingCountdown'
import FearGreedIndex from '../components/FearGreedIndex'
import PaginationComponent from '../components/PaginationComponent'
import CryptoTable from '../components/CryptoTable'


const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center">
            <div className = "grid grid-cols-2 w-9/12 gap-5 h-full mb-10">
                <div className='order-[0.75px] border-[0.69px] border-white/[0.85] rounded-xl shadow-lg shadow-blue-400/[0.25]'>
                  <BitcoinHalvingCountdown />
                </div>
                <div className='order-[0.75px] border-[0.69px] border-white/[0.85] rounded-xl shadow-lg shadow-blue-400/[0.25]'>
                 <FearGreedIndex />
                </div>
            </div>
            <CryptoTable />
            <PaginationComponent />
        </div>
    </div>
  )
}


export default Home
