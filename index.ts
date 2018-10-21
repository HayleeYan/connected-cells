const intro: string = "Your code goes here.";

let minValue: number = 2;
let maxValue: number = 8;

let largestRegion: number;

function generateMatrix():void{
	var nValue: number = Math.floor(Math.random()*(maxValue-minValue)+1)+minValue;
	var mValue: number = Math.floor(Math.random()*(maxValue-minValue)+1)+minValue;

	let list:  Array<number> = Array<number>();

	let indexToGenerate: number = nValue*mValue;

	while(list.length <indexToGenerate){
		list.push(Math.floor(Math.random()*2)+0);
	}

	var regionIndex: Array<number> = Array<number>();

	for (var i = nValue-1; i < list.length; ++nValue) {
		for(var j = 1; j < nValue; j++){
			if(list[j-1] == 1 && list[j] == 1){
				if(!regionIndex.includes(j-1)){
					regionIndex.push(j-1);
				}
				regionIndex.push(j);
			}
		}

}