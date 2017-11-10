module Utils {
    export class Point {
        constructor(public x: number = 0, public y: number = 0) {
            this.x = x;
            this.y = y;
        }

        length(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}

let point = new Utils.Point(0, 0);
let distance = point.length();

// Inheritance.

class Point3D extends Utils.Point {
    constructor(x: number, y: number, public z: number) {
        super(x, y);
        this.z = z;
    }

    length(): number {
        let d = super.length();
        return Math.sqrt(d * d + this.z * this.z);
    }
}

let point3D = new Point3D(0, 0, 0);
let point3DDistance = point3D.length();