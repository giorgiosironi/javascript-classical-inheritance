TestCase("playing with object prototypes in JavaScript", {
    "test object literals have natural prototype" : function () {
        var anObject = {};
        assertEquals(Object.prototype.toString, anObject.toString);
    },
    "test constructors have public prototype property" : function () {
        var constructor = function MyClass() {};
        assertNotUndefined(constructor.prototype);
    },
    "test objects do not have public prototype property" : function () {
        var anObject = {};
        assertUndefined(anObject.prototype);
    },
    "test objects created with a constructor has constructor property" : function () {
        var constructor = function MyClass() {};
        var anObject = new constructor();
        assertTrue(anObject instanceof constructor);
        assertEquals(constructor, anObject.constructor);
    },
    "test objects created with a constructor inherit from Object" : function () {
        var constructor = function MyClass() {};
        var anObject = new constructor();
        assertEquals(Object.prototype.toString, anObject.toString);
    },
    "test the prototype chain goes from instance to constructor" : function() {
        var constructor = function MyClass() {};
        var anObject = new constructor();
        constructor.prototype.doSomething = function () {};
        assertEquals(constructor.prototype.doSomething, anObject.doSomething);
    },
    "test the prototype chain goes also to Object" : function () {
        var constructor = function MyClass() {};
        var anObject = new constructor();
        Object.prototype.doSomethingElse = function () {};
        assertEquals(Object.prototype.doSomethingElse, anObject.doSomethingElse);
    },
    "test inheritance can be built by substituing prototypes with an object of the parent class" : function () {
        var animal = function Animal() {};
        animal.prototype.eat = function() { return 'Yum'; };
        var dog = function Dog() {};
        dog.prototype = new animal();
        dog.prototype.bark = function() { return 'Arf'; };
        dog.prototype.constructor = dog;
        var lassie = new dog();
        assertTrue(lassie instanceof dog);
        assertEquals('Arf', lassie.bark());
        assertTrue(lassie instanceof animal);
        assertEquals('Yum', lassie.eat());
    }
});
