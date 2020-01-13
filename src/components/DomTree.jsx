import React from 'react';
import {WindowObj} from './WindowObj'
import './styles/DomTree.css'

let params = {
	id: 'domtree',
	styles:{
		top: 0,
		right: 0,
		// height: '100vh'
	},
}

export const DomTree = ()=>(
	<WindowObj params={params}>
		<ul className="dom"><li className="t10" link="#">DOCTYPE: <code tag="html">html</code></li><li className="t1 isOpen hasChildren" link="#"><code tag="html">HTML</code> <span className="t2"><code className="attrName">lang</code>="<code className="attrValue">en</code>"</span> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">as claas asd asd</code>"</span> <span className="t2"><code className="attrName">aasa</code></span> <span className="t2"><code className="attrName">0</code></span><ul><li className="t1 hasChildren" link="#"><code tag="head">HEAD</code><ul><li className="t1" link="#"><code tag="meta">META</code> <span className="t2"><code className="attrName">charset</code>="<code className="attrValue">UTF-8</code>"</span></li><li className="t1 hasChildren" link="#"><code tag="title">TITLE</code><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>Lets edit js</span></li></ul></li><li className="t1" link="#"><code tag="link">LINK</code> <span className="t2"><code className="attrName">rel</code>="<code className="attrValue">stylesheet</code>"</span> <span className="t2"><code className="attrName">href</code>="<code className="attrValue">\//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css</code>"</span></li><li className="t1" link="#"><code tag="link">LINK</code> <span className="t2"><code className="attrName">rel</code>="<code className="attrValue">stylesheet</code>"</span> <span className="t2"><code className="attrName">href</code>="<code className="attrValue">css/style.css</code>"</span> <span className="t2"><code className="attrName">id</code>="<code className="attrValue">st</code>"</span></li><li className="t1" link="#"><code tag="link">LINK</code> <span className="t2"><code className="attrName">rel</code>="<code className="attrValue">stylesheet</code>"</span> <span className="t2"><code className="attrName">href</code>="<code className="attrValue">css/lej.css</code>"</span></li></ul></li><li className="t1 isOpen hasChildren" link="#"><code tag="body">BODY</code><ul><li className="t1 hasChildren" link="#"><code tag="a">A</code> <span className="t2"><code className="attrName">href</code>="<code className="attrValue">http://software.hixie.ch/utilities/js/live-dom-viewer/</code>"</span><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>http://software.hixie.ch/utilities/js/live-dom-viewer/</span></li></ul></li><li className="t1" link="#"><code tag="br">BR</code></li><li className="t1 hasChildren" link="#"><code tag="a">A</code> <span className="t2"><code className="attrName">href</code>="<code className="attrValue">https://javascript.info/dom-nodes</code>"</span><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>https://javascript.info/dom-nodes</span></li></ul></li><li className="t1" link="#"><code tag="br">BR</code></li><li className="t3" link="#"><code tag="#text">#text</code>: <span>
		Lorem ipsum dolor sit amet.
		</span></li><li className="t1" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">id</code>="<code className="attrValue">aaaa</code>"</span> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">block1 clas asd asd</code>"</span></li><li className="t1 hasChildren" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">block3</code>"</span><ul><li className="t1 hasChildren" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">block4</code>"</span><ul><li className="t1" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">block5</code>"</span></li></ul></li></ul></li><li className="t1 hasChildren" link="#"><code tag="p">P</code> <span className="t2"><code className="attrName">id</code>="<code className="attrValue">text</code>"</span><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quae, iste beatae unde cum maiores obcaecati deleniti temporibus quis. Fugiat officia quia, assumenda laborum atque dolorem minima quis explicabo nam?</span></li></ul></li><li className="t1 hasChildren" link="#"><code tag="div">DIV</code><ul><li className="t1 hasChildren" link="#"><code tag="p">P</code><ul><li className="t1 hasChildren" link="#"><code tag="span">SPAN</code><ul><li className="t1 hasChildren" link="#"><code tag="b">B</code><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>My parents are: </span></li></ul></li></ul></li></ul></li></ul></li><li className="t1 hasChildren" link="#"><code tag="p">P</code> <span className="t2"><code className="attrName">id</code>="<code className="attrValue">text</code>"</span> <span className="t2"><code className="attrName">as</code>="<code className="attrValue">1</code>"</span><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quae, iste beatae unde cum maiores obcaecati deleniti temporibus quis. Fugiat officia quia, assumenda laborum atque dolorem minima quis explicabo nam?</span></li></ul></li><li className="t1" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">id</code>="<code className="attrValue">editorjs</code>"</span></li><li className="t1 hasChildren" link="#"><code tag="div">DIV</code> <span className="t2"><code className="attrName">class</code>="<code className="attrValue">domtree</code>"</span><ul><li className="t3" link="#"><code tag="#text">#text</code>: <span>2</span></li></ul></li><li className="t8" link="#"><code tag="#comment">#comment</code>: <span> &lt;script src="js/ea.v2.js"&gt;&lt;/script&gt; </span></li><li className="t1" link="#"><code tag="script">SCRIPT</code> <span className="t2"><code className="attrName">src</code>="<code className="attrValue">/assets/js/main.js</code>"</span></li></ul></li></ul></li></ul>
	</WindowObj>
)
