hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = [];

for (i=0; i<hero.length; i++) {
    rainbow[rainbow.length] = hero[i];
}

for (i=0; i<native.length; i++) {
    rainbow[rainbow.length] = native[i];
}

for (i=0; i<destination.length; i++) {
    rainbow[rainbow.length] = destination[i];
}

console.log(rainbow);

rainbow.reverse();
console.log(rainbow);

rainbow.splice (0, 2, 'Richard');
console.log(rainbow);

rainbow.splice (3, 1);
console.log(rainbow);

rainbow.push ('Gave','Battle','In','Vain');
console.log(rainbow);

circles = [];
colors = ['red', 'orange', 'yellow', 'green', 'pink', 'blue', 'purple'];


console.log(circles);

rainbow_output = [];

for(i=0; i<colors.length; i++) {
    rainbow_output.push(`<div class="box_circles_text"><div class="circle" style="background: ${colors[i]}"></div><span class="text">${rainbow[i]}</span></div>`);
}

document.write (`<div class="wrapper">${rainbow_output.join(``)}</div>`);