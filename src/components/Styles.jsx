import React from 'react';
import {WindowObj} from './WindowObj'
import './styles/Styles.css'


let params = {
	id: 'styles',
	can_move_by_body: true,
	styles:{
		top: '20px',
		left: '215px',
		// width: '400px',
		height: '200px',
	},
	boot(elem){
		return {}
	}
}

// let value = ''
// let lang = 'css'
// let options = {}
// function editorInit (editor) {
// 	// @todo something with editor or something after init
// }
// function onEditorChange (newValue) {
// 	value = newValue.detail;
// }

// function upload_code(){
// 	let code = this.editor.getValue()

// 	this.style_code.innerHTML = this.data['global'] = code;
// }
// function set_editor(){
// 	this.editor = ace.edit("panel_style_editor")
// 	ace.require("ace/ext/language_tools")

// 	this.editor.setOption("enableBasicAutocompletion", !0)
// 	this.editor.setOption("enableSnippets", !1)
// 	this.editor.setOption("enableLiveAutocompletion", !0)
// 	this.editor.setTheme("ace/theme/chrome")
// 	this.editor.session.setMode("ace/mode/scss")
// 	// this.editor.renderer.setScrollMargin(20, 20)
// 	this.editor.session.setUseSoftTabs(!0)
// 	this.editor.setAutoScrollEditorIntoView(!0)
// 	// this.editor.session.setUseWrapMode(!0)
// 	this.editor.session.setTabSize(4)
// 	this.editor.container.style.lineHeight = 1.5
// 	this.editor.renderer.updateFontSize()
// 	// this.editor.renderer.setShowGutter(!1)
// 	this.editor.setShowPrintMargin(!1)
// 	this.editor.resize()
// }


const Styles = (props) => {

	return (
		<WindowObj params={params}>
			<textarea id="panel_style_editor" className="code-wrap"></textarea>
			{/*	<AceEditor
					bind:value={value}
					theme="chrome"
					lang={lang}
					options={options}
					width="100%"
					height="100%"
					on:init={editorInit}
					on:input={onEditorChange}
				/>*/}
		</WindowObj>
	)
}

export default Styles