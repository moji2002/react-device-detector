import React, { Fragment } from 'react';

var getOS = function getOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

var isIOS = getOS() === "iOS";
var isAndroid = getOS() === "Android";
var isMobile = isIOS || isAndroid;
var isDesktop = !isMobile; // console.log({ isMobile, isIOS, isAndroid, isDesktop });
// console.log({ os: getOS() });

var AndroidView = function AndroidView(_ref) {
  var children = _ref.children;
  return isAndroid && /*#__PURE__*/React.createElement(Fragment, null, children);
};
var IOSView = function IOSView(_ref2) {
  var children = _ref2.children;
  return isIOS && /*#__PURE__*/React.createElement(Fragment, null, children);
};
var MobileView = function MobileView(_ref3) {
  var children = _ref3.children;
  return isMobile && /*#__PURE__*/React.createElement(Fragment, null, children);
};
var DesktopView = function DesktopView(_ref4) {
  var children = _ref4.children;
  return isDesktop && /*#__PURE__*/React.createElement(Fragment, null, children);
};

var returnLibrary = function returnLibrary() {
  return {
    DesktopView: DesktopView,
    isMobile: isMobile,
    isIOS: isIOS,
    isAndroid: isAndroid
  };
};

var index = returnLibrary();

export default index;
export { AndroidView, DesktopView, IOSView, MobileView };
