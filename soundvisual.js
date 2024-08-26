class SoundVisual {
  constructor(soundFile, frequencyColor, wavelengthColor, circleGraphColor) {
    this.fft = new p5.FFT();
    this.sound = soundFile;
    this.spectrum = 0;
    this.waveform = 0;
    this.frequencyColor = frequencyColor;
    this.wavelengthColor = wavelengthColor;
    this.circleGraphColor = circleGraphColor;
    this.amplitude = new p5.Amplitude();
    this.volhistory = [];
  }

  displayFrequency(position, substractWidth, sensitivity, location) {
    this.spectrum = this.fft.analyze();
    noStroke();
    fill(this.frequencyColor);
    for (let i = 0; i < this.spectrum.length; i++) {
      let x = map(i, 0, this.spectrum.length / 1.9, 0, width);
      let h = -height + map(this.spectrum[i], 0, 255, height, 0);
      if (position === "vertical") {
        rect(height + location, x - sensitivity, width / substractWidth, h);
      } else {
        rect(x, height, width / this.spectrum.length, h * 2);
      }
    }
  }

  displayWavelength(position, amplitude, yPosition) {
    this.waveform = this.fft.waveform();
    noFill();
    stroke(this.wavelengthColor);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < this.waveform.length; i++) {
      let x = map(i, 0, this.waveform.length, 0, width);
      let y = map(this.waveform[i] * amplitude, -1 * yPosition, 1, 0, height);
      if (position === "vertical") {
        vertex(y, x);
      } else {
        vertex(x, y);
      }
    }
    endShape();
  }

  circleGraph() {
    angleMode(DEGREES);
    let vol = this.amplitude.getLevel();
    this.volhistory.push(vol);
    stroke(this.circleGraphColor);
    fill("coral");

    translate(width / 2, height / 2);
    beginShape();
    for (let i = 0; i < 360; i++) {
      let r = map(this.volhistory[i], 0, 1, 10, 100);
      let x = r * 5 * cos(i);
      let y = r * 5 * sin(i);
      vertex(x, y);
    }
    endShape();

    if (this.volhistory.length > 360) {
      this.volhistory.splice(0, 1);
    }
  }

  //  credits for code: https://github.com/CodingTrain/website/blob/main/Tutorials/P5JS/p5.js_sound/17.10_radialGraph/sketch.js
}
