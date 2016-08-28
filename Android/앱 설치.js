//예)
installApp(apk경로)


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const Intent = android.content.Intent;
 
function installApp(apkUri) {
    try {
        var file = java.io.File(apkUri);
        if (!file.exists()) {
            print("apk 파일이 없습니다.")
        }
        var apkFile = new android.net.Uri.fromFile(file);
        var it = new Intent(Intent.ACTION_VIEW);
        it.setDataAndType(apkFile, "application/vnd.android.package-archive");
        ctx.startActivity(it);
    } catch (e) {
        print(e + ", " + e.lineNumber)
    }
}
