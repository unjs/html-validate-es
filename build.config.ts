import { defineBuildConfig } from 'unbuild'

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
        'require("acorn-walk")': '{}'
      }
    }
  },
  entries: [
    './src/html-validate'
  ]
})
