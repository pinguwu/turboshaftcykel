(window["wpJsonpExtractCss"]=window["wpJsonpExtractCss"]||[]).push([[71],{"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/JSFModal.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var a=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var u=a(n("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var d=a(n("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var c=a(n("./common/temp/node_modules/lodash/last.js"));n("./src/main/webapp/universal/src/shared/i18n/configurations/core-components.js");var p=r(n("./common/temp/node_modules/react/index.js"));var o=a(n("./common/temp/node_modules/prop-types/index.js"));var m=n("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var f=n("./common/temp/node_modules/@sqs/rosetta-primitives/build/lib/index.js");var v=n("./common/temp/node_modules/@sqs/rosetta-tokens/build/lib/index.js");var b=a(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ThinDialog.js"));var g=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var s=m.Modal.TouchScroll;var h=function e(t){var n=(0,c.default)(t.history);return!n||n.root};var C=function e(t){return p.default.createElement(f.Box,{px:3,pb:6},t.children)};var j=function e(t){return p.default.createElement(p.Fragment,null,t.header,t.componentList)};var y=function e(t){return p.default.createElement(f.Flex,(0,d.default)({flexGrow:"1",alignItems:"center"},t))};var w=function e(t){var n=t.header,r=t.componentList,a=t.context.router,o=t.title;return p.default.createElement(p.Fragment,null,n,p.default.createElement(s,{key:o},h(a)&&p.default.createElement(f.Text.Title,{pl:6},o),r))};var i=function e(t){var n=t.configurations,r=t.dialogClassname,a=t.isDirty,o=t.onSave,s=t.onRequestClose,i=(0,u.default)(t,["configurations","dialogClassname","isDirty","onSave","onRequestClose"]);var l=function e(t){var n=(0,c.default)(t.history);if(!n||n.root)return p.default.createElement(f.Box,{px:2},p.default.createElement(f.Button.Tertiary,{onClick:s},(0,g.t)("Close")));return p.default.createElement(m.BackButton,{label:n.backTitle,onClick:t.pop})};return p.default.createElement(b.default,{className:r},p.default.createElement(g.Jsf,(0,d.default)({},i,{configurations:n,renderHeader:function e(t){return p.default.createElement(p.default.Fragment,null,p.default.createElement(f.Flex,{p:4,height:7*parseInt(v.space[2],10)},p.default.createElement(y,{justifyContent:"flex-start"},l(t.router)),!h(t.router)&&p.default.createElement(y,{justifyContent:"center"},p.default.createElement(f.Text.Body,null,t.children)),p.default.createElement(y,{justifyContent:"flex-end"},p.default.createElement(f.Box,{px:2},p.default.createElement(f.Button.Tertiary,{"data-test":"jsf-modal-save-button",onClick:o,isDisabled:!a},(0,g.t)("Save"))))))},renderComposition:w,renderComponentList:C,renderForm:j})))};i.propTypes={configurations:o.default.object.isRequired,isDirty:o.default.bool.isRequired,onSave:o.default.func.isRequired,title:o.default.string.isRequired};var l=i;t.default=l;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LinkModal/LinkModal.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var a=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var s=a(n("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var i=a(n("./common/temp/node_modules/@babel/runtime/helpers/classCallCheck.js"));var o=a(n("./common/temp/node_modules/@babel/runtime/helpers/createClass.js"));var l=a(n("./common/temp/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var u=a(n("./common/temp/node_modules/@babel/runtime/helpers/inherits.js"));var d=a(n("./common/temp/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var c=a(n("./common/temp/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var p=a(n("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));n("./src/main/webapp/universal/src/shared/i18n/configurations/core-components.js");var m=a(n("./common/temp/node_modules/lodash/pickBy.js"));var f=r(n("./common/temp/node_modules/react/index.js"));var v=a(n("./common/temp/node_modules/prop-types/index.js"));var b=a(n("./src/main/webapp/frontend/packages/enums/Flag.js"));var g=a(n("./common/temp/node_modules/@sqs/core-components/components/LinkEditor.js"));var h=n("./common/temp/node_modules/@sqs/core-components/build/lib/index.js");var C=n("./common/temp/node_modules/@sqs/jsf-fields/lib/es/main.js");var j=a(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LinkModal/LinkModal.less"));var y=a(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ModalWrapper.js"));var w=a(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/JSFModal.js"));var E=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}));n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),true).forEach(function(e){(0,p.default)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function T(a){var o=S();return function e(){var t=(0,c.default)(a),n;if(o){var r=(0,c.default)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return(0,d.default)(this,n)}}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}var P=[{type:"string",properties:{placeholder:(0,E.t)("Text Here"),label:(0,E.t)("Link Title"),inline:false,htmlAttributes:{"data-test":"linkModalTitle"}},$mapping:"#/title"},{type:"context",properties:{label:(0,E.t)("Link")}},{type:"linkeditor",$mapping:{url:"#/url",newWindow:"#/newWindow"},properties:{modalClassName:j.default.linkEditorModal,htmlAttributes:{"data-test":"linkModalUrlField"}}}];var A=[{type:"spacer",properties:{gridMultiplier:3}},{type:"deletelink",properties:{alignment:"left",label:(0,E.t)("Delete Link"),color:"warning"}}];var x={type:"object",$schema:"http://json-schema.org/draft-04/schema",properties:{title:{type:"string"},url:{type:"string"},newWindow:{type:"boolean"}}};var M={confirmAction:"delete",confirmMessage:(0,E.t)("Are you sure you want to delete this link? This can’t be undone."),confirmTitle:(0,E.t)("Delete Link"),confirmLabel:(0,E.t)("Delete")};var R={confirmAction:"close",confirmMessage:(0,E.t)("You have made changes. Are you sure you want to discard them?"),confirmTitle:"",confirmLabel:(0,E.t)("Discard")};var k=function(e){(0,u.default)(n,e);var t=T(n);function n(e){var o;(0,i.default)(this,n);o=t.call(this,e);(0,p.default)((0,l.default)(o),"state",{isDirty:false,confirmMessage:"",confirmTitle:"",isConfirmModalOpen:false,confirmAction:null,errors:{}});(0,p.default)((0,l.default)(o),"customFields",{linkeditor:function e(t){return f.default.createElement(g.default,(0,s.default)({},t,{componentProps:E.BetaFeaturesUtils.isFeatureEnabled(b.default.NESTED_CATEGORIES)?{CONTENT_PICKER:{websiteId:E.WebsiteStore.getState().get("id"),versions:{collection:{product:"1.1"}}}}:{}}))},deletelink:function e(t){return f.default.createElement(h.ButtonField,(0,s.default)({},t,{onClick:o.handleRequestDelete}))}});(0,p.default)((0,l.default)(o),"handleChange",function(e){var n=e.value;var t=o.props,r=t.value,a=t.onChange;o.setState(function(e){var t=(0,m.default)(e.errors,function(e,t){return n[t]===r[t]});return{errors:t,isDirty:true}});a(n)});(0,p.default)((0,l.default)(o),"handleRequestDelete",function(){o.setState(_({isConfirmModalOpen:true},M))});(0,p.default)((0,l.default)(o),"handleRequestClose",function(){var e=o.props.onRequestClose;if(o.state.isDirty){o.setState(_({isConfirmModalOpen:true},R));return}e()});(0,p.default)((0,l.default)(o),"handleConfirm",function(){var e=o.props,t=e.onDelete,n=e.onRequestClose;var r=o.state.confirmAction;if("delete"===r)t();else if("close"===r){o.setState({isDirty:false,errors:{}});n()}o.handleCloseConfirmModal()});(0,p.default)((0,l.default)(o),"handleCloseConfirmModal",function(){o.setState({isConfirmModalOpen:false})});(0,p.default)((0,l.default)(o),"handleSave",function(){var e=o.validate();var t=0===Object.keys(e).length;t?o.props.onSave():o.setState({errors:e})});(0,p.default)((0,l.default)(o),"validate",function(){var e={};var t=o.props.value;""===t.title.trim()&&(e.title={message:(0,E.t)("You must add a link title.")});""===t.url.trim()&&(e.url={message:(0,E.t)("You must add a link.")});return e});o.uiSchema=e.isDeleteVisible?P.concat(A):P;return o}(0,o.default)(n,[{key:"componentDidUpdate",value:function e(t){t.isDeleteVisible!==this.props.isDeleteVisible&&(this.uiSchema=this.props.isDeleteVisible?P.concat(A):P)}},{key:"render",value:function e(){var t=this.props,n=t.isOpen,r=t.isDeleteVisible,a=t.value;var o=this.state,s=o.isDirty,i=o.confirmMessage,l=o.confirmTitle,u=o.confirmLabel,d=o.isConfirmModalOpen,c=o.errors;var p=r?(0,E.t)("Edit Link"):(0,E.t)("Create a Link");return f.default.createElement(f.Fragment,null,f.default.createElement(y.default,{isOpen:n,onRequestClose:this.handleRequestClose},f.default.createElement(w.default,{isDirty:s,relativeHeight:true,onRequestClose:this.handleRequestClose,onSave:this.handleSave,onChange:this.handleChange,title:p,configurations:{default:{value:a,schema:x,uiSchema:this.uiSchema,itemDefaults:[],errors:c}},components:_({string:C.string,spacer:C.spacer,context:C.context},this.customFields)})),f.default.createElement(h.ConfirmModal,{isOpen:d,confirmLabel:u,onConfirm:this.handleConfirm,message:i,title:l,onDismiss:this.handleCloseConfirmModal,onRequestClose:this.handleCloseConfirmModal,cancelStyle:"default",confirmStyle:"default"}))}}]);return n}(f.Component);t.default=k;(0,p.default)(k,"propTypes",{isOpen:v.default.bool.isRequired,isDeleteVisible:v.default.bool.isRequired,value:v.default.object.isRequired,onChange:v.default.func.isRequired,onSave:v.default.func.isRequired,onDelete:v.default.func.isRequired,onCancel:v.default.func.isRequired,onRequestClose:v.default.func.isRequired});e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LinkModal/LinkModal.less":function(e,t,n){e.exports={modalBody:"_1m_FKYxc5",buttonsContainer:"_1AzBgoaqc",button:"_KMCLE1pa",linkEditorModal:"_33gNBLPNG"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LinkModal/index.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/LinkModal/LinkModal.js"));var o=a.default;t.default=o;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ModalWrapper.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var m=r(n("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var f=r(n("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));n("./src/main/webapp/universal/src/shared/i18n/configurations/core-components.js");var v=r(n("./common/temp/node_modules/react/index.js"));var b=n("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var g=function e(){var t=window.navigator.userAgent;return t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0};var h=230;var C={closeOnEsc:true,closeOnOverlayClicked:true};var j={position:"center"};var y=b.Modal.Transition,w=b.Modal.Overlay,E=b.Modal.Position;var a=function e(t){var n=t.onRequestClose,r=t.isOpen,a=t.positionProps,o=void 0===a?j:a,s=t.transitionDuration,i=void 0===s?h:s,l=t.modalProps,u=void 0===l?C:l,d=t.onTransitionEnd,c=void 0===d?function(){return null}:d,p=(0,f.default)(t,["onRequestClose","isOpen","positionProps","transitionDuration","modalProps","onTransitionEnd"]);return v.default.createElement(y,{duration:i,onTransitionEnd:c},r&&v.default.createElement(b.Modal,(0,m.default)({onRequestClose:function e(t){t&&"esc"===t.source&&t.event.stopImmediatePropagation();n(t)},lockFocus:!g()},u),v.default.createElement(w,null),v.default.createElement(E,o,p.children)))};t.default=a;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ThinDialog.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=r(n("./common/temp/node_modules/@babel/runtime/helpers/extends.js"));var s=r(n("./common/temp/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));n("./src/main/webapp/universal/src/shared/i18n/configurations/core-components.js");var i=r(n("./common/temp/node_modules/react/index.js"));var l=r(n("./common/temp/node_modules/@rush-temp/universal-frontend/node_modules/classnames/index.js"));var a=n("./common/temp/node_modules/@sqs/rosetta-elements/build/lib/index.js");var u=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ThinDialog.less"));var d=a.Modal.Dialog;var c=function e(t){var n=t.children,r=t.className,a=(0,s.default)(t,["children","className"]);return i.default.createElement(d,(0,o.default)({},a,{className:(0,l.default)(u.default.dialogContainer,r)}),n)};var p=c;t.default=p;e.exports=t.default},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/ThinDialog.less":function(e,t,n){e.exports={dialogContainer:"_3YFhbHQVZ"}},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/IndexTypes.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.NONE=void 0;var r="none";t.NONE=r},"./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/collectionSettingsUtils.js":function(e,t,n){"use strict";var r=n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:true});t.getGenericCollectionSettingsTitle=w;t.hasAccessPermissions=E;t.getCollectionMemberAreaId=A;t.isHomepage=V;t.getIsMAHomepage=U;t.getPageLayoutOptions=H;t.containsHomepage=J;t.getCollectionSettingsEditorContext=Q;t.isVariation=void 0;var o=r(n("./common/temp/node_modules/lodash/nth.js"));var a=r(n("./common/temp/node_modules/lodash/findKey.js"));var s=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/index.js"));var i=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/store/selectors.js");var l=r(n("./src/main/webapp/frontend/packages/enums/CollectionTypes.js"));var u=r(n("./src/main/webapp/frontend/packages/enums/CollectionOrdering.js"));var d=r(n("./src/main/webapp/frontend/packages/enums/AccessPermissions.js"));var c=r(n("./src/main/webapp/frontend/packages/enums/Flag.js"));var p=r(n("./src/main/webapp/frontend/packages/enums/IndexType.js"));var m=r(n("./src/main/webapp/frontend/packages/enums/Features.js"));var f=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/constants/IndexTypes.js");var v=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/components/GroupedList/index.js");var b=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/shared/utils/collectionUtils.js");var g=n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/externals.js");var h=r(n("./src/main/webapp/universal/src/apps/App/screens/ContentBrowser/bundles/products/isProducts.js"));var C=v.pathUtils.forEachItem,j=v.pathUtils.getGroupFromItemPath,y=v.pathUtils.getItemFromPath;function w(e,t){var n=(0,b.getTemplateConfig)(e);return(0,g.t)("{title} Settings",{title:n.title||t})}function E(){return g.AccessPermissionStore.hasPermission(d.default.CONFIG_CHANGE_STRUCTURE)}function O(e){var t=(0,b.getTemplateConfig)(e);if(!t||!E())return false;var n=t.forcePageSize;var r=e.type===l.default.COLLECTION_TYPE_GENERIC;var a=(0,b.getCollectionOrdering)(e,t)===u.default.CHRONOLOGICAL;return!n&&a&&r&&!t.index&&!t.folder}function _(e){var t=(0,b.getTemplateConfig)(e);if(!t)return false;return t.supportsVideoBackgrounds}function T(){if(!E())return false;return true}function S(t){var e,n,r,a,o;var s=null===(e=window.Y)||void 0===e?void 0:null===(n=e.Squarespace)||void 0===n?void 0:null===(r=n.Singletons)||void 0===r?void 0:null===(a=r.TemplateNavigationList)||void 0===a?void 0:a.getMemberAreaNavigation();var i=(null===s||void 0===s?void 0:null===(o=s.get("itemList"))||void 0===o?void 0:o.toJSON())||[];var l=null;var u=function e(t,n,r){var a=t.children||t.items;if(l)return;for(var o=0;o<a.length;o++){var s,i;if(a[o].collectionId===n){l=l||r;return}if(!(null!==(s=a[o].children)&&void 0!==s&&s.length)&&!(null!==(i=a[o].items)&&void 0!==i&&i.length))continue;e(a[o],n,r)}};i.forEach(function(e){(e.children||e.items)&&u(e,t,e.memberAreaId)});return l}function P(r){var a=(0,i.getInitialSiteLayout)(s.default.getState())[g.Constants.memberAreaNavigationName]||{};var e=C(a,function(e,t){if(e.collectionId===r){var n=y(a,t[0]);return n.memberAreaId}});return e}function A(e){if(!g.MemberAreasFeatureUtils.showInPagesPanel())return null;return(0,g.isReactPagesPanelEnabled)()?P(e):S(e)}function x(e){return e.type===l.default.COLLECTION_TYPE_PAGE||e.type===l.default.SPLASH_PAGE}function M(e){var t=(0,b.getTemplateConfig)(e);if(!t)return false;return t.hasSystemBlogCollectionSettings}function R(e){var t=(0,b.getTemplateConfig)(e);if(!t)return false;return(0,h.default)(e)&&("2.0"===t.systemCollectionVersion||t.hasProductQuickView)}function k(e){var t=(0,b.getTemplateConfig)(e);if(!t)return false;return t.relatedItems&&!(0,h.default)(e)}function D(e){if(g.TemplateVersionUtils.isSevenOne())return false;var t=(0,b.getTemplateConfig)(e);var n=(0,b.getCollectionOrdering)(e,t);if(!t)return n===u.default.CALENDAR;return n===u.default.CALENDAR&&!t.forceEventView}function I(e){return E()&&e.type!==l.default.TEMPLATE_PAGE}function L(e){var t=(0,b.getTemplateConfig)(e);var n=(0,b.getCollectionOrdering)(e,t);if(!t||!E)return false;return!t.isIndex&&!t.isFolder&&e.type===l.default.COLLECTION_TYPE_GENERIC&&n===u.default.CHRONOLOGICAL}function q(){var e=(0,i.getTemplateLayouts)(s.default.getState());return!(0,g.isV8)()&&Object.keys(e).length>1}function B(e){var t=g.SiteNavigationStore.getPathToCollection(e.id);var n=(0,o.default)(t,-2);if(!n||!n.typeName&&!n.index)return f.NONE;var r=(0,b.getTemplateConfig)(n);if(!r)return f.NONE;var a=r.index||Object.values(p.default).indexOf(r.indexType)>-1;if(a)return r.indexType;return f.NONE}function N(e){return g.TemplateVersionUtils.isSevenOne()&&(0,b.getCollectionType)(e)===l.default.COLLECTION_TYPE_PAGE}function F(){return g.FeaturesStore.isFeatureGated(m.default.CODE_INJECTION)}function V(e){return e.id===(0,i.getHomepageCollectionId)(s.default.getState())}function G(e,t){return(0,a.default)(e,function(e){return e===t})}function U(e){if(!g.MemberAreasFeatureUtils.showInPagesPanel())return false;var t=e.id||e;var n=g.MemberAreasStore.getMemberAreasHomepages();var r=G(n,t);return r===A(t)}function H(){var e=(0,i.getTemplateLayouts)(s.default.getState());var t={enum:[],enumAnnotation:[]};for(var n in e){t.enum.push(n);t.enumAnnotation.push({label:e[n].name})}return t}function W(e){var t=(0,i.getHomepageCollectionId)(s.default.getState());var n=g.SiteNavigationStore.getPathToCollection(t);var r=(0,o.default)(n,-2);if(!r||!r.collectionId)return false;return r.collectionId===e}function Y(e){var t=s.default.getState();var n=(0,i.getHomepageCollectionId)(t);var r={items:Object.values((0,i.getInitialSiteLayout)(t))};var a=C(r,function(e,t){if(e.collectionId===n)return t});var o=j(r,a);if(!o||!o.collectionId)return false;return o.collectionId===e}function J(e){return(0,g.isReactPagesPanelEnabled)()?Y(e):W(e)}function z(e){return g.BetaFeaturesUtils.isFeatureEnabled(c.default.NESTED_CATEGORIES)&&(0,h.default)(e)}var K=function e(t){var n=(0,b.getTemplateConfig)(t);return null===n||void 0===n?void 0:n.variation};t.isVariation=K;function Q(e){return{supportsVideoBackground:_(e),isAdjustablePageSizeCollection:O(e),isV8:(0,g.isV8)(),hasAccessPermissions:E(),canDuplicatePage:x(e),hasSystemBlogCollectionSettings:M(e),hasProductQuickView:R(e),hasOwnRelatedItemsSetting:k(e),hasEventView:D(e),canDeletePage:I(e),showPageVisibilityFields:T(),supportsInjectableCodePerItem:L(e),canEditPageLayout:q(),parentIndexType:B(e),isSevenOnePage:N(e),showCodeInjectionUpsell:F(),isSevenOne:g.TemplateVersionUtils.isSevenOne(),hasNestedCategories:z(e),isCollectionUnderMemberAreas:!!A(e.id),isMAHomepage:U(e)}}}}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/71-8776ccf3ebd285e68ca96-min.en-US.js.map