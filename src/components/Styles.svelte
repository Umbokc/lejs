<script>
  import Window from './Window.svelte'
  // import {editor} from 'ace-editor-js'
  let params = {
    styles:{
      left: '10%',
      width: '400px',
      height: '200px',
    },
  }

  // panel_style_editor
</script>

<Window params={params}>
  <!-- <div id="panel_style_editor" class="code-wrap"></div> -->
  <textarea id="panel_style_editor" class="code-wrap"></textarea>
</Window>

<style>

  .ace_editor.ace_autocomplete{
    z-index: 11111111111;
  }

  .code-wrap{
    z-index: -1;
    overflow: hidden;
    width: 100%;
    height: calc(100% - 28px);
    min-height: calc(100px - 28px);
    margin-top: 26px;
    border: 0;
    resize: none;
    position: absolute;
    outline: 0;
  }

  .upload{
    position: absolute;right: 6px;top: -2px;font-size: 18px;cursor: pointer;
  }

</style>