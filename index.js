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
    phyz: {
        makeBody: function (type, {
            velocityX = 0,
            velocityY = 0,
            rotationalVelocity = 0,
            integrity = 1,
            density = 1,
            volatility = 0
        } = {}) {
            if (type === undefined) throw new Error ("");
            return {
                type: type,
                velocityX: velocityX,
                velocityY: velocityY,
                rotationalVelocity: rotationalVelocity,
                integrity: integrity,
                density: density,
                volatility: volatility, 
                handleCollision (body, impact) {},
                update (event) {}
            };
        },
        UpdateVelocity: function (body, forceOnX, forceOnY){
            const
                angle = body.rotation * Math.PI / 180,
                accerlerationOnX = Math.cos(angle) * forceOnX,
                accerlerationOnY = Math.sin(angle) * forceOnY;
            body.velocityX += accelerationOnX;
            body.velocityY += accelerationOnY;

        },

        UpdatePosition: function (body) {
            body.x += body.velocityX;
            body.y += body.velocityY;
            body.rotation += body.rotationalVelocity;
        }
    },
  };
}(window, window._));
// library update ? //