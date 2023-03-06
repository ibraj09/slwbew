(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{802:function(e,t,o){"use strict";o.r(t);var a=o(38),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("This page is for when you encounter a problem with a source or the app.")]),e._v(" "),o("h3",{attrs:{id:"what-are-some-common-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-some-common-issues"}},[e._v("#")]),e._v(" What are some common issues?")]),e._v(" "),o("el-collapse",[o("el-collapse-item",{attrs:{title:"Java.lang Exception: Failed to bypass Cloudflare"}},[o("p",[o("strong",[e._v("Java.lang.Exception: Failed to bypass Cloudflare")]),e._v(" means that the source you selected has "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(" protection on, refer to the "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(" guide to fix it. If the solutions provided do not fix the issue, the source has likely raised the Cloudflare protection level high enough that Tachiyomi is not able to access the site.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 403"}},[o("p",[e._v("Possible reasons for "),o("strong",[e._v("HTTP error 403")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("The source you selected has "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(" protection on, refer to the "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(" guide to fix it.")]),e._v(" "),o("li",[e._v("The source is down, removed the manga, or banned your IP. Open "),o("NavigationText",{attrs:{item:"webview"}}),e._v(" to check if this is the case.")],1)])]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 404"}},[o("p",[o("strong",[e._v("HTTP error 404")]),e._v(" probably means that the source is down or removed the manga. Open "),o("NavigationText",{attrs:{item:"webview"}}),e._v(" to check if this is the case. "),o("RouterLink",{attrs:{to:"/source-migration/#migrating-on-stable-preview"}},[e._v("Migrate")]),e._v(" to a different source for this manga if you'd like.")],1)]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 429 (Too Many Requests)"}},[o("p",[o("strong",[e._v("HTTP error 429")]),e._v(" or "),o("strong",[e._v("Too Many Requests")]),e._v(" means that the source banned your IP address (in most cases, it's temporary) because you could be downloading or reading too fast. We suggest "),o("a",{attrs:{href:"https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("reporting"),o("OutboundLink")],1),e._v(" the issue so that a rate limit can be added to prevent IP bans in the future.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 5xx"}},[o("p",[o("strong",[e._v("HTTP error 5xx")]),e._v(" like "),o("strong",[e._v("500, 502")]),e._v(" and others are server-side errors, and the source you are trying to access has problems on their side. Open the source in "),o("NavigationText",{attrs:{item:"webview"}}),e._v(" and check if the site is down.")],1)]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 1006"}},[o("p",[o("strong",[e._v("HTTP error 1006")]),e._v(" means that the source has banned your IP address (in most cases, it's temporary).")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 1020"}},[o("p",[o("strong",[e._v("HTTP error 1020")]),e._v(" means that you have violated a firewall rule the site owner has put up. This usually means that the site owner has raised the Cloudflare protection level or that the site owner is blocking IPs outside their country.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Unable to resolve host / Connection failed / Failed to connect to / timeout / connection reset"}},[o("p",[e._v("Errors like "),o("strong",[e._v("Unable to resolve host")]),e._v(", "),o("strong",[e._v("Connection failed")]),e._v(", "),o("strong",[e._v("Failed to connect to")]),e._v(", "),o("strong",[e._v("timeout")]),e._v(", "),o("strong",[e._v("connection reset")]),e._v(" mean that something is preventing you from connecting to the source.")]),e._v(" "),o("p",[e._v("Possible reasons include:")]),e._v(" "),o("ul",[o("li",[e._v("Your internet connection is not good enough to connect.")]),e._v(" "),o("li",[e._v("The app does not have access to the internet.")]),e._v(" "),o("li",[e._v("Your ISP has blocked the site.")]),e._v(" "),o("li",[e._v("The site is down.")])]),e._v(" "),o("p",[e._v("Try the following solutions to fix this issue:")]),e._v(" "),o("ul",[o("li",[e._v("Enable "),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(" → "),o("strong",[e._v("DNS over HTTPS")]),e._v(".")],1),e._v(" "),o("li",[e._v("Use a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).")]),e._v(" "),o("li",[e._v("Reboot your router.")])])]),e._v(" "),o("el-collapse-item",{attrs:{title:"java.security.cert.CertPathValidatorException / Chain validation failed"}},[o("p",[o("strong",[e._v("java.security.cert.CertPathValidatorException")]),e._v(" or "),o("strong",[e._v("Chain validation failed")]),e._v(" means there is a problem with validating source's sertificate.")]),e._v(" "),o("ul",[o("li",[e._v("Check if the site's certificate has expired. Use an online service for checking SSL certificates. If the certificate has expired, wait while the site owner to renew it.")]),e._v(" "),o("li",[e._v("Ensure that you have the right date and time set on your device.")]),e._v(" "),o("li",[e._v("Try "),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(" → "),o("strong",[e._v("Clear cache")]),e._v(" and "),o("strong",[e._v("Clear cookies")]),e._v(".")],1),e._v(" "),o("li",[e._v("Try using a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).")]),e._v(" "),o("li",[e._v("Try restarting the device.")])])]),e._v(" "),o("el-collapse-item",{attrs:{title:"App not installed"}},[o("p",[e._v("Refer to "),o("a",{attrs:{href:"#unable-to-install-the-app-or-extensions"}},[e._v("this")]),e._v(" section.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Attempt to invoke virtual method 'com.hippo.unifile..."}},[o("p",[e._v("The "),o("strong",[e._v("Attempt to invoke virtual method' com.hippo.unifile...")]),e._v(" error can be caused by various reasons, but they all have to do with storage.")]),e._v(" "),o("ul",[o("li",[e._v("Most commonly, it is caused by full storage. Check to see if your device or SD card is full.")]),e._v(" "),o("li",[e._v("Check if "),o("strong",[e._v("Tachiyomi")]),e._v(" has access to the SD card. You can enable it in Android settings for app permissions.")]),e._v(" "),o("li",[e._v("If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.")]),e._v(" "),o("li",[e._v("The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.")])])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Cannot Access SD Card"}},[o("p",[e._v("The "),o("strong",[e._v("Cannot Access SD Card")]),e._v(" error can sometimes be fixed by changing the location of your downloads to somewhere else and back to the SD card, then restarting the app.")]),e._v(" "),o("p",[e._v("Having a file or folder name that is too long can also cause this issue. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD card.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Storage issues with Android 11+"}},[o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/help/faq/#android-11"}},[e._v("this")]),e._v(" section of the FAQ to learn how Scoped Storage affects Tachiyomi in Android 11+ and how to fix it.")],1)]),e._v(" "),o("el-collapse-item",{attrs:{title:"Slow loading"}},[o("ElAlert",{attrs:{type:"info",title:"Disclaimer",description:"Tachiyomi is not hosting any content, we are not affiliated with or responsible for any source that is; slow, down, missing chapters, or has subpar image quality.","show-icon":"",closable:!1}}),e._v(" "),o("p",[e._v("If any sources are slow, it is likely due to the site being slow, your internet being slow, or a ratelimit applied to the source to reduce load or IP bans.")])],1),e._v(" "),o("el-collapse-item",{attrs:{title:"Reading is laggy"}},[o("p",[e._v("This is usually due to the images in the chapters being too long or large for the reader to handle. If you turn have "),o("strong",[e._v("32-bit color")]),e._v(" on, try turning it off under "),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_reader"}}),e._v(". This helps sometimes to free up some RAM being used. To eliminate this issue, find a different source that cuts the chapter into more pieces or downscales the images.")],1)])],1),e._v(" "),o("div",{staticClass:"custom-block c-warning"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("If error-specific instructions didn't help or your error isn't on the list, go through "),o("a",{attrs:{href:"#diagnosis"}},[e._v("Diagnosis")]),e._v(".")])]),o("h2",{attrs:{id:"diagnosis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagnosis"}},[e._v("#")]),e._v(" Diagnosis")]),e._v(" "),o("ul",[o("li",[e._v("Verify your extensions are up to date ("),o("NavigationText",{attrs:{item:"browse"}}),e._v(" → "),o("strong",[e._v("Extensions")]),e._v(", make sure no extensions have an "),o("strong",[e._v("Update")]),e._v(" button).")],1),e._v(" "),o("li",[e._v("Check if "),o("strong",[e._v("Tachiyomi")]),e._v(" has an update ("),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"about"}}),e._v(" then tap "),o("strong",[e._v("Check for updates")]),e._v(").")],1),e._v(" "),o("li",[e._v("Manually refresh the manga you are having issues with by dragging down.")]),e._v(" "),o("li",[e._v("Check other manga from the source.")]),e._v(" "),o("li",[e._v("Verify that "),o("a",{attrs:{href:"#update-webview"}},[e._v("WebView")]),e._v(" is updated.")]),e._v(" "),o("li",[e._v("Try opening the manga in "),o("NavigationText",{attrs:{item:"webview"}}),e._v(". If there is a "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(" protection, wait for it to load. If there is a "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("CAPTCHA")]),e._v(", solve it and see if it helped.")],1),e._v(" "),o("li",[e._v("Change your internet connection ("),o("em",[e._v('switch to Wi-Fi, mobile data or a VPN, use a "What\'s my IP" site to confirm your IP has changed')]),e._v("), then try again.")]),e._v(" "),o("li",[e._v("Ask other users to try the action that gives you the error.")]),e._v(" "),o("li",[e._v("Check if the source is either down, or is having issues in a browser.")]),e._v(" "),o("li",[e._v("Press the retry button in the middle of your manga page if one exists.")]),e._v(" "),o("li",[e._v("Try the following at "),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Clear Cache")])]),e._v(" "),o("li",[o("strong",[e._v("Clear Cookies")])]),e._v(" "),o("li",[o("strong",[e._v("Clear Database")])]),e._v(" "),o("li",[o("strong",[e._v("DNS over HTTPS")])])])],1),e._v(" "),o("li",[e._v("If your downloads are getting stuck, try deleting the queue and trying again.")]),e._v(" "),o("li",[e._v("Force close "),o("strong",[e._v("Tachiyomi")]),e._v(" and reopen it.")])]),e._v(" "),o("div",{staticClass:"custom-block c-tip"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("An extension update may fix your issue. Wait or check for an extension update if you have not already. There are no ETAs for updates.")])]),o("p",[e._v("If any of these solutions help, go to "),o("a",{attrs:{href:"#it-only-happens-to-me"}},[e._v("it only happens to me")]),e._v(".\nIf it is not just you, go to "),o("a",{attrs:{href:"#everyone-is-having-this-problem"}},[e._v("everyone is having this problem")]),e._v(".")]),e._v(" "),o("p",[e._v("If none of these solutions help, try asking in our "),o("a",{attrs:{href:"https://discord.gg/tachiyomi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Server"),o("OutboundLink")],1),e._v(". Check "),o("strong",[e._v("#status-updates")]),e._v(" first to see if your issue is known. State your app version and the source, manga, and chapter with the problem if it is not listed.")]),e._v(" "),o("h3",{attrs:{id:"it-only-happens-to-me"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-only-happens-to-me"}},[e._v("#")]),e._v(" It only happens to me")]),e._v(" "),o("p",[e._v("You may be getting a "),o("a",{attrs:{href:"#solving-the-cloudflare-issue"}},[e._v("Cloudflare")]),e._v(" protection, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like "),o("strong",[e._v("Tachiyomi")]),e._v(". If that is the case, there is probably nothing that "),o("strong",[e._v("Tachiyomi")]),e._v(" can do to solve it. Some of them (like "),o("a",{attrs:{href:"#solving-cloudflare-issues"}},[e._v("Cloudflare")]),e._v(") have to be manually solved, and some are temporary (IP bans).")]),e._v(" "),o("p",[o("strong",[e._v("Workarounds that can the lower chance of an issue happening again:")])]),e._v(" "),o("ul",[o("li",[e._v("Don't use downloads with the source.")]),e._v(" "),o("li",[e._v("Have less manga in your library from the source.")])]),e._v(" "),o("div",{staticClass:"custom-block c-warning"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("The above are imprecise and fuzzy rules because each site has its non-public limits and triggers.")])]),o("h3",{attrs:{id:"everyone-is-having-this-problem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#everyone-is-having-this-problem"}},[e._v("#")]),e._v(" Everyone is having this problem")]),e._v(" "),o("p",[e._v("If the site is reachable and fully functional, there may be an issue with the extension or app.")]),e._v(" "),o("ol",[o("li",[e._v("Have a look at open issues "),o("a",{attrs:{href:"https://github.com/tachiyomiorg/tachiyomi/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("for the app"),o("OutboundLink")],1),e._v(" and/or "),o("a",{attrs:{href:"https://github.com/tachiyomiorg/tachiyomi-extensions/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("It may have been fixed already but not released yet, so look at closed issues ("),o("a",{attrs:{href:"https://github.com/tachiyomiorg/tachiyomi/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("app"),o("OutboundLink")],1),e._v(" / "),o("a",{attrs:{href:"https://github.com/tachiyomiorg/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(") issues as well.")]),e._v(" "),o("li",[e._v("If you can't find the issue there, open a new one.")])]),e._v(" "),o("p",[e._v("If the site is not reachable or has issues, all you can do is wait for the site to become functional again.")]),e._v(" "),o("h2",{attrs:{id:"solving-cloudflare-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solving-cloudflare-issues"}},[e._v("#")]),e._v(" Solving Cloudflare issues")]),e._v(" "),o("p",[e._v("Cloudflare is an anti-bot mechanism. Some sources intentionally have a higher Cloudflare protection level to block apps like Tachiyomi. You can try the following suggestions to help resolve Cloudflare challenges. If they don't work, migrate to other sources or wait until they lower their protection.")]),e._v(" "),o("h3",{attrs:{id:"loading-the-website-in-webview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-the-website-in-webview"}},[e._v("#")]),e._v(" Loading the website in WebView")]),e._v(" "),o("p",[e._v("Try to load the website in "),o("strong",[e._v("WebView")]),e._v(". "),o("strong",[e._v("Note that WebView is not the same as using your browser.")])]),e._v(" "),o("div",{staticClass:"guide"},[o("p",{staticClass:"title"},[e._v("How to open WebView")]),o("ol",[o("li",[e._v("Go to "),o("NavigationText",{attrs:{item:"browse"}}),e._v(" in the bottom navbar.")],1),e._v(" "),o("li",[e._v("Press the source you would like to access.")]),e._v(" "),o("li",[e._v("Press the "),o("NavigationText",{attrs:{item:"webview"}}),e._v(" icon in the top toolbar.")],1),e._v(" "),o("li",[e._v("Complete a "),o("strong",[e._v("CAPTCHA")]),e._v(" if one is shown.")]),e._v(" "),o("li",[e._v("Once done, press the X at the top left to return.")])])]),o("p",[e._v("You may need to try this multiple times. You can also try pressing the "),o("NavigationText",{attrs:{item:"overflow"}}),e._v(" icon, opening the website in your regular browser, then checking for a CAPTCHA there.")],1),e._v(" "),o("p",[e._v("Some sources may have more advanced "),o("strong",[e._v("Cloudflare")]),e._v(" protection. If you are facing issues, try the following options.")]),e._v(" "),o("h3",{attrs:{id:"clearing-webview-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clearing-webview-data"}},[e._v("#")]),e._v(" Clearing WebView data")]),e._v(" "),o("div",{staticClass:"guide"},[o("p",{staticClass:"title"},[e._v("GUIDE")]),o("ol",[o("li",[e._v("In the "),o("NavigationText",{attrs:{item:"webview"}}),e._v(' screen, try "Clear cookies" then "Refresh" from the '),o("NavigationText",{attrs:{item:"overflow"}}),e._v(" menu.")],1),e._v(" "),o("li",[e._v("Go to "),o("NavigationText",{attrs:{item:"more"}}),e._v(" in the bottom navbar, then "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(', then select "Clear WebView data".')],1)])]),o("h3",{attrs:{id:"changing-your-user-agent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changing-your-user-agent"}},[e._v("#")]),e._v(" Changing your user agent")]),e._v(" "),o("p",[e._v("A user agent string helps websites identify information about the requester. While some sources have user agent strings set, most rely on the default value set in the app.")]),e._v(" "),o("div",{staticClass:"guide"},[o("p",{staticClass:"title"},[e._v("GUIDE")]),o("ol",[o("li",[e._v("Go to "),o("NavigationText",{attrs:{item:"more"}}),e._v(" in the bottom navbar, then "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(".")],1),e._v(" "),o("li",[e._v("Change the "),o("strong",[e._v("Default user agent string")]),e._v(" setting to a different one. "),o("a",{attrs:{href:"https://www.whatismybrowser.com/guides/the-latest-user-agent/",target:"_blank",rel:"noopener noreferrer"}},[e._v("This website"),o("OutboundLink")],1),e._v(" is a decent reference.")]),e._v(" "),o("li",[e._v("Restart the app and try accessing the source again.")])])]),o("h2",{attrs:{id:"update-webview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-webview"}},[e._v("#")]),e._v(" Update WebView")]),e._v(" "),o("p",[e._v("To update "),o("strong",[e._v("WebView")]),e._v(", you need to find what "),o("strong",[e._v("WebView implementation")]),e._v(" is used on your device. In general, default implementation depends on the Android version as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Android 10.0 and up - "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.webview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android System WebView"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Android from 7.0 to 9.0 - "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.android.chrome",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Android 6.0.1 and below - "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.webview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android System WebView"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("div",{staticClass:"custom-block c-tip"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("Users on Android 7.0 and up can also see and change "),o("strong",[e._v("WebView implementation")]),e._v(" in "),o("a",{attrs:{href:"https://developer.android.com/studio/debug/dev-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Options"),o("OutboundLink")],1),e._v(".")])]),o("div",{staticClass:"custom-block c-warning"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("Non-standard implementations like Firefox can lead to "),o("strong",[e._v("Tachiyomi")]),e._v(" not working correctly or, in the worst-case, crash. We recommend to setting your "),o("strong",[e._v("WebView implementation")]),e._v(" to "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.webview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android System WebView"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.android.chrome",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome"),o("OutboundLink")],1),e._v(".")])]),o("h2",{attrs:{id:"unable-to-install-the-app-or-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-install-the-app-or-extensions"}},[e._v("#")]),e._v(" Unable to install the app or extensions")]),e._v(" "),o("p",[e._v("Try installing "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.aefyr.sai",target:"_blank",rel:"noopener noreferrer"}},[e._v("Split APK Installer"),o("OutboundLink")],1),e._v(" from the Google Play Store, then use it to try and install the affected APK. Split APK Installer will tell you why the APK is uninstallable, or it will install the APK for you. Some common errors are listed below.")]),e._v(" "),o("el-collapse",[o("el-collapse-item",{attrs:{title:"INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package eu.kanade.tachiyomi signatures do not match the previously installed version; ignoring!"}},[o("p",[e._v("If Split APK Installer outputs the above error when attempting to install the APK, you are likely installing a official build over an existing "),o("strong",[e._v("F-Droid")]),e._v(" build. The "),o("strong",[e._v("F-Droid")]),e._v(" build has a different signature than the official build, so you must backup your data, uninstall the app, then restore the data in a fresh install.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"DISPLAY_NAME column is null"}},[o("p",[e._v('If Split APK Installer outputs "DISPLAY_NAME column is null", the APK you have downloaded is corrupted. Some users experience this error multiple times after redownloading the APK, so keep redownloading the APK until it installs correctly.')])]),e._v(" "),o("el-collapse-item",{attrs:{title:"INSTALL_FAILED_NO_MATCHING_ABIS"}},[o("p",[e._v('If Split APK Installer outputs "INSTALL_FAILED_NO_MATCHING_ABIS", the APK you have downloaded is the wrong one for your CPU architecture. Download the correct one or download the universal APK if you are not aware which CPU architecture your device uses.')])])],1),e._v(" "),o("h2",{attrs:{id:"getting-logcats-and-crash-logs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-logcats-and-crash-logs"}},[e._v("#")]),e._v(" Getting Logcats and Crash Logs")]),e._v(" "),o("p",[e._v("To dump crash logs following an app crash, go to "),o("NavigationText",{attrs:{item:"more"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings"}}),e._v(" → "),o("NavigationText",{attrs:{item:"settings_advanced"}}),e._v(" → "),o("strong",[e._v("Dump crash logs")])],1),e._v(" "),o("div",{staticClass:"guide g-empty"},[o("figure",{staticClass:"centered"},[o("img",{staticClass:"zoomable",attrs:{src:e.$withBase("/assets/guides_dump-crashlogs.png")}})])]),o("p",[e._v("To get device logs if the app is not behaving as expected, record device logs using a "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.dp.logcatapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logcat Reader"),o("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);