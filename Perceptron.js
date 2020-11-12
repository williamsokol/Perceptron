


class Perceptron {
    constructor(){
        this.weights = new Array(3);
        this.lr = 0.01;
        
        
        for(var i =0;i<this.weights.length;i++)
        {
            this.weights[i] = getRndInteger(-1,1);
            console.log(i);
        }    
        //adding the bias
        
    }

    guess(inputs = []) {
        var sum = 0;
        for(var i=0;i<this.weights.length;i++)
        {
            sum += inputs[i] * this.weights[i];            
        }
        //console.clear();
        console.log(this.weights);
        var output = sign(sum);
        return output;
    }

    train(inputs, target)
    {
        var guess = this.guess(inputs);
        var error = target - guess;
        
        for(var i=0;i<this.weights.length;i++)
        {
            
            this.weights[i] += error * inputs[i] * this.lr;            
        }
    }
    guessY (x)
    {
        var w0 = this.weights[0];
        var w1 = this.weights[1];
        var w2 = this.weights[2];
        return -(w2/w1) - (w0/w1) *x;
    }
}