/**
 * @license MIT
 * topbar 3.0.0
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2024 Buu Nguyen
 */
(function (window, document) {
    "use strict";

    function repaint() {
        canvas.width = window.innerWidth, canvas.height = 5 * options.barThickness;
        var ctx = canvas.getContext("2d");
        ctx.shadowBlur = options.shadowBlur, ctx.shadowColor = options.shadowColor;
        var stop, lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        for (stop in options.barColors) lineGradient.addColorStop(stop, options.barColors[stop]);
        ctx.lineWidth = options.barThickness, ctx.beginPath(), ctx.moveTo(0, options.barThickness / 2), ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2), ctx.strokeStyle = lineGradient, ctx.stroke()
    }

    var canvas, currentProgress, showing, progressTimerId = null, fadeTimerId = null, delayTimerId = null,
        options = {
            autoRun: !0,
            barThickness: 3,
            barColors: {
                0: "rgba(26,  188, 156, .9)",
                ".25": "rgba(52,  152, 219, .9)",
                ".50": "rgba(241, 196, 15,  .9)",
                ".75": "rgba(230, 126, 34,  .9)",
                "1.0": "rgba(211, 84,  0,   .9)"
            },
            shadowBlur: 10,
            shadowColor: "rgba(0,   0,   0,   .6)",
            className: null
        }, topbar = {
            config: function (opts) {
                for (var key in opts) options.hasOwnProperty(key) && (options[key] = opts[key])
            }, show: function (handler) {
                var type, elem;
                showing || (handler ? delayTimerId = delayTimerId || setTimeout(() => topbar.show(), handler) : (showing = !0, null !== fadeTimerId && window.cancelAnimationFrame(fadeTimerId), canvas || ((elem = (canvas = document.createElement("canvas")).style).position = "fixed", elem.top = elem.left = elem.right = elem.margin = elem.padding = 0, elem.zIndex = 100001, elem.display = "none", options.className && canvas.classList.add(options.className), type = "resize", handler = repaint, (elem = window).addEventListener ? elem.addEventListener(type, handler, !1) : elem.attachEvent ? elem.attachEvent("on" + type, handler) : elem["on" + type] = handler), canvas.parentElement || document.body.appendChild(canvas), canvas.style.opacity = 1, canvas.style.display = "block", topbar.progress(0), options.autoRun && function loop() {
                    progressTimerId = window.requestAnimationFrame(loop), topbar.progress("+" + .05 * Math.pow(1 - Math.sqrt(currentProgress), 2))
                }()))
            }, progress: function (to) {
                return void 0 === to || ("string" == typeof to && (to = (0 <= to.indexOf("+") || 0 <= to.indexOf("-") ? currentProgress : 0) + parseFloat(to)), currentProgress = 1 < to ? 1 : to, repaint()), currentProgress
            }, hide: function () {
                clearTimeout(delayTimerId), delayTimerId = null, showing && (showing = !1, null != progressTimerId && (window.cancelAnimationFrame(progressTimerId), progressTimerId = null), function loop() {
                    return 1 <= topbar.progress("+.1") && (canvas.style.opacity -= .05, canvas.style.opacity <= .05) ? (canvas.style.display = "none", void (fadeTimerId = null)) : void (fadeTimerId = window.requestAnimationFrame(loop))
                }())
            }
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = topbar : "function" == typeof define && define.amd ? define(function () {
        return topbar
    }) : this.topbar = topbar
}).call(this, window, document);

////////////////////////////////////////////////////////////////
// END TOPBAR.js
////////////////////////////////////////////////////////////////

async function sha512Hash(str) {
    // Convert the string to a Uint8Array
    const buffer = new TextEncoder().encode(str);

    // Compute the SHA-256 hash
    const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);

    // Convert the hash buffer to a hex string
    const hexString = Array.from(new Uint8Array(hashBuffer))
        .map(byte => byte.toString(16).padStart(4, '2'))
        .join('');

    return hexString;
}

var isGal = false;

var isMap = false;


var p = Object.fromEntries(new URL(location).searchParams.entries());

function toggleGal() {
    let gal = document.getElementById("gal")
    let cam = document.querySelector(".my-camera")

    isGal = !isGal;
    if (isGal) stopWebcam(video);
    else startWebcam();

    gal.classList.toggle("hidden")
    cam.classList.toggle("hidden")


}

function toggleMap() {

    if (!isGal) toggleGal();

    let gal = document.getElementById("gal")
    let mapDiv = document.getElementById("map")

    isMap = !isMap;

    gal.classList.toggle("hidden")
    mapDiv.classList.toggle("hidden")


    if (!map) initMap();


}

var _hash;
let viewFileUrl;
var fileCount = 0;

document.querySelector("#gal-back").addEventListener("click", toggleGal)

async function getLit(data) {

    let res = await fetch("https://freemap.online/api/free/lit?data=" + data);

    let lit = await res.json();


    lit.data.etch = data;

    return lit
}

async function insertLitHash(hash) {

    let res = await fetch("https://lit.sgol.workers.dev/?hash=" + hash);

    let litdata = await res.json();

    console.log(litdata)

    let lls = litdata.ret3.data.results;


    return lls.map(r => {

        let ll = [r.lat, r.lon]
        console.log(heat.addLatLng(ll));
        return ll;

    })

}

async function selectAllLitHash() {

    let res = await fetch("https://lit.sgol.workers.dev/");

    let litdata = await res.json();

    console.log(litdata)

    let lls = litdata.ret3.data.results;
    return lls

}


