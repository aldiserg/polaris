(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{368:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"exemptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemptions"}},[t._v("#")]),t._v(" Exemptions")]),t._v(" "),e("p",[t._v("Sometimes a workload really does need to do things that Polaris considers insecure. For instance,\nmany of the "),e("code",[t._v("kube-system")]),t._v(" workloads need to run as root, or need access to the host network. In these\ncases, we can add "),e("strong",[t._v("exemptions")]),t._v(" to allow the workload to pass Polaris checks.")]),t._v(" "),e("p",[t._v("Exemptions can be added two ways: by annotating a controller, or editing the Polaris config.")]),t._v(" "),e("h2",{attrs:{id:"annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#annotations"}},[t._v("#")]),t._v(" Annotations")]),t._v(" "),e("p",[t._v("To exempt a controller from all checks via annotations, use the annotation "),e("code",[t._v("polaris.fairwinds.com/exempt=true")]),t._v(", e.g.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl annotate deployment my-deployment polaris.fairwinds.com/exempt=true\n")])])]),e("p",[t._v("To exempt a controller from a particular check via annotations, use an annotation in the form of "),e("code",[t._v("polaris.fairwinds.com/<check>-exempt=true")]),t._v(", e.g.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl annotate deployment my-deployment polaris.fairwinds.com/cpuRequestsMissing-exempt=true\n")])])]),e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),e("p",[t._v("To exempt a controller via the config, you have to specify a namespace (optional), a list of controller names and a list of rules, e.g.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exemptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exemption valid for kube-system namespace")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controllerNames")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dns"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hostNetworkSet\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exemption valid in all namespaces")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controllerNames")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dns"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hostNetworkSet\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);