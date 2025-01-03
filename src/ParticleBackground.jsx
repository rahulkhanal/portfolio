import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: '#000' },
        },
        fpsLimit: 60,
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;