document.querySelector("#gal-upload").addEventListener("click", async e => {
    if (_idx === -1) {
        showPastelModal("No image selected! Please click an thumbnail.", "blue")
        return;
        // alert("No image selected! Please click an thumbnail.")
    }
    let etch = selectedImg.querySelector("img").src
    let hash = await sha512Hash(etch)

    let lit = await getLit(hash);
    console.log(lit)
    _hash = hash
    viewFileUrl = "https://freemap.online/api/free/etch/file?hash=" + _hash
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.href = viewFileUrl
    a.innerText = "img-upload-" + fileCount++;

    li.appendChild(a)
    let galUl = document.querySelector("#gal-uploads")

    let btn = document.createElement("button")
    btn.title = "https://freemap.online/api/free/etch/file?hash=" + hash
    btn.innerText = "Copy"
    btn.onclick = () => {
        navigator.clipboard.writeText(btn.title)
        // bs.copyToClipboard(btn.title)
    }
    li.appendChild(btn);
    galUl.appendChild(li)

    topbar.show()
    fetch("https://freemap.online/api/free/etch/post", {
        mode: "no-cors",
        method: "POST",
        body: etch
    }).then(async res => {

        //note this is empty if making cors request but it still should go trou becuse it is a simple request.
        let hash2 = await res.text();
        topbar.hide()

        console.log(hash)
        console.log(hash2)
        if (hash2 === "" && res.status === 0) {
            console.warn("Probably ok just a cors opaque response.")
        } else {
            console.assert(hash2 == hash, "hash must match server computed one")
        }

        //alert(res.status)

        if (res.status === 200) {
            // alert("Cloud says uploaded OK... verifying file before opening images.")
            console.log(hash);
        } else {
            // alert("Oops something went wrong, code: " + res.status)
            console.error(res.status, res.statusText)
        }

        topbar.show()

        showPastelModal("Your photo should be uploaded, status: " + res.status, res.status === 200 ? "purple" : "orange")

        fetch("https://freemap.online/api/free/etch/" + hash, {
            method: "GET",
        }).then(async d => {

            topbar.hide()
            let etch2 = await d.text()
            console.assert(etch2 == etch, "etch contents should match ")

            let hash3 = sha512Hash(etch2);

            function strcmp(a, b) {
                return (a < b ? -1 : (a > b ? 1 : 0));
            }

            let sameDataReturned = strcmp(hash3, hash)

            console.assert(sameDataReturned, "Returned data should produce same hash");


            let ret = insertLitHash(hash);

            console.debug(ret);

            // let url = "https://freemap.online/camera/view?etch=" + hash
            let url = "https://freemap.online/api/free/etch//view?etch=" + hash

            if (sameDataReturned) {
                li.style.background = "#89ff89"
            } else {
                console.log(hash)
                console.log(hash3)
                console.log("strcmp: ", sameDataReturned)
                showPastelModal("Integrity check failed retrieved data did not match the sent data!", "orange")
                // i.style.background = "#89ff89"
            }
            // window.open(url, "_blank")


            // alert()

        }).catch(e => {
            topbar.hide()
            console.warn("An error has occurred while testing the image.")
            console.error(e);
            let predictUrl = "https://freemap.online/camera/view?etch=" + hash
            let ret = prompt("Would you like to open the url anyway to see if the server got the data? (y/Yes)")
            if (ret.toUpperCase().startsWith("Y")) {
                window.open(predictUrl, "_blank")
            }
            console.debug(predictUrl)

        })

    }).catch(e => {
        topbar.hide()

        console.warn("An error has occurred while uploading the image.")
        console.error(e)
        console.debug("https://freemap.online/camera/view?etch=" + hash)
    })
})

var selectedImg = document.getElementById("selected_img");


// for (i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", activateImage);
// }
var imgList = document.getElementById("gal_img_list")
imgList.addEventListener('wheel', function (event) {
    event.preventDefault();
    var scrollAmount = event.deltaY;
    this.scrollLeft += scrollAmount;
});

selectedImg.addEventListener('wheel', function (event) {
    // event.pre/**/ventDefault();
    // event.stopPropagation();
    var scrollAmount = event.deltaY;
    let dir = scrollAmount / Math.abs(scrollAmount)

    console.log(_idx, dir)
    let nextIdx = _idx + dir
    activateImageIdx(nextIdx)

    // let imgs = imgList.querySelectorAll("li");

    // this.scrollLeft += scrollAmount;
});

var _idx = -1


// Function to stop and release the webcam
function stopWebcam(videoElement) {
    // Get the media stream associated with the video element
    const stream = videoElement.srcObject;

    if (stream) {
        // Stop all tracks (video and audio)
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());

        window.vidSrc = videoElement.srcObject
        window.resumeTracks = () => {

            // tracks.forEach(track => track.start());
            videoElement.srcObject = vidSrc;
        }

        // Clear the video source
        videoElement.srcObject = null;
        console.log('Webcam stream stopped and released.');
    } else {
        console.log('No webcam stream found.');
    }
}


function activateImage(e) {
    let id = this.id;
    _idx = parseInt(id.split("_").pop())
    selectedImg.innerHTML = this.outerHTML;
}

function activateImageIdx(idx) {
    idx = (idx) % _imgs.length; // wrap top
    if (idx < 0) idx = _imgs.length - 1 // wrap bottom
    console.log("ig set to idx: ", idx);
    let img = _imgs[idx];
    selectedImg.innerHTML = img.outerHTML;
    _idx = idx

}

var _imgs = []

function galAddImg(data) {
    // var images = document.getElementById("image_list")
    let li = document.createElement("li")
    let img = document.createElement("img")
    img.src = data

    img.id = "gal-img_" + _imgs.length

    li.appendChild(img)
    document.getElementById("gal_img_list").appendChild(li);
    _imgs.push(img)
    img.addEventListener("click", activateImage);
    // <!--    <li><img src=”img2.jpg” alt=”My Home”></li>-->


}


