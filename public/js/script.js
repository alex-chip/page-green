(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var toggleMenu = function toggleMenu(navId, menuId, toggleB) {
	var nav = navId,
	    menu = menuId,
	    toggleButton = toggleB;

	function showNav() {
		nav.classList.toggle('is-active');
	}

	if (nav) {
		if (toggleButton) {
			toggleButton.addEventListener('click', showNav);
		}
	}
};

var toggleB = document.getElementById('navId-toggle'),
    menuId = document.getElementById('menuId'),
    navId = document.getElementById('navId');

toggleMenu(navId, menuId, toggleB);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixPQUFoQixFQUE0QjtBQUM5QyxLQUFJLE1BQU0sS0FBVjtBQUFBLEtBQ0MsT0FBTyxNQURSO0FBQUEsS0FFQyxlQUFlLE9BRmhCOztBQUlBLFVBQVMsT0FBVCxHQUFtQjtBQUNsQixNQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFdBQXJCO0FBQ0E7O0FBRUQsS0FBRyxHQUFILEVBQVE7QUFDUCxNQUFHLFlBQUgsRUFBaUI7QUFDaEIsZ0JBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsT0FBdkM7QUFDQTtBQUNEO0FBQ0QsQ0FkRDs7QUFnQkEsSUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFoQjtBQUFBLElBQ0MsU0FBVSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FEWDtBQUFBLElBRUMsUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FGVDs7QUFJQSxXQUFXLEtBQVgsRUFBaUIsTUFBakIsRUFBd0IsT0FBeEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB0b2dnbGVNZW51ID0gKG5hdklkLCBtZW51SWQsIHRvZ2dsZUIpID0+IHtcblx0bGV0IG5hdiA9IG5hdklkLFxuXHRcdG1lbnUgPSBtZW51SWQsXG5cdFx0dG9nZ2xlQnV0dG9uID0gdG9nZ2xlQjtcblxuXHRmdW5jdGlvbiBzaG93TmF2KCkge1xuXHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcblx0fVxuXG5cdGlmKG5hdikge1xuXHRcdGlmKHRvZ2dsZUJ1dHRvbikge1xuXHRcdFx0dG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05hdilcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgdG9nZ2xlQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZJZC10b2dnbGUnKSxcblx0bWVudUlkID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SWQnKSxcblx0bmF2SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2SWQnKTtcblxudG9nZ2xlTWVudShuYXZJZCxtZW51SWQsdG9nZ2xlQik7XG4iXX0=
