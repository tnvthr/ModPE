//예)
isExistApp("com.kakao.talk")


function isExistApp(packageName) {
    ctx.runOnUiThread(new java.lang.Runnable({ //쓰레드
        run: function() {
            try { //오류확인문
                var startLink = ctx.getPackageManager().getLaunchIntentForPackage(packageName);
                //패키지 매니저 확인
                if (startLink == null) { //startLink가 null 일때
                    print("앱이 설치되지 않았습니다.")
                } else { //startLink가 null이 아닐때
                    print("앱이 설치되어 있습니다.")
                }
            } catch (e) { //오류확인
                print(e + ", " + e.lineNumber) //오류메시지, 줄
            }
        }
    }));
}