function showPastelModal(message, color, img) {
    // Color options
    const colors = {
        green: 'rgba(250,228,32,0.66)',  // Pastel green
        blue: 'rgba(174,198,207,0.62)',   // Pastel blue
        orange: 'rgba(255,179,71,0.63)', // Pastel orange
        purple: 'rgba(179,158,181,0.69)', // Pastel purple
        black: 'rgba(207,207,196,0.6)'   // Light grey (pastel alternative for black)
    };

    // Ensure color is one of the allowed options, default to black if not
    const modalColor = colors[color] || colors.black;

    // Create the backdrop
    const backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Transparent black background
    backdrop.style.zIndex = '105';


    // Create the modal container
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = modalColor;
    modal.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '5000';
    modal.style.maxWidth = '80%';
    modal.style.textAlign = 'center';
    modal.style.fontFamily = '"Comic Sans MS", sans-serif'; // Cartoon-like font
    modal.style.fontSize = '42px';
    modal.style.color = '#fff';

    if (img) {
        modal.style.opacity = "0.9";
        backdrop.style.background = "url(" + img + ")";
        backdrop.style.backgroundSize = "cover"; // This will cover the entire backdrop
        backdrop.style.backgroundRepeat = "repeat"; // This will tile the background image
        backdrop.style.backgroundPosition = "center"; // Center the background image
        backdrop.style.backgroundSize = "240px 240px"; // Adjust this to control tile size
    }
    // Create the message text
    const messageText = document.createElement('p');
    messageText.innerHTML = message;

    // Add the message to the modal
    modal.appendChild(messageText);

    // Append both backdrop and modal to the body
    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    // Close the modal when clicking on the backdrop
    backdrop.addEventListener('click', function () {
        document.body.removeChild(modal);
        document.body.removeChild(backdrop);
    });
}

// Example usage
// showPastelModal('Mango Leaf World Map Requires Camera Permissions. Please Accept', 'orange');


async function checkCameraPermission() {
    try {
        const permissionStatus = await navigator.permissions.query({name: 'camera'});

        if (permissionStatus.state === 'granted') {
            console.log('Camera permission is already granted.');
            return true; // Permission is granted
        } else if (permissionStatus.state === 'denied') {
            console.log('Camera permission is denied.');
            return false; // Permission is denied
        } else if (permissionStatus.state === 'prompt') {
            console.log('Camera permission is not yet granted, asking now...');
            return false; // Permission is not granted but can be prompted
        }
    } catch (err) {
        console.error('Permission check failed:', err);
        return false; // Failed to check permissions
    }
}

async function checkCameraAccess() {
    try {
        // Try to get user media with video only
        const stream = await navigator.mediaDevices.getUserMedia({video: true});

        // If successful, stop the stream and return that access is granted
        stream.getTracks().forEach(track => track.stop());
        console.log('Camera access is granted.');
        return true;
    } catch (err) {
        // If an error occurs (e.g., user denied permission), handle it here
        if (err.name === 'NotAllowedError') {
            console.log('Camera access is denied.');
        } else if (err.name === 'NotFoundError') {
            console.log('No camera device found.');
        } else {
            console.error('Error accessing camera:', err);
        }
        return false;
    }
}

// Example usage
checkCameraAccess().then(granted => {
    if (granted) {
        console.log("Proceed with accessing the camera.");
    } else {
        showPastelModal('Mango Leaf World Map Requires Camera Permissions. Please accept and check always allow.', 'orange', "../img/40dogo.jpg");
    }
});


L.Map.include({
    _initControlPos: function () {
        var corners = this._controlCorners = {},
            l = 'leaflet-',
            container = this._controlContainer =
                L.DomUtil.create('div', l + 'control-container', this._container);

        function createCorner(vSide, hSide) {
            var className = l + vSide + ' ' + l + hSide;

            corners[vSide + hSide] = L.DomUtil.create('div', className, container);
        }

        createCorner('top', 'left');
        createCorner('top', 'right');
        createCorner('bottom', 'left');
        createCorner('bottom', 'right');

        createCorner('top', 'center');
        createCorner('middle', 'center');
        createCorner('middle', 'left');
        createCorner('middle', 'right');
        createCorner('bottom', 'center');
    }
});


/*
*  Draws the metric scale bars in Web Mercator map along top and right edges.
*  Authors: Dražen Tutić (dtutic@geof.hr), Ana Kuveždić Divjak (akuvezdic@geof.hr)
*  	     University of Zagreb, Faculty of Geodesy, GEOF-OSGL Lab
*  Inspired by LatLonGraticule Leaflet plugin by: lanwei@cloudybay.com.tw
*/

