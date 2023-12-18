$(document).ready(showAlert);


function showAlert(){
    alert
}




// 獲取用戶輸入
var userInput = prompt('請輸入您在網站設定的事項：');

// 將用戶輸入顯示在 alert 中
if (userInput !== null) {  // 如果用戶按下取消，prompt 會返回 null
    alert('您在網站設定的事項是：' + userInput);
} else {
    alert('您取消了輸入。');
