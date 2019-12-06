// 変数宣言
// 3種類
// 一回しか代入しない場合/定数
const conpanyNamber = '000-0000-0000';

let num = '000-1234-5678';

// 変数名を見たら何が書いてあることが予想できるようにすることがポイント

// 一度宣言した変数は宣言し直すことができない
console.log(num);

// 文字列結合

// 文字列の都合 > +
console.log('電話番号は' + num + 'です');
// `${変数}文字列`
// テンプレートリテラルに書き換える
console.log(`電話番号は${num}です`);

// 計算
// 4則演算子
// + - * / %(除算) **(乗算)
// 食費

// 何日いるか？
// 1 / 31
console.log(27 + 31)
let days = 58;

const breakfirst = 15
const lunch = 100;
const dinner = 100;

// console.log((breakfirst + lunch + dinner) * days);

// if, 関数
// 1日の食費
// 300ペソ以内
// 100ペソ自由に使える
// console.log

// calc(breakfirst, lunch, dinner);

// function calc(b, l, d) {
//   let total = b + l + d;
//   console.log(`今日の食費は合計${total}ペソです`);
//   if (total <＝ 300) {
//     console.log('おめでとう!100ペソプレゼント!');
//   }
// }


// 画像以外の描画（レンダリング）が終わった後に実行
// レンダリングとはHTML/CSSなどのコードを解析したのちウェブブラウザーに表示されること
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["赤", "青", "黄", "緑", "紫", "橙"],
      datasets: [{
        label: '得票数',
        data: [100, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}, false);
