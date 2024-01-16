import React from 'react'
import Position from './Custom/Buttons/Position'
import ViewDetails from './Custom/Buttons/ViewDetails'
import Delete from './Custom/Buttons/Delete'
import Edit from './Custom/Buttons/Edit'
import BreadCrumbs from './UI/BreadCrumbs/BreadCrumbs'
import Toast from './UI/Toast/Toast';
import { ReactComponent as CroseWhite } from '../assets/Icons/CroseWhite.svg'
import Tooltip from './UI/Tooltip/Tooltip'
import NoDataFound from './Custom/ErrorHanding/NoDataFound'
import HeaderSection from './UI/HeaderSection/HeaderSection'
const HomePage = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className='relative top-20 font-bold text-4xl'>Buttons</h1>
        <Position />
        <ViewDetails />
        <Delete />
        <Edit />
        <h1 className=' font-bold text-4xl'>BreadCrumbs</h1>
        <BreadCrumbs />
        <h1 className=' font-bold text-4xl mt-5'>Tooltips</h1>
        <Tooltip label={'Type Structure Name'} />
        <Tooltip label={'Job Title'} />
        <h1 className=' font-bold text-4xl mt-5'>Toasts</h1>
        <Toast toastBgColor={'bg-red-400'} toastButtonBg={'bg-red-500'} croseIcon={<CroseWhite />} toastWidth={'72'} />
        <Toast toastBgColor={'bg-red-400'} toastButtonBg={'bg-red-500'} croseIcon={<CroseWhite />} toastWidth={'60'} toastButton={'hidden'} />
        <Toast toastBgColor={'bg-red-400'} toastButtonBg={'bg-red-500'} toastWidth={'64'} />
        <Toast toastBgColor={'bg-sky-600'} toastButtonBg={'bg-sky-700'} toastWidth={'72'} />
        <Toast toastBgColor={'bg-amber-500'} toastButtonBg={'bg-amber-600'} toastWidth={'72'} />
        <h1 className=' font-bold text-4xl mt-5'>Header Section</h1>
      </div>
      <HeaderSection />

      <h1 className='font-bold text-4xl mt-5 text-center'>No Data Found</h1>
      <div className='flex items-center justify-center'>
        <NoDataFound />
      </div>
      <h1 className='font-bold text-4xl mt-5 text-center'>Form Input</h1>

    </>

  )
}

export default HomePage
