// 先等图片都加载完成
// 再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
   * 内容JSON
   */
  var demoContent = [
    { // 光影拼图 Light Shadow Puzzle
      demo_link: 'https://www.bilibili.com/video/BV1EU4y1r75T/?spm_id_from=333.999.0.0&vd_source=7f5759036f625cd4d1235ce70c0472e3', // 放b站演示视频或者itch页面
      img_link: 'https://raw.githubusercontent.com/CornfieldChase-XYF/CornfieldChase-XYF.github.io/main/picture/demo/202301161551100.png',  //放封面图片url
      //code_link: 'https://www.bilibili.com/video/BV1EU4y1r75T/?spm_id_from=333.999.0.0&vd_source=7f5759036f625cd4d1235ce70c0472e3', // 这里暂时用b站演示视频占位, 以后可以考虑放下载地址（如百度云盘链接）
      title: '光影拼图 Light Shadow Puzzle',
      //core_tech: string,
      description: '视觉 解密 心灵 2022cusga'
    }, {  // 暗淡蓝点 PALE BLUE DOT
      demo_link: 'https://www.bilibili.com/video/BV1fS4y177cZ/?spm_id_from=333.999.0.0&vd_source=7f5759036f625cd4d1235ce70c0472e3',
      img_link: 'https://raw.githubusercontent.com/CornfieldChase-XYF/CornfieldChase-XYF.github.io/main/picture/demo/202301161552936.png',
      //code_link: 'https://github.com/Gaohaoyang/test/tree/master/headerTransition',
      title: '暗淡蓝点 PALE BLUE DOT',
      //core_tech: string,
      description: '实验游戏 宇宙 gamejam'
    }
  ];

  contentInit(demoContent) //内容初始化
  initGrid()
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  var htmlArr = [];
  for (var i = 0; i < content.length; i++) {
      htmlArr.push('<div class="grid-item">')
      htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
      if(content[i].img_link) {
        htmlArr.push('<img src="'+content[i].img_link+'">')
      }
      htmlArr.push('</a>')
      htmlArr.push('<h3 class="demo-title">')
      htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
      htmlArr.push('</h3>')
      if (content[i].core_tech) {
        htmlArr.push('<p>Main tech：'+content[i].core_tech+'</p>')
      }
      htmlArr.push('<p>'+content[i].description)
      if (content[i].code_link) {
        htmlArr.push('<a href="'+content[i].code_link+'">Source code <i class="fa fa-code" aria-hidden="true"></i></a>')
      }
      htmlArr.push('</p>')
      htmlArr.push('</div>')
  }
  var htmlStr = htmlArr.join('')
  // var htmlStr = ''
  // for (var i = 0; i < content.length; i++) {
  //   htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'

  //   // htmlStr += `
  //   //   <div class="grid-item">
  //   //     <a class="a-img" href="${content[i].demo_link}">
  //   //     <img src="${content[i].img_link}">
  //   // `
  // }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry(grid, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    // percentPosition: true,
    isFitWidth: true,
    gutter: 20
  })

  imagesLoaded(grid).on('progress', throttle(function() {
    // layout Masonry after each image loads
      msnry.layout();
  }, 1600, {
    leading: false,
    trailing: true,
  }));
}

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}
