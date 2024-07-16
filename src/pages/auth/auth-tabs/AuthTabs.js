import React, { useState } from 'react';
import './AuthTabs.scss';
import BackgroundImage from '../../../assets/images/background.jpg'

function AuthTabs() {
  const [type, setType] = useState('Sign In');

  return (
    <div className="container-wrapper"  style={{ backgroundImage : `url(${BackgroundImage})`}}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className={`tab ${type === 'Sign In' ? 'active' : ''}`} onClick={() => setType('Sign In')}>
                <button className="login">Sign In</button>
              </li>
              <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                <button className="signup">Sign Up</button>
              </li>
            </ul>
            {type === 'Sign In' && (
              <div className="tab-item">
                {/* <Login /> */} Login
              </div>
            )}
            {type === 'Sign Up' && (
              <div className="tab-item">
                {/* <Register /> */} Register
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthTabs;
