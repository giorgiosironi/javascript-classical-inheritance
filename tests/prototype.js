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
    }
});
