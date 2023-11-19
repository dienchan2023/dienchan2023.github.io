document.addEventListener('DOMContentLoaded', function () {
    draw();
});

const drawFront = () => {
    draw(false);
}

const drawSide = () => {
    draw(true);
}

const draw = (drawSide) => {
    // Get the image and canvas elements
    var imgFront = document.getElementById('imgFront');
    var imgSide = document.getElementById('imgSide');
    var canvas = document.getElementById('myCanvas');
    var huyetNumberInput = document.getElementById('inputHuyenNumber');
    console.log('start draw ' + drawSide);
    var ctx = canvas.getContext('2d');

    
    // Set the canvas size to match the image size
    var drawImg = imgFront;
    if (drawSide) {
        drawImg = imgSide;
    }
    canvas.width = drawImg.width;
    canvas.height = drawImg.height;
    
    var lastX, lastY;

    canvas.addEventListener('mousedown', startDrawing);
    function startDrawing(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        [lastX, lastY] = [x, y];
        console.log({lastX, lastY});
      }

    // Draw the image on the canvas
    ctx.drawImage(drawImg, 0, 0);
    

    var huyetList = [
        {
            x: 167,
            y: 152-3,
            number: 126,
            side: true
        },
        {
            x: 140,
            y: 187-3,
            number: 342,
            side: true
        },
        {
            x: 125,
            y: 226-3,
            number: 108,
            side: true
        },
        {
            x: 120,
            y: 266-3,
            number: 106,
            side: true
        },
        {
            x: 125,
            y: 305-3,
            number: 65,
            side: true
        },
        {
            x: 132,
            y: 342-3,
            number: 8,
            side: true
        },
        {
            x: 104,
            y: 379-3,
            number: 189,
            side: true
        },
        {
            x: 271,
            y: 227-3,
            number: 191,
            side: true
        },
        {
            x: 425,
            y: 227-3,
            number: 567,
            side: true
        },
        {
            x: 425,
            y: 266-3,
            number: 139,
            side: true
        },
        {
            x: 275,
            y: 246-3,
            number: 185,
            side: true
        },
        {
            x: 276,
            y: 267-3,
            number: 195,
            side: true
        },
        {
            x: 235,
            y: 267-3,
            number: 215,
            side: true
        },
        {
            x: 238,
            y: 287-3,
            number: 319,
            side: true
        },
        {
            x: 278,
            y: 286-3,
            number: 177,
            side: true
        },
        {
            x: 245,
            y: 306-3,
            number: 180,
            side: true
        },
        {
            x: 265,
            y: 306-3,
            number: 183,
            side: true
        },
        {
            x: 231,
            y: 319-3,
            number: 100,
            side: true
        },
        {
            x: 244,
            y: 342-3,
            number: 130,
            side: true
        },
        {
            x: 202,
            y: 342-3,
            number: 24,
            side: true
        },
        {
            x: 214,
            y: 342-3,
            number: 131,
            side: true
        },
        {
            x: 276,
            y: 342-3,
            number: 460,
            side: true
        },
        {
            x: 331,
            y: 343-3,
            number: 555,
            side: true
        },
        {
            x: 387,
            y: 343-3,
            number: 16,
            side: true
        },
        {
            x: 403,
            y: 373-3,
            number: 57,
            side: true
        },
        {
            x: 195,
            y: 378-3,
            number: 358,
            side: true
        },
        {
            x: 212,
            y: 379-3,
            number: 59,
            side: true
        },
        {
            x: 243,
            y: 379-3,
            number: 60,
            side: true
        },
        {
            x: 245,
            y: 397-3,
            number: 69,
            side: true
        },
        {
            x: 258,
            y: 388-3,
            number: 68,
            side: true
        },
        {
            x: 269,
            y: 358-3,
            number: 459,
            side: true
        },
        {
            x: 332,
            y: 378-3,
            number: 88,
            side: true
        },
        {
            x: 359,
            y: 395-3,
            number: 281,
            side: true
        },
        {
            x: 385,
            y: 395-3,
            number: 138,
            side: true
        },
        {
            x: 391,
            y: 407-3,
            number: 170,
            side: true
        },
        {
            x: 387,
            y: 418-3,
            number: 0,
            side: true
        },
        {
            x: 360,
            y: 420-3,
            number: 284,
            side: true
        },
        {
            x: 389,
            y: 443-3,
            number: 79,
            side: true
        },
        {
            x: 376,
            y: 442-3,
            number: 274,
            side: true
        },
        {
            x: 359,
            y: 444-3,
            number: 282,
            side: true
        },
        {
            x: 390,
            y: 480-3,
            number: 14,
            side: true
        },
        {
            x: 373,
            y: 475-3,
            number: 297,
            side: true
        },
        {
            x: 358,
            y: 474-3,
            number: 275,
            side: true
        },
        {
            x: 331,
            y: 474-3,
            number: 265,
            side: true
        },
        {
            x: 307,
            y: 473-3,
            number: 10,
            side: true
        },
        {
            x: 396,
            y: 499-3,
            number: 308,
            side: true
        },
        {
            x: 452,
            y: 501-3,
            number: 280,
            side: true
        },
        {
            x: 374,
            y: 491-3,
            number: 277,
            side: true
        },
        {
            x: 346,
            y: 490-3,
            number: 288,
            side: true
        },
        {
            x: 368,
            y: 524-3,
            number: 95,
            side: true
        },
        {
            x: 357,
            y: 540-3,
            number: 94,
            side: true
        },
        {
            x: 328,
            y: 510-3,
            number: 245,
            side: true
        },
        {
            x: 306,
            y: 539-3,
            number: 96,
            side: true
        },
        {
            x: 242,
            y: 538-3,
            number: 9,
            side: true
        },
        {
            x: 242,
            y: 472-3,
            number: 28,
            side: true
        },
        {
            x: 242,
            y: 446-3,
            number: 338,
            side: true
        },
        {
            x: 231,
            y: 448-3,
            number: 30,
            side: true
        },
        {
            x: 213,
            y: 425-3,
            number: 279,
            side: true
        },
        {
            x: 211,
            y: 473-3,
            number: 72,
            side: true
        },
        {
            x: 194,
            y: 473-3,
            number: 133,
            side: true
        },
        {
            x: 194,
            y: 455-3,
            number: 132,
            side: true
        },
        {
            x: 195,
            y: 423-3,
            number: 276,
            side: true
        },
        {
            x: 163,
            y: 474-3,
            number: 39,
            side: true
        },
        {
            x: 158,
            y: 454-3,
            number: 120,
            side: true
        },
        {
            x: 150,
            y: 442-3,
            number: 370,
            side: true
        },
        {
            x: 130,
            y: 422-3,
            number: 61,
            side: true
        },
        {
            x: 139,
            y: 442-3,
            number: 71,
            side: true
        },
        {
            x: 144,
            y: 454-3,
            number: 74,
            side: true
        },
        {
            x: 141,
            y: 464-3,
            number: 75,
            side: true
        },
        {
            x: 131,
            y: 471-3,
            number: 64,
            side: true
        },
        {
            x: 110,
            y: 454-3,
            number: 5,
            side: true
        },
        {
            x: 76,
            y: 415-3,
            number: 1,
            side: true
        },
        {
            x: 58,
            y: 440-3,
            number: 23,
            side: true
        },
        {
            x: 52,
            y: 454-3,
            number: 173,
            side: true
        },
        {
            x: 59,
            y: 470-3,
            number: 143,
            side: true
        },
        {
            x: 90,
            y: 475-3,
            number: 19,
            side: true
        },
        {
            x: 93,
            y: 498-3,
            number: 63,
            side: true
        },
        {
            x: 154,
            y: 498-3,
            number: 17,
            side: true
        },
        {
            x: 167,
            y: 498-3,
            number: 38,
            side: true
        },
        {
            x: 90,
            y: 523-3,
            number: 53,
            side: true
        },
        {
            x: 157,
            y: 538-3,
            number: 29,
            side: true
        },
        {
            x: 171,
            y: 539-3,
            number: 222,
            side: true
        },
        {
            x: 183,
            y: 539-3,
            number: 229,
            side: true
        },
        {
            x: 194,
            y: 541-3,
            number: 270,
            side: true
        },
        {
            x: 116,
            y: 582-3,
            number: 127,
            side: true
        },
        {
            x: 114,
            y: 595-3,
            number: 235,
            side: true
        },
        {
            x: 106,
            y: 609-3,
            number: 22,
            side: true
        },
        {
            x: 106,
            y: 627-3,
            number: 87,
            side: true
        },
        {
            x: 179,
            y: 618-3,
            number: 293,
            side: true
        },
        {
            x: 192,
            y: 614-3,
            number: 346,
            side: true
        },
        {
            x: 211,
            y: 582-3,
            number: 162,
            side: true
        },
        {
            x: 241,
            y: 582-3,
            number: 62,
            side: true
        },
        {
            x: 241,
            y: 603-3,
            number: 343,
            side: true
        },
        {
            x: 230,
            y: 611-3,
            number: 344,
            side: true
        },
        {
            x: 222,
            y: 612-3,
            number: 345,
            side: true
        },
        {
            x: 529,
            y: 565-3,
            number: 200,
            side: true
        },
        {
            x: 516,
            y: 578-3,
            number: 201,
            side: true
        },
        {
            x: 509,
            y: 598-3,
            number: 202,
            side: true
        },
        {
            x: 497,
            y: 619-3,
            number: 54,
            side: true
        },
        {
            x: 492,
            y: 636-3,
            number: 55,
            side: true
        },
        {
            x: 493,
            y: 659-3,
            number: 56,
            side: true
        },
        {
            x: 508,
            y: 678-3,
            number: 203,
            side: true
        },
        {
            x: 525,
            y: 682-3,
            number: 15,
            side: true
        },
        {
            x: 527,
            y: 694-3,
            number: 204,
            side: true
        },
        {
            x: 528,
            y: 707-3,
            number: 14,
            side: true
        },
        ////////////////
        {
            x: 523,
            y: 165-3,
            number: 564
        },
        {
            x: 148,
            y: 166-3,
            number: 278
        },
        {
            x: 181,
            y: 165-3,
            number: 564
        },
        {
            x: 210,
            y: 165-3,
            number: 559
        },
        {
            x: 235,
            y: 164-3,
            number: 558
        },
        {
            x: 262,
            y: 164-3,
            number: 560
        },
        {
            x: 292,
            y: 164-3,
            number: 219
        },
        {
            x: 306,
            y: 164-3,
            number: 377
        },
        {
            x: 326,
            y: 164-3,
            number: 379
        },
        {
            x: 351,
            y: 128-3,
            number: 557
        },
        {
            x: 351,
            y: 146-3,
            number: 556
        },
        {
            x: 351,
            y: 165-3,
            number: 126
        },
        {
            x: 379,
            y: 165-3,
            number: 379
        },
        {
            x: 398,
            y: 165-3,
            number: 377
        },
        {
            x: 412,
            y: 165-3,
            number: 219
        },
        {
            x: 441,
            y: 165-3,
            number: 560
        },
        {
            x: 468,
            y: 165-3,
            number: 558
        },
        {
            x: 493,
            y: 165-3,
            number: 559
        },
        {
            x: 558,
            y: 165-3,
            number: 278
        },
        {
            x: 179,
            y: 211-3,
            number: 303
        },
        {
            x: 208,
            y: 211-3,
            number: 302
        },
        {
            x: 235,
            y: 211-3,
            number: 301
        },
        {
            x: 260,
            y: 211-3,
            number: 300
        },
        {
            x: 290,
            y: 211-3,
            number: 399
        },
        {
            x: 307,
            y: 211-3,
            number: 341
        },
        {
            x: 325,
            y: 211-3,
            number: 340
        },
        {
            x: 350,
            y: 211-3,
            number: 342
        },
        {
            x: 379,
            y: 211-3,
            number: 340
        },
        {
            x: 399,
            y: 211-3,
            number: 341
        },
        {
            x: 412,
            y: 211-3,
            number: 399
        },
        {
            x: 440,
            y: 211-3,
            number: 300
        },
        {
            x: 468,
            y: 211-3,
            number: 301
        },
        {
            x: 495,
            y: 211-3,
            number: 302
        },
        {
            x: 522,
            y: 211-3,
            number: 303
        },
        {
            x: 292,
            y: 188-3,
            number: 210
        },
        {
            x: 351,
            y: 188-3,
            number: 348
        },
        {
            x: 351,
            y: 199-3,
            number: 401
        },
        {
            x: 351,
            y: 176-3,
            number: 329
        },
        {
            x: 413,
            y: 188-3,
            number: 210
        },
        {
            x: 129,
            y: 257-3,
            number: 191
        },
        {
            x: 181,
            y: 257-3,
            number: 123
        },
        {
            x: 210,
            y: 257-3,
            number: 124
        },
        {
            x: 236,
            y: 257-3,
            number: 423
        },
        {
            x: 259,
            y: 257-3,
            number: 422
        },
        {
            x: 291,
            y: 257-3,
            number: 421
        },
        {
            x: 307,
            y: 257-3,
            number: 197
        },
        {
            x: 324,
            y: 257-3,
            number: 175
        },
        {
            x: 351,
            y: 257-3,
            number: 103
        },
        {
            x: 378,
            y: 257-3,
            number: 175
        },
        {
            x: 397,
            y: 257-3,
            number: 197
        },
        {
            x: 412,
            y: 257-3,
            number: 421
        },
        {
            x: 441,
            y: 257-3,
            number: 422
        },
        {
            x: 469,
            y: 257-3,
            number: 423
        },
        {
            x: 495,
            y: 257-3,
            number: 124
        },
        {
            x: 522,
            y: 257-3,
            number: 123
        },
        {
            x: 576,
            y: 257-3,
            number: 191
        },
        {
            x: 119,
            y: 281-3,
            number: 185
        },
        {
            x: 209,
            y: 281-3,
            number: 333
        },
        {
            x: 235,
            y: 281-3,
            number: 128
        },
        {
            x: 260,
            y: 283-3,
            number: 364
        },
        {
            x: 306,
            y: 283-3,
            number: 405
        },
        {
            x: 398,
            y: 283-3,
            number: 405
        },
        {
            x: 442,
            y: 283-3,
            number: 364
        },
        {
            x: 469,
            y: 271-3,
            number: 125
        },
        {
            x: 469,
            y: 283-3,
            number: 128
        },
        {
            x: 493,
            y: 281-3,
            number: 333
        },
        {
            x: 494,
            y: 295-3,
            number: 458
        },
        {
            x: 584,
            y: 281-3,
            number: 185
        },
        {
            x: 235,
            y: 271-3,
            number: 125
        },
        {
            x: 116,
            y: 305-3,
            number: 195
        },
        {
            x: 136,
            y: 305-3,
            number: 215
        },
        {
            x: 208,
            y: 294-3,
            number: 458
        },
        {
            x: 235,
            y: 306-3,
            number: 561
        },
        {
            x: 180,
            y: 306-3,
            number: 428
        },
        {
            x: 261,
            y: 306-3,
            number: 360
        },
        {
            x: 291,
            y: 306-3,
            number: 332
        },
        {
            x: 307,
            y: 306-3,
            number: 310
        },
        {
            x: 324,
            y: 306-3,
            number: 107
        },
        {
            x: 350,
            y: 306-3,
            number: 106
        },
        {
            x: 378,
            y: 306-3,
            number: 107
        },
        {
            x: 399,
            y: 306-3,
            number: 310
        },
        {
            x: 414,
            y: 306-3,
            number: 332
        },
        {
            x: 440,
            y: 306-3,
            number: 360
        },
        {
            x: 469,
            y: 306-3,
            number: 561
        },
        {
            x: 523,
            y: 306-3,
            number: 428
        },
        {
            x: 568,
            y: 306-3,
            number: 215
        },
        {
            x: 592,
            y: 306-3,
            number: 195
        },
        {
            x: 112,
            y: 336-3,
            number: 177
        },
        {
            x: 136,
            y: 336-3,
            number: 319
        },
        {
            x: 147,
            y: 342-3,
            number: 129
        },
        {
            x: 180,
            y: 321-3,
            number: 324
        },
        {
            x: 179,
            y: 343-3,
            number: 218
        },
        {
            x: 194,
            y: 318-3,
            number: 98
        },
        {
            x: 210,
            y: 317-3,
            number: 102
        },
        {
            x: 210,
            y: 339-3,
            number: 216
        },
        {
            x: 226,
            y: 319-3,
            number: 99
        },
        {
            x: 235,
            y: 342-3,
            number: 267
        },
        {
            x: 269,
            y: 326-3,
            number: 97
        },
        {
            x: 133,
            y: 371-3,
            number: 100
        },
        {
            x: 260,
            y: 346-3,
            number: 268
        },
        {
            x: 299,
            y: 320-3,
            number: 33
        },
        {
            x: 298,
            y: 334-3,
            number: 34
        },
        {
            x: 315,
            y: 340-3,
            number: 477
        },
        {
            x: 325,
            y: 351-3,
            number: 240
        },
        {
            x: 298,
            y: 334-3,
            number: 34
        },
        {
            x: 306,
            y: 351-3,
            number: 65
        },
        {
            x: 298,
            y: 358-3,
            number: 179
        },
        {
            x: 298,
            y: 370-3,
            number: 283
        },
        {
            x: 315,
            y: 370-3,
            number: 188
        },
        {
            x: 331,
            y: 382-3,
            number: 196
        },
        {
            x: 351,
            y: 351-3,
            number: 26
        },
        {
            x: 351,
            y: 359-3,
            number: 312
        },
        {
            x: 351,
            y: 370-3,
            number: 109
        },
        {
            x: 379,
            y: 351-3,
            number: 240
        },
        {
            x: 389,
            y: 368-3,
            number: 188
        },
        {
            x: 369,
            y: 381-3,
            number: 196
        },
        {
            x: 405,
            y: 369-3,
            number: 283
        },
        {
            x: 404,
            y: 356-3,
            number: 197
        },
        {
            x: 404,
            y: 320-3,
            number: 33
        },
        {
            x: 387,
            y: 339-3,
            number: 477
        },
        {
            x: 404,
            y: 334-3,
            number: 34
        },
        {
            x: 399,
            y: 349-3,
            number: 65
        },
        {
            x: 433,
            y: 324-3,
            number: 97
        },
        {
            x: 442,
            y: 346-3,
            number: 268
        },
        {
            x: 478,
            y: 318-3,
            number: 99
        },
        {
            x: 467,
            y: 342-3,
            number: 267
        },
        {
            x: 494,
            y: 316-3,
            number: 102
        },
        {
            x: 494,
            y: 339-3,
            number: 216
        },
        {
            x: 508,
            y: 317-3,
            number: 98
        },
        {
            x: 522,
            y: 321-3,
            number: 324
        },
        {
            x: 522,
            y: 344-3,
            number: 218
        },
        {
            x: 557,
            y: 339-3,
            number: 129
        },
        {
            x: 568,
            y: 332-3,
            number: 319
        },
        {
            x: 581,
            y: 350-3,
            number: 180
        },
        {
            x: 599,
            y: 334-3,
            number: 177
        },
        {
            x: 146,
            y: 358-3,
            number: 217
        },
        {
            x: 122,
            y: 394-3,
            number: 130
        },
        {
            x: 147,
            y: 396-3,
            number: 131
        },
        {
            x: 325,
            y: 395-3,
            number: 12
        },
        {
            x: 339,
            y: 395-3,
            number: 20
        },
        {
            x: 351,
            y: 395-3,
            number: 8
        },
        {
            x: 363,
            y: 395-3,
            number: 20
        },
        {
            x: 380,
            y: 395-3,
            number: 12
        },
        {
            x: 557,
            y: 395-3,
            number: 131
        },
        {
            x: 574,
            y: 369-3,
            number: 100
        },
        {
            x: 584,
            y: 395-3,
            number: 130
        },
        {
            x: 147,
            y: 438-3,
            number: 59
        },
        {
            x: 180,
            y: 437-3,
            number: 358
        },
        {
            x: 209,
            y: 438-3,
            number: 353
        },
        {
            x: 234,
            y: 438-3,
            number: 73
        },
        {
            x: 260,
            y: 438-3,
            number: 354
        },
        {
            x: 291,
            y: 420-3,
            number: 209
        },
        {
            x: 291,
            y: 431-3,
            number: 355
        },
        {
            x: 306,
            y: 420-3,
            number: 330
        },
        {
            x: 306,
            y: 430-3,
            number: 505
        },
        {
            x: 292,
            y: 438-3,
            number: 565
        },
        {
            x: 324,
            y: 446-3,
            number: 184
        },
        {
            x: 351,
            y: 437-3,
            number: 189
        },
        {
            x: 398,
            y: 419-3,
            number: 330
        },
        {
            x: 398,
            y: 430-3,
            number: 505
        },
        {
            x: 412,
            y: 438-3,
            number: 565
        },
        {
            x: 413,
            y: 429-3,
            number: 365
        },
        {
            x: 412,
            y: 419-3,
            number: 209
        },
        {
            x: 426,
            y: 437-3,
            number: 357
        },
        {
            x: 441,
            y: 437-3,
            number: 354
        },
        {
            x: 467,
            y: 437-3,
            number: 73
        },
        {
            x: 495,
            y: 437-3,
            number: 353
        },
        {
            x: 521,
            y: 437-3,
            number: 358
        },
        {
            x: 558,
            y: 438-3,
            number: 59
        },
        {
            x: 147,
            y: 498-3,
            number: 279
        },
        {
            x: 179,
            y: 499-3,
            number: 276
        },
        {
            x: 209,
            y: 500-3,
            number: 269
        },
        {
            x: 235,
            y: 499-3,
            number: 3
        },
        {
            x: 235,
            y: 478-3,
            number: 13
        },
        {
            x: 235,
            y: 454-3,
            number: 31
        },
        {
            x: 249,
            y: 459-3,
            number: 432
        },
        {
            x: 277,
            y: 438-3,
            number: 357
        },
        {
            x: 270,
            y: 480-3,
            number: 467
        },
        {
            x: 290,
            y: 467-3,
            number: 491
        },
        {
            x: 324,
            y: 476-3,
            number: 21
        },
        {
            x: 351,
            y: 475-3,
            number: 285
        },
        {
            x: 379,
            y: 446-3,
            number: 184
        },
        {
            x: 379,
            y: 473-3,
            number: 21
        },
        {
            x: 413,
            y: 467-3,
            number: 491
        },
        {
            x: 455,
            y: 462-3,
            number: 432
        },
        {
            x: 468,
            y: 454-3,
            number: 31
        },
        {
            x: 466,
            y: 479-3,
            number: 13
        },
        {
            x: 606,
            y: 485-3,
            number: 0
        },
        {
            x: 97,
            y: 486-3,
            number: 0
        },
        {
            x: 104,
            y: 528-3,
            number: 79
        },
        {
            x: 105,
            y: 552-3,
            number: 14
        },
        {
            x: 179,
            y: 531-3,
            number: 132
        },
        {
            x: 209,
            y: 530-3,
            number: 356
        },
        {
            x: 221,
            y: 531-3,
            number: 233
        },
        {
            x: 236,
            y: 530-3,
            number: 32
        },
        {
            x: 261,
            y: 530-3,
            number: 47
        },
        {
            x: 271,
            y: 518-3,
            number: 171
        },
        {
            x: 262,
            y: 499-3,
            number: 242
        },
        {
            x: 279,
            y: 499-3,
            number: 58
        },
        {
            x: 280,
            y: 518-3,
            number: 71
        },
        {
            x: 284,
            y: 507-3,
            number: 145
        },
        {
            x: 290,
            y: 498-3,
            number: 61
        },
        {
            x: 323,
            y: 499-3,
            number: 45
        },
        {
            x: 351,
            y: 499-3,
            number: 43
        },
        {
            x: 379,
            y: 498-3,
            number: 45
        },
        {
            x: 379,
            y: 487-3,
            number: 290
        },
        {
            x: 351,
            y: 488-3,
            number: 1
        },
        {
            x: 412,
            y: 498-3,
            number: 61
        },
        {
            x: 419,
            y: 509-3,
            number: 145
        },
        {
            x: 425,
            y: 499-3,
            number: 58
        },
        {
            x: 442,
            y: 498-3,
            number: 242
        },
        {
            x: 468,
            y: 497-3,
            number: 3
        },
        {
            x: 495,
            y: 498-3,
            number: 269
        },
        {
            x: 522,
            y: 499-3,
            number: 276
        },
        {
            x: 557,
            y: 499-3,
            number: 297
        },
        {
            x: 600,
            y: 527-3,
            number: 79
        },
        {
            x: 598,
            y: 549-3,
            number: 14
        },
        {
            x: 277,
            y: 530-3,
            number: 74
        },
        {
            x: 290,
            y: 531-3,
            number: 5
        },
        {
            x: 305,
            y: 530-3,
            number: 91
        },
        {
            x: 324,
            y: 520-3,
            number: 174
        },
        {
            x: 350,
            y: 523-3,
            number: 2
        },
        {
            x: 378,
            y: 522-3,
            number: 174
        },
        {
            x: 379,
            y: 532-3,
            number: 178
        },
        {
            x: 398,
            y: 531-3,
            number: 91
        },
        {
            x: 413,
            y: 530-3,
            number: 5
        },
        {
            x: 427,
            y: 531-3,
            number: 74
        },
        {
            x: 424,
            y: 519-3,
            number: 71
        },
        {
            x: 433,
            y: 518-3,
            number: 370
        },
        {
            x: 441,
            y: 530-3,
            number: 120
        },
        {
            x: 467,
            y: 531-3,
            number: 37
        },
        {
            x: 480,
            y: 512-3,
            number: 481
        },
        {
            x: 494,
            y: 531-3,
            number:40
        },
        {
            x: 522,
            y: 532-3,
            number: 132
        },
        {
            x: 522,
            y: 558-3,
            number: 133
        },
        {
            x: 181,
            y: 558-3,
            number: 133
        },
        {
            x: 209,
            y: 556-3,
            number: 41
        },
        {
            x: 234,
            y: 557-3,
            number: 50
        },
        {
            x: 245,
            y: 557-3,
            number: 49
        },
        {
            x: 240,
            y: 572-3,
            number: 36
        },
        {
            x: 273,
            y: 557-3,
            number: 48
        },
        {
            x: 279,
            y: 545-3,
            number: 75
        },
        {
            x: 291,
            y: 559-3,
            number: 64
        },
        {
            x: 291,
            y: 586-3,
            number: 113
        },
        {
            x: 314,
            y: 561-3,
            number: 630
        },
        {
            x: 324,
            y: 530-3,
            number: 178
        },
        {
            x: 350,
            y: 532-3,
            number: 173
        },
        {
            x: 325,
            y: 562-3,
            number: 287
        },
        {
            x: 324,
            y: 576-3,
            number: 35
        },
        {
            x: 324,
            y: 585-3,
            number: 7
        },
        {
            x: 350,
            y: 561-3,
            number: 19
        },
        {
            x: 350,
            y: 577-3,
            number: 247
        },
        {
            x: 350,
            y: 586-3,
            number: 60
        },
        {
            x: 350,
            y: 601-3,
            number: 1
        },
        {
            x: 363,
            y: 602-3,
            number: 3
        },
        {
            x: 379,
            y: 560-3,
            number: 287
        },
        {
            x: 379,
            y: 576-3,
            number: 35
        },
        {
            x: 379,
            y: 585-3,
            number: 7
        },
        {
            x: 390,
            y: 562-3,
            number: 630
        },
        {
            x: 413,
            y: 558-3,
            number: 64
        },
        {
            x: 412,
            y: 585-3,
            number: 113
        },
        {
            x: 441,
            y: 585-3,
            number: 17
        },
        {
            x: 424,
            y: 544-3,
            number: 75
        },
        {
            x: 442,
            y: 557-3,
            number: 121
        },
        {
            x: 457,
            y: 556-3,
            number: 39
        },
        {
            x: 464,
            y: 568-3,
            number: 36
        },
        {
            x: 467,
            y: 585-3,
            number: 38
        },
        {
            x: 481,
            y: 585-3,
            number: 44
        },
        {
            x: 223,
            y: 584-3,
            number: 44
        },
        {
            x: 235,
            y: 585-3,
            number: 38
        },
        {
            x: 261,
            y: 584-3,
            number: 17
        },
        {
            x: 226,
            y: 609-3,
            number: 305
        },
        {
            x: 260,
            y: 610-3,
            number: 511
        },
        {
            x: 277,
            y: 621-3,
            number: 228
        },
        {
            x: 351,
            y: 618-3,
            number: 53
        },
        {
            x: 426,
            y: 620-3,
            number: 228
        },
        {
            x: 441,
            y: 612-3,
            number: 511
        },
        {
            x: 477,
            y: 608-3,
            number: 305
        },
        {
            x: 495,
            y: 637-3,
            number: 229
        },
        {
            x: 350,
            y: 586-3,
            number: 60
        },
        {
            x: 521,
            y: 636-3,
            number: 270
        },
        {
            x: 468,
            y: 637-3,
            number: 222
        },
        {
            x: 448,
            y: 635-3,
            number: 29
        },
        {
            x: 255,
            y: 635-3,
            number: 29
        },
        {
            x: 234,
            y: 637-3,
            number: 222
        },
        {
            x: 209,
            y: 636-3,
            number: 229
        },
        {
            x: 180,
            y: 635-3,
            number: 270
        },
        {
            x: 181,
            y: 672-3,
            number: 461
        },
        {
            x: 181,
            y: 672-3,
            number: 461
        },
        {
            x: 209,
            y: 686-3,
            number: 105
        },
        {
            x: 235,
            y: 687-3,
            number: 104
        },
        {
            x: 235,
            y: 661-3,
            number: 6
        },
        {
            x: 276,
            y: 651-3,
            number: 226
        },
        {
            x: 261,
            y: 670-3,
            number: 85
        },
        {
            x: 262,
            y: 685-3,
            number: 89
        },
        {
            x: 290,
            y: 700-3,
            number: 156
        },
        {
            x: 325,
            y: 672-3,
            number: 227
        },
        {
            x: 351,
            y: 672-3,
            number: 236
        },
        {
            x: 379,
            y: 671-3,
            number: 227
        },
        {
            x: 428,
            y: 651-3,
            number: 226
        },
        {
            x: 441,
            y: 672-3,
            number: 85
        },
        {
            x: 468,
            y: 660-3,
            number: 6
        },
        {
            x: 468,
            y: 687-3,
            number: 104
        },
        {
            x: 442,
            y: 687-3,
            number: 89
        },
        {
            x: 494,
            y: 687-3,
            number: 105
        },
        {
            x: 521,
            y: 673-3,
            number: 461
        },
        {
            x: 323,
            y: 693-3,
            number: 347
        },
        {
            x: 336,
            y: 691-3,
            number: 286
        },
        {
            x: 351,
            y: 694-3,
            number: 235
        },
        {
            x: 351,
            y: 685-3,
            number: 127
        },
        {
            x: 366,
            y: 690-3,
            number: 286
        },
        {
            x: 379,
            y: 693-3,
            number: 347
        },
        {
            x: 351,
            y: 716-3,
            number: 22
        },
        {
            x: 413,
            y: 701-3,
            number: 156
        },
        {
            x: 413,
            y: 716-3,
            number: 157
        },
        {
            x: 440,
            y: 716-3,
            number: 159
        },
        {
            x: 481,
            y: 715-3,
            number: 293
        },
        {
            x: 468,
            y: 726-3,
            number: 292
        },
        {
            x: 447,
            y: 739-3,
            number: 257
        },
        {
            x: 222,
            y: 714-3,
            number: 293
        },
        {
            x: 236,
            y: 726-3,
            number: 292
        },
        {
            x: 260,
            y: 715-3,
            number: 159
        },
        {
            x: 257,
            y: 738-3,
            number: 257
        },
        {
            x: 276,
            y: 739-3,
            number: 11
        },
        {
            x: 271,
            y: 747-3,
            number: 256
        },
        {
            x: 291,
            y: 739-3,
            number: 51
        },
        {
            x: 290,
            y: 715-3,
            number: 157
        },
        {
            x: 312,
            y: 756-3,
            number: 255
        },
        {
            x: 325,
            y: 738-3,
            number: 101
        },
        {
            x: 339,
            y: 740-3,
            number: 80
        },
        {
            x: 351,
            y: 739-3,
            number: 87
        },
        {
            x: 362,
            y: 739-3,
            number: 80
        },
        {
            x: 379,
            y: 738-3,
            number: 101
        },
        {
            x: 411,
            y: 738-3,
            number: 51
        },
        {
            x: 426,
            y: 738-3,
            number: 11
        },
        {
            x: 435,
            y: 745-3,
            number: 256
        },
        {
            x: 329,
            y: 756-3,
            number: 254
        },
        {
            x: 350,
            y: 756-3,
            number: 365
        },
        {
            x: 372,
            y: 755-3,
            number: 254
        },
        {
            x: 392,
            y: 755-3,
            number: 255
        },
        {
            x: 350,
            y: 769-3,
            number: 521
        },
        {
            x: 636,
            y: 731-3,
            number: 173
        },
        {
            x: 625,
            y: 768-3,
            number: 253
        },
        {
            x: 636,
            y: 768-3,
            number: 143
        },
        {
            x: 646,
            y: 768-3,
            number: 253
        },
        {
            x: 635,
            y: 794-3,
            number: 19
        },
    ];

    var filteredHuyetList = huyetList.filter(h => {
        if (drawSide) {
            return h.side;
        }
        return !h.side
    });
    var foundHuyetList = [];
    filteredHuyetList.forEach(h => {
        if (h.number === parseInt(huyetNumberInput.value)) {
            foundHuyetList.push(h);
        }
    })

    console.log('Found ' + JSON.stringify(foundHuyetList));
    if (foundHuyetList) {
        var index = 0;
        foundHuyetList.forEach(huyet => {
            ctx.beginPath();
            ctx.arc(huyet.x, huyet.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            if (index === foundHuyetList.length - 1) {
                ctx.fillStyle = 'green';    
            }
            
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = 'blue';
            ctx.fillText(huyet.number, huyet.x - 20, huyet.y - 15);

            index++;
        });
    }
}