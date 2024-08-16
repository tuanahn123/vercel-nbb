import React, { useState, useEffect, useRef } from 'react';
import { Bracket, IRoundProps, ISeedProps, Seed, SeedItem, SeedTeam } from 'react-brackets';
import http from '../../../../utils/http';
import config from '../../../../constants/config';
import Modal from 'react-modal';
import screenfull from 'screenfull';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ModalStyles.css';
import Navbar from '../../../common/Navbar';

Modal.setAppElement('#root');

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
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const MatchComponent = ({ seed, onClick }) => {
  const tableNumber = seed.table?.name || 'Bàn ___'; // Kiểm tra xem table đã tồn tại chưa
  const matchNumber = seed.matchNumber || seed.id;

  return (
    <Seed>
      <SeedItem>
        <div
          onClick={onClick}
          className="font-sora"
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
            fontSize: '12px',
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
              borderBottomRightRadius: '0px',
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
              fontWeight: 'bold',
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
  );
};

const combineRounds = (
  roundsA: IRoundProps[],
  roundsB: IRoundProps[],
  roundsC: IRoundProps[],
  roundsD: IRoundProps[]
): IRoundProps[] => {
  const combinedRounds: IRoundProps[] = [];

  for (let i = 0; i < roundsA.length; i++) {
    let roundTitle = `Round ${i + 1}`; // Default title

    if (i === 1) {
      roundTitle = 'Vòng bảng (Nhánh thắng)'; // Round 2 title
    } else if (i === 2) {
      roundTitle = 'Knockout'; // Round 3 title
    }

    combinedRounds.push({
      title: roundTitle,
      seeds: [...roundsA[i].seeds, ...roundsB[i].seeds, ...roundsC[i].seeds, ...roundsD[i].seeds],
    });
  }

  return combinedRounds;
};

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
  handleDownloadPNG,
}) => (
  <div className="control-panel" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
    <button onClick={handleFullScreen} style={{ display: 'block', marginBottom: '10px' }}>
      Full Screen
    </button>
    <button onClick={handleDownloadPDF} style={{ display: 'block', marginBottom: '10px' }}>
      Download PDF
    </button>
    <button onClick={handleDownloadPNG} style={{ display: 'block', marginBottom: '10px' }}>
      Download PNG
    </button>
    <button onClick={onZoomIn} style={{ display: 'block', marginBottom: '10px' }}>
      Zoom In
    </button>
    <button onClick={onZoomOut} style={{ display: 'block', marginBottom: '10px' }}>
      Zoom Out
    </button>
    <button onClick={onResetZoom} style={{ display: 'block', marginBottom: '10px' }}>
      Reset Zoom
    </button>
    <button onClick={onTogglePan} style={{ display: 'block', marginBottom: '10px' }}>
      {isPanEnabled ? 'Disable Pan' : 'Enable Pan'}
    </button>
    <button onClick={onToggleScroll} style={{ display: 'block', marginBottom: '10px' }}>
      Toggle Scroll
    </button>
    <div>Zoom Level: {zoomLevel}%</div>
  </div>
);

