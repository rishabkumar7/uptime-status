import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Based on <Link to="https://uptimerobot.com/" text="UptimeRobot" /></p>
        <p>&copy; 2020 <Link to="https://status.org.cn/" text="STATUS.ORG.CN" /></p>
      </div>
    </div>
  );
}

export default Footer;
