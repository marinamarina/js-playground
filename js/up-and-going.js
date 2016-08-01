'use strict';

(function() {
    console.log('Closure');

    function makeAdder(x) {

        function add(y) {
            return x + y;
        }

        return add;
    }

    // we get back a reference to the inner add(..) that remembers x as 1
    var plusOne = makeAdder(1);
    var plusTen = makeAdder(10);

    console.log(plusOne(16));
    console.log(makeAdder(1)(16));


    console.log('Modules');
    function User(age) {
        var username,
            password;

        function inLogin(user, pw) {
            username = user;
            password = pw;
            // do some more login work
        }

        function getAge() {
            return age;
        }

        function getUsername() {
            return username;
        }

        var publicAPI = {
            outLogin : inLogin,
            getAge: getAge,
            getUsername: getUsername
        }

        return publicAPI;
    }

    var anna = User(21);
    anna.outLogin('anna123', 'passwordkeptinsecret');
    console.log(anna.getAge());
    console.log(anna.getUsername());
})();