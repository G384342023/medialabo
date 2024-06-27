// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let kiroku = 0;

let kakak = document.querySelector('span#kaisu');

let p = document.createElement('p');

p.

hantei();
hantei();
hantei();
hantei();

// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

    let yoso = 4;

    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール
    kaisu += 1;
    kiroku += 1;

    if (kiroku < 4) {
        if (kotae === yoso) {
            console.log("正解です。おめでとう！");
            kiroku = 4;
        } else if (kotae < yoso) {
            console.log("まちがい。答えはもっと小さいですよ");
        } else {
            console.log("まちがい。答えはもっと大きいですよ");
        }
    } else if (kiroku === 4) {
        if (kotae === yoso) {
            console.log("正解です。おめでとう！");
        } else {
            console.log("まちがい。残念でした答えは" + kotae + "です。");
        }
    } else {
        console.log("答えは" + kotae + "でした。すでにゲームは終わっています");
    }
}
