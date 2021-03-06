import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-import-css';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [image(), nodeResolve(), commonjs(), typescript(), terser(), css()],
  external: ['react', 'react-dom', 'fs'],
};
