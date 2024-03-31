import BitcoinHalvingCountdown from '../components/BitcoinHalvingCountdown'
import FearGreedIndex from '../components/FearGreedIndex'
import PaginationComponent from '../components/PaginationComponent'
import CryptoTable from '../components/CryptoTable'


const Home = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className="">
            <div className = "">
                <BitcoinHalvingCountdown />
                <FearGreedIndex />
            </div>
            <CryptoTable />
            <PaginationComponent />
        </div>
    </div>
  )
}

export default Home