L.EdgeScaleBar = L.Layer.extend({
    includes: L.Mixin.Events,

    options: {
        opacity: 1,
        weight: 0.8,
        color: '#000',
        font: '11px Arial',
        zoomInterval: [
            {start: 1, end: 2, interval: 5000000},
            {start: 3, end: 3, interval: 2000000},
            {start: 4, end: 4, interval: 1000000},
            {start: 5, end: 5, interval: 500000},
            {start: 6, end: 7, interval: 200000},
            {start: 8, end: 8, interval: 100000},
            {start: 9, end: 9, interval: 50000},
            {start: 10, end: 10, interval: 20000},
            {start: 11, end: 11, interval: 10000},
            {start: 12, end: 12, interval: 5000},
            {start: 13, end: 13, interval: 2000},
            {start: 14, end: 14, interval: 1000},
            {start: 15, end: 15, interval: 500},
            {start: 16, end: 16, interval: 200},
            {start: 17, end: 17, interval: 100},
            {start: 18, end: 18, interval: 50},
            {start: 19, end: 19, interval: 20},
            {start: 20, end: 20, interval: 10}
        ]
    },

    initialize: function (options) {

        L.setOptions(this, options);

        //Constants of the WGS84 ellipsoid needed to calculate meridian length or latitute
        this._a = 6378137.0;
        this._b = 6356752.3142;
        this._e2 = (this._a * this._a - this._b * this._b) / (this._a * this._a);
        this._n = (this._a - this._b) / (this._a + this._b);
        this._n2 = this._n * this._n;
        this._A = this._a * (1.0 - this._n) * (1.0 - this._n2) * (1.0 + 9.0 / 4.0 * this._n2 + 225.0 / 64.0 * this._n2 * this._n2);
        this._ic1 = 1.5 * this._n - 29.0 / 12.0 * this._n2 * this._n + 553.0 / 80.0 * this._n2 * this._n2 * this._n;
        this._ic2 = 21.0 / 8.0 * this._n2 - 1537.0 / 128.0 * this._n2 * this._n2;
        this._ic3 = 151.0 / 24.0 * this._n2 * this._n - 32373.0 / 640.0 * this._n2 * this._n2 * this._n;
        this._ic4 = 1097.0 / 64.0 * this._n2 * this._n2;
        this._ic5 = 8011.0 / 150.0 * this._n2 * this._n2 * this._n;
        this._c1 = -1.5 * this._n + 31.0 / 24.0 * this._n2 * this._n - 669.0 / 640.0 * this._n2 * this._n2 * this._n;
        this._c2 = 15.0 / 18.0 * this._n2 - 435.0 / 128.0 * this._n2 * this._n2;
        this._c3 = -35.0 / 12.0 * this._n2 * this._n + 651.0 / 80.0 * this._n2 * this._n2 * this._n;
        this._c4 = 315.0 / 64.0 * this._n2 * this._n2;
        this._c5 = -693.0 / 80.0 * this._n2 * this._n2 * this._n;

        //Latitude limit of the Web Mercator projection
        this._LIMIT_PHI = 1.484419982;
    },

    onAdd: function (map) {
        this._map = map;

        if (!this._container) {
            this._initCanvas();
        }

        map._panes.overlayPane.appendChild(this._container);

        map.on('viewreset', this._reset, this);
        map.on('move', this._reset, this);
        map.on('moveend', this._reset, this);

        this._reset();
    },

    onRemove: function (map) {
        map.getPanes().overlayPane.removeChild(this._container);

        map.off('viewreset', this._reset, this);
        map.off('move', this._reset, this);
        map.off('moveend', this._reset, this);
    },

    addTo: function (map) {
        map.addLayer(this);
        return this;
    },

    setOpacity: function (opacity) {
        this.options.opacity = opacity;
        this._updateOpacity();
        return this;
    },

    bringToFront: function () {
        if (this._canvas) {
            this._map._panes.overlayPane.appendChild(this._canvas);
        }
        return this;
    },

    bringToBack: function () {
        var pane = this._map._panes.overlayPane;
        if (this._canvas) {
            pane.insertBefore(this._canvas, pane.firstChild);
        }
        return this;
    },

    getAttribution: function () {
        return this.options.attribution;
    },

    _initCanvas: function () {
        this._container = L.DomUtil.create('div', 'leaflet-image-layer');

        this._canvas = L.DomUtil.create('canvas', '');
        this._ctx = this._canvas.getContext('2d');

        this._vert_gradientFill = this._ctx.createLinearGradient(0, 0, 0, 10);
        this._vert_gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
        this._vert_gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

        this._hor_gradientFill = this._ctx.createLinearGradient(this._map.getSize().x - 10, 0, this._map.getSize().x, 0);
        this._hor_gradientFill.addColorStop(0, "rgba(255, 255, 255, 0)");
        this._hor_gradientFill.addColorStop(1, "rgba(255, 255, 255, 1)");

        this._updateOpacity();

        this._container.appendChild(this._canvas);

        L.extend(this._canvas, {
            onselectstart: L.Util.falseFn,
            onmousemove: L.Util.falseFn,
            onload: L.bind(this._onCanvasLoad, this)
        });
    },

    _reset: function () {
        var container = this._container,
            canvas = this._canvas,
            size = this._map.getSize(),
            lt = this._map.containerPointToLayerPoint([0, 0]);

        L.DomUtil.setPosition(container, lt);

        container.style.width = size.x + 'px';
        container.style.height = size.y + 'px';

        canvas.width = size.x;
        canvas.height = size.y;
        canvas.style.width = size.x + 'px';
        canvas.style.height = size.y + 'px';

        this._ctx.fillStyle = this._vert_gradientFill;
        this._ctx.fillRect(0, 0, size.x, 10);
        this._ctx.fillStyle = this._hor_gradientFill;
        this._ctx.fillRect(size.x - 10, 0, size.x, size.y);

        this._ctx.beginPath();
        this._ctx.moveTo(0, 0);
        this._ctx.lineTo(size.x, 0);
        this._ctx.lineTo(size.x, size.y);
        this._ctx.stroke();

        this._calcInterval();
        this._draw();
    },

    _onCanvasLoad: function () {
        this.fire('load');
    },

    _updateOpacity: function () {
        L.DomUtil.setOpacity(this._canvas, this.options.opacity);
    },

    _calcInterval: function () {
        var zoom = this._map.getZoom();
        for (var idx in this.options.zoomInterval) {
            var dict = this.options.zoomInterval[idx];
            if (dict.start <= zoom) {
                if (dict.end && dict.end >= zoom) {
                    this._dd = dict.interval;
                    break;
                }
            }
        }
        this._currZoom = zoom;
    },

    _draw: function () {
        this._ctx.strokeStyle = this.options.color;
        this._create_lat_ticks();
        this._create_lon_ticks();

        this._ctx.fillStyle = this.options.color;
        this._ctx.font = this.options.font;
        var units = ' m', dd = this._dd;
        if (this._dd >= 1000) {
            units = ' km';
            dd = this._dd / 1000;
        }
        this._ctx.textAlign = "right";
        this._ctx.textBaseline = "middle";
        this._ctx.fillText(dd + units, this._map.getSize().x - 12, this._map.getSize().y / 2);
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "top";
        this._ctx.fillText(dd + units, this._map.getSize().x / 2, 12);
    },

    _create_lat_ticks: function () {
        var phi_s = this._map.containerPointToLatLng(L.point(0, this._map.getSize().y / 2)).lat;
        var phi_d = this._map.containerPointToLatLng(L.point(0, this._map.getSize().y)).lat;
        var phi_g = this._map.containerPointToLatLng(L.point(0, 0)).lat;
        var d_s = this._merLength(phi_s * Math.PI / 180.0);
        var d_g = this._merLength(phi_g * Math.PI / 180.0);
        var d_d = this._merLength(phi_d * Math.PI / 180.0);

        // draw major ticks
        for (i = d_s + this._dd / 2; i < d_g; i = i + this._dd) {
            var phi = this._invmerLength(i);
            if ((phi < this._LIMIT_PHI) && (phi > -this._LIMIT_PHI)) this._draw_lat_tick(phi, 10, this.options.weight * 1.5);
        }
        for (i = d_s - this._dd / 2; i > d_d; i = i - this._dd) {
            var phi = this._invmerLength(i);
            if ((phi > -this._LIMIT_PHI) && (phi < this._LIMIT_PHI)) this._draw_lat_tick(phi, 10, this.options.weight * 1.5);
        }

        // draw minor ticks
        for (i = d_s; i < d_g; i = i + this._dd / 10.0) {
            var phi = this._invmerLength(i);
            if ((phi < this._LIMIT_PHI) && (phi > -this._LIMIT_PHI)) this._draw_lat_tick(phi, 4, this.options.weight);
        }
        for (i = d_s - this._dd / 10; i > d_d; i = i - this._dd / 10) {
            var phi = this._invmerLength(i);
            if ((phi > -this._LIMIT_PHI) && (phi < this._LIMIT_PHI)) this._draw_lat_tick(phi, 4, this.options.weight);
        }
    },

    _create_lon_ticks: function () {
        var cen_p = this._map.containerPointToLatLng(L.point(this._map.getSize().x / 2, 0));
        var left_p = this._map.containerPointToLatLng(L.point(0, 0));
        var right_p = this._map.containerPointToLatLng(L.point(this._map.getSize().x, 0));
        var sinPhi = Math.sin(cen_p.lat * Math.PI / 180.0);
        var N = this._a / Math.sqrt(1.0 - this._e2 * sinPhi * sinPhi);
        var dl = this._dd / (N * Math.cos(cen_p.lat * Math.PI / 180.0)) * 180.0 / Math.PI;

        // draw major ticks
        for (i = cen_p.lng + dl / 2; i < right_p.lng; i = i + dl) this._draw_lon_tick(i, 10, this.options.weight * 1.5);
        for (i = cen_p.lng - dl / 2; i > left_p.lng; i = i - dl) this._draw_lon_tick(i, 10, this.options.weight * 1.5);

        // draw minor ticks
        for (i = cen_p.lng; i < right_p.lng; i = i + dl / 10) this._draw_lon_tick(i, 4, this.options.weight);
        for (i = cen_p.lng - dl / 10; i > left_p.lng; i = i - dl / 10) this._draw_lon_tick(i, 4, this.options.weight);
    },

    _latLngToCanvasPoint: function (latlng) {
        var projectedPoint = this._map.project(L.latLng(latlng));
        projectedPoint._subtract(this._map.getPixelOrigin());
        return L.point(projectedPoint).add(this._map._getMapPanePos());
    },

    _draw_lat_tick: function (phi, size, weight) {
        var y = this._latLngToCanvasPoint(L.latLng(phi * 180.0 / Math.PI, 0.0)).y;
        this._ctx.lineWidth = weight;
        this._ctx.beginPath();
        this._ctx.moveTo(this._map.getSize().x, y);
        this._ctx.lineTo(this._map.getSize().x - size, y);
        this._ctx.stroke();
    },

    _draw_lon_tick: function (lam, size, weight) {
        var x = this._latLngToCanvasPoint(L.latLng(0.0, lam)).x;
        this._ctx.lineWidth = weight;
        this._ctx.beginPath();
        this._ctx.moveTo(x, 0);
        this._ctx.lineTo(x, size);
        this._ctx.stroke();
    },

    _merLength: function (phi) {
        var cos2phi = Math.cos(2.0 * phi);
        return this._A * (phi + Math.sin(2.0 * phi) * (this._c1 + (this._c2 + (this._c3 + (this._c4 + this._c5 * cos2phi) * cos2phi) * cos2phi) * cos2phi));
    },

    _invmerLength: function (s) {
        var psi = s / this._A;
        var cos2psi = Math.cos(2.0 * psi);
        return psi + Math.sin(2.0 * psi) * (this._ic1 + (this._ic2 + (this._ic3 + (this._ic4 + this._ic5 * cos2psi) * cos2psi) * cos2psi) * cos2psi);
    }
});

