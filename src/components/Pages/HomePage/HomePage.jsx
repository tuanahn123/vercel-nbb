import Navbar from '../../common/Navbar'
import background from '../../../assets/images/HomePage/background.png'
import Introduce from './Introduce'
import Content from './Content'
import Service from './Service'
import { UpcomingMatch } from './UpcomingMatch'
import { Shop } from './Shop'
import Achievement from '../../Achievement/Achievement'
import { Footer } from '../../common/Footer'
import BusinessPartners from '../../BusinessPartners/BusinessPartners'

export default function Home(){
  return (
    <div className='bg-[#050518]'>
      <Navbar/>
      <div className='mb-[6.25rem] pb-5'>
        <img src={background} className='w-full h-full' alt='' />
      </div>
      <Introduce/>
      <Content/>
      <Service />
      <UpcomingMatch />
      <Shop />
      <Achievement />
      <BusinessPartners />
      <Footer />
    </div>
  )
}
