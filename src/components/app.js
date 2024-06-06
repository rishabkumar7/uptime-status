import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>Based on <Link to='https://uptimerobot.com/' text='UptimeRobot' /> detection interval 5 minute.</p>
          <p>&copy; 2024 <Link to ='https://rishabkumar.com' text='Rishab Kumar' /> fork of <Link to='https://status.org.cn/' text='STATUS.ORG.CN' />, Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