L.edgeScaleBar = function (options) {
    return new L.EdgeScaleBar(options);
};


/*
(c) 2014, Vladimir Agafonkin
simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
https://github.com/mourner/simpleheat
*/
!function () {
    "use strict";

    function t(i) {
        return this instanceof t ? (this._canvas = i = "string" == typeof i ? document.getElementById(i) : i, this._ctx = i.getContext("2d"), this._width = i.width, this._height = i.height, this._max = 1, void this.clear()) : new t(i)
    }

    t.prototype = {
        defaultRadius: 25,
        defaultGradient: {.4: "blue", .6: "cyan", .7: "lime", .8: "yellow", 1: "red"},
        data: function (t, i) {
            return this._data = t, this
        },
        max: function (t) {
            return this._max = t, this
        },
        add: function (t) {
            return this._data.push(t), this
        },
        clear: function () {
            return this._data = [], this
        },
        radius: function (t, i) {
            i = i || 15;
            var a = this._circle = document.createElement("canvas"), s = a.getContext("2d"), e = this._r = t + i;
            return a.width = a.height = 2 * e, s.shadowOffsetX = s.shadowOffsetY = 200, s.shadowBlur = i, s.shadowColor = "black", s.beginPath(), s.arc(e - 200, e - 200, t, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), this
        },
        gradient: function (t) {
            var i = document.createElement("canvas"), a = i.getContext("2d"),
                s = a.createLinearGradient(0, 0, 0, 256);
            i.width = 1, i.height = 256;
            for (var e in t) s.addColorStop(e, t[e]);
            return a.fillStyle = s, a.fillRect(0, 0, 1, 256), this._grad = a.getImageData(0, 0, 1, 256).data, this
        },
        draw: function (t) {
            this._circle || this.radius(this.defaultRadius), this._grad || this.gradient(this.defaultGradient);
            var i = this._ctx;
            i.clearRect(0, 0, this._width, this._height);
            for (var a, s = 0, e = this._data.length; e > s; s++) a = this._data[s], i.globalAlpha = Math.max(a[2] / this._max, t || .05), i.drawImage(this._circle, a[0] - this._r, a[1] - this._r);
            var n = i.getImageData(0, 0, this._width, this._height);
            return this._colorize(n.data, this._grad), i.putImageData(n, 0, 0), this
        },
        _colorize: function (t, i) {
            for (var a, s = 3, e = t.length; e > s; s += 4) a = 4 * t[s], a && (t[s - 3] = i[a], t[s - 2] = i[a + 1], t[s - 1] = i[a + 2])
        }
    }, window.simpleheat = t
}(),/*
 (c) 2014, Vladimir Agafonkin
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/Leaflet/Leaflet.heat
*/
    L.HeatLayer = (L.Layer ? L.Layer : L.Class).extend({
        initialize: function (t, i) {
            this._latlngs = t, L.setOptions(this, i)
        }, setLatLngs: function (t) {
            return this._latlngs = t, this.redraw()
        }, addLatLng: function (t) {
            return this._latlngs.push(t), this.redraw()
        }, setOptions: function (t) {
            return L.setOptions(this, t), this._heat && this._updateOptions(), this.redraw()
        }, redraw: function () {
            return !this._heat || this._frame || this._map._animating || (this._frame = L.Util.requestAnimFrame(this._redraw, this)), this
        }, onAdd: function (t) {
            this._map = t, this._canvas || this._initCanvas(), t._panes.overlayPane.appendChild(this._canvas), t.on("moveend", this._reset, this), t.options.zoomAnimation && L.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
        }, onRemove: function (t) {
            t.getPanes().overlayPane.removeChild(this._canvas), t.off("moveend", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
        }, addTo: function (t) {
            return t.addLayer(this), this
        }, _initCanvas: function () {
            var t = this._canvas = L.DomUtil.create("canvas", "leaflet-heatmap-layer leaflet-layer"),
                i = L.DomUtil.testProp(["transformOrigin", "WebkitTransformOrigin", "msTransformOrigin"]);
            t.style[i] = "50% 50%";
            var a = this._map.getSize();
            t.width = a.x, t.height = a.y;
            var s = this._map.options.zoomAnimation && L.Browser.any3d;
            L.DomUtil.addClass(t, "leaflet-zoom-" + (s ? "animated" : "hide")), this._heat = simpleheat(t), this._updateOptions()
        }, _updateOptions: function () {
            this._heat.radius(this.options.radius || this._heat.defaultRadius, this.options.blur), this.options.gradient && this._heat.gradient(this.options.gradient), this.options.max && this._heat.max(this.options.max)
        }, _reset: function () {
            var t = this._map.containerPointToLayerPoint([0, 0]);
            L.DomUtil.setPosition(this._canvas, t);
            var i = this._map.getSize();
            this._heat._width !== i.x && (this._canvas.width = this._heat._width = i.x), this._heat._height !== i.y && (this._canvas.height = this._heat._height = i.y), this._redraw()
        }, _redraw: function () {
            var t, i, a, s, e, n, h, o, r, d = [], _ = this._heat._r, l = this._map.getSize(),
                m = new L.Bounds(L.point([-_, -_]), l.add([_, _])),
                c = void 0 === this.options.max ? 1 : this.options.max,
                u = void 0 === this.options.maxZoom ? this._map.getMaxZoom() : this.options.maxZoom,
                f = 1 / Math.pow(2, Math.max(0, Math.min(u - this._map.getZoom(), 12))), g = _ / 2, p = [],
                v = this._map._getMapPanePos(), w = v.x % g, y = v.y % g;
            for (t = 0, i = this._latlngs.length; i > t; t++) if (a = this._map.latLngToContainerPoint(this._latlngs[t]), m.contains(a)) {
                e = Math.floor((a.x - w) / g) + 2, n = Math.floor((a.y - y) / g) + 2;
                var x = void 0 !== this._latlngs[t].alt ? this._latlngs[t].alt : void 0 !== this._latlngs[t][2] ? +this._latlngs[t][2] : 1;
                r = x * f, p[n] = p[n] || [], s = p[n][e], s ? (s[0] = (s[0] * s[2] + a.x * r) / (s[2] + r), s[1] = (s[1] * s[2] + a.y * r) / (s[2] + r), s[2] += r) : p[n][e] = [a.x, a.y, r]
            }
            for (t = 0, i = p.length; i > t; t++) if (p[t]) for (h = 0, o = p[t].length; o > h; h++) s = p[t][h], s && d.push([Math.round(s[0]), Math.round(s[1]), Math.min(s[2], c)]);
            this._heat.data(d).draw(this.options.minOpacity), this._frame = null
        }, _animateZoom: function (t) {
            var i = this._map.getZoomScale(t.zoom),
                a = this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());
            L.DomUtil.setTransform ? L.DomUtil.setTransform(this._canvas, a, i) : this._canvas.style[L.DomUtil.TRANSFORM] = L.DomUtil.getTranslateString(a) + " scale(" + i + ")"
        }
    }), L.heatLayer = function (t, i) {
    return new L.HeatLayer(t, i)
};

