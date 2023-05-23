import WasentoPricing from './components/WasentoPricing.ce.vue'
import { defineCustomElement } from 'vue'

const element = defineCustomElement(WasentoPricing)
customElements.define('wasento-pricing', element)
