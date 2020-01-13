<script>
	import WindowObj from './WindowObj.svelte'
	import 'ace-editor-js'

	let params = {
		id: 'props',
		can_move: false,
		can_move_by_body: false,
		styles:{
			top: 0,
      right: 0,
		},
	}
</script>

<WindowObj params={params}>
</WindowObj>

<style>
	*>*, *{
		box-sizing:border-box;
		margin:0;
		padding:0;
		color: black;
		font-family: monospace;
	}

	ul li{
		list-style:none
	}

	#panel{
		position:fixed;
		top:0;
		right:0;
		height:100vh;
		width:320px;
		background-color:#f7f7f7;
		border:1px solid #e4e4e4;
		font-family:sans-serif;
		z-index:1.1111111111111111e+21;
		margin-right:10px;
	}
	#panel *{
		box-sizing:border-box
	}
	#panel [row]{
		border-bottom:1px solid #e4e4e4;
		padding:0;
	}
	#panel [row] [col]{
		border-right:1px solid #e4e4e4;
		padding:.7em
	}
	#panel input{
		border:none;
		background:transparent;
		border-bottom:1px solid #e4e4e4
	}
	#panel [prop=width] input{
		width:38%
	}
	#panel [prop=height] input{
		width:38%
	}
	#panel [prop=opacity] .number{
		position:relative;
	}
	#panel [prop=opacity] .number input{
		position:relative;
		width:45%
	}
	#panel [prop=opacity] .range input{
		-webkit-appearance:none;
		width:100%;
		height:4px;
		border-radius:5px;
		background:#4794db;
		outline:none;
		opacity:.7;
		-webkit-transition:.2s;
		transition:opacity .2s;
	}
	#panel [prop=opacity] .range input::-webkit-slider-thumb{
		-webkit-appearance:none;
		appearance:none;
		cursor:ew-resize;
		width:15px;
		height:15px;
		border-radius:50%;
		background:#fdfdfd;
		cursor:pointer;
		border:1px solid #cecfcf
	}
	#panel [prop=opacity] .range input::-moz-range-thumb{
		width:15px;
		height:15px;
		border-radius:50%;
		background:#fdfdfd;
		cursor:pointer;
		border:1px solid #cecfcf
	}
	#panel [prop=opacity] .range input::-moz-range-progress{
		background-color:#4794db
	}
	#panel [prop=opacity] .range input::-moz-range-track{
		background-color:#4794db
	}
	#panel [prop=opacity] .range input::-ms-fill-lower{
		background-color:#4794db
	}
	#panel [prop=opacity] .range input::-ms-fill-upper{
		background-color:#4794db
	}
	#panel [prop=text-align] a,#panel [prop=vertical-align] a{
		color:#666
	}
	#panel [prop=text-align] a.active,#panel [prop=vertical-align] a.active{
		color:#2094e9
	}
	#panel input[type=number]::-webkit-inner-spin-button,#panel input[type=number]::-webkit-outer-spin-button{
		-webkit-appearance:none;
		-moz-appearance:none;
		appearance:none;
		margin:0
	}
	#panel [prop="opacity"] input,#panel [prop="width"] input,#panel [prop="height"] input{
		font-size:.9em
	}
</style>