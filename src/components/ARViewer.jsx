<<<<<<< HEAD
import React, { useRef, useEffect } from 'react';
import { init } from '../main';

const ARViewer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
        init(video, canvas); // init acepta referencias
      };
    });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <video ref={videoRef} id="video" style={{ position: 'absolute' }} playsInline muted />
      <canvas ref={canvasRef} id="glCanvas" style={{ position: 'absolute' }} />
    </div>
  );
};

=======
import React, { useRef, useEffect } from 'react';
import { init } from '../utils/main';

const ARViewer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
        init(video, canvas); // init acepta referencias
      };
    });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <video ref={videoRef} id="video" style={{ position: 'absolute' }} playsInline muted />
      <canvas ref={canvasRef} id="glCanvas" style={{ position: 'absolute' }} />
    </div>
  );
};

>>>>>>> 5c680b5e07d49dbd861379bf154fcd410a4aa991
export default ARViewer;
