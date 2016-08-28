//예)
vibrate(밀리초)


const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function vibrate(millisecond) {
vide = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
vide.vibrate(millisecond);
}