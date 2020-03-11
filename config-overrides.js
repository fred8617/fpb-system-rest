const {
  override,
  addBabelPlugin,
  addLessLoader,
  addWebpackPlugin,
  useEslintRc,
  adjustWorkbox,
  addBundleVisualizer,
} = require('customize-cra');
// const path = require('path');
// const paths = require('react-scripts/config/paths');
const LoadablePlugin = require('@loadable/webpack-plugin');
// paths.appBuild = path.join(path.dirname(paths.appBuild), 'server/react-app'); // 修改打包目录
// paths.appHtml = path.join(path.dirname(paths.appHtml), 'dev.html'); // 修改打包目录
// const prefix = 'REACT_APP';
// const env = process.env[`${prefix}_MY_ENV`] || 'development';
// const isDev = process.env.NODE_ENV === 'development';
// const suffix = env.toUpperCase();
/**
 * 获取各种env
 * @param env
 */
// const getEnv = env => {
//   return process.env[`${prefix}_${env}_${suffix}`];
// };
/**
 * 获取Base url
 */
// const BASE_URL = () => `${getEnv('PROTOCOL')}://${getEnv('BASE_WORK_SPACE')}`;
//原始workbox配置
// { chunks: [],
//   exclude: [ /\.map$/, /asset-manifest\.json$/ ],
//   excludeChunks: [],
//   importsDirectory: '',
//   importScripts: [],
//   importWorkboxFrom: 'cdn',
//   precacheManifestFilename: 'precache-manifest.[manifestHash].js',
//   swDest: 'service-worker.js',
//   clientsClaim: true,
//   navigateFallback: '/index.html',
//   navigateFallbackBlacklist: [ /^\/_/, /\/[^\/?]+\.[^\/]+$/ ]
// };
module.exports = override(
  // !isDev && addBundleVisualizer(),
  // adjustWorkbox(wb => {
  //   return Object.assign(wb, {
  //     directoryIndex: '/',
  //     navigateFallback: undefined,
  //     exclude: (wb.exclude || []).concat('index.html'),
  //     runtimeCaching: [
  //       {
  //         urlPattern: /[.](png|jpg|ico|css|svg)/,
  //         handler: 'CacheFirst',
  //         options: {
  //           cacheName: 'assets-cache',
  //           cacheableResponse: {
  //             statuses: [0, 200],
  //           },
  //         },
  //       },
  //       {
  //         urlPattern: new RegExp(`^${BASE_URL()}.*`),
  //         handler: 'NetworkFirst',
  //         options: {
  //           cacheName: 'http-cache',
  //         },
  //       },
  //     ],
  //   });
  // }),
  useEslintRc(),
  addWebpackPlugin(new LoadablePlugin()),
  addBabelPlugin(['@loadable/babel-plugin']),
  addBabelPlugin(
    [
      'import',
      {
        libraryName: 'antd',
        // libraryDirectory: 'es',
        style: true,
      },
      'ant',
    ],
    // [
    //   'import',
    //   {
    //     libraryName: '@ant-design/icons',
    //     libraryDirectory: 'es/icons',
    //     camel2DashComponentName: false,
    //     style: true,
    //   },
    //   'ai',
    // ],
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
      'am',
    ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lo',
    ],
  ),

  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { "@primary-color": "#1DA57A" }
  }),
);
