TestCase("playing with object prototypes in JavaScript", {
    "test object literals have natural prototype" : function () {
        var anObject = {};
        assertEquals(Object.prototype.toString, anObject.toString);
    },
    "test constructors have public prototype property" : function () {
        function MyClass() {};
        assertNotUndefined(MyClass.prototype);
    },
    "test objects do not have public prototype property" : function () {
        var anObject = {};
        assertUndefined(anObject.prototype);
    },
    "test objects created with a constructor has constructor property" : function () {
        function MyClass() {};
        var anObject = new MyClass();
        assertTrue(anObject instanceof MyClass);
        assertEquals(MyClass, anObject.constructor);
    },
    "test objects created with a constructor inherit from Object" : function () {
        function MyClass() {};
        var anObject = new MyClass();
        assertEquals(Object.prototype.toString, anObject.toString);
    },
    "test the prototype chain goes from instance to constructor" : function() {
        function MyClass() {};
        var anObject = new MyClass();
        MyClass.prototype.doSomething = function () {};
        assertEquals(MyClass.prototype.doSomething, anObject.doSomething);
    },
    "test the prototype chain goes also to Object" : function () {
        function MyClass() {};
        var anObject = new MyClass();
        Object.prototype.doSomethingElse = function () {};
        assertEquals(Object.prototype.doSomethingElse, anObject.doSomethingElse);
    },
    "test inheritance can be built by substituing prototypes with an object of the parent class" : function () {
        function Animal() {};
        Animal.prototype.eat = function() { return 'Yum'; };
        function Dog() {};
        Dog.prototype = new Animal();
        Dog.prototype.bark = function() { return 'Arf'; };
        Dog.prototype.constructor = Dog;
        var lassie = new Dog();
        assertTrue(lassie instanceof Dog);
        assertEquals('Arf', lassie.bark());
        assertTrue(lassie instanceof Animal);
        assertEquals('Yum', lassie.eat());
    }
});
