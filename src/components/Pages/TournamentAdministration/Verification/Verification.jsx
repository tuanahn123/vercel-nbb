
// import blueBtn from '../../../../assets/images/Verification/Blue-btn.svg'
// import '../../../../assets/styles/MatchTable/MatchTable.scss'
// import '../../../../assets/styles/Verification/Verification.scss'
// import { Button } from '../../../common/Button'
// import { Footer } from '../../../common/Footer'
// import Navbar from '../../../common/Navbar'

// const images = {
//   blueBtn
// }

// export default function Verification  () {
//   return (
//     <div>
//       <Navbar />
//       <div className='bg-[#050518]'>
//         <div className='grid grid-cols-3 gap-4 mt-2 mb-2'>
//           <div></div>
//           <div className='flex justify-evenly'>
//             <div className='webkit-center'>
//               <div className='rounded-full bg-[#4E4E5B] w-16 h-16 flex justify-center items-center text-white'>1</div>
//               <span className='text'>Tạo giải</span>
//             </div>
//             <div className='webkit-center'>
//               <div className='rounded-full bg-gradient w-16 h-16 flex justify-center items-center text-white'>2</div>
//               <span className='text'>Bàn đấu</span>
//             </div>
//             <div className='webkit-center'>
//               <div className='rounded-full bg-[#4E4E5B] w-16 h-16 flex justify-center items-center text-white'>3</div>
//               <span className='text'>Kiểm tra</span>
//             </div>
//           </div>
//         </div>
//         <div className='mt-28 pb-10'>
//           <Button className={'flex button-container btn_Verification'} name={'Cài đặt'} image={images.blueBtn} />
//           <div className='bg-blue-900 text-white p-16 w-full max-w-[68rem] mx-auto py-5 rounded-lg shadow-lg'>
//             <form className='flex flex-col gap-6'>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='name' className='text-sm font-medium col-span-1'>
//                   Tên giải đấu
//                 </label>
//                 <input
//                   type='text'
//                   id='name'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='describe' className='text-sm font-medium col-span-1'>
//                   Mô tả
//                 </label>
//                 <textarea
//                   id='describe'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='startTime' className='text-sm font-medium col-span-1'>
//                   Thời gian bắt đầu
//                 </label>
//                 <input
//                   type='date'
//                   id='startTime'
//                   className='col-span-1 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='EndTime' className='text-sm font-medium col-span-1'>
//                   Thời gian kết thúc
//                 </label>
//                 <input
//                   type='date'
//                   id='EndTime'
//                   className='col-span-1 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='location' className='text-sm font-medium col-span-1'>
//                   Địa điểm
//                 </label>
//                 <input
//                   type='text'
//                   id='location'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='participationFee' className='text-sm font-medium col-span-1'>
//                   Lệ phí tham gia
//                 </label>
//                 <input
//                   type='text'
//                   id='participationFee'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Tổng giải thưởng
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Môn thi đấu
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Thể thức phá
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Thể thức người chơi
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Người thắng khi tới vòng
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3 items-center'>
//                 <label htmlFor='totalPrize' className='text-sm font-medium col-span-1'>
//                   Số bàn
//                 </label>
//                 <input
//                   type='text'
//                   id='totalPrize'
//                   className='col-span-2 p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                 />
//               </div>
//               <div className='grid grid-cols-3'>
//                 <label htmlFor='clubName' className='text-sm font-medium mb-2'>
//                   Quản lý giải đấu
//                 </label>
//                 <div>
//                   <div className='flex flex-col'>
//                     <label htmlFor='teamName' className='text-sm font-medium mb-2'>
//                       Tên CLB
//                     </label>
//                     <input
//                       type='text'
//                       id='teamName'
//                       className='p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                     />
//                   </div>
//                   <div className='flex flex-col'>
//                     <label htmlFor='email' className='text-sm font-medium mb-2'>
//                       Email CLB
//                     </label>
//                     <input
//                       type='email'
//                       id='email'
//                       className='p-2 bg-blue-800 text-white rounded-md border-2 border-blue-700 focus:border-blue-500 focus:ring-blue-500'
//                     />
//                   </div>
//                 </div>
//               </div>

//               <fieldset className='grid grid-cols-3 items-center mt-4 gap-4'>
//                 <legend className='text-sm font-medium col-span-1'>Quyền truy cập</legend>
//                 <div className='flex items-center col-span-2'>
//                   <label htmlFor='accessAll' className='flex items-center mr-2'>
//                     <input
//                       type='radio'
//                       id='accessAll'
//                       name='access'
//                       className='text-blue-600 bg-blue-800 border-gray-300'
//                     />
//                     <span className='ml-1 text-sm'>Mọi người</span>
//                   </label>
//                   <label htmlFor='accessCustom' className='flex items-center mr-2'>
//                     <input
//                       type='radio'
//                       id='accessCustom'
//                       name='access'
//                       className='text-blue-600 bg-blue-800 border-gray-300'
//                     />
//                     <span className='ml-1 text-sm'>Chỉ những người được thêm</span>
//                   </label>
//                   <label htmlFor='accessMe' className='flex items-center'>
//                     <input
//                       type='radio'
//                       id='accessMe'
//                       name='access'
//                       className='text-blue-600 bg-blue-800 border-gray-300'
//                     />
//                     <span className='ml-1 text-sm'>Chỉ mình tôi</span>
//                   </label>
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }
