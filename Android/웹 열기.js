//예)
webPage("http://www.naver.com/")


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const Intent = android.content.Intent;

function webPage(url) {
    try {
       	var uri = new android.net.Uri.parse(url);
        var it = new Intent(Intent.ACTION_VIEW, uri);
        ctx.startActivity(it);
    } catch (e) {
        print(e + ", " + e.lineNumber)
    }
}
