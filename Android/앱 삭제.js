//예)
removeApp(com.kakao.talk)


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const Intent = android.content.Intent;
 
function removeApp(packageName) {
    try {
        var uri = new android.net.Uri.fromParts("package", packageName, null);
        var it = new Intent(Intent.ACTION_DELETE, uri);
        ctx.startActivity(it);
        print(uri);
    } catch (e) {
        print(e + ", " + e.lineNumber)
    }
}
