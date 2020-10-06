(function(window, _) {
  window.myLibraryName = window.myLibraryName || {
    numz: {

     getAngeleDegrees : function (pointA, pointB) {
            const
            distanceX = pointB.x - pointA.x,
            distanceY = pointB.y - pointA.y,
            radians = Math.atan2(distancY, distanceX),
            degrees = radians * 180 / Math.PI;
                return degrees;
        },

    degreesToRadians: function (degrees) {
        return degrees * Math.PI / 180;
    },

    radiansToDegrees : function (radians) {
        return radians * 180 / Math.PI;
    }
    },
    phyz: {},
  };
}(window, window._));
// library update ? //