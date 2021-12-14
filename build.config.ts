import { defineBuildConfig } from 'unbuild'
import { resolve } from 'path'

const mocksFile = resolve(__dirname, 'src/mocks.ts')

export default defineBuildConfig({
  declaration: true,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
    replace: {
      preventAssignment: false,
      delimiters: ['', ''],
      values: {
        'node:url': 'url',
        'legacyRequire(': 'require(',
        'require("espree")': '{}',
        'require("acorn-walk")': '{}',
        'createRequire(import.meta.url)': 'null'
      }
    }
  },
  // TODO: use unenv
  alias: {
    url: mocksFile,
    fs: mocksFile,
    os: mocksFile,
    tty: mocksFile,
    path: mocksFile,
    module: mocksFile,
    chalk: mocksFile
  },
  entries: [
    './src/html-validate'
  ],
  hooks: {
    'build:prepare'(ctx) {
      // Disable node built-ins
      ctx.options.externals = []
    }
  }
})
