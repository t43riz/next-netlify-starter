    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        ' https://connect.facebook.net/en_US/fbevents.js');
 
    (function () {
        try {
            var rewriteDOM = function () {
                Promise.resolve().then(function () {
                    var uuidGen = function () {
                        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                            (
                                c ^
                                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
                            ).toString(16)
                        );
                    };
                    var uuid = uuidGen();
                    var options = {
                        external_id: uuid
                    }
                    if (typeof fbq != 'undefined' && fbq) {
                        fbq('init', '486052720050258', options);
                        fbq('track', 'PageView', options);
                    } else {
                        console.log('[params rewriting] no fbq pixel source to init');
                    }
                    var addParamsToUrl = function (url) {
                        return params =>
                            url + (url.indexOf("?") !== -1 ? "&" : "?") + params.substr(1);
                    };
 
                   
                    var pageLinks = document.querySelectorAll("a");
                   
                    Array.from(pageLinks).forEach(link => {
                        var href = link.href;
                        if (href) link.href = addParamsToUrl(href)("&sub5=" + uuid);
                    });
 
                    function getMetaValue(name) {
                        const element = document?.head?.querySelector(`meta[name="${name}"]`)
                        return element?.getAttribute("content")
                    }
 
                    function saveToLS(key, value) {
                        return new Promise((resolve, reject) => {
                            try {
                                localStorage.setItem(key, JSON.stringify(value))
                                const results = JSON.parse(localStorage.getItem(key))
                                resolve(results)
                            } catch (error) {
                                reject(error)
                            }
                        })
                    }
 
                    saveToLS("fb_sub_five", uuid).then(() => {
                        window.dispatchEvent(new Event("storage"))
                        console.log('teststorage')
                    })
                });
            }
            if (document && document.readyState && document.readyState === "complete") {
                rewriteDOM()
            } else {
                window.addEventListener("DOMContentLoaded", () => {
                    rewriteDOM()
                });
            }
        } catch (e) {
            console.log('[params rewriting] ERROR', e)
        }
    }())
 
