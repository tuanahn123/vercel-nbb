// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CustomSeed = ({ seed, onClick }) => {
  if (!seed.teams || seed.teams.length < 2) {
    return null;
  }

  return (
    <div
      onClick={() => onClick(seed)}
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div>{seed.teams[0].name}</div>
      <div>{seed.teams[1].name}</div>
    </div>
  );
};

CustomSeed.propTypes = {
  seed: PropTypes.shape({
    teams: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    winner: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomSeed;
