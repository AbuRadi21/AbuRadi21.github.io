var lastTime = d3.now();
var canvas = d3.select('#globe');

// Rendering the globe matching the style of the UI design as anticipated

var context = canvas.node().getContext('2d');
var land, countries; // to be assigned

let currentCountry;

function fill(obj, color) {
    context.beginPath();
    path(obj);
    context.fillStyle = color;
    context.fill();
}

function stroke(obj, color) {
    context.beginPath();
    path(obj);
    context.strokeStyle = color;
    context.stroke();
}

function render() {
    context.clearRect(0, 0, vw, vh);

    fill({ type: 'Sphere' }, '#090F2700'); // creating the sphere

    stroke(d3.geoGraticule10(), '#99999963'); // adding the graticule

    fill(land, '#029688'); // adding land / countries

    fill(countries.features[153], '#008000'); // coloring Syria with #008000
    fill(countries.features[76], '#008000'); // coloring Iraq with #008000
    fill(countries.features[91], '#008000'); // coloring Lebanon with #008000
    fill(countries.features[132], '#008000'); // coloring Palestine with #008000
    fill(countries.features[78], '#008000'); // coloring Palestine with #008000
    fill(countries.features[81], '#008000'); // coloring Jordan with #008000
    fill(countries.features[89], '#008000'); // coloring Kuwait with #008000
    fill(countries.features[138], '#008000'); // coloring Arabia with #008000
    fill(countries.features[133], '#008000'); // coloring Qatar with #008000
    fill(countries.features[3], '#008000'); // coloring Emirates with #008000
    fill(countries.features[121], '#008000'); // coloring Oman with #008000
    fill(countries.features[173], '#008000'); // coloring Yemen with #008000
    fill(countries.features[47], '#008000'); // coloring Egypt with #008000
    fill(countries.features[139], '#008000'); // coloring Sudan with #008000
    fill(countries.features[140], '#32CD32'); // coloring S. Sudan with #32CD32
    fill(countries.features[48], '#008000'); // coloring Eritrea with #008000
    fill(countries.features[42], '#008000'); // coloring Djibouti with #008000
    fill(countries.features[145], '#008000'); // coloring Somalia with #008000
    fill(countries.features[146], '#008000'); // coloring Somalia with #008000
    fill(countries.features[93], '#008000'); // coloring Libya with #008000
    fill(countries.features[161], '#008000'); // coloring Tunisia with #008000
    fill(countries.features[45], '#008000'); // coloring Algeria with #008000
    fill(countries.features[99], '#008000'); // coloring Morocco with #008000
    fill(countries.features[137], '#008000'); // coloring Morocco with #008000
    fill(countries.features[109], '#008000'); // coloring Mauritania with #008000
    fill(countries.features[154], '#32CD32'); // coloring Chad with #32CD32
    fill(countries.features[114], '#32CD32'); // coloring Niger with #32CD32
    fill(countries.features[104], '#32CD32'); // coloring Mali with #32CD32

    fill(countries.features[162], '#E60000'); // coloring Turkey with #E60000
    fill(countries.features[38], '#E60000'); // coloring Cyprus with #E60000
    fill(countries.features[39], '#E60000'); // coloring Cyprus with #E60000
    fill(countries.features[012], '#E60000'); // coloring Azerbaijan with #E60000
    fill(countries.features[158], '#E60000'); // coloring Turkmenistan with #E60000
    fill(countries.features[88], '#ED4C4C'); // coloring Kosovo with #ED4C4C
    // fill(countries.features[75], '#ED4C4C'); // coloring Iran with #ED4C4C

    fill(countries.features[57], '#00008B'); // coloring United Kingdom with #00008B
    fill(countries.features[74], '#00008B'); // coloring Ireland with #00008B
    fill(countries.features[27], '#00008B'); // coloring Canada with #E60000
    fill(countries.features[168], '#00008B'); // coloring United States with #E60000
    fill(countries.features[67], '#00008B'); // coloring Guyana with #E60000
    fill(countries.features[61], '#191970'); // coloring Benin with #191970
    fill(countries.features[143], '#191970'); // coloring Sierra Leone with #191970
    fill(countries.features[92], '#191970'); // coloring Liberia with #191970
    fill(countries.features[59], '#191970'); // coloring Ghana with #191970
    fill(countries.features[115], '#191970'); // coloring Nigeria with #191970
    fill(countries.features[32], '#191970'); // coloring Cameroon with #191970
    fill(countries.features[84], '#191970'); // coloring Kenya with #191970
    fill(countries.features[165], '#191970'); // coloring Uganda with #191970
    fill(countries.features[164], '#191970'); // coloring Tanzania with #191970
    fill(countries.features[110], '#191970'); // coloring Malawi with #191970
    fill(countries.features[175], '#191970'); // coloring Zambia with #191970
    fill(countries.features[176], '#191970'); // coloring Zimbabwe with #191970
    fill(countries.features[25], '#191970'); // coloring Botswana with #191970
    fill(countries.features[112], '#191970'); // coloring Namibia with #191970
    fill(countries.features[174], '#191970'); // coloring South Africa with #191970
    fill(countries.features[95], '#191970'); // coloring Lesotho with #191970
    fill(countries.features[152], '#191970'); // coloring Swaziland with #191970
    fill(countries.features[122], '#191970'); // coloring Pakistan with #191970
    fill(countries.features[73], '#191970'); // coloring India with #191970
    fill(countries.features[94], '#191970'); // coloring Sri Lanka with #191970
    fill(countries.features[111], '#191970'); // coloring Malaysia with #191970
    fill(countries.features[23], '#191970'); // coloring Brunei DarusSalam with #191970
    fill(countries.features[125], '#191970'); // coloring Philippines with #191970
    fill(countries.features[126], '#191970'); // coloring Papua New Guinea with #191970
    fill(countries.features[8], '#00008B'); // coloring Australia with #00008B
    fill(countries.features[120], '#00008B'); // coloring New Zealand with #00008B

    // for (let i = 0; i < countries.features.length; i++) {
    //     if (countries.features[i].id === '?') console.log(i);
    // }

    // if (currentCountry) {
    //     fill(currentCountry, '#008000');

    //     console.log(currentCountry);
    // }
}

