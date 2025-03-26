!function (f, b, e, v, n, t, s) {
    if (f.tlq) return; n = f.tlq = function () {
        n.callMethod ?
            n.callMethod(arguments) : n.queue.push(arguments)
    };
    if (!f._tlq) f._tlq = n; n.push = n; n.loaded = !0; n.version = '1.0'; n.src = v;
    n.queue = []; t = b.createElement(e); t.async = !0; n.pd = false; n.tools = null;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s); t.onerror = function () {
        v = 'https://trackulation-img-new.vercel.app/js/script-dynamic.js';
        f._tlq.src = v; t = b.createElement(e); t.async = !0; t.src = v;
        s.parentNode.insertBefore(t, s)
    }
}(window, document, 'script',
    'https://trackulation-img-new.vercel.app/js/script-dynamic.js')

tlq('init', 'LS-41417139-3');


tlq('track', 'PageView');