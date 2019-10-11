import eventEmitter from '../react-events/react-events.helper';

let audioContext: any = null;
let meter: any = null;
let mediaStreamSource = null;
let running = true;

const repeat = () => {
	eventEmitter.emit("music", meter.volume);
	if (running) {
		setTimeout(repeat, 30);
	}
}

eventEmitter.on("change", () => {
	running = false;
});

eventEmitter.on("apply", (data: any) => {
	running = true;
	repeat();
});

function createAudioMeter(
  audioContext: any,
  clipLevel?: any,
  averaging?: any,
  clipLag?: any
) {
  const processor = audioContext.createScriptProcessor(512);
  processor.onaudioprocess = volumeAudioProcess;
  processor.clipping = false;
  processor.lastClip = 0;
  processor.volume = 0;
  processor.clipLevel = clipLevel || 0.98;
  processor.averaging = averaging || 0.95;
  processor.clipLag = clipLag || 750;
  processor.connect(audioContext.destination);
  processor.checkClipping = function() {
    if (!this.clipping) {
      return false;
    }

    if (this.lastClip + this.clipLag < window.performance.now()) {
      this.clipping = false;
    }
    return this.clipping;
  };

  processor.shutdown = function() {
    this.disconnect();
    this.onaudioprocess = null;
  };

  return processor;
};

function volumeAudioProcess(event: any) {
  const buf = event.inputBuffer.getChannelData(0);
  const bufLength = buf.length;
  let sum = 0;
  let x;

  for (let i = 0; i < bufLength; i++) {
		x = buf[i];
		// @ts-ignore
    if (Math.abs(x) >= this.clipLevel) {
			// @ts-ignore
			this.clipping = true;
			// @ts-ignore
      this.lastClip = window.performance.now();
		}
    sum += x * x;
  }

	const rms = Math.sqrt(sum / bufLength);
	// @ts-ignore
  this.volume = Math.max(rms, this.volume * this.averaging);
};

function didntGetStream() {
	alert('Stream generation failed.');
}

function gotStream(stream: any) {
	mediaStreamSource = audioContext.createMediaStreamSource(stream);
	meter = createAudioMeter(audioContext);
	mediaStreamSource.connect(meter);
}

export const audioInit = () => {
	window.AudioContext = window.AudioContext;
	audioContext = new AudioContext();
	try {
			navigator.getUserMedia(
			{
					"audio": true,
			}, gotStream, didntGetStream);
	} catch (e) {
			alert('getUserMedia threw exception :' + e);
	}

	window.addEventListener("click", () => {
		audioContext.resume();
	})
}
