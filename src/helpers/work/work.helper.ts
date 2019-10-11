import eventEmitter from '../react-events/react-events.helper';
export const work = (colors?: any, mode?: string, speed?: number) => {
  let isRunning = true;
  eventEmitter.on('apply', () => {
    isRunning = false
  });
  eventEmitter.on("off", () => {
    isRunning = false;
  });
  eventEmitter.on("change", () => {
    isRunning = false;
  });
  eventEmitter.on("off", () => {
    isRunning = false;
  });
  switch (mode) {
    case "Static":
      return (robot: any) => {
        const { red, green, blue } = robot.devices;
        red.turnOn();
        red.brightness(colors.red);
        green.turnOn();
        green.brightness(colors.green);
        blue.turnOn();
        blue.brightness(colors.blue);
      };
    case "Rainbow":
      return (robot: any) => {
        const colorsState = {
          red: {
            value: 255,
            phase: "high",
            caseCount: 0
          },
          green: {
            value: 0,
            phase: "low",
            caseCount: 1
          },
          blue: {
            value: 255,
            phase: "variable",
            caseCount: null
          }
        };
        const maxValue = 255;
        const minValue = 0;
        const leds = robot.devices;
        const animationSpeed = speed
          ? ((3 * 30 * 255) / (speed * 1000))
          : 1;

        const changer = (color: string, type: string, speed: number): void => {
          const led = leds[color];
          const operator = type === "increase" ? speed : -speed;
          let { value } = colorsState[color];
          const cycleRunning = () =>
            (value < maxValue && type === "increase") ||
            (value > minValue && type === "decrease");

          if (cycleRunning()) {
            value = value += operator;
            value = value > maxValue
              ? maxValue
              : value < minValue
              ? 0
              : value;
            colorsState[color].value = value;
            led.brightness(value);
            setTimeout(() => {
              if (isRunning) {
                changer(color, type, speed)
              }
            }, 30);
          } else {
            runner();
          }
        };

        const runner = () => {
          for (const i in leds) {
            if (leds[i]) {
              const { phase, value, caseCount } = colorsState[i];
              if (phase === "high") {
                colorsState[i].phase = caseCount === 0 ? "high" : "variable";
                colorsState[i].caseCount =
                  caseCount === 0 ? (caseCount + 1) : 0;
                robot.devices[i].brightness(maxValue);
              }

              if (phase === "low") {
                colorsState[i].phase = caseCount === 0 ? "low" : "variable";
                colorsState[i].caseCount =
                  caseCount === 0 ? (caseCount + 1) : 0;
                robot.devices[i].brightness(minValue);
              }

              if (phase === "variable") {
                const typeDetect = value >= maxValue ? "decrease" : "increase";
                colorsState[i].phase = value >= maxValue ? "low" : "high";
                colorsState[i].caseCount = 0;
                changer(i, typeDetect, animationSpeed);
              }
            }
          }
        };
        runner();
      };

    case "Music":
      return (robot: any) => {
        const { red, green, blue } = robot.devices;
        red.turnOn();
        green.turnOn();
        blue.turnOn();
        eventEmitter.on("music", (volume: any) => {
          if (isRunning) {
            const value = volume * 255 > 255
              ? 255
              : volume * 255 < 0
              ? 0
              :volume * 255;
            red.brightness(value);
            green.brightness(value);
            blue.brightness(value);
          }
        })
      };

    case "Off":
      return (robot: any) => {
        const { red, green, blue } = robot.devices;
        red.turnOff();
        green.turnOff();
        blue.turnOff();
      };

    default:
      return (robot: any) => {
        const { red, green, blue } = robot.devices;
        red.turnOn();
        green.turnOn();
        blue.turnOn();
      };
  }
};
