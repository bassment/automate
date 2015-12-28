import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {
  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    return this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}
