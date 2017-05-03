
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
/**
 * Converts a hexadecimal color to an array
 * Containing it's red, green and blue values
 *
 * @param {String} color Hexadecimal color
 * @return {Array} Red, green and blue values of the color
 */
function hex2array(color) {
    // Initialise variables
    var rgb = [];

    // Take off the hash
    color = color.slice(1);

    // Convert it to the right length if it is the shorthand
    if(color.length === 3) {
        color = color.replace(/([0-9a-f])/ig, '$1$1');
    }

    // Split the string into its main components and convert them to RGB
    for(i = 0; i < 3; i += 1) {
        rgb.push(parseInt(color.slice(i * 2, (i + 1) * 2), 16));
    }

    // Return the finished array
    return rgb;
}

/**
 * Converts an RGB color to an array
 * Containing it's red, green and blue values
 * The RGB color must resemble `rgb(0, 0, 0)`
 *
 * @param {String} color RGB color
 * @return {Array} Red, green and blue values of the color
 */
function rgb2array(color) {
    // Initialise variables
    var i = null,
        rgb = null;

    // Take out the 'rgb(', ')', spaces and split it by commas
    rgb = color.replace(/rgb\(|\)|\s/gi, '').split(',');

    // Loop over the rgb values converting them to integers
    for(i = 0; i < 3; i += 1) {
        rgb[i] = parseInt(rgb[i], 10);
    }

    // Return the finished array
    return rgb;
}

// Color names, used in a function down below
var colors = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    /*
        ...
        To get all of the colors please visit the fiddle
        http://jsfiddle.net/Wolfy87/XDnEL/
        There were just too many to drop into here
        ...
    */
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
};

/**
 * Converts a color to an array by it's name
 * Containing it's red, green and blue values
 * Will return false if the color was not recognised
 *
 * @param {String} color A colors name
 * @return {Array|Boolean} Red, green and blue values of the color or false if the color could not be found
 */
function name2array(color) {
    // Clean up the colors name
    color = color.toLowerCase().replace(/[^a-z]/g, '');

    // Check if we have a matching color
    if(colors.hasOwnProperty(color)) {
        // We do, return it
        // We have to build a new array otherwise the reference to the original will be returned
        // If this happens changes made to the returned array will affect this one
        return [colors[color][0], colors[color][1], colors[color][2]];
    }

    // Default to returning false
    // This will happen if the color was not recognised
    return false;
}

console.log(hex2array('#DDCCAA'));
console.log(rgb2array('rgb(10,  20  ,200)'));
console.log(name2array('Indian Red'));