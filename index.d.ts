export type Plugin = {
	(): {
		postcssPlugin: 'postcss-inset'
		Declaration: void
	}
	postcss: true
}

declare const plugin: Plugin

export default plugin
