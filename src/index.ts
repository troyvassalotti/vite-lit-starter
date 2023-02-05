import { LitElement, html, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

/**
 * @tag beats-per
 * @summary Calculate the beats per minute through interaction.
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
