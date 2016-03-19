var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
    banner: 'ca-app-pub-1472032270151654/6341808789',
        interstitial: 'ca-app-pub-1472032270151654/9295275184'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-1472032270151654/4725474780',
        interstitial: 'ca-app-pub-1472032270151654/6202207984'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-1472032270151654/9801475987',
        interstitial: 'ca-app-pub-1472032270151654/2278209184'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
   // if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner, 
        isTesting: true,
        overlap: false, 
        offsetTopBar: false, 
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        bgColor: 'black'
    } );
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}