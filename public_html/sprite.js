var
        s_bird,
        s_bg,
        s_fg,
        s_pipeSouth,
        s_pipeNorth,
        s_pipeSouth2,
        s_text,
        s_score,
        s_splash,
        s_buttons,
        s_numberS,
        s_flappypirkka,
        s_numberB;


function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x * 2;
    this.y = y * 2;
    this.width = width * 2;
    this.height = height * 2;
}
;
Sprite.prototype.draw = function (ctx, x, y) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
            x, y, this.width, this.height);
};

function initSprites(img) {

    s_bird = [
        new Sprite(img, 157, 115, 12, 14), // 115    
        new Sprite(img, 157, 130, 12, 14), // 128
        new Sprite(img, 157, 145, 12, 14) //  141
    ];
    s_forcefield = [
        new Sprite(img, 155.5, 221, 15, 19), // 115    
        new Sprite(img, 140, 221, 20, 19), // 128
        new Sprite(img, 121, 221, 20, 19),
        new Sprite(img, 99.5, 221, 20, 19)
    ]
    s_repel = [
        new Sprite(img, 540, 70, 1, 1),
        new Sprite(img, 513, 70, 87, 85),
        new Sprite(img, 430, 65, 87, 85),
        new Sprite(img, 346.5, 63, 87, 85),
        new Sprite(img, 349, 0, 87, 85),
        new Sprite(img, 439, -1, 87, 85),
        new Sprite(img, 516, 0, 87, 85),
        new Sprite(img, 606, 0, 87, 85)
    ]
    test_repel = new Sprite(img, 606, 0, 87, 85);

    s_enemyWhite = new Sprite(img, 60, 253, 15, 16);
    s_enemy = [
        new Sprite(img, 0, 253, 15, 16),
        new Sprite(img, 15, 253, 15, 16),
        new Sprite(img, 30, 253, 15, 16),
        new Sprite(img, 45, 253, 15, 16)
    ]

    s_enemy2 = [
        new Sprite(img, 0, 270, 21, 21),
        new Sprite(img, 22, 270, 21, 21)
    ]

    s_bg = new Sprite(img, 0, 0, 138, 114);
    s_bg.color = "#70C5CF";
    s_fg = new Sprite(img, 138, 0, 112, 56);

    s_pipeSouth = new Sprite(img, 251, 0, 26, 200);
    s_pipeSouth2 = new Sprite(img, 304, 0, 26, 200);
    s_pipeNorth = new Sprite(img, 277, 0, 26, 200);
    s_flappypirkka = new Sprite(img, 0, 205, 95, 27);
    s_projectile = [
        new Sprite(img, 92, 207, 15, 12),
        new Sprite(img, 104, 207, 15, 12),
        new Sprite(img, 116, 207, 17, 12),
        new Sprite(img, 132, 207, 16, 12),
        new Sprite(img, 148, 207, 11, 12)
    ];

    s_projectile_enemy = [
        new Sprite(img, 155, 241, 8, 10),
        new Sprite(img, 142, 241, 8, 10),
        new Sprite(img, 126, 241, 14, 12),
        new Sprite(img, 111, 241, 15, 12),
        new Sprite(img, 100, 241, 10, 12)
    ];

    s_explosion_cfree = [
        new Sprite(img, 335, 161, 25, 25),
        new Sprite(img, 364, 161, 25, 25),
        new Sprite(img, 393, 161, 25, 25),
        new Sprite(img, 449, 161, 25, 25),
        new Sprite(img, 477, 161, 26, 25),
        new Sprite(img, 506, 161, 26, 25),
        new Sprite(img, 535, 161, 26, 25),
        new Sprite(img, 563, 161, 26, 25),
        
    ];
    
    s_test = new Sprite(img, 563, 161, 26, 25);
   
    s_explosion2 = [
        new Sprite(img, 159, 205, 10, 10),
        new Sprite(img, 169, 205, 10, 10),
        new Sprite(img, 179, 205, 10, 10),
        new Sprite(img, 189, 205, 10, 10),
        new Sprite(img, 199, 205, 10, 10),
        new Sprite(img, 209, 205, 10, 10)
    ]
    
    s_goku_idle = new Sprite(img, 320, 204, 24, 42);

    s_goku_fly = [
        new Sprite(img, 320, 204, 24, 40),
        new Sprite(img, 289, 204, 24, 40),
        new Sprite(img, 262, 204, 24, 40),
        new Sprite(img, 236, 204, 24, 40)
    ]
    s_goku_shoot = [
        new Sprite(img, 412, 204, 27, 42),
        new Sprite(img, 377, 204, 31, 42)
    ]
    s_goku_projectile = [
        new Sprite(img, 359, 213, 15, 9),
        new Sprite(img, 348, 213, 9, 9)
    ]
    s_goku_kameball = [
        new Sprite(img, 316, 247, 10, 10),
        new Sprite(img, 301, 246, 13, 13)
    ]
    s_goku_kameshot = [
        new Sprite(img, 326, 245, 27, 20),
        new Sprite(img, 452, 248, 14, 11)
    ]
    s_goku_kameprojectile = new Sprite(img, 360, 248, 34, 16);
    s_goku_kame = [
        new Sprite(img, 237, 244, 26, 37),
        new Sprite(img, 267, 244, 32, 37)
    ]
    s_goku_ki_load = new Sprite(img, 450, 195, 19, 47);
    s_goku_kiBomb = [
        new Sprite(img, 316, 247, 10, 10),
        new Sprite(img, 301, 246, 13, 13),
        new Sprite(img, 516, 204, 17, 17),
        new Sprite(img, 480, 195, 29, 29)
    ]

    s_text = {
        FlappyBird: new Sprite(img, 59, 114, 96, 22),
        GameOver: new Sprite(img, 59, 136, 94, 19),
        GetReady: new Sprite(img, 59, 155, 87, 22)
    }
    s_buttons = {
        Rate: new Sprite(img, 79, 177, 40, 14),
        Menu: new Sprite(img, 119, 177, 40, 14),
        Share: new Sprite(img, 159, 177, 40, 14),
        Score: new Sprite(img, 79, 191, 40, 14),
        Ok: new Sprite(img, 119, 191, 40, 14),
        Start: new Sprite(img, 159, 191, 40, 14)
    }

    s_score = new Sprite(img, 138, 56, 113, 58);
    s_splash = new Sprite(img, 0, 114, 59, 49);

    s_numberS = new Sprite(img, 0, 177, 6, 7);
    s_numberB = new Sprite(img, 0, 188, 7, 10);

    s_numberS.draw = s_numberB.draw = function (ctx, x, y, num, center, offset) {
        num = num.toString();
        var step = this.width + 2;

        if (center) {
            x = center - num.length * (step - 2) / 2;
        }

        if (offset) {
            x += step * (offset - num.length);
        }

        for (var i = 0, len = num.length; i < len; i++) {
            var n = parseInt(num[i]);
            ctx.drawImage(img, step * n, this.y, this.width, this.height,
                    x, y, this.width, this.height)
            x += step;
        }
    }
}