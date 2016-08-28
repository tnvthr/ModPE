//예)
email(이메일, 제목, 내용, 첨부파일경로)


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const Intent = android.content.Intent;
const Uri = android.net.Uri;
 
function email(address, subject, text, fileUri) {
   try {
        var file = java.io.File(fileUri);
        if (!file.exists()) {
            print ("파일이 없습니다.");
        }
        var uri = new Uri.fromFile(file);
        var it = new Intent(Intent.ACTION_SENDTO, new Uri.parse("mailto:"+address));
        it.putExtra(Intent.EXTRA_SUBJECT, subject);
        it.putExtra(Intent.EXTRA_TEXT, text);
        it.putExtra(Intent.EXTRA_STREAM, Uri.parse("file:/mnt"+uri));
        ctx.startActivity(it);
   } catch (e) {
        print(e + ", " + e.lineNumber)
   }
}
