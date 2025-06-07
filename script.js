'use strict';


window.onclick = function() {
    // **edo-man2 の取得**
    const edoman = document.querySelector(".edo-man2");

    if (!edoman) {
        console.error("edo-man2要素が見つかりません！");
        return;
    }

    // **江戸まんの初期位置を設定**
    let x = window.innerWidth / 3; // **画面の3分の1の位置からスタート**
    edoman.style.position = "absolute";  // **移動可能にする**
    edoman.style.left = x + "px";  // **初期位置をセット**

    const speed = 20;  // **移動速度（ピクセル単位）**

    // **キーボードの左右キーイベントを追加**
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {  
            x += speed;  // **右へ移動**
        } else if (event.key === "ArrowLeft") {  
            x -= speed;  // **左へ移動**
        }

        // **画面外に出ないように制限**
        x = Math.max(0, Math.min(window.innerWidth - edoman.offsetWidth, x));
        edoman.style.left = x + "px";
    });
};






// **onigiri要素を取得**
window.onload = function() {
    const onigiri = document.querySelector(".onigiri");

    if (!onigiri) {
        console.error("onigiri要素が見つかりません！");
        return;
    }

    function startFalling() {
        // **おにぎりの初期位置を設定**
       // **おにぎりの初期位置を設定**
        let x = 0;  // **画面の左端からスタート**
        let y = 150;  // **開始位置**
        let endX = Math.random() * 909 + 200;  // **右端の目標地点**
        let angle = Math.random() * 90 + 40;  // **落下角度 (20°〜60°の間)**
        let velocityX = (endX - x) / 100;  // **放物線の横方向速度**
        let velocityY = Math.sin(angle * Math.PI / 180) * 3;  // **放物線の縦方向速度**
        let rotation = 0;  // **回転**


        // **おにぎりのスタイル設定**
        onigiri.style.position = 'absolute';
        onigiri.style.top = `${y}px`;
        onigiri.style.left = `${x}px`;

        function updatePosition() {
            x += velocityX;
            y += velocityY;
            rotation += 3;  // **回転を追加**

            // **画面端で反射**
            if (x <= 0 || x >= window.innerWidth - 50) velocityX *= -1;  

            onigiri.style.top = `${y}px`;
            onigiri.style.left = `${x}px`;
            onigiri.style.transform = `rotate(${rotation}deg)`;

            requestAnimationFrame(updatePosition);
        }

        updatePosition();

        // **一定時間ごとに再スタート**
        setInterval(startFalling, 4000); // **2000ms (2秒) ごとに再スタート**
    }

    startFalling();
};