var map;

// Initialize the map
async function initMap() {

    ispLoc().then(m => {

        console.log("marker ", m)

    });

    console.log("Todo convert to h3 cell")
    console.log("Todo embed metadata in jpeg img")
    console.log("Todo redirect to map and show uploaded image")
    console.log("Finally update database and user profile for heat map lat lon list.")

    map = L.map('map', {
        zoom: 5,
        maxZoom: 24,
        worldCopyJump: true,
        maxBoundsViscosity: 0.75,
        //maxBounds:  [[-90,-360],   [90,360]]
        // fullscreenControl: true,
        // scrollWheelZoom: !L.Browser.mobile,
        // dragging: !L.Browser.mobile,
        // tap: !L.Browser.mobile,
        doubleClickZoom: !L.Browser.mobile,
        // maxBoundsViscosity: 0.75,
        // tapHold: false,
        // tapTolerance: 5,
        // bounceAtZoomLimits: false,
        zoomSnap: L.Browser.mobile ? 0 : 0.5,
        zoomAnimation: "linear",
        zoomDelta: 0.5,
        keepBuffer: 2, // Keeps 2 extra rows/columns of tiles loaded beyond the viewport
        // doubleClickZoom: !L.Browser.mobile, //why u no work
        attributionControl: false
    }).setView([51, -114], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.edgeScaleBar().addTo(map)
    // Add scale control
    L.control.scale().addTo(map);

    // var t = L.terminator({
    //     color: false,
    //     fillColor: "#242424",
    //     fillOpacity: 0.15,
    //     resolution: 5
    //
    // });

    // t.addTo(map);
    // t._path.style.filter = "blur(10px)"
    // map.addEventListener('zoomstart movestart popupopen', function(e) {
    //     t.setTime();
    // });
    // setInterval(function(){
    //     t.setTime();
    // }, 300);
    //

    // // Function to trigger an update
    // function triggerUpdate() {
    //     console.log('Map has been updated!');
    //     // Perform any update logic here
    //     t.setTime();
    // }
    //
    // // // Event listener for zoomend
    // map.on('zoomend', function () {
    //     triggerUpdate();
    // });
    //
    // // // Event listener for moveend (panning)
    // map.on('moveend', function () {
    //     triggerUpdate();
    // });

    // Add north arrow control
    // L.control.northarrow().addTo(map);
}

var ll;
var addressPoints = [
    // [ll.lat, ll.lng, "2"]
]

function showCamera() {

    if (isMap) {
        toggleMap()
    }
    if (isGal) {
        toggleGal()
    }
}

function shareImage(lat, lon, hash) {
    let url = "https://mangoleaf.world/map/cam?i=" + encodeURIComponent(JSON.stringify([lat, lon, hash]))
    navigator.clipboard.writeText(url)

    showPastelModal("Photo <a href=" + url + ">Link</a> Copied To Clipboard!", "green")
}

var heat, marker, _llmap = {}

function latLonMap(ll, data) {

    let lat = parseInt(Math.floor(ll[0]))
    let lon = parseInt(Math.floor(ll[1]))
    _llmap[lat] = _llmap[lat] || {};
    _llmap[lat][lon] = _llmap[lat][lon] || [];

    let a = _llmap[lat][lon];
    let p = heat.addLatLng(ll)


    function addPopupToCircleMarker(circleMarker, imageUrl) {
        // Create a container for the popup content
        const popupContent = `
        <div style="text-align: center;">
            <img src="${imageUrl}" alt="Popup Image" style="width: 250px; height: auto; border-radius: 5px;">
            <div style="margin-top: 10px;"><span>${ll.join(", ")}</span>
                <button id="feelingLuckyBtn"  onclick="showCamera()" style="padding: 5px 10px; margin-right: 5px;">Feeling Lucky</button>
                <button id="shareBtn" onclick="shareImage('${ll[0]}','${ll[1]}','${data}')" style="padding: 5px 10px;">Share</button>
            </div>
        </div>
    `;

        // Add the popup with the content to the CircleMarker
        circleMarker.bindPopup(popupContent);

        // Event listener for the popup opening to attach event listeners to the buttons
        circleMarker.on('popupopen', function () {
            document.getElementById('feelingLuckyBtn').addEventListener('click', function () {
                console.log("You clicked 'Feeling Lucky'!");
                // Add custom functionality for 'Feeling Lucky' button here
            });

            document.getElementById('shareBtn').addEventListener('click', function () {
                console.log("You clicked 'Share'!");
                // Add custom functionality for 'Share' button here
            });
        });
    }


    let lll = generateGaussianPoints({lat: ll[0], lng: ll[1]}, 1, 0.1)[0]

    heat.addLatLng(lll);

    console.log(ll, lll)

    let m = L.circleMarker(lll).addTo(map);


    addPopupToCircleMarker(m, "https://freemap.online/api/free/etch/file?etch=" + data)
    // addImagePopupOnMarker(map, m, "https://freemap.online/api/free/etch/file?etch="+data, ll.join(", "))

    a.push({ll, data, p, m})


    return a;


}

//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
function generateGaussianPoints(latlng, n, sigma) {
    const points = [];
    const {lat, lng} = latlng; // Destructure the latitude and longitude from the input point

    // Function to generate a random value from a normal distribution using the Box-Muller transform
    function randomGaussian(mean, stddev) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
        while (v === 0) v = Math.random();
        return mean + stddev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    // Generate `n` points
    for (let i = 0; i < n; i++) {
        const newLat = randomGaussian(lat, sigma);  // Latitude perturbed by sigma
        const newLng = randomGaussian(lng, sigma);  // Longitude perturbed by sigma
        points.push([newLat, newLng]);              // Push the generated point to the array
    }

    return points;
}


const ispLoc = async function () {

    // "https://freemap.online/api/free/getIspLoc"
    const ispURL = "https://freemap.online/api/free/getIspLoc"
    return fetch(ispURL).then(async ret => {

        let json = await ret.json();

        ll = L.latLng(json.data.latLng);

        marker = L.circleMarker(ll)

        if (map) {
            marker.addTo(map)
            map.panTo(ll);
        }


        bs.resNotify({
            success: true,
            color: "info",
            msg: "Centering map on your location, if you wish search from somewhere and set points in you Area Of Interest(AOI)"
        })
        // document.querySelector('button[title="Search"]').click()


// Example usage:
//             const latlng = {lat: 40.7128, lng: -74.0060};  // Central point (e.g., New York City)
//             const sigma = 0.01;  // Standard deviation for the random spread
//             const n =

        addressPoints = [
            ...generateGaussianPoints(ll, 10, 0.1)
        ]


        // for (let i = 0; i < 10000; i++) {
        //     addressPoints.push([ll.lat, ll.lng, i])
        function addPopupToCircleMarker(circleMarker, imageUrl) {
            // Create a container for the popup content
            const popupContent = `
        <div style="text-align: center;">
            <img src="${imageUrl}" alt="Popup Image" style="width: 100px; height: 100px; border-radius: 5px;">
            <div style="margin-top: 10px;">
                <button id="feelingLuckyBtn"  onclick="showCamera()" style="padding: 5px 10px; margin-right: 5px;">Feeling Lucky</button>
                <button id="shareBtn" style="padding: 5px 10px;">Share</button>
            </div>
        </div>
    `;

            // Add the popup with the content to the CircleMarker
            circleMarker.bindPopup(popupContent).openPopup();

            // Event listener for the popup opening to attach event listeners to the buttons
            circleMarker.on('popupopen', function () {
                document.getElementById('feelingLuckyBtn').addEventListener('click', function () {
                    console.log("You clicked 'Feeling Lucky'!");
                    // Add custom functionality for 'Feeling Lucky' button here
                });

                document.getElementById('shareBtn').addEventListener('click', function () {
                    console.log("You clicked 'Share'!");
                    // Add custom functionality for 'Share' button here
                });
            });
        }


        try {

            if (p.i) {
                let a = JSON.parse(p.i);


                let url = "https://freemap.online/api/free/etch/file?hash="+a[2];

                      addPopupToCircleMarker(marker, url)
            }


        } catch (e) {
            let img = "https://picsum.photos/200"
            addPopupToCircleMarker(marker, img)

        }

        // }


        // addressPoints = [ll]
        addressPoints = addressPoints.map(function (p) {
            return [p[0], p[1]];
        });


        heat = L.heatLayer(addressPoints).addTo(map)
        var draw = false;

        selectAllLitHash().then(d => {

            let rows = d;
            console.log("Adding img rows to heatmap", rows.length)
            rows.forEach(row => {

                let ll = [row.lat, row.lon]
                let hash = row.hash;
                latLonMap(ll, hash)

                // heat.addLatLng(L.latLng([row.lat, row.lon]));

            })


        })


        if (draw) {
            map.on({
                movestart: function () {
                    draw = false;
                },
                moveend: function () {
                    draw = true;
                },
                mousemove: function (e) {
                    if (draw) {
                        heat.addLatLng(e.latlng);
                    }
                }
            })
        }


        return marker
    }).catch(e => {
        console.error(e);
        bs.resNotify({
            success: true,
            color: "info",
            msg: "Geo Location Failed. If you wish search from somewhere and set points in you Area Of Interest(AOI)"
        })

        // document.querySelector('button[title="Search"]').click()
        // console.log("failed to get location doing nothing ;)", e)
    })
}


const mapDiv = document.getElementById('map');

const video = document.getElementById('video');
const canvas = document.createElement('canvas');

const galBtn = document.getElementById("cameraGallaryImg");

galBtn.addEventListener("click", toggleGal)

var galImgs = []

function captureImage() {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/jpeg');
    // document.getElementById('captured-image').src = imageUrl;
    galBtn.src = imageUrl;
    galImgs.push(imageUrl)
    galAddImg(imageUrl)
    document.getElementById('base64data').textContent = imageUrl;
}

//https://www.digitalocean.com/community/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia
async function getDevices() {
    return navigator.mediaDevices.enumerateDevices();
}


async function getCameras() {
    const devices = await getDevices();
    return devices.filter(d => d.kind === "videoinput")
}

let currentCamIndex = 0;
let devs;

// Function to switch between front and back camera
async function switchCamera() {


    devs = devs || await getCameras()


    let next = (currentCamIndex + 1) % devs.length;


    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    const constraints = {
        video: {
            deviceId: devs[next].deviceId,
            width: {ideal: 4096},
            height: {ideal: 2160}
        }
    };
    currentCamIndex = next;
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            window.stream = stream;
            const videoElement = video;
            videoElement.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing media devices.', error);
        });


}

