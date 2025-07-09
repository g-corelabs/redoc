import { bind, debounce } from 'decko';
import { EventEmitter } from 'eventemitter3';
import { relative as pathRelative, resolve as pathResolve } from 'path';
import { IS_BROWSER } from '../utils/';

const EVENT = 'pathchange';

export class HistoryService {
  private _emiter;
  private _basePath;

  constructor() {
    this._emiter = new EventEmitter();
    const baseURI = new URL(document.baseURI);
    this._basePath = baseURI.pathname;
    this.bind();
  }

  get currentId(): string {
    return IS_BROWSER ? pathRelative(this._basePath, window.location.pathname) : '';
  }

  linkForId(id: string) {
    if (!id) {
      return '';
    }
    return id;
  }

  subscribe(cb): () => void {
    const emmiter = this._emiter.addListener(EVENT, cb);
    return () => emmiter.removeListener(EVENT, cb);
  }

  emit = () => {
    this._emiter.emit(EVENT, this.currentId);
  };

  bind() {
    if (IS_BROWSER) {
      window.addEventListener('popstate', this.emit, false);
    }
  }

  dispose() {
    if (IS_BROWSER) {
      window.removeEventListener('popstate', this.emit);
    }
  }

  @bind
  @debounce
  replace(id: string | null, rewriteHistory: boolean = false) {
    if (!IS_BROWSER) {
      return;
    }

    if (id == null || id === this.currentId) {
      return;
    }

    const path = pathResolve(this._basePath, this.linkForId(id));

    if (rewriteHistory) {
      window.history.replaceState(null, '', path);
      return;
    }
    window.history.pushState(null, '', path);
    this.emit();
  }
}

export const history = new HistoryService();

if (module.hot) {
  module.hot.dispose(() => {
    history.dispose();
  });
}
