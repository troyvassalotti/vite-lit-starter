import { LitElement, html, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

/**
 * @tag component-name
 * @summary This component does something.
 */
@customElement('component-name')
export default class ComponentName extends LitElement {
	@property()
	hello = '';

	@state()
	world = '';

	render(): TemplateResult {
		return html``
	}
}
