import Html5Elements from 'html-validate/elements/html5.json'
import { HtmlValidate as _HtmlValidate } from 'html-validate/dist/es/browser.js'

export class HtmlValidate extends _HtmlValidate {
  constructor(options = {}) {
    super({
      elements: [Html5Elements],
      ...options
    })
  }
}

export {
  Config,
  ConfigError,
  ConfigLoader,
  DynamicValue,
  EventHandler,
  HtmlElement,
  MetaCopyableProperty,
  MetaTable,
  NodeClosed,
  Parser,
  Reporter,
  Rule,
  SchemaValidationError,
  Severity,
  StaticConfigLoader,
  TemplateExtractor,
  TextNode,
  UserError,
  configPresets,
  ruleExists,
  version
} from 'html-validate/dist/es/browser.js'

export type {
  ConfigData
} from 'html-validate/dist/es/browser.js'
