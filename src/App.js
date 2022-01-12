import { useEffect, useRef } from "react";
import "./App.css";

const PLAYBACK_URL =
  process.env.REACT_APP_PLAYBACK_URL ||
  "https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.rkCBS9iD1eyd.m3u8";

function App() {
  const videoEl = useRef(null);

  useEffect(() => {
    if (window.IVSPlayer?.isPlayerSupported) {
      const player = window.IVSPlayer.create();
      player.attachHTMLVideoElement(videoEl.current);
      player.load(PLAYBACK_URL);
      player.play();
    }
  }, []);

  return (
    <div className="App">
      <h1>React Amazon IVS Player Minimal Example</h1>
      <video className="player" ref={videoEl} playsInline controls />
    </div>
  );
}

export default App;
