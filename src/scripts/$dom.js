let $dom = {
  boot(){
    this.__ofElemFunc = (to, call_func) => call_func((typeof to == 'string') ? this.get(to) : to);
    this.isset = (val, alt) => (typeof val !== 'undefined') ? val : alt;
    this.__ofElemsFunc = (to, call_func) => {
      if(typeof to == 'string') {
        this.each(this.gets(to), call_func);
      } else if(Array.isArray(to) || to.length != undefined){
        this.each(to, call_func);
      } else {
        this.each([to], call_func);
      }
    }
    this.each = (arr, call_func)=>{
      if (arr.forEach){
        arr.forEach(call_func);
      } else {
        for (let i = 0, len = arr.length; i < len; i++) {
          console.log(typeof call_func);
          call_func(arr[i], i);
        }
      }
    }

    this.eachMap = (the_map, call_func) =>{
      for (let prop in the_map) {
        if (the_map.hasOwnProperty(prop)) {
          call_func(prop, the_map[prop]);
        }
      }
    }
  },

  get (sel, from, __function) {
    from = (from || document)
    let prop = this.isset(__function, 'querySelector')
    return (prop in from) ? from[prop](sel) : undefined
  },

  id (sel, from) {
    return this.get(sel, from, 'getElementById')
  },

  tagName (sel, from) {
    return this.get(sel, from, 'getElementsByTagName')
  },

  gets (sel, from) {
    return this.get(sel, from, 'querySelectorAll')
  },

  node_text(node) {
    let text
    text = ''
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent
    }
    return text
  },

  create_el(s, options, attrs, html) {
    let new_element = document.createElement(s)

    if (options) {
      for (let i in options) {
        if (!(options.hasOwnProperty(i))) continue
        new_element[i] = options[i]
      }
    }

    if (attrs) {
      for (let i in attrs) {
        if (!(attrs.hasOwnProperty(i))) continue
        new_element.setAttribute(i, attrs[i])
      }
    }

    if (html) {
      new_element.innerHTML = html
    }

    return new_element
  },

  clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
  },

  append(to, elem){
    return this.__ofElemFunc(to, (item) => {
      return item.append(elem);
    });
  },

  hide(elem) {
    this.__ofElemsFunc(elem, (item, index) => {
      item.style.visibility = 'hidden'
      item.style.display = 'none'
    })
  },

  show(elem) {
    this.__ofElemsFunc(elem, (item, index) => {
      item.style.visibility =''
      item.style.display = ''
    })
  },

  hover(to, over, out) {
    this.__ofElemsFunc(to, (item, index) => {
      // item.onmouseover = over
      // item.onmouseout = out
      item.onmouseenter = over
      item.onmouseleave = out
    })
  },

  addClass(to, cl) {
    this.__ofElemsFunc(to, (item) => {
      item.classList.add(cl)
    })
  },

  remClass(to, cl) {
    this.__ofElemsFunc(to, (item) => {
      item.classList.remove(cl)
    })
  },

  toggleClass(to, cl) {
    this.__ofElemsFunc(to, (item) => {
      if (this.hasClass(item, cl))
        this.remClass(item, cl)
      else
        this.addClass(item, cl)
    })
  },

  hasClass(to, cl) {
    return this.__ofElemFunc(to, (item) => {
      let className = " " + cl + " "
      if (!item || item.className === undefined) return null
      return ( (" " + item.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1 )
    });
  },

  parent(to) {
    return this.__ofElemFunc(to, (item) => {
      return item.parentElement
    })
  },

  css (to, data) {
    this.__ofElemsFunc(to, (item) => {
      this.eachMap(data, (key, val)=>{
        item.style[key] = val;
      })
    })
  },

  move_element(div) {
    document.onmousedown = ()=>{}
    div.style.cursor = 'default'
    const indent = 30
    document.onmousemove = function(e) {
      let left1, top1, x, y
      x = e.pageX
      y = e.pageY
      left1 = div.offsetLeft
      top1 = div.offsetTop
      left1 = x - left1
      top1 = y - top1
      document.onmousemove = function(e) {
        x = e.pageX
        y = e.pageY
        let top = y - top1
        let left = x - left1
        if (top < 0) top = 0
        if (top > (window.innerHeight - indent)) top = (window.innerHeight - indent)

        if (left < (-1 * (div.offsetWidth - indent))) left = -1 * (div.offsetWidth - indent)
        if (left > (window.innerWidth -  (2*indent))) left = window.innerWidth -  (2*indent)

        div.style.top = top + 'px'
        div.style.left = left + 'px'
      }
    }
    document.onmouseup = function() {
      div.style.cursor = 'auto'
      document.onmousedown = ()=>{}
      document.onmousemove = ()=>{}
    }
  },

  resizable(element, callback){
    const resizers = element.querySelectorAll(' .resizer')

    const minimum_size = 30
    const indent = 30
    let original_width = 0
    let original_height = 0
    let original_x = 0
    let original_y = 0
    let original_mouse_x = 0
    let original_mouse_y = 0

    for (let i = 0;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })

      function resize(e) {

        if (typeof callback === 'function') {
          callback()
        }

        if (currentResizer.classList.contains('bottom-right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
        }
        else if (currentResizer.classList.contains('bottom-left')) {
          const height = original_height + (e.pageY - original_mouse_y)
          const width = original_width - (e.pageX - original_mouse_x)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
          if (width > minimum_size) {
            let left = original_x + (e.pageX - original_mouse_x)
            if (left <= (window.innerWidth -  (2*indent))){
              element.style.width = width + 'px'
              element.style.left = left + 'px'
            }
          }
        }
        else if (currentResizer.classList.contains('top-right')) {
          let width = original_width + (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            let left = parseInt(element.style.left)

            if (left < (-1*(element.offsetWidth - indent)) && width < element.offsetWidth){
              width = element.offsetWidth
            }

            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            let top = original_y + (e.pageY - original_mouse_y)
            if (top <= 0) top = 0
            if (top > (window.innerHeight - indent)) top = (window.innerHeight - indent)

            element.style.top = top + 'px'
            element.style.height = height + 'px'
          }
        }
        else {
          const width = original_width - (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            let left = original_x + (e.pageX - original_mouse_x)

            if (left <= (window.innerWidth -  (2*indent))){
              element.style.width = width + 'px'
              element.style.left = left + 'px'
            }
          }
          if (height > minimum_size) {
            let top = original_y + (e.pageY - original_mouse_y)
            if (top <= 0) top = 0
            if (top > (window.innerHeight - indent)) top = (window.innerHeight - indent)

            element.style.top = top + 'px'
            element.style.height = height + 'px'
          }
        }
      }

      function stopResize() {
        window.removeEventListener('mousemove', resize)
      }
    }
  },

  loadScript( url, callback ) {
    let script = this.create_el('script', {}, {src: url, type: "text/javascript"})

    if(script.readyState) {
      script.onreadystatechange = function() {
        if ( script.readyState === "loaded" || script.readyState === "complete" ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }

    this.tagName( "head" )[0].appendChild( script );
  },

  ctrlSPressed(callback){
    document.addEventListener("keydown", (e) => {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault()
        callback()
      }
    }, false)
  },

  loadScriptQueue(links, callback){
    let len = links.length

    let load = (index)=>{
      this.loadScript(links[index], () => {
        if (index+1 < len) {
          load(index+1)
        } else {
          callback()
        }
      })
    }

    load(0)
  },

  event(elem, name, callback){
    elem.addEventListener(name, callback)
  }
}

$dom.boot()

module.exports = $dom