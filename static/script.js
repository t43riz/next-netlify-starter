<script type="text/javascript" id="ipl4t" data-controller="snippets--predefined-templates--fbq-uuid-to-sub-five-controller">
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
                        fbq('init', '111111', options);
                        fbq('track', 'PageView', options);
                    } else {
                        console.log('[params rewriting] no fbq pixel source to init');
                    }
                    var addParamsToUrl = function (url) {
                        return params =>
                            url + (url.indexOf("?") !== -1 ? "&" : "?") + params.substr(1);
                    };
 
                    var leadFormComponents = document.querySelectorAll("[data-controller=lead-forms--component]");
                    var pageLinks = document.querySelectorAll("a");
                    var forms = document.querySelectorAll("form");
                    var answers = document.querySelectorAll(".button.answer[onclick]")
                    var redirectableEl = document.querySelectorAll("[data-redirect]");
                    var newTabRedirectableEl = document.querySelectorAll("[data-new-tab-redirect]");
 
 
                    console.log('leadFormComponents', leadFormComponents)
                    console.log('forms', forms)
                    window.addEventListener('DOMContentLoaded', (event) => {
                        console.log('DOM fully loaded and parsed');
                        console.log("dom ready leadform", document.querySelectorAll("[data-controller=lead-forms--component]"))
                    });
                    Array.from(leadFormComponents).forEach(leadFormComponent => {
                        var submitRedirectAttr = 'data-lead-forms--component-submit-redirect-url-value'
                        var popupRedirectAttr = 'data-lead-forms--component-submit-popup-url-value'
                        var redirectLink = leadFormComponent.getAttribute(submitRedirectAttr)
                        var popupRedirect = leadFormComponent.getAttribute(popupRedirectAttr)
                        if (redirectLink) leadFormComponent.setAttribute(submitRedirectAttr, addParamsToUrl(redirectLink)("&sub5=" + uuid));
                        if (popupRedirect) leadFormComponent.setAttribute(popupRedirectAttr, addParamsToUrl(popupRedirect)("&sub5=" + uuid));
                    })
                    Array.from(forms).forEach(form => {
                        var redirect_link = form.getAttribute('redirect_link')
                        var new_tab_redirect_link = form.getAttribute('new_tab_redirect_link')
                        if (redirect_link) form.setAttribute('redirect_link', addParamsToUrl(redirect_link)("&sub5=" + uuid));
                        if (new_tab_redirect_link) form.setAttribute('new_tab_redirect_link', addParamsToUrl(new_tab_redirect_link)("&sub5=" + uuid));
                    })
                    Array.from(redirectableEl).forEach(form => {
                        var redirect_link = form.getAttribute('data-redirect')
                        if (redirect_link) form.setAttribute('data-redirect', addParamsToUrl(redirect_link)("&sub5=" + uuid));
                    })
                    Array.from(newTabRedirectableEl).forEach(form => {
                        var new_tab_redirect_link = form.getAttribute('data-new-tab-redirect')
                        if (new_tab_redirect_link) form.setAttribute('data-new-tab-redirect', addParamsToUrl(new_tab_redirect_link)("&sub5=" + uuid));
                    })
                    var extractUrlFromHandler = (clickHandlerStr) => {
                        return clickHandlerStr.slice(clickHandlerStr.indexOf('https'), clickHandlerStr.lastIndexOf("'"));
                    }
                    var extractEverythingBeforeUrl = (clickHandlerStr) => {
                        return clickHandlerStr.slice(0, clickHandlerStr.indexOf('https'))
                    }
                    var extractEverythingAfterUrl = (clickHandlerStr) => {
                        return clickHandlerStr.slice(clickHandlerStr.lastIndexOf("'"), clickHandlerStr.length)
                    }
                    var formatNewHandler = (oldHandlerStr, url) => {
                        return `${extractEverythingBeforeUrl(oldHandlerStr)}${url}${extractEverythingAfterUrl(oldHandlerStr)}`
                    }
                    Array.from(answers).forEach(answer => {
                        var clickHandlerStr = answer.getAttribute("onclick")
                        if (extractUrlFromHandler(clickHandlerStr)) {
                            parsedUrl = addParamsToUrl(extractUrlFromHandler(clickHandlerStr))("&sub5=" + uuid)
                            answer.setAttribute('onclick', formatNewHandler(clickHandlerStr, parsedUrl))
                        }
                    })
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
</script>
 
