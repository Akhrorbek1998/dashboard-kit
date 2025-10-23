// import site logo icon
import siteLogo from '../assets/images/logo.svg'

const Sidebar = () => {
  return (
    <div className='w-[255px] bg-[#363740] h-full min-h-screen text-white'>
      <div className={'flex items-center gap-3 mt-9 ml-8'}>
        <img src={siteLogo} alt='site logo' />
        <span className={`text-xl font-bold tracking-[0.4px] text-[#A4A6B3]`}>Dashboard Kit</span>
      </div>
    </div>
  )
}

export default Sidebar
