import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Styled components with transient props to filter out unknown props
const AlertWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #0C0C26 0%, #011444 0.01%, #3F0148 150%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 0.5s forwards;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${({ $show }) => ($show ? fadeIn : fadeOut)} 0.5s forwards;
  z-index: 999;
`;

const AlertButton = styled.button`
  background: ${({ $confirm }) => ($confirm ? "linear-gradient(91deg, #E011FF 6%, #0C53FF 150%)" : "linear-gradient(91deg, #3247ff 70%, #ADD8E6 150%)")};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${({ $confirm }) => ($confirm ? "linear-gradient(91deg, rgba(224, 17, 255, 0.8) -5.63%, rgba(12, 83, 255, 0.8) 102.05%)" : "linear-gradient(91deg, #6679ff 70%, #d0e8f2 150%)")};
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ $type }) => ($type === 'success' ? '#4CAF50' : $type === 'error' ? '#F44336' : '#FFC107')};
  animation: ${bounce} 1s infinite;
  margin-bottom: 10px;
`;

const Alert = ({ show, title, text, onConfirm, onCancel, showButtonConfirm = true, showCancelButton = true, type, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timer;
    if (!showButtonConfirm && !showCancelButton) {
      timer = setTimeout(() => {
        setVisible(false);
        if (onClose) {
          onClose();  // Gọi hàm callback để thông báo với component cha rằng Alert cần được đóng
        }
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showButtonConfirm, showCancelButton, onClose]);
  
  useEffect(() => {
    setVisible(show);
    if (!show) {
      if (onClose) {
        onClose();  // Gọi hàm callback khi show thay đổi để đảm bảo component cha được thông báo
      }
    }
  }, [show, onClose]);
  
  return (
    <>
      {visible && (
        <>
          <Overlay $show={visible} />
          <AlertWrapper $show={visible}>
            <IconWrapper className="flex justify-center p-4" $type={type}>
              <FontAwesomeIcon className="text-5xl" icon={type === 'success' ? faCheckCircle : type === 'error' ? faTimesCircle : faQuestionCircle} />
            </IconWrapper>
            <h2 className="font-sora text-3xl text-center mb-5">{title}</h2>
            <p className="font-sora text-lg max-w-md text-center mb-5 px-5">{text}</p>
            <div className="flex justify-end">
              {showButtonConfirm && (
                <AlertButton $confirm onClick={onConfirm}>
                  OK
                </AlertButton>
              )}
              {showCancelButton && (
                <AlertButton onClick={onCancel}>
                  Cancel
                </AlertButton>
              )}
            </div>
          </AlertWrapper>
        </>
      )}
    </>
  );
};

export default Alert;
