import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.children}
        <div style={{ marginLeft: '20px' }}>
          <h1 style={{ fontSize: '30px', margin: '0' }}>{fullName}</h1>
          <h3 style={{ fontSize: '20px', color: '#6c757d', margin: '0' }}>{profession}</h3>
        </div>
      </div>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>{bio}</p>
      <button onClick={() => handleName(fullName)} style={{ fontSize: '16px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Click me</button>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired
};

Profile.defaultProps = {
  fullName: 'LAKRIM Youssef',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  profession: 'Web Developer'
};

export default Profile;