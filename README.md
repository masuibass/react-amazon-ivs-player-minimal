# React Amazon IVS Player Minimal Example

A example `Amazon IVS Player` implementation to React App.

## Getting Started

In the project directory, run the following commands:

### `npm install`

Installs dependencies.

### Option: `touch .env && echo REACT_APP_PLAYBACK_URL="your-ivs-playback-url.m3u8" > .env`

Sets playback url. As default, a test stream:
[https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.rkCBS9iD1eyd.m3u8](https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.rkCBS9iD1eyd.m3u8)

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## What is done

1. Add Amazon IVS Player `<script>` to `public/index.html` as below.

```html:public/index.html
<head>
  ...
    <script src="https://player.live-video.net/1.6.1/amazon-ivs-player.min.js"></script>
  ...
</head>
```

2. Create MediaPlayer instance at `useEffect` and attach to `<video>` element via `useRef` .

```js:src/App.js
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
      <video className="player" ref={videoEl} playsInline controls />
    </div>
  );
}
```

## About Amazon IVS

Amazon Interactive Video Service (Amazon IVS) is a managed live streaming solution that is quick and easy to set up, and ideal for creating interactive video experiences. [Learn more](https://aws.amazon.com/ivs/).

- [Amazon IVS docs](https://docs.aws.amazon.com/ivs/)
- [User Guide](https://docs.aws.amazon.com/ivs/latest/userguide/)
- [API Reference](https://docs.aws.amazon.com/ivs/latest/APIReference/)
- [Setting Up for Streaming with Amazon Interactive Video Service](https://aws.amazon.com/blogs/media/setting-up-for-streaming-with-amazon-ivs/)
- [Learn more about Amazon IVS on IVS.rocks](https://ivs.rocks/)
- [View more demos like this](https://ivs.rocks/examples)
- [Amazon IVS Player SDK Documentation](https://aws.github.io/amazon-ivs-player-docs/1.6.1/web/index.html)