// Scaling the globe matching the style of the UI design as anticipated

var vw, vh;
var projection = d3.geoOrthographic().precision(0.1);

function scale() {
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 1.25;

    canvas.attr('width', vw).attr('height', vh);
    projection.scale((1 * Math.min(vw, vh)) / 2).translate([vw / 2, vh / 2]);

    render();
}

// Setting in the initial angle and rotating the globe from there

var autorotate;

projection.rotate([-57, -27, 1]);

var degPerSec = 2.4;
var degPerMs = degPerSec / 1000;

function startRotation(delay) {
    autorotate.restart(rotate, delay || 0);
}

function stopRotation() {
    autorotate.stop();
}

function rotate(elapsed) {
    var now = d3.now();
    var diff = now - lastTime;

    if (diff < elapsed) {
        rotation = projection.rotate();
        rotation[0] += diff * degPerMs;

        projection.rotate(rotation);
        render();
    }

    lastTime = now;
}

// handling the mouse when draging the globe

function draging() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)));
    r0 = projection.rotate();
    q0 = versor(r0);
    stopRotation();
}

function dragged() {
    var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)));
    var q1 = versor.multiply(q0, versor.delta(v0, v1));
    var r1 = versor.rotation(q1);

    projection.rotate(r1);
    render();
}

function postdrag() {
    startRotation(2100); // in 2.1 seconds
}

// handling the mouse hovering over the globe

// https://github.com/d3/d3-polygon

function polygonContains(polygon, point) {
    var n = polygon.length;
    var p = polygon[n - 1];
    var x = point[0], y = point[1];
    var x0 = p[0], y0 = p[1];
    var x1, y1;
    var inside = false;

    for (var i = 0; i < n; ++i) {
        p = polygon[i], x1 = p[0], y1 = p[1];
        if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
        x0 = x1, y0 = y1;
    }

    return inside;
}

function getCountry(event) {
    var position = projection.invert(d3.mouse(event));

    return countries.features.find(function (f) {
        return f.geometry.coordinates.find(function (c0) {
            return polygonContains(c0, position) || c0.find(function (c1) {
                return polygonContains(c1, position);
            });
        });
    });
}

function mousemove() {
    var c = getCountry(this);

    if (!c) {
        if (currentCountry) {
            currentCountry = undefined;
            render();
        }

        return;
    }

    if (c === currentCountry) {
        return;
    }

    currentCountry = c;

    render();
}

canvas.call(d3.drag().on('start', draging).on('drag', dragged).on('end', postdrag)).on('mousemove', mousemove);

//
// Variables
//

var path = d3.geoPath(projection).context(context);
var v0 // Mouse position in Cartesian coordinates at start of drag gesture
var r0 // Projection rotation as Euler angles at start
var q0 // Projection rotation as versor at start

//
// Main Function
//

function loadData(fn) {
    d3.json('/logic/110m.json', function (error, world) {
        if (error) {
            console.log(error);
        }
        d3.tsv('/logic/country_names.tsv', function (error, countries) {
            if (error) {
                console.log(error);
            }
            fn(world, countries);
        });
    });
}

loadData(function (world) {
    land = topojson.feature(world, world.objects.land);
    countries = topojson.feature(world, world.objects.countries);

    window.addEventListener('resize', scale);

    scale();

    autorotate = d3.timer(rotate);
});