export const CreateBranch = () => {
  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const [playoffRounds, setPlayoffRounds] = useState<IRoundProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [selectedMatchId, setSelectedMatchId] = useState('');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [tables, setTables] = useState<{ _id: string; name: string }[]>([]);
  const [selectedTableId, setSelectedTableId] = useState('');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isPanEnabled, setIsPanEnabled] = useState(true); // Mặc định bật pan
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const [currentTable, setCurrentTable] = useState(''); // Lưu trữ bàn hiện tại nếu có
  const [raceToWin, setRaceToWin] = useState(6); // Lưu trữ giá trị race_to_win
  const bracketRef = useRef<HTMLDivElement>(null); // Ref for the bracket container
  const tournamentId = '66bc7c5b7e31595c15548a04'

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bracketRef.current) {
      isDragging.current = true;
      startX.current = e.clientX - bracketRef.current.offsetLeft;
      startY.current = e.clientY - bracketRef.current.offsetTop;
      scrollLeft.current = bracketRef.current.scrollLeft;
      scrollTop.current = bracketRef.current.scrollTop;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !bracketRef.current) return;
    e.preventDefault();
    const x = e.clientX - bracketRef.current.offsetLeft;
    const y = e.clientY - bracketRef.current.offsetTop;
    const walkX = (x - startX.current) * 1;
    const walkY = (y - startY.current) * 1;
    bracketRef.current.scrollLeft = scrollLeft.current - walkX;
    bracketRef.current.scrollTop = scrollTop.current - walkY;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (bracketRef.current) {
      isDragging.current = true;
      const touch = e.touches[0];
      startX.current = touch.clientX - bracketRef.current.offsetLeft;
      startY.current = touch.clientY - bracketRef.current.offsetTop;
      scrollLeft.current = bracketRef.current.scrollLeft;
      scrollTop.current = bracketRef.current.scrollTop;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !bracketRef.current) return;
    const touch = e.touches[0];
    const x = touch.clientX - bracketRef.current.offsetLeft;
    const y = touch.clientY - bracketRef.current.offsetTop;
    const walkX = (x - startX.current) * 1;
    const walkY = (y - startY.current) * 1;
    bracketRef.current.scrollLeft = scrollLeft.current - walkX;
    bracketRef.current.scrollTop = scrollTop.current - walkY;
  };

  const createRounds = (matchesSubset: ISeedProps[], roundTitle: string): IRoundProps => {
    const seeds = matchesSubset.map((item) => ({
      id: item._id,
      tableName: item.table?.name || 'Bàn ___',
      matchNumber: item.id_match,
      date: new Date(item.createdAt).toDateString(),
      teams: [
        {
          name: `${item.player_1.name || '--------------'}`,
          attributes: { point: item.player_1.point },
        },
        {
          name: `${item.player_2.name || '--------------'}`,
          attributes: { point: item.player_2.point },
        },
      ],
      winner: item.winner?.name ? { name: item.winner.name } : { name: '--------------' },
      table: item.table?.name ? item.table : undefined // Gán table nếu đã có
    }));

    return {
      title: roundTitle,
      seeds: seeds,
    };
  };

  const fetchData = async () => {
    try {
      const matchesResponse = await http.get(
        `${config.baseUrl}match/by-tournament/${tournamentId}?modelType=Players_Demo`
      );

      const matches = matchesResponse.data.metadata;

      // Round 1, 2, 3 matches
      const initialMatches = matches.slice(0, 64);
      const round2Matches = matches.slice(64, 96);
      const round3Matches = matches.filter((match) => match.id_match >= 161 && match.id_match <= 192);

      // Round 4 to 7 matches
      const round4Matches = matches.filter((match) => match.id_match >= 193 && match.id_match <= 208);
      const round5Matches = matches.filter((match) => match.id_match >= 209 && match.id_match <= 216);
      const round6Matches = matches.filter((match) => match.id_match >= 217 && match.id_match <= 220);
      const round7Matches = matches.filter((match) => match.id_match >= 221 && match.id_match <= 222);
      const round8Matches = matches.filter((match) => match.id_match === 223);

      // Playoff-1 matches (ID từ 97 đến 128)
      const playoff1Matches = matches.filter((match) => match.id_match >= 97 && match.id_match <= 128);
      // Playoff-2 matches (ID từ 129 đến 160)
      const playoff2Matches = matches.filter((match) => match.id_match >= 129 && match.id_match <= 160);

      // Tạo vòng Playoff-1 và Playoff-2
      const roundsPlayoff1 = createRounds(playoff1Matches, 'Vòng bảng (Nhánh thua)');
      const roundsPlayoff2 = createRounds(playoff2Matches, 'PLAYOFF');

      const roundsA = createRounds(initialMatches.slice(0, 16), 'Round 1');
      const roundsB = createRounds(initialMatches.slice(16, 32), 'Round 1');
      const roundsC = createRounds(initialMatches.slice(32, 48), 'Round 1');
      const roundsD = createRounds(initialMatches.slice(48, 64), 'Round 1');

      const nextRoundsA = createRounds(round2Matches.slice(0, 8), 'Vòng bảng (Nhánh thắng)');
      const nextRoundsB = createRounds(round2Matches.slice(8, 16), 'Vòng bảng (Nhánh thắng)');
      const nextRoundsC = createRounds(round2Matches.slice(16, 24), 'Vòng bảng (Nhánh thắng)');
      const nextRoundsD = createRounds(round2Matches.slice(24, 32), 'Vòng bảng (Nhánh thắng)');

      const round3A = createRounds(round3Matches.slice(0, 8), 'Knockout');
      const round3B = createRounds(round3Matches.slice(8, 16), 'Knockout');
      const round3C = createRounds(round3Matches.slice(16, 24), 'Knockout');
      const round3D = createRounds(round3Matches.slice(24, 32), 'Knockout');

      // Now use the combineRounds function
      const combinedRounds = combineRounds(
        [roundsA, nextRoundsA, round3A],
        [roundsB, nextRoundsB, round3B],
        [roundsC, nextRoundsC, round3C],
        [roundsD, nextRoundsD, round3D]
      );

      // Add Round 4 to Round 7 to the combined rounds
      const round4 = createRounds(round4Matches, 'Knockout');
      const round5 = createRounds(round5Matches, 'Knockout');
      const round6 = createRounds(round6Matches, 'Tứ Kết');
      const round7 = createRounds(round7Matches, 'Bán kết');
      const round8 = createRounds(round8Matches, 'Chung kết');

      setRounds([...combinedRounds, round4, round5, round6, round7, round8]);

      // Playoff rounds
      setPlayoffRounds([roundsPlayoff1, roundsPlayoff2]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await http.get(`${config.baseUrl}table/active/${tournamentId}`);
      setTables(response.data.metadata);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  const shuffleStage = async () => {
    try {
      const response = await http.post(`${config.baseUrl}tournament/shuffle-stage/${tournamentId}`);
      console.log('Shuffle Stage Response:', response.data);
      await fetchData();
    } catch (error) {
      console.error('Error shuffling stage:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchTables();

    const currentBracketRef = bracketRef.current;
    if (currentBracketRef) {
      currentBracketRef.addEventListener('mousemove', handleMouseMove);
      currentBracketRef.addEventListener('mouseup', handleMouseUp);
      currentBracketRef.addEventListener('mouseleave', handleMouseUp); // Stop panning if mouse leaves the container

      currentBracketRef.addEventListener('touchmove', handleTouchMove);
      currentBracketRef.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      if (currentBracketRef) {
        currentBracketRef.removeEventListener('mousemove', handleMouseMove);
        currentBracketRef.removeEventListener('mouseup', handleMouseUp);
        currentBracketRef.removeEventListener('mouseleave', handleMouseUp);

        currentBracketRef.removeEventListener('touchmove', handleTouchMove);
        currentBracketRef.removeEventListener('touchend', handleMouseUp);
      }
    };
  }, []);

  const handlePlayer1PointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(0, Number(e.target.value)), raceToWin);
    setPlayer1Points(value);
  };

  const handlePlayer2PointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(0, Number(e.target.value)), raceToWin);
    setPlayer2Points(value);
  };

  const updateMatchPoints = async () => {
    try {
      const payload = {
        player_1: { point: player1Points },
        player_2: { point: player2Points },
      };

      if (!currentTable) {
        payload['id_table'] = selectedTableId;
      }

      // Cập nhật điểm số trên server
      const response = await http.post(`${config.baseUrl}match/${selectedMatchId}`, payload);
      console.log('Update response:', response.data);

      await fetchData();

      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating points:', error);
    }
  };

  const handleOpenModal = (seed) => {
    setSelectedMatchId(seed.id.toString());
    setPlayer1Name(seed.teams[0]?.name || 'Player 1');
    setPlayer2Name(seed.teams[1]?.name || 'Player 2');
    setPlayer1Points(seed.teams[0]?.attributes?.point || 0);
    setPlayer2Points(seed.teams[1]?.attributes?.point || 0);
    setRaceToWin(seed.race_to_win || 6); // Set giá trị race_to_win
    if (seed.table?.name) {
      setCurrentTable(seed.table.name);
    } else {
      setSelectedTableId('');
      setCurrentTable('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 50));
  const handleResetZoom = () => setZoomLevel(100);
  const togglePan = () => setIsPanEnabled(!isPanEnabled);
  const toggleScroll = () => setIsScrollEnabled(!isScrollEnabled);

  const handleFullScreen = () => {
    if (bracketRef.current && screenfull.isEnabled) {
      screenfull.toggle(bracketRef.current);
    }
  };

  const handleDownloadPNG = async () => {
    if (bracketRef.current) {
      const canvas = await html2canvas(bracketRef.current);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'bracket.png';
      link.click();
    }
  };

  const handleDownloadPDF = async () => {
    if (bracketRef.current) {
      const canvas = await html2canvas(bracketRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('bracket.pdf');
    }
  };

  return (
    <div style={{}}>
      <div className="container mx-auto" style={{ maxWidth: '1200px', padding: '0 20px' }}>
        <Navbar />
        <div className="flex justify-evenly my-5">
          <div className="webkit-center">
            <div className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-16 h-16 flex justify-center items-center text-white">
              1
            </div>
            <span className="text">Tạo giải</span>
          </div>
          <div className="webkit-center">
            <div className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 flex justify-center items-center text-white">
              2
            </div>
            <span className="text">Bàn đấu</span>
          </div>
          <div className="webkit-center">
            <div className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 w-16 h-16 flex justify-center items-center text-white">
              3
            </div>
            <span className="text">Kiểm tra</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="relative group mr-[30px] text-white">
            Danh sách CLB
            <div className="absolute bottom-[-10px] left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transition-opacity duration-300 ease-in-out w-24"></div>
          </div>
          <button
            onClick={shuffleStage}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 rounded-lg shadow-lg text-white hover:from-pink-500 hover:to-purple-500 transition-all"
          >
            Tạo ngẫu nhiên
          </button>
        </div>
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
        ref={bracketRef}
        style={{
          overflowX: isScrollEnabled ? 'auto' : 'hidden',
          overflowY: 'auto',
          cursor: isPanEnabled ? (isDragging.current ? 'grabbing' : 'grab') : 'default',
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: '0 0',
          transition: 'transform 0.2s ease-in-out',
          margin: '0 auto',
          width: '100%', // Ensure it takes up the full available width
          height: '80vh', // Use a dynamic height to make it responsive
          position: 'relative',
        }}
        onMouseDown={isPanEnabled ? handleMouseDown : undefined}
        onTouchStart={isPanEnabled ? handleTouchStart : undefined}
      >
        {rounds.length > 0 ? (
          <Bracket
            rounds={rounds}
            roundTitleComponent={(title) => (
              <div className="bracket-title mb-10" style={{ color: '#fff' }}>
                {title}
              </div>
            )}
            renderSeedComponent={({ seed }) => (
              <MatchComponent
                seed={seed}
                onClick={() => handleOpenModal(seed)}
              />
            )}
          />
        ) : (
          <p style={{ color: '#fff' }}>Loading...</p>
        )}
      </div>

      <h2 style={{ textAlign: 'center', color: '#fff' }}>PLAY-OFF</h2>
      {playoffRounds.length > 0 ? (
        <div
          style={{
            overflowX: isScrollEnabled ? 'auto' : 'hidden',
            overflowY: 'auto',
            cursor: isPanEnabled ? (isDragging.current ? 'grabbing' : 'grab') : 'default',
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: '0 0',
            transition: 'transform 0.2s ease-in-out',
            margin: '0 auto',
            width: '100%', // Ensure it takes up the full available width
            height: '80vh', // Use a dynamic height to make it responsive
            position: 'relative',
          }}
          onMouseDown={isPanEnabled ? handleMouseDown : undefined}
          onTouchStart={isPanEnabled ? handleTouchStart : undefined}
        >
          <Bracket
            rounds={playoffRounds}
            roundTitleComponent={(title) => (
              <div className="bracket-title mb-10" style={{ color: '#fff' }}>
                {title}
              </div>
            )}
            renderSeedComponent={({ seed }) => (
              <MatchComponent
                seed={seed}
                onClick={() => handleOpenModal(seed)}
              />
            )}
          />
        </div>
      ) : (
        <p style={{ color: '#fff' }}>Loading...</p>
      )}

      <Modal isOpen={isModalOpen} style={customStyles}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Update Match Points</h2>
        <div>
          <div className="flex justify-center">
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span style={{ marginRight: '104px' }}>{player1Name} Points:</span>
              <input
                type="number"
                min="0"
                max="7"
                value={player1Points}
                onChange={handlePlayer1PointsChange}
                className="p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-14"
                style={{ appearance: 'textfield' }} // Bỏ nút tăng/giảm
              />
            </label>
          </div>
          <div className="flex justify-center">
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span style={{ marginRight: '100px' }}>{player2Name} Points:</span>
              <input
                type="number"
                min="0"
                max="7"
                value={player2Points}
                onChange={handlePlayer2PointsChange}
                className="p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-14"
                style={{ appearance: 'textfield' }} // Bỏ nút tăng/giảm
              />
            </label>
          </div>
          <div className="flex justify-center">
            <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>
              <span>Race to Win: {raceToWin}</span>
            </label>
          </div>
          {currentTable ? (
            <div className="flex justify-center">
              <label style={{ display: 'block', marginBottom: '20px', color: '#fff' }}>
                <span>Bàn hiện tại: {currentTable}</span>
              </label>
            </div>
          ) : (
            <div className="flex justify-center">
              <label style={{ display: 'block', marginBottom: '20px', color: '#fff' }}>
                <span style={{ marginRight: '100px' }}>Select Table:</span>
                <select
                  value={selectedTableId}
                  onChange={(e) => setSelectedTableId(e.target.value)}
                  className="p-2 bg-transparent text-white rounded-md border-2 border-purple-500 focus:border-pink-500 focus:ring-pink-500 w-full"
                >
                  <option value="" disabled>
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
          <div className="flex justify-center mt-4">
            <button
              onClick={updateMatchPoints}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-md shadow-lg hover:from-green-500 hover:to-blue-500 transition-all"
            >
              Update
            </button>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-md shadow-lg ml-2 hover:from-gray-700 hover:to-gray-500 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
