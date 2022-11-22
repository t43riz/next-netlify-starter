import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<body>
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
                        fbq('init', '11111111', options);
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
  <div id="icax">
    <div class="container mx-auto px-8 py-4 my-3">
      <h1 class="p-2 text-5xl leading-relaxed font-bold text-center">New 2022 Senior Relief Hacks
        <br/>
      </h1>
      <div class="full-width">
        <a href="https://path.searchformoney.io/lander_pages/29" id="ivyi"></a>
      </div>
      <hr size="5" color="#cccccc" id="ihrjg"/>
      <h3 class="p-2 text-3xl leading-relaxed font-bold text-center">
        <a href="https://www.andd56trk.com/cmp/5657H/6G8W241/?source_id=1090095" id="ip195">Seniors Over 64 are Taking Advantage of This $1,200 Giveback Program<br/></a>
      </h3>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6G8W241/?source_id=1090095" data-link-redirect-new-tab-url-value="" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        <img id="iputl" src="https://landeradmin.s3.amazonaws.com/uploads/image/url/21/imgonline-com-ua-compressed-6mugBTGKEO.jpg"/>
      </div>
      <p class="py-2 text-lg">If you&#039;re a senior that&#039;s on medicare, you could be due an extra $1,200 from this medicare supplement B giveback program. This can help you cover grocery and OTC costs. Dental coverage can also even be included in the benefits you receive. Just click the link below to check out what you could qualify for!
        <br/>
      </p>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6G8W241/?source_id=1090095" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        <button data-controller="button-base" data-action="button-base#click" class="shadow rounded w-full py-4 my-2 text-2lg text-white bg-primary text-[#fff]">Claim Now</button>
      </div>
      <hr size="5" color="#cccccc" id="i7rqi"/>
      <h3 class="p-2 text-3xl leading-relaxed font-bold text-center">
        <a href="https://www.andd56trk.com/cmp/5657H/6GB4X4G/?source_id=1090095" id="ijfr6">Safe Drivers Paying More Than $29/Mo for Car Insurance are Putting More than $700 Back in Their Pockets with This Hack</a>
        <br/>
      </h3>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6GB4X4G/?source_id=1090095" data-link-redirect-new-tab-url-value="" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        <img src="https://landeradmin.s3.amazonaws.com/uploads/image/url/22/Usdpfwrpug__1_f.jpeg" id="iufj9"/>
      </div>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6CJTJ3N/?source_id=690045" data-link-redirect-new-tab-url-value="" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
      </div>
      <p class="py-2 text-lg">It is widely known that many people pay far too much for their car insurance. Generally, depending on age and driving history, individuals could qualify for huge discounts &amp; savings on their policies. The problem is that most fail to compare and simply let their existing policies renew year after year... For most, if you pay more than $29/month for car insurance, you are very likely overpaying for your policy.
        <br/>
        <br/>Thanks to this innovative new website, most Americans can take advantage of up to $712 in savings which may be available, yet most don’t even know about! The site is super easy to use and allows you to see instantly how much lower your new rate is. Click here to see if you qualify to for up to $712 back in your pockets.
      </p>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6GB4X4G/?source_id=1090095" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        <button data-controller="button-base" data-action="button-base#click" class="shadow rounded w-full py-4 my-2 text-2lg text-white bg-primary text-[#fff]">Claim Now</button>
      </div>
      <hr size="5" color="#cccccc" id="imzrv"/>
      <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6GCCS4X/?source_id=1090095" data-link-redirect-new-tab-url-value="" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        <div data-gjs="redirectable_element" data-controller="link-redirect" data-link-redirect-current-tab-url-value="https://www.andd56trk.com/cmp/5657H/6GCCS4X/?source_id=1090095" data-action="click->link-redirect#interceptClickWithRedirect" class="cursor-pointer">
        </div>
        <hr size="5" color="#cccccc" id="iz09b"/>
      </div>
    </div>
  </div>
  <footer class="progressbar-template-footer flex justify-start items-center flex-col h-auto bg-gray-100 w-full font-opensans">
    <div class="legal-wrapper w-4/5 text-sm font-light leading-normal mx-auto md:max-w-screen-lg md:px-12">
      <p class="text-center text-xxs leading-tight mb-4 lg:mb-2 lg:text-xs">
        <br/>The information above has been fact-checked and updated for accuracy.
        <br/>
        <br/>This page is an advertorial, and not an actual news article, blog or consumer protection update. This is not a government program nor is it government aid, this is an advertorial for a loan service. T&amp;C Apply, see site for details!
        <br/>
        <br/>Trademarks utilized on our website belong to their respective owners and no implied or expressed endorsement of our website or services is intended. Through in-depth research and experienced editors we provide feedback about products and services. We are independently owned, and opinions expressed here are our own.
        <br/>
        <br/>THIS IS AN ADVERTORIAL AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE. We are dedicated to bringing readers valuable information which can help them accomplish their financial and lifestyle goals. Our disclaimer is that this site does receive compensation for product reviews and referrals or purchases made through our links. This page is an advertisement/advertorial. The story depicted here is for demonstration purposes only and everyone&#039;s results may vary. We hope you find our online resource informative and helpful. This site is in no way affiliated with any news source. This site contains affiliate and partner links. This website and the company that owns it is not responsible for any typographical or photographic errors. If you do not agree to our terms and policies, then please leave this site immediately. All trademarks, logos, and service marks (collectively the &quot;Trademarks&quot;) displayed are registered and/or unregistered Trademarks of their respective owners. Contents of this website are copyrighted property of the reviewer and/or this website. 
      </p>
      <p class="text-center text-xxs mb-4 lg:mb-2 lg:text-xs">
        <br/>© 2022 path.yourbenefitsworth
      </p>
    </div>
    <div class="menu mb-4">
      <a href="https://yourbenefitsworth.com/terms" class="text-center text-xs text-gray-400 mx-1">Terms and Service</a>
      <a href="https://yourbenefitsworth.com/privacy" class="text-center text-xs text-gray-400 mx-1">Privacy Policy</a>
    </div>
  </footer>
</body>
  )
}
