//User Editable//
var squareLength = 100;
var squareHight = 30;
var mountainHightMin = 5;
var mountainHightMax = 10;
var numberOfMountains = 7;


//Not User Editable//
var frequencyLength = 0;
var frequencyHight = 0;
var mountainfrequency = squareHight + (squareLength/numberOfMountains)
var mountainHightMin = mountainHightMin + squareHight
var mountainHightMax = mountainHightMax + squareHight;
var currentHight = 0;

frequencyLength = squareLength/10;
frequencyHight = squareHight/3;
mountainfrequency = squareLength / numberOfMountains

drawLines([
    [[0,0], [0,squareHight]]
])

drawLines([
    [[squareLength,0], [squareLength,squareHight]]
])

drawLines([
    [[0,0], [squareLength,0]]
])

drawLines([
    [[0,squareHight], [squareLength,squareHight]]
])

drawLines([
    [[frequencyLength,0], [frequencyLength,squareHight]]
])

drawLines([
    [[frequencyLength*2,0], [frequencyLength*2,squareHight]]
])

drawLines([
    [[frequencyLength*3,0], [frequencyLength*3,squareHight]]
])

drawLines([
    [[frequencyLength*4,0], [frequencyLength*4,squareHight]]
])

drawLines([
    [[frequencyLength*5,0], [frequencyLength*5,squareHight]]
])

drawLines([
    [[frequencyLength*6,0], [frequencyLength*6,squareHight]]
])

drawLines([
    [[frequencyLength*7,0], [frequencyLength*7,squareHight]]
])

drawLines([
    [[frequencyLength*8,0], [frequencyLength*8,squareHight]]
])
drawLines([
    [[frequencyLength*9,0], [frequencyLength*9,squareHight]]
])

drawLines([
    [[frequencyLength*9,0], [frequencyLength*9,squareHight]]
])

drawLines([
    [[0,frequencyHight], [squareLength,frequencyHight]]
])

drawLines([
    [[0,frequencyHight*2], [squareLength,frequencyHight*2]]
])

currentHight = bt.randInRange(mountainHightMin, mountainHightMax)
drawLines([
    [[0,squareHight], [mountainfrequency,currentHight]]
])

drawLines([
    [[mountainfrequency,currentHight], [mountainfrequency*2,squareHight]]
])

currentHight = bt.randInRange(mountainHightMin, mountainHightMax)
drawLines([
    [[mountainfrequency*2,squareHight], [mountainfrequency*2.75,currentHight]]
])

drawLines([
    [[mountainfrequency*2.75,currentHight], [mountainfrequency*3.5,squareHight]]
])


drawLines([
    [[0,0], [0,0]]
])
