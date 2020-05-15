import Vue from 'vue'

Vue.directive('m-drag', function (el) {
    // console.log(el, 'el-------------------');
    let startPoint = null;
    let movePoint = null;
    let difDistance = null;
    let endTransform = null;
    initParams();

    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);

    function start(ev) {
        ev = ev || window.event;
        let touch = getTouches(ev);
        // console.log(touch, '----');

        startPoint = {
            x: touch.clientX,
            y: touch.clientY,
        }


        document.addEventListener("mousemove", move, { passive: false });
        document.addEventListener("touchmove", move, { passive: false });

        document.addEventListener("mouseup", end);
        document.addEventListener("touchend", end);
    }
    function move(ev) {
        ev = ev || window.event;
        ev.preventDefault();
        let touch = getTouches(ev);
        // console.log(startPoint, 'move ----------');

        movePoint = {
            x: touch.clientX,
            y: touch.clientY,
        }

        difDistance = {
            x: movePoint.x - startPoint.x + endTransform.x,
            y: movePoint.y - startPoint.y + endTransform.y,
        }

        // console.log(difDistance.x, 'difDistance')

        el.style.transform = `translate(${difDistance.x}px, ${difDistance.y}px)`;


        // 更新起始位置
        // startPoint = {
        //     ...movePoint
        // }
    }
    function end(ev) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", move);

        document.removeEventListener("mouseup", end);
        document.removeEventListener("touchend", end);

        endTransform = {
            ...difDistance
        }

        // console.log(difDistance, 'end ----------');
    }

    // 获取 兼容pc/移动端事件对象
    function getTouches(ev) {
        if (ev.touches) {
            return event.touches[0];
        } else {
            return event;
        }
    }

    // 初始化参数
    function initParams(ev) {
        startPoint = {
            x: 0,
            y: 0
        };

        movePoint = {
            x: 0,
            y: 0
        };

        difDistance = {
            x: 0,
            y: 0
        }

        endTransform = {
            x: 0,
            y: 0
        }
    }
})
