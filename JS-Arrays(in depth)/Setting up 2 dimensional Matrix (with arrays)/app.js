let table = [];

for (let i = 0; i < 5; i++) {
    table[i] = [];
}

console.log(table); // Array(5) [ [], [], [], [], [] ]

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
        table[row][col] = row * col;
    }
};

console.log(table);
// Array(5) [ (5) […], (5) […], (5) […], (5) […], (5) […] ]
// ​0: Array(5) [ 0, 0, 0, … ]
// ​1: Array(5) [ 0, 1, 2, … ]
// ​2: Array(5) [ 0, 2, 4, … ]
// ​3: Array(5) [ 0, 3, 6, … ]
// ​4: Array(5) [ 0, 4, 8, … ]
// ​length: 5

// to access the matrix
console.log(table[3][3]); // 9
console.log(table[1][4]); // 4