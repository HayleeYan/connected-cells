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

	
	

	var firstIndexOfRow: number = 0;

	while(regionIndex.length === 0){
		regionIndex = checkRowOne(list.slice(firstIndexOfRow, firstIndexOfRow+ nValue));
		firstIndexOfRow = firstIndexOfRow+nValue;
	}

	var singleRowFilledIndex: Array<number> = regionIndex;

	for (var i = 1; i <= mValue; i++) {
		singleRowFilledIndex = checkSubSequentRows(list.slice(firstIndexOfRow, firstIndexOfRow+nValue), singleRowFilledIndex);

		if(singleRowFilledIndex.length > 0){
			for (var i = singleRowFilledIndex.length - 1; i >= 0; i--) {
				regionIndex.push(singleRowFilledIndex[i]);
			}
		}

		firstIndexOfRow =+ nValue;
	}

	largestRegion = regionIndex.length;

	console.log(largestRegion);
}

function checkRowOne(firstRow: Array<number>):Array<number>{
	var indexOfFilledCells: Array<number> = Array<number>();

	for (var i = firstRow.length - 1; i >= 0; i--) {
		if(firstRow[i] == 1){
			indexOfFilledCells.push(i);
		}
	}

	return indexOfFilledCells;
}

function checkSubSequentRows(singleRow: Array<number>, prevRowIndex: Array<number>): Array<number>{
	var indexOfFilledCells: Array<number> = Array<number>();

	var nextRowIndexToCheck: Array<number> = Array<number>();
	for(var i = 0; i <= prevRowIndex.length; i++){
		if(prevRowIndex[i] -1 != -1 && checkIfIndexIsInArray(nextRowIndexToCheck, prevRowIndex[i]-1)){
			nextRowIndexToCheck.push(prevRowIndex[i]-1);	
		}

		if(checkIfIndexIsInArray(nextRowIndexToCheck, prevRowIndex[i])){
			nextRowIndexToCheck.push(prevRowIndex[i]);
		}

		if(prevRowIndex[i]+1 <= singleRow.length && checkIfIndexIsInArray(nextRowIndexToCheck, prevRowIndex[i]+1)){
			nextRowIndexToCheck.push(prevRowIndex[i]+1);
		}
	}

	for (var i = 0; i <= nextRowIndexToCheck.length; i++) {
		if(singleRow[nextRowIndexToCheck[0]] == 1){
			indexOfFilledCells.push(nextRowIndexToCheck[0]);
		}
	}

	return indexOfFilledCells;

}

function checkIfIndexIsInArray(indexArray: Array<number>, index: number):boolean{
	var isInArray: boolean = false;

	if(Array.isArray(indexArray)){
		for(let indexInArray of indexArray){
			if(indexInArray === index){
				isInArray = true;
			}
		}
	}

	return isInArray;
}


generateMatrix();