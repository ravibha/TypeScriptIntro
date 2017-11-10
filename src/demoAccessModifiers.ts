// Access modifiers.
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

// EFFECT ON INSTANCES
let foo = new FooBase();
foo.x; // okay
//foo.y; // ERROR : private
//foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // okay
        //this.y; // ERROR: private
        this.z; // okay
    }
}