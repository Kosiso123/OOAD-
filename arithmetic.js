class DescriptiveStats{
    constructor(data){
        this.data = data;
    }

    // calculating central of tendency
    mean(){
        const sum = this.data.reduce((acc, val) => acc + val, 0);
        return sum / this.data.length;
    }
    median() {
        const reviewData = this.data.slice().sort((a,b) => a-b);
        const middle = Math.floor(reviewData.length / 2);
        return reviewData.length % 2 === 0 ?
           (reviewData[middle - 1] + reviewData[middle]) / 2 :
           reviewData[middle];
    
    } 
    mode(){
        const frequencyMap = new Map();
        this.data.forEach(val => {
            frequencyMap.set(val,(frequencyMap.get(val) || 0) + 1);
        });
        const maxFrequency = Math.max(...frequencyMap.values());
        return[...frequencyMap.keys()].filter(key => frequencyMap.get(key)===maxFrequency);

    }

    range(){
        return this.data[this.data.length - 1] - this.data[0];
    }

    variance(){
        const mean = this.mean();
        return this.data.reduce((acc,val) => acc + (val - mean)** 2,0) / this.data.length;

    }

    standardDeviation(){
        return Math.sqrt(this.variance());
    }
}

const data = [1,2,3,3,4,4,5,6,,7,8,9]
const stats = new DescriptiveStats(data)
console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());