// 小互動：把今年顯示到頁尾
document.addEventListener('DOMContentLoaded', function(){
  const el = document.getElementById('year');
  if(el) el.textContent = new Date().getFullYear();
});
