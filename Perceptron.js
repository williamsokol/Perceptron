


class Perceptron {
    constructor(){
        this.weights = new Array(2);
        this.lr = 0.1;
        
        
        for(var i =0;i<this.weights.length;i++)
        {
            this.weights[i] = getRndInteger(-1,1);
            
        }    
    }

    guess(inputs = []) {
        var sum = 0;
        for(var i=0;i<this.weights.length;i++)
        {
            sum += inputs[i] * this.weights[i];            
        }
        
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
}