(function (angular) {'use strict';

    if (angular && !angular.isBoolean) {
			angular.isBoolean = function (a) {
				return (a === true || a === false);
			};
		}

}(window.angular));
