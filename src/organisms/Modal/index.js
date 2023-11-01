import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import FaIcon from '../../atoms/FaIcon';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft';
import { colors } from '../../tokens';

const Modal = ({ show, setShow, currentVideo }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  });

  const StyledModal = styled('section')`
    &.overlay {
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${colors.constants.modalBg};
      height: 100vh;
      width: 100vw;
      display: grid;
      place-items: center;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
      z-index: 9999;

      &.show {
        opacity: 1;
        pointer-events: visible;
      }

  section.modal {
    position: relative;
    width: calc(100% - 2rem);
    max-width: 800px;
    gap: 1rem;
    opacity: 0;
    transform: translateY(-100px);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    aspect-ratio: 16 / 9;

    &.show {
      transform: translateY(0);
      opacity: 1;
      pointer-events: visible;
    }
  }

  svg {
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    color: white;
  }
}`;

useEffect(() => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
});

  const TV = styled('iframe')`
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin: 0;
    border: 0;
    background-color: ${colors.constants.purple};
  `;

  return (
    <StyledModal className={`overlay ${show ? 'show' : ''}`} onClick={() => setShow(false)}>
      <section className={`modal ${show ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
        <TV
          title="showreel"
          src={currentVideo}
          allow="encrypted-media"
          allowFullScreen
        />

        <FaIcon icon={faArrowRotateLeft} onClick={() => setShow(false)}/>
      </section>
    </StyledModal>
  );
}

export default Modal;
