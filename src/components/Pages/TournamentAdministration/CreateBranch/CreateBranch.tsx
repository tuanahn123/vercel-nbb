import React, { useState, useEffect, useRef } from 'react'
import { Bracket, IRoundProps, ISeedProps, Seed, SeedItem, SeedTeam } from 'react-brackets'
import http from '../../../../utils/http'
import config from '../../../../constants/config'
import Modal from 'react-modal'
import screenfull from 'screenfull'
import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'
import './ModalStyles.css'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { GoDownload } from 'react-icons/go'
import { CiImageOn } from 'react-icons/ci'
import { RiZoomInLine, RiZoomOutLine } from 'react-icons/ri'
import { TbZoomReset } from 'react-icons/tb'
import { CircularProgress } from '@mui/material' // Thêm thư viện Material UI
import Alert from '../../../Alert/Alert'

Modal.setAppElement('#root')

const FILTER_MODES = {
  DRAW_ROUND: 'DRAW_ROUND',
  WINNER_ROUND: 'WINNER_ROUND',
  LOSER_ROUND: 'LOSER_ROUND',
  TOP_16: 'TOP_16',
  TOP_8: 'TOP_8',
  SHOW_ALL: 'SHOW_ALL'
}

const customStyles = {
  content: {
    position: 'relative',
    width: '500px',
    background: 'linear-gradient(135deg, #1e1e2d, #27293d)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    border: 'none',
    color: '#fff',
    overflow: 'hidden'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const MatchComponent = ({ seed, onClick }) => {
  const tableNumber = seed.table?.name || 'Bàn ___'
  const matchNumber = seed.matchNumber || seed.id

  return (
    <Seed>
      <SeedItem>
        <div
          onClick={onClick}
          className='font-sora'
          style={{
            position: 'relative',
            cursor: 'pointer',
            border: '2px solid #444',
            padding: '5px',
            borderRadius: '10px',
            width: '300px',
            backgroundColor: '#2b2c3a',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            fontSize: '12px'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#444',
              color: '#fff',
              borderRadius: '8px',
              padding: '2px 8px',
              fontSize: '10px',
              fontWeight: 'bold',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px'
            }}
          >
            {tableNumber}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '-10px',
              backgroundColor: '#444',
              color: '#fff',
              borderRadius: '50px',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {matchNumber}
          </div>
          <SeedTeam style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#fff' }}>
            <span style={{ textAlign: 'left' }}>{seed.teams[0]?.name || '--------------'}</span>
            <span style={{ backgroundColor: '#4B4885', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>
              {seed.teams[0]?.attributes?.point ?? '0'}
            </span>
          </SeedTeam>
          <SeedTeam style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#fff' }}>
            <span style={{ textAlign: 'left' }}>{seed.teams[1]?.name || '--------------'}</span>
            <span style={{ backgroundColor: '#4B4885', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>
              {seed.teams[1]?.attributes?.point ?? '0'}
            </span>
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  )
}

const combineRounds = (
  roundsA: IRoundProps[],
  roundsB: IRoundProps[],
  roundsC: IRoundProps[],
  roundsD: IRoundProps[]
): IRoundProps[] => {
  const combinedRounds: IRoundProps[] = []

  for (let i = 0; i < roundsA.length; i++) {
    let roundTitle = `Round ${i + 1}`

    if (i === 1) {
      roundTitle = 'Vòng bảng (Nhánh thắng)'
    } else if (i === 2) {
      roundTitle = 'Knockout'
    }

    combinedRounds.push({
      title: roundTitle,
      seeds: [...roundsA[i].seeds, ...roundsB[i].seeds, ...roundsC[i].seeds, ...roundsD[i].seeds]
    })
  }

  return combinedRounds
}

const ControlPanel = ({
  onZoomIn,
  onZoomOut,
  onResetZoom,
  zoomLevel,
  onTogglePan,
  onToggleScroll,
  isPanEnabled,
  handleFullScreen,
  handleDownloadPDF,
  handleDownloadPNG
}) => (
  <div
    className='control-panel flex flex-col items-center'
    style={{
      position: 'fixed',
      bottom: '20%',
      right: '20px',
      zIndex: 1000,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.9)'
    }}
  >
    <button
      title='Fullscreen'
      onClick={handleFullScreen}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <AiOutlineFullscreen />
    </button>
    <button
      title='Download Bracket PDF'
      onClick={handleDownloadPDF}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <GoDownload />
    </button>
    <button
      title='Download Bracket PNG'
      onClick={handleDownloadPNG}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <CiImageOn />
    </button>
    <button
      title='Zoom In'
      onClick={onZoomIn}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <RiZoomInLine />
    </button>
    <button
      title='Zoom Out'
      onClick={onZoomOut}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <RiZoomOutLine />
    </button>
    <button
      title='Reset Zoom'
      onClick={onResetZoom}
      style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '20px',
        background: '#1890ff',
        boxShadow: '0 2px 0 rgba(0, 0, 0, .045)',
        borderColor: '#1890ff',
        padding: '5px',
        borderRadius: '5px'
      }}
    >
      <TbZoomReset />
    </button>

    <div style={{ fontSize: '10px' }}>{zoomLevel}%</div>
  </div>
)

const CreateBranch = ({ idTournament }) => {
  const [rounds, setRounds] = useState<IRoundProps[]>([])
  const [playoffRounds, setPlayoffRounds] = useState<IRoundProps[]>([])
  const [filteredRounds, setFilteredRounds] = useState<IRoundProps[]>([])
  const [filteredPlayoffRounds, setFilteredPlayoffRounds] = useState<IRoundProps[]>([])
  const [filterMode, setFilterMode] = useState(FILTER_MODES.SHOW_ALL)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [selectedMatchId, setSelectedMatchId] = useState('')
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const [tables, setTables] = useState<{ _id: string; name: string }[]>([])
  const [selectedTableId, setSelectedTableId] = useState('')
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isPanEnabled, setIsPanEnabled] = useState(true)
  const [isScrollEnabled, setIsScrollEnabled] = useState(true)
  const [currentTable, setCurrentTable] = useState('')
  const [raceToWin, setRaceToWin] = useState(6)
  const [showAlert, setShowAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Trạng thái loading mới
  const bracketContainerRef = useRef<HTMLDivElement>(null)

  const profile = localStorage.getItem('profile')
  const type = profile ? JSON.parse(profile).type : null

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startY = useRef(0)
  const scrollLeft = useRef(0)
  const scrollTop = useRef(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bracketContainerRef.current) {
      isDragging.current = true
      startX.current = e.clientX - bracketContainerRef.current.offsetLeft
      startY.current = e.clientY - bracketContainerRef.current.offsetTop
      scrollLeft.current = bracketContainerRef.current.scrollLeft
      scrollTop.current = bracketContainerRef.current.scrollTop
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !bracketContainerRef.current) return
    e.preventDefault()
    const x = e.clientX - bracketContainerRef.current.offsetLeft
    const y = e.clientY - bracketContainerRef.current.offsetTop
    const walkX = (x - startX.current) * 1
    const walkY = (y - startY.current) * 1
    bracketContainerRef.current.scrollLeft = scrollLeft.current - walkX
    bracketContainerRef.current.scrollTop = scrollTop.current - walkY
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (bracketContainerRef.current) {
      isDragging.current = true
      const touch = e.touches[0]
      startX.current = touch.clientX - bracketContainerRef.current.offsetLeft
      startY.current = touch.clientY - bracketContainerRef.current.offsetTop
      scrollLeft.current = bracketContainerRef.current.scrollLeft
      scrollTop.current = bracketContainerRef.current.scrollTop
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !bracketContainerRef.current) return
    const touch = e.touches[0]
    const x = touch.clientX - bracketContainerRef.current.offsetLeft
    const y = touch.clientY - bracketContainerRef.current.offsetTop
    const walkX = (x - startX.current) * 1
    const walkY = (y - startY.current) * 1
    bracketContainerRef.current.scrollLeft = scrollLeft.current - walkX
    bracketContainerRef.current.scrollTop = scrollTop.current - walkY
  }

  const createRounds = (matchesSubset: ISeedProps[], roundTitle: string): IRoundProps => {
    const seeds = matchesSubset.map((item) => ({
      id: item._id,
      tableName: item.table?.name || 'Bàn ___',
      matchNumber: item.id_match,
      date: new Date(item.createdAt).toDateString(),
      teams: [
        {
          name: `${item.player_1.name || '--------------'}`,
          attributes: { point: item.player_1.point }
        },
        {
          name: `${item.player_2.name || '--------------'}`,
          attributes: { point: item.player_2.point }
        }
      ],
      winner: item.winner?.name ? { name: item.winner.name } : { name: '--------------' },
      table: item.table?.name ? item.table : undefined
    }))

    return {
      title: roundTitle,
      seeds: seeds
    }
  }

  const fetchData = async () => {
    try {
      const matchesResponse = await http.get(
        `${config.baseUrl}match/by-tournament/${idTournament}?modelType=Players_Demo`
      )

      const matches = matchesResponse.data.metadata

      const initialMatches = matches.slice(0, 64)
      const round2Matches = matches.slice(64, 96)
      const round3Matches = matches.filter((match) => match.id_match >= 161 && match.id_match <= 192)

      const round4Matches = matches.filter((match) => match.id_match >= 193 && match.id_match <= 208)
      const round5Matches = matches.filter((match) => match.id_match >= 209 && match.id_match <= 216)
      const round6Matches = matches.filter((match) => match.id_match >= 217 && match.id_match <= 220)
      const round7Matches = matches.filter((match) => match.id_match >= 221 && match.id_match <= 222)
      const round8Matches = matches.filter((match) => match.id_match === 223)

      const playoff1Matches = matches.filter((match) => match.id_match >= 97 && match.id_match <= 128)
      const playoff2Matches = matches.filter((match) => match.id_match >= 129 && match.id_match <= 160)

      const roundsPlayoff1 = createRounds(playoff1Matches, 'Vòng bảng (Nhánh thua)')
      const roundsPlayoff2 = createRounds(playoff2Matches, 'PLAYOFF')

      const roundsA = createRounds(initialMatches.slice(0, 16), 'Round 1')
      const roundsB = createRounds(initialMatches.slice(16, 32), 'Round 1')
      const roundsC = createRounds(initialMatches.slice(32, 48), 'Round 1')
      const roundsD = createRounds(initialMatches.slice(48, 64), 'Round 1')

      const nextRoundsA = createRounds(round2Matches.slice(0, 8), 'Vòng bảng (Nhánh thắng)')
      const nextRoundsB = createRounds(round2Matches.slice(8, 16), 'Vòng bảng (Nhánh thắng)')
      const nextRoundsC = createRounds(round2Matches.slice(16, 24), 'Vòng bảng (Nhánh thắng)')
      const nextRoundsD = createRounds(round2Matches.slice(24, 32), 'Vòng bảng (Nhánh thắng)')

      const round3A = createRounds(round3Matches.slice(0, 8), 'Knockout')
      const round3B = createRounds(round3Matches.slice(8, 16), 'Knockout')
      const round3C = createRounds(round3Matches.slice(16, 24), 'Knockout')
      const round3D = createRounds(round3Matches.slice(24, 32), 'Knockout')

      const combinedRounds = combineRounds(
        [roundsA, nextRoundsA, round3A],
        [roundsB, nextRoundsB, round3B],
        [roundsC, nextRoundsC, round3C],
        [roundsD, nextRoundsD, round3D]
      )

      const round4 = createRounds(round4Matches, 'Knockout')
      const round5 = createRounds(round5Matches, 'Knockout')
      const round6 = createRounds(round6Matches, 'Tứ Kết')
      const round7 = createRounds(round7Matches, 'Bán kết')
      const round8 = createRounds(round8Matches, 'Chung kết')

      setRounds([...combinedRounds, round4, round5, round6, round7, round8])

      setPlayoffRounds([roundsPlayoff1, roundsPlayoff2])
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const applyFilter = () => {
    let newFilteredRounds = [...rounds]
    let newFilteredPlayoffRounds = [...playoffRounds]

    switch (filterMode) {
      case FILTER_MODES.DRAW_ROUND:
        newFilteredRounds = rounds.filter((round) => round.title === 'Round 1')
        newFilteredPlayoffRounds = []
        break
      case FILTER_MODES.WINNER_ROUND:
        newFilteredRounds = rounds
        newFilteredPlayoffRounds = []
        break
      case FILTER_MODES.LOSER_ROUND:
        newFilteredRounds = []
        newFilteredPlayoffRounds = playoffRounds
        break
      case FILTER_MODES.TOP_16:
        const knockoutIndex = rounds.findIndex((round) => round.title.includes('Knockout'))

        if (knockoutIndex !== -1 && knockoutIndex < rounds.length - 1) {
          newFilteredRounds = rounds.slice(knockoutIndex + 2)
        } else {
          newFilteredRounds = []
        }

        newFilteredPlayoffRounds = []
        break
      case FILTER_MODES.TOP_8:
        const quarterFinalIndex = rounds.findIndex((round) => round.title.includes('Tứ Kết'))

        if (quarterFinalIndex !== -1) {
          newFilteredRounds = rounds.slice(quarterFinalIndex)
        } else {
          newFilteredRounds = []
        }

        newFilteredPlayoffRounds = []
        break
      case FILTER_MODES.SHOW_ALL:
      default:
        newFilteredRounds = rounds
        newFilteredPlayoffRounds = playoffRounds
        break
    }

    setFilteredRounds(newFilteredRounds)
    setFilteredPlayoffRounds(newFilteredPlayoffRounds)
  }

  const fetchTables = async () => {
    try {
      const response = await http.get(`${config.baseUrl}table/active/${idTournament}`)
      setTables(response.data.metadata)
    } catch (error) {
      console.error('Error fetching tables:', error)
    }
  }

  const shuffleStage = async () => {
    try {
      const response = await http.post(`${config.baseUrl}tournament/shuffle-stage/${idTournament}`)
      console.log('Shuffle Stage Response:', response.data)

      if (!response || !response.data) {
        throw new Error('Dữ liệu phản hồi không hợp lệ.')
      }

      await fetchData()
    } catch (error) {
      setErrorMessage(error.message || 'Lỗi khi thực hiện ngẫu nhiên giai đoạn.')
      setShowAlert(true)
      console.error('Error shuffling stage:', error)
    }
  }

  useEffect(() => {
    fetchData()
    fetchTables()

    const currentBracketContainerRef = bracketContainerRef.current
    if (currentBracketContainerRef) {
      currentBracketContainerRef.addEventListener('mousemove', handleMouseMove)
      currentBracketContainerRef.addEventListener('mouseup', handleMouseUp)
      currentBracketContainerRef.addEventListener('mouseleave', handleMouseUp)

      currentBracketContainerRef.addEventListener('touchmove', handleTouchMove)
      currentBracketContainerRef.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      if (currentBracketContainerRef) {
        currentBracketContainerRef.removeEventListener('mousemove', handleMouseMove)
        currentBracketContainerRef.removeEventListener('mouseup', handleMouseUp)
        currentBracketContainerRef.removeEventListener('mouseleave', handleMouseUp)

        currentBracketContainerRef.removeEventListener('touchmove', handleTouchMove)
        currentBracketContainerRef.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [])

  useEffect(() => {
    applyFilter()
  }, [filterMode, rounds, playoffRounds])

  const handlePlayer1PointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(0, Number(e.target.value)), raceToWin)
    setPlayer1Points(value)
  }

  const handlePlayer2PointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(0, Number(e.target.value)), raceToWin)
    setPlayer2Points(value)
  }

  const updateMatchPoints = async () => {
    try {
      const payload = {
        player_1: { point: player1Points },
        player_2: { point: player2Points }
      }

      if (!currentTable) {
        payload['id_table'] = selectedTableId
      }

      const response = await http.post(`${config.baseUrl}match/${selectedMatchId}`, payload)
      console.log('Update response:', response.data)

      await fetchData()
      await fetchTables()

      setIsModalOpen(false)
    } catch (error) {
      setErrorMessage('Lỗi khi cập nhật điểm số.')
      setShowAlert(true)
      console.error('Error updating points:', error)
    }
  }

  const handleOpenModal = (seed) => {
    setSelectedMatchId(seed.id.toString())
    setPlayer1Name(seed.teams[0]?.name || 'Player 1')
    setPlayer2Name(seed.teams[1]?.name || 'Player 2')
    setPlayer1Points(seed.teams[0]?.attributes?.point || 0)
    setPlayer2Points(seed.teams[1]?.attributes?.point || 0)
    setRaceToWin(seed.race_to_win || 6)
    if (seed.table?.name) {
      setCurrentTable(seed.table.name)
    } else {
      setSelectedTableId('')
      setCurrentTable('')
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 50))
  const handleResetZoom = () => setZoomLevel(100)
  const togglePan = () => setIsPanEnabled(!isPanEnabled)
  const toggleScroll = () => setIsScrollEnabled(!isScrollEnabled)

  const handleFullScreen = () => {
    if (bracketContainerRef.current && screenfull.isEnabled) {
      screenfull.toggle(bracketContainerRef.current)
    }
  }

  const handleDownloadPNG = async () => {
    if (bracketContainerRef.current) {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const dataUrl = await toPng(bracketContainerRef.current)
        const link = document.createElement('a')
        link.href = dataUrl
        link.download = 'bracket.png'
        link.click()
      } catch (error) {
        console.error('Error generating PNG:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      console.error('Bracket reference is not available')
    }
  }

  const handleDownloadPDF = async () => {
    if (bracketContainerRef.current) {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const dataUrl = await toPng(bracketContainerRef.current)
        const pdf = new jsPDF('landscape')
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight =
          (bracketContainerRef.current.offsetHeight * pdfWidth) / bracketContainerRef.current.offsetWidth
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('bracket.pdf')
      } catch (error) {
        console.error('Error generating PDF:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      console.error('Bracket reference is not available')
    }
  }

  const handleFilterChange = (mode) => {
    setFilterMode(mode)
  }

  const renderFilterDropdown = () => (
    <div className='filter-dropdown'>
      <select
        onChange={(e) => handleFilterChange(e.target.value)}
        className='bg-btn fixed text-white p-2 rounded-md font-sora'
        style={{ top: '27%', left: '91%', width: '8%', zIndex: 10000 }}
      >
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.SHOW_ALL}>
          Show All
        </option>
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.DRAW_ROUND}>
          Draw Round
        </option>
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.WINNER_ROUND}>
          Winner Round
        </option>
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.LOSER_ROUND}>
          Loser Round
        </option>
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.TOP_16}>
          Top 16
        </option>
        <option className='bg-[#0b1a2c] font-sora' value={FILTER_MODES.TOP_8}>
          Top 8
        </option>
      </select>
    </div>
  )

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return (
    <div>
      <div className='container mx-auto' style={{ maxWidth: '1200px', padding: '0 20px' }}>
        {type === 'club' && (
          <div className='flex justify-end items-center mb-5'>
            <button
              onClick={shuffleStage}
              className='bg-btn px-5 py-3 rounded-md shadow-lg text-white hover:from-blue-500 hover:to-purple-500 transition-all'
            >
              Tạo ngẫu nhiên
            </button>
          </div>
        )}

        {renderFilterDropdown()}
      </div>
      <ControlPanel
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        zoomLevel={zoomLevel}
        onTogglePan={togglePan}
        onToggleScroll={toggleScroll}
        isPanEnabled={isPanEnabled}
        handleFullScreen={handleFullScreen}
        handleDownloadPDF={handleDownloadPDF}
        handleDownloadPNG={handleDownloadPNG}
      />
      <div
        ref={bracketContainerRef}
        style={{
          overflowX: isScrollEnabled ? 'auto' : 'hidden',
          overflowY: isScrollEnabled ? 'auto' : 'hidden',
          cursor: isPanEnabled ? (isDragging.current ? 'grabbing' : 'grab') : 'default',
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: '0 0',
          transition: 'transform 0.2s ease-in-out',
          margin: '0 auto',
          position: 'relative'
        }}
        onMouseDown={isPanEnabled ? handleMouseDown : undefined}
        onTouchStart={isPanEnabled ? handleTouchStart : undefined}
      >
        {filteredRounds.length > 0 ? (
          <>
            {isLoading && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  padding: '20px',
                  borderRadius: '10px',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CircularProgress style={{ color: '#fff' }} />
                <p style={{ color: '#fff', marginTop: '10px' }}>Đang tải...</p>
              </div>
            )}
            <Bracket
              rounds={filteredRounds}
              roundTitleComponent={(title) => (
                <div className='bracket-title mb-10' style={{ color: '#fff' }}>
                  {title}
                </div>
              )}
              renderSeedComponent={({ seed }) => <MatchComponent seed={seed} onClick={() => handleOpenModal(seed)} />}
            />
          </>
        ) : (
          <p style={{ color: '#fff' }}>Loading...</p>
        )}
        <h2 style={{ textAlign: 'center', color: '#fff' }}>PLAY-OFF</h2>
        {filteredPlayoffRounds.length > 0 ? (
          <Bracket
            rounds={filteredPlayoffRounds}
            roundTitleComponent={(title) => (
              <div className='bracket-title mb-10' style={{ color: '#fff' }}>
                {title}
              </div>
            )}
            renderSeedComponent={({ seed }) => <MatchComponent seed={seed} onClick={() => handleOpenModal(seed)} />}
          />
        ) : (
          <p style={{ color: '#fff' }}>Loading...</p>
        )}
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Update Match Points</h2>
        <div>
          <div className='flex justify-center'>
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span style={{ marginRight: '104px' }}>{player1Name} Points:</span>
              <input
                type='number'
                min='0'
                max='7'
                value={player1Points}
                onChange={handlePlayer1PointsChange}
                className='p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-14'
                style={{ appearance: 'textfield' }}
              />
            </label>
          </div>
          <div className='flex justify-center'>
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span style={{ marginRight: '100px' }}>{player2Name} Points:</span>
              <input
                type='number'
                min='0'
                max='7'
                value={player2Points}
                onChange={handlePlayer2PointsChange}
                className='p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-14'
                style={{ appearance: 'textfield' }}
              />
            </label>
          </div>
          <div className='flex justify-center'>
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span>Race to Win: {raceToWin}</span>
            </label>
          </div>
          {type === 'club' && currentTable && (
            <div className='flex justify-center'>
              <label style={{ display: 'block', marginBottom: '20px', color: '#fff' }}>
                <span>Bàn hiện tại: {currentTable}</span>
              </label>
            </div>
          )}
          {type === 'club' && !currentTable && (
            <div className='flex justify-center'>
              <label style={{ display: 'block', marginBottom: '20px', color: '#fff' }}>
                <span style={{ marginRight: '100px' }}>Select Table:</span>
                <select
                  value={selectedTableId}
                  onChange={(e) => setSelectedTableId(e.target.value)}
                  className='p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-full'
                >
                  <option value='' disabled>
                    Select a table
                  </option>
                  {tables.map((table) => (
                    <option key={table._id} value={table._id} style={{ background: '#27293d', color: '#fff' }}>
                      {table.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}
          <div className='flex justify-center mt-4'>
            {type === 'club' && (
              <button
                onClick={updateMatchPoints}
                className='px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-md shadow-lg hover:from-green-500 hover:to-blue-500 transition-all'
              >
                Update
              </button>
            )}
            <button
              onClick={handleCloseModal}
              className='px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-md shadow-lg ml-2 hover:from-gray-700 hover:to-gray-500 transition-all'
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      {showAlert && (
        <Alert
          show={showAlert}
          title='Đã xảy ra lỗi'
          text={errorMessage}
          type='error'
          onCancel={() => {}}
          onClose={() => {
            console.log('Alert closed');
          }}
          onConfirm={handleCloseAlert}
          showButtonConfirm={true}
          showCancelButton={false}
        />
      )}
    </div>
  )
}

export default CreateBranch
