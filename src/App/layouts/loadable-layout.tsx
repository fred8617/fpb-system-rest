import loadable from "@loadable/component";
const LoadableLayout = loadable(props =>
  import(/* webpackPrefetch: true */ `./${props.layout}`)
);

export default LoadableLayout;
