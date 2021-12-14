import { HtmlValidate } from 'html-validate-es'
import assert from 'assert'

const validator = new HtmlValidate({
  extends: [
    "html-validate:document",
    "html-validate:recommended",
    "html-validate:standard"
  ],
  rules: {
    "doctype-style": "off",
    "require-sri": "off",
    "attribute-boolean-style": "off",
    "no-inline-style": "off"
  }
})

const res = validator.validateString(`
  < html >
  </html>
`)

console.log(res)

assert(res.errorCount === 2)
assert(res.results.length === 1)

