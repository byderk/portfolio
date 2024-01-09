import { useEffect, useState } from 'react';

const DeviceHeight = () => {
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setDeviceHeight(window.innerHeight);
  };

  useEffect(() => {
    setDeviceHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceHeight;
};

export default DeviceHeight;