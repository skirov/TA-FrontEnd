var vehicles = (function () {
    var finRotationDirection = Object.freeze({
        ClockWise: 1,
        CounterClockWise: 2
    });

    var afterBurnersState = Object.freeze({
        On: 1,
        Off: 2
    });

    var amphibiaTerrainMode = Object.freeze({
        Land: 1,
        Water: 2
    });

    Function.prototype.inherit = function (parent) {
        this.prototype = new parent();
        this.prototype.constructor = this;
    }

    Function.prototype.extend = function (parent) {
        for (var i = 1; i < arguments.length; i += 1) {
            var name = arguments[i];
            this.prototype[name] = parent.prototype[name];
        }

        return this;
    }

    //Begin PropultionUnit class
    function PropultionUnit() {
    }

    PropultionUnit.prototype.acceleration = function () {
        throw new RangeException("acceleration is not implemented in the PropultionUnit class");
    }

    //Begin various PropoltionUnit child classes 
    function Wheel(radius) {
        this.radius = radius;
    }

    Wheel.inherit(PropultionUnit);

    Wheel.prototype.acceleration = function () {
        return Math.round(2 * Math.PI * this.radius);
    }

    function PropellingNozzle(power, afterBurnersState) {
        this.power = power;
        this.afterBurnersState = afterBurnersState;
    }

    PropellingNozzle.inherit(PropultionUnit);

    PropellingNozzle.prototype.acceleration = function () {
        if (this.afterBurnersState === afterBurnersState.On) {
            return parseInt(this.power * 2);
        } else {
            return parseInt(this.power);
        }
    }

    function Propeller(numberOfFins, spinDirection) {
        this.numberOfFins = numberOfFins;
        this.spinDirection = spinDirection;
    }

    Propeller.inherit(PropultionUnit);

    Propeller.prototype.acceleration = function () {
        if (this.spinDirection === finRotationDirection.ClockWise) {
            return this.numberOfFins;
        } else {
            return -this.numberOfFins;
        }
    }

    //Begin Vehicle class
    function Vehicle(speed, propultionUnits) {
        this.speed = speed;
        this.propultionUnits = propultionUnits;
    }

    Vehicle.prototype.accelerate = function () {
        for (var i = 0; i < this.propultionUnits.length; i++) {
            this.speed += this.propultionUnits[i].acceleration();
        }
    }

    //Begin various Vehicle child classes 
    function LandVehicle(speed, propultionUnits) {
        Vehicle.apply(this, arguments);
    }

    LandVehicle.inherit(Vehicle);

    function AirVehicle(speed, propultionUnits) {
        Vehicle.apply(this, arguments);
    }

    AirVehicle.inherit(Vehicle);

    AirVehicle.prototype.switchAfterBurners = function (afterBurnersState) {
        for (var i = 0; i < this.propultionUnits.length; i++) {
            if (this.propultionUnits[i] instanceof PropellingNozzle) {
                this.propultionUnits[i].afterBurnersState = afterBurnersState;
            }
        }
    }

    function WaterVehicle(speed, propultionUnits) {
        Vehicle.apply(this, arguments);
    }

    WaterVehicle.inherit(Vehicle);

    WaterVehicle.prototype.switchSpinDirection = function (spinDirectionState) {
        for (var i = 0; i < this.propultionUnits.length; i++) {
            if (this.propultionUnits[i] instanceof Propeller) {
                this.propultionUnits[i].spinDirection = spinDirectionState;
            }
        }
    }

    function Amphibia(terrainMode, speed, propultionUnits) {
        this.terrainMode = terrainMode;
        Vehicle.call(this, speed, propultionUnits);
    }

    Amphibia.inherit(Vehicle);
    Amphibia.extend(WaterVehicle, "switchSpinDirection");

    Amphibia.prototype.switchTerrain = function () {
        if (this.terrainMode === amphibiaTerrainMode.Land) {
            for (var i = 0; i < this.propultionUnits.length; i++) {
                if (this.propultionUnits[i] instanceof Wheel) {
                    this.speed += this.propultionUnits[i].acceleration();
                }
                else {
                    throw new Error("The terrain is set to land. You need wheels for propultion units.");
                }
            }
        } else {
            for (var i = 0; i < this.propultionUnits.length; i++) {
                if (this.propultionUnits[i] instanceof Propeller) {
                    this.speed += this.propultionUnits[i].acceleration();
                }
                else {
                    throw new Error("The terrain is set to water. You need propellers for propultion units.");
                }
            }
        }
    }

    return {
        LandVehicle: LandVehicle,
        AirVehicle: AirVehicle,
        WaterVehicle: WaterVehicle,
        Wheel: Wheel,
        Propeller: Propeller,
        finRotationDirection: finRotationDirection,
        PropellerNozzle: PropellingNozzle,
        Amphibia: Amphibia,
        amphibiaTerrainMode: amphibiaTerrainMode,
        afterBurnersState: afterBurnersState
    }
})();