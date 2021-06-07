# JSONP: search videos on Youtube with auto suggested keywords

## 功能：
* JSONP使用<script>實現跨域get請求
* 隨輸入的不同，請求youtube搜尋會自動跳出的相關熱門搜尋關鍵字

## 注意：
* 拆解url
  * q=... （搜尋詞
  * callback=... （callback fucntion

## 問題：
* 不確定JSONP請求和callback寫在哪
  （都寫在index.html or 都寫在同一個js檔案 or 還是分開寫在不同js檔案)

