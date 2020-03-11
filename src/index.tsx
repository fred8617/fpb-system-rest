import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createAppProps from "./App/utils/createAppProps";
// require('core-js/es/object/from-entries');
const options = {};
async function main() {
  const props: any = await createAppProps(options);
  ReactDOM.render(<App {...props} />, document.getElementById("root"));
}
main();
serviceWorker.unregister();
