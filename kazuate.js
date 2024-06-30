// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を1回実行する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  kaisu++;  // 回答回数を1増やす
  
  // 回数と予想を表示
  document.getElementById('kaisu').textContent = kaisu;
  document.getElementById('answer').textContent = yoso;

  // 結果を表示するための変数
  let result = "";

  if (kaisu > 3) {
    result = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    result = "正解です．おめでとう!";
  } else {
    if (kaisu === 3) {
      result = "まちがい．残念でした答えは " + kotae + " です．";
    } else {
      if (yoso < kotae) {
        result = "まちがい．答えはもっと大きいですよ";
      } else {
        result = "まちがい．答えはもっと小さいですよ";
      }
    }
  }

  // 結果を表示
  document.getElementById('result').textContent = result;
}