/* @refresh reload */
import { render } from 'solid-js/web';

import { App } from './App';

(async () => {
  const goWasm = new Go();

  const module = await WebAssembly
    .instantiateStreaming(
      fetch('wasm/getSum.wasm'),
      goWasm.importObject
    );

  goWasm.run(module.instance);

  render(() => <App />, document.getElementById('root'));
})()

