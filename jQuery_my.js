; (function () {
    //实现基本的选择器
    //$(css选择器)
    function jQuery(selector) {
        //在使用的时候简单点,在new上面再包一层.
        return new Init(selector);
    }
    //将所有的方法都放在原型的对象上
    function Init(selector) {
        //jq对象要求是一个伪数组,什么事伪数组:使用数字作为属性名的对象
        let dom = document.querySelectorAll(selector);
        for (let i = 0; i < dom.length; i++) {
            this[i] = dom[i];
        }
        //伪数组没有长度,所以给它添加一个长度
        this.length = dom.length;
    }

    Init.prototype.css = function (property, value) {
        //如果没有传入value这个值,就只是获取
        if (value == undefined) {
            return window.getComputedStyle(this[0])[property];
        } else {
            //定义那些带单位的数组
            let pxArr = ['width', 'height', 'left', 'right', 'top', 'bottom', 'fontSize', 'margin-left', 'margin-right', 'margin-bottom', 'margin-top', 'margin'];
            //把伪数组的所有数都遍历一遍,设置她的css样式.
            for (let i = 0; i < this.length; i++) {
                //把带单位的属性和不带单位的数组分开.
                if (pxArr.indexOf(property) !== -1) {
                    //判断是否带了px      indexOf('String'):判断字符串中有没有这个值有就输出这个数的位置,没有这个数就输出-1;
                    if (value.toString().indexOf('px') === -1) {
                        this[i].style[property] = value + 'px';
                    } else {
                        this[i].style[property] = value;
                    }
                } else {
                    this[i].style[property] = value;
                }
            }
            return this;
        }
    }


    //实现addClass功能
    /**
     * jq里的addClass方法
     *      jq对象.addClass(类名);
     */
    //设置这个功能的名字
    Init.prototype.addClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(className);
        }
        return this;
    }



    /**
     * 封装removeClass类
     *      jq对象.removeClass(类名);
     */
    Init.prototype.removeClass = function (className) {
        this.each(function (i, e) {
            e.classList.remove(className);
        });
        return this;
    }

    /**
     * 切换类名
     *      jq对象.toggleClass(类名)
     */
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
            e.classList.toggle(className);
        });
        return this;
    }

    Init.prototype.attr = function (name, value) {
        var arr = []
        this.each(function (i, e) {
            arr.push(e.getAttribute('name'))
        })
        return arr
    }

    Init.prototype.classList
    //让封装的jq函数变成一个Window属性,可以在外面使用.
    window.$ = window.jQuery = jQuery;
})();