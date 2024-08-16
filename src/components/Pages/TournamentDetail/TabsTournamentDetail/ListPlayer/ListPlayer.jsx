import React from "react";
function ListPlayer(props) {
    const { historyUser} = props
    return ( 
        <div className="md:mt-16 pt-1">
            <table className="w-full md:min-w-full">
              <thead className="relative">
                <tr
                  style={{
                    background:
                      "linear-gradient(180deg, #4A40FF 0%, #070080 104.71%)",
                  }}
                >
                  <th className="relative border rounded-none border-[#4B4885] z-10py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    STT
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider w-1/4">
                    Người chơi
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    Trình độ
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    Lịch sử đấu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800">
                {
                  historyUser.map((items, index)=>{
                    return (
                      <tr key={index}>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          {index + 1}
                        </td>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          {items.user.name}
                        </td>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          Hạng {items.user.attributes.rank}
                        </td>
                        <td className=" border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          <div className="flex gap-2 md:gap-4 items-center justify-center">
                              {items.history.trim() ? (
                                items.history.split(' ').map((char, charIndex) => (
                                  <div
                                    key={charIndex}
                                    className={`sm:text-base text-xs text-white font-sora text-center ${char === 'W' ? 'bg-gradient-to-b from-[#254BFF] to-[#080580] px-2 py-1 rounded-full' : 'bg-gradient-to-b from-[#C00] to-[#92000B] px-3 py-1 rounded-full'}`}
                                  >
                                    {char}
                                  </div>
                                ))
                              ) : (
                                <div className="sm:text-base text-xs text-white font-sora text-center">
                                  Chưa thi đấu
                                </div>
                              )}
                            </div>
                        </td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </table>
        </div>
     );
}

export default ListPlayer;