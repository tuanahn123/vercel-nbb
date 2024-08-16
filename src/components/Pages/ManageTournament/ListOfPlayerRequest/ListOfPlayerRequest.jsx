import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
function ListOfPlayerRequest() {
    return ( 
        <div className='grid grid-cols-12'>
            <table className='mb-2 text-sm col-span-12'>
                <thead>
                    <tr className="border-b">
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">STT</th>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Tên</th>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Rank</th>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Hành động</th>

                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="border-b">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Đặng Tuấn Anh</td>
                        <td className="px-6 py-4">Hạng F</td>
                        <td className="px-6 py-4 flex space-x-4">
                            <button className="text-green-500 hover:text-green-700 text-xl" title="Chấp nhận">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </button>
                            <button className="text-red-500 hover:text-red-700 text-xl" title="Từ chối">
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </button>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
     );
}

export default ListOfPlayerRequest;