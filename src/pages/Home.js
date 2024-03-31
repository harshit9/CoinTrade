import BitcoinHalvingCountdown from '../components/BitcoinHalvingCountdown'
import FearGreedIndex from '../components/FearGreedIndex'
import PaginationComponent from '../components/PaginationComponent'
import CryptoTable from '../components/CryptoTable'


const Home = () => {
  return (
    <div>
        <div className="flex flex-col">
            <div className = "flex flex-row">
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
