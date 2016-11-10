module.exports = function() {

    function Greeter() {
        this.letEs = function() {
            [x,y]=[1,2];
            [x,y]=[y,x];
            console.log(x+","+y);
        }
    }
    return new Greeter();
};
