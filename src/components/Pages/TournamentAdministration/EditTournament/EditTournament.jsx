import blueBtn from '../@assets/images/Verification/Blue-btn.svg'
import loginBG from '../@assets/images/Btn/bg-login.svg'
import bgTransparent from '../@assets/images/Btn/bg-transparent.svg'
import uploadFile from '../@assets/images/CreateTournament/upload-file.png'
import '../@assets/styles/MatchTable/MatchTable.scss'
import '../@assets/styles/Verification/Verification.scss'
import { Button } from '../../../common/Button'
import { Footer } from '../../../common/Footer'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom'
import path from '../../../../constants/path'
import tournamentApi from '../../../../api/tournamentApi'
import Alert from '../../../Alert/Alert'
import { mediaApi } from '../../../../api/mediaApi'
import { formatDateToYYYYMMDD } from '../../../../utils/utils'
import Loading from '../../../Loading/Loading'
const images = {
  blueBtn,
  bgTransparent,
  uploadFile,
  loginBG
}

export default function EditTournament () {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams(); // Lấy idTournament từ URL
    const idTournament = id        
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    address: '',
    start_at: '',
    end_at: '',
    game_style: '',
    bonus: '',
    fees: '',
    break_mode: '',
    player_format: 0,
    detail_play_format:'',
    life: 2,
  });
  useEffect(() => {
    const fetchTournamentDetails = async () => {
      try {
        const response = await tournamentApi.getTournamentById(idTournament);
        const tournamentData = response.data.metadata;        
        // Gán dữ liệu vào formData
        setFormData({
          name: tournamentData.name || '',
          image: tournamentData.image || '',
          address: tournamentData.address || '',
          start_at: formatDateToYYYYMMDD(tournamentData.start_at) || '',
          end_at: formatDateToYYYYMMDD(tournamentData.end_at) || '',
          game_style: tournamentData.game_style || '',
          bonus: tournamentData.bonus || '',
          fees: tournamentData.fees || '',
          break_mode: tournamentData.break_mode || '',
          player_format: tournamentData.player_format || 0,
          detail_play_format: tournamentData.detail_play_format || '',
          life: tournamentData.life || 2,
        });
      } catch (error) {
        console.error("Error fetching tournament details:", error);
      }
    };

    fetchTournamentDetails();
  }, [idTournament]);
  const [errors, setErrors] = useState({});
  const [alertInfo, setAlertInfo] = useState({
    type: '',
    title: '',
    message: '',
    show: false
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 300 * 1024; // 300KB

    if (file?.size > maxSize) {
      showAlert('error', 'Thông báo', 'Vui lòng chọn ảnh dưới 300KB!', true);
      console.log(alertInfo);
      
      event.target.value = null;
    } else {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };
  const handlePLayerFormatChange = (event) => {
    const value = Math.max(0, event.target.value);
    setFormData((prevState) => ({ ...prevState, player_format: value }));
  };
  const validateForm = () => {
    let valid = true;
    const validationErrors = {};
  
    // Validate image field
     if (selectedFile && selectedFile.size > 300 * 1024) { // 300KB
      validationErrors.image = 'Vui lòng chọn ảnh dưới 300KB!';
      valid = false;
    }
  
    const fieldsToValidate = [
      { key: 'name', message: 'Tên giải đấu không được để trống' },
      { key: 'address', message: 'Địa điểm không được để trống' },
      { key: 'start_at', message: 'Thời gian bắt đầu không được để trống' },
      { key: 'end_at', message: 'Thời gian kết thúc không được để trống' },
      { key: 'fees', message: 'Lệ phí tham gia không được để trống' },
      { key: 'bonus', message: 'Tổng giải thưởng không được để trống' },
      { key: 'game_style', message: 'Môn thi đấu không được để trống' },
      { key: 'break_mode', message: 'Thể thức phá không được để trống' },
      { key: 'detail_play_format', message: 'Chi tiết thể thức thi đấu không được để trống' },
      { key: 'life', message: 'Số mạng thi đấu không được để trống' },
    ];
  
    fieldsToValidate.forEach(field => {
      if (!formData[field.key]) {
        validationErrors[field.key] = field.message;
        valid = false;
      }
    });
  
    // const numericFieldsToValidate = [
    //   { key: 'player_format', message: 'Số người chơi phải lớn hơn 0' },
    // ];
  
    // numericFieldsToValidate.forEach(field => {
    //   if (formData[field.key] <= 0) {
    //     validationErrors[field.key] = field.message;
    //     valid = false;
    //   }
    // });
  
    setErrors(validationErrors);
    return valid;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Nếu cần xác thực form, hãy gọi validateForm()
    if (validateForm()) {
    try {
        setLoading(true);
      // Gửi hình ảnh và nhận URL hình ảnh từ phản hồi
      if(selectedFile){
          const responseImage = await mediaApi.createImageTournament(selectedFile);
          formData.image = responseImage.data.metadata[0].url;
      }
      // Tạo giải đấu mới với dữ liệu form và URL hình ảnh
      const responseTournament = await tournamentApi.editTournamemtByClubs(id,{
        image: formData.image,
        name: formData.name,
        address: formData.address,
        start_at: formData.start_at,
        end_at: formData.end_at,
        game_style: formData.game_style,
        bonus: formData.bonus,
        fees: formData.fees,
        break_mode: formData.break_mode,
        life: formData.life,
        player_format: formData.player_format,
        detail_play_format: formData.detail_play_format,
      });
      // Kiểm tra phản hồi và hiển thị thông báo thành công hoặc thất bại
      console.log(responseTournament);
      
      if (responseTournament.status === 200) {
        showAlert('success', '', 'Cập nhật giải thành công!',false);
        resetForm();
        setTimeout(() => {
            navigate('/manage-tournaments');
          }, 1500);
      } else {
        showAlert('error', 'Đã xảy ra lỗi', 'Sửa giải thất bại!',true);
      }
    } catch (error) {
      console.error('Lỗi khi sửa giải:', error);
      showAlert('error', 'Đã xảy ra lỗi', 'Sửa giải thất bại!',true);
    }
    finally {
        setLoading(false); // Kết thúc loading
      }
    }
  };
  

  const resetForm = () => {
    setFormData({
      name: '',
      type_number_players: 16,
      address: '',
      start_at: '',
      end_at: '',
      game_style: '',
      bonus: '',
      fees: '',
      break_mode: '',
      stage: 6,
      knockout: 6,
      quater: 7,
      semi: 8,
      final: 9,
      number_table: 0,
      player_format: 0,
      detail_play_format:'',
      life: 2,
      player_model: "PLAYER_DEMO"
    });
    setSelectedFile(null);
  };

  const showAlert = (type, title, message, confirm) => {
    setAlertInfo({
      type,
      title,
      message,
      confirm,
      show: true
    });
  };

  const handleCloseAlert = () => {
    setAlertInfo((prevState) => ({ ...prevState, show: false }));
  };
  if (loading) return <Loading />;
  return (
    <div>
      <div className='bg-[#050518]'>
        <div className='grid grid-cols-3 gap-4 p-5'>
        <Link to={path.manageTournaments} className="text-white">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        </div>
        <div className='mt-10 pb-10'>
          <Button className={'flex button-container btn_Verification'} name={'Sửa giải đấu'} image={images.blueBtn} />
          <div className='bg-[#020041] text-white p-5 md:p-16 w-full max-w-[68rem] mx-auto pb-5 pt-[5.25rem] rounded-lg shadow-lg'>
            <form className='flex flex-col gap-6'>
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='name-tournament' className='md:text-sm font-medium col-span-1 text-xs'>
                  Tên giải đấu
                </label>
                <input
                  type='text'
                  id='name'
                  autoFocus = {true}
                  onChange={handleInputChange}
                  value={formData.name}
                  className={`${errors.name ? 'border-red-500' : ''} col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 border-[#4B4885] focus:border-blue-500 focus:ring-blue-500 `}
                />
                {errors.name && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.name}</p>}
              </div>
             

              {/* Start Time */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='start_at' className='md:text-sm font-medium col-span-1 text-xs'>
                  Thời gian bắt đầu
                </label>
                <input
                  type='date'
                  id='start_at'
                  onChange={handleInputChange}
                  value={formData.start_at}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.start_at ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.start_at && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.start_at}</p>}
              </div>

              {/* End Time */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='end_at' className='md:text-sm font-medium col-span-1 text-xs'>
                  Thời gian kết thúc
                </label>
                <input
                  type='date'
                  id='end_at'
                  onChange={handleInputChange}
                  value={formData.end_at}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.end_at ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.end_at && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.end_at}</p>}
              </div>

              {/* address */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='address' className='md:text-sm font-medium col-span-1 text-xs'>
                  Địa điểm
                </label>
                <input
                  type='text'
                  id='address'
                  onChange={handleInputChange}
                  value={formData.address}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.address ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.address && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.address}</p>}
              </div>

              {/* Participation Fee */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='fees' className='md:text-sm font-medium col-span-1 text-xs'>
                  Lệ phí tham gia
                </label>
                <input
                  type='text'
                  id='fees'
                  onChange={handleInputChange}
                  value={formData.fees}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.fees ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.fees && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.fees}</p>}
              </div>

              {/* Total Prize */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='bonus' className='md:text-sm font-medium col-span-1 text-xs'>
                  Tổng giải thưởng
                </label>
                <input
                  type='text'
                  id='bonus'
                  onChange={handleInputChange}
                  value={formData.bonus}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.bonus ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.bonus && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.bonus}</p>}
              </div>
              {/* game_style */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='game_style' className='md:text-sm font-medium col-span-1 text-xs'>
                  Môn thi đấu
                </label>
                <input
                  type='text'
                  id='game_style'
                  onChange={handleInputChange}
                  value={formData.game_style}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.game_style ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.game_style && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.game_style}</p>}
              </div>
              
              {/* Break Mode */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='break_mode' className='md:text-sm font-medium col-span-1 text-xs'>
                  Thể thức phá
                </label>
                <input
                  type='text'
                  id='break_mode'
                  onChange={handleInputChange}
                  value={formData.break_mode}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.break_mode ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.break_mode && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.break_mode}</p>}
              </div>

              {/* Player Format */}
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='player_format' className='md:text-sm font-medium col-span-1 text-xs'>
                  Số người một đội
                </label>
                <select
                  id='type_number_players'
                  onChange={handlePLayerFormatChange}
                  value={formData.player_format}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 focus:border-blue-500 focus:ring-blue-500`}
                >
                  <option className='bg-black text-xs sm:text-base' value="0">Đánh đơn</option>
                  <option className='bg-black text-xs sm:text-base' value="1">Đánh đôi</option>
                </select>
              </div>
              <div className='grid grid-cols-3 items-center'>
                <label htmlFor='detail_play_format' className='md:text-sm font-medium col-span-1 text-xs'>
                  Chi tiết thể thức thi đấu
                </label>
                <input
                  type='text'
                  id='detail_play_format'
                  onChange={handleInputChange}
                  value={formData.detail_play_format}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.detail_play_format ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.detail_play_format && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.detail_play_format}</p>}
              </div>
              <div className='grid grid-cols-3 items-center'>
                <label  className='md:text-sm font-medium col-span-1 text-xs'>
                 Số mạng thi đấu
                </label>
                <input
                  type='number'
                  id='life'
                  value={formData.life}
                  onChange={handleInputChange}
                  className={`col-span-2 p-2 bg-transparent text-xs sm:text-base text-white rounded-md border-2 ${errors.life ? 'border-red-500' : 'border-[#4B4885]'} focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.life && <p className='text-red-500 text-xs col-start-2 col-span-12 mt-3'>{errors.life}</p>}
              </div>
              <div className='grid grid-cols-1 items-center'>
                <label htmlFor='tournamentSize' className='md:text-sm font-medium col-span-1 text-xs'>
                  Tải lên ảnh giải đấu
                </label>
                <div className={`flex justify-center items-center mt-4 mb-4 border-2 border-dashed bg-[#050518] rounded-lg ${errors.image ? 'border-red-500' : 'border-[#4B4885]'} `}>
                  <input type='file' id='tournament-image' className='hidden w-full' onChange={handleFileChange} accept='.jpg,.png,.svg' />
                  <label htmlFor='tournament-image' className='cursor-pointer p-10 flex flex-col items-center w-full'>
                    <img
                      src={selectedFile ? URL.createObjectURL(selectedFile) : formData.image? formData.image: uploadFile}
                      alt='Upload Icon'
                      className={selectedFile ? `mb-3 w-full h-auto` : `mb-3`}
                    />
                    <span>
                      Kéo ảnh vào đây hoặc <span className='text-blue-500'>tải tệp lên</span>
                    </span>
                    <span className='text-xs'>Tải ảnh với kích thước tệp tối đa là 300KB.</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className='flex justify-center gap-4 pt-5 md:pt-10 md:py-20'>
            <Link to={path.manageTournaments}>
            <button className='-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-xs font-sora font-bold sm:text-base md:text-lg' >Hủy</button> 
            </Link>
            <button className='-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-xs font-sora font-bold sm:text-base md:text-lg' onClick={handleSubmit}>Tiếp tục</button> 
          </div>
        </div>
      </div>
      <Alert
        show={alertInfo.show}
        title={alertInfo.title}
        text={alertInfo.message}
        type={alertInfo.type}
        onConfirm={handleCloseAlert}
        showButtonConfirm={alertInfo.confirm}
        showCancelButton={false}
      />
      <Footer />
    </div>
  )
}