var bs = bs || {};

bs.resNotify = function (res) {
    let s = res.success ? "Success" : "Error" + res.msg
    console.warn(s)
}


var log = msg => div.innerHTML += msg + "<br>";


async function startWebcam(stream) {
    const constraints = {
        video: true
    };


    stream = stream || await navigator.mediaDevices.getUserMedia(constraints)

    const video = document.getElementById('video');

    let cams = await getCameras()

    console.debug(JSON.stringify(cams, null, 2))

    video.srcObject = stream;
    window.stream = stream;
    video.play();


    // // Function to check if the body has a scrollbar
    // function hasScrollbar() {
    //     return document.body.scrollHeight > window.innerHeight;
    // }


}

var mapInit = new Promise(resolve => {

    //first wait for window to load
    window.onload = function () {

        console.log("window load")

        const constraints = {
            video: true
        };

        //then we wait for camera permission
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                console.log("camera stream")

                const video = document.getElementById('video');

                getCameras().then(c => {
                    console.debug(JSON.stringify(c, null, 2))
                })


                video.srcObject = stream;
                window.stream = stream;
                video.play();


                // Function to check if the body has a scrollbar
                function hasScrollbar() {
                    return document.body.scrollHeight > window.innerHeight;
                }

                // Initialize video width and get the video element
                var vidW = 100;
                // const video = document.getElementById('video');

                // Function to check for a scrollbar and adjust the video
                function checkForScrollbar() {
                    if (hasScrollbar()) {
                        console.log('Body has a scrollbar');
                        if (vidW > 0) { // Ensure vidW doesn't go below 0
                            vidW = vidW - 4
                            video.style.width = (vidW + "%");
                            // video.style.transform = `translateX(-${Math.round((100-vidW)/2)}%)`;
                            let m = (100 - vidW) / 2
                            video.style.transform = "translateX(" + m + "vw)";
                            video.style.transition = "transform 100ms linear, width 100ms linear"
                        }
                    } else {
                        console.log('Body does not have a scrollbar');
                        // Optionally, you can stop the interval when there's no scrollbar
                        clearInterval(scrollCheckInterval);
                    }
                }

                // Check every 500 milliseconds (adjust as needed)

                var scrollCheckInterval

                setTimeout(() => {
                    scrollCheckInterval = setInterval(checkForScrollbar, 100);
                    if (!map) {
                        showPastelModal("Access the map from the gallery 🙂‍↔️🧐", "green")

                        // let can = prompt("Do you want to skip to map? yes to cancel uploading a pic ... borrrring.")
                        // if (can && can.toLowerCase().startsWith("y")) {
                        //     console.log("Map is initialising:")
                        //     // toggleGal();
                        //
                        //     toggleMap()
                        // }
                    }
                }, 555)

                resolve(map)

            })
            .catch(function (err) {
                console.error('Error accessing the webcam: ', err);
                resolve(map)
            });
    };


})

