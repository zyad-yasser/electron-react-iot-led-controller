import { EventEmitter } from 'events';
import events from '../events/events.controller';
import appWindow from '../app-window/app-window.controller';
import serialPort from '../serial-port/serial-port.controller';

const nodeEvents = require('events');
const eventEmitter: EventEmitter = new nodeEvents.EventEmitter();

eventEmitter.on("dom-ready", () => {
    events.setReady(appWindow.window);
    if (serialPort.ports.length) {
        events.emit(appWindow.window, "connected", serialPort.ports);
    }
})

eventEmitter.on("connected", async (ports) => {
    events.emit(appWindow.window, "connected", ports);
});

eventEmitter.on("disconnected", () => {
    events.emit(appWindow.window, "disconnected", true);
});

export default eventEmitter;