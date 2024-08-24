var squareLength = 100;
var squareHight = 30;
var frequencyLength = 0;
frequencyLength = squareLength/10;

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
    [[0,0], [0,0]]
])
