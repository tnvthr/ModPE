function getOnline() {
    var conMan = ctx.getSystemService(ctx.CONNECTIVITY_SERVICE);
    var mobile = conMan.getNetworkInfo(android.net.ConnectivityManager.TYPE_MOBILE);
    var wifi = conMan.getNetworkInfo(android.net.ConnectivityManager.TYPE_WIFI);
    if (wifi.isConnected() || mobile.isConnected()) {
        return true;
    } else {
        return false;
    }
}