import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/DevToolsPlugin.js',
  output: {
    file: 'dist/DevToolsPlugin.js',
    name: 'DevToolsPlugin',
    format: 'iife'
  },
  plugins: [nodeResolve({
    resolveOnly: ['@katalon/chrome-recorder', '@puppeteer/replay']
  })]
};
