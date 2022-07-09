export default class Observer{
  #observer = null;

  setObserver(observer){
    this.#observer = observer;
  }

  _notify(payload){
    this.#observer(payload);
  }
}