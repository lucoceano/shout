package com.shout;

import com.BV.LinearGradient.LinearGradientPackage;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new CookieManagerPackage(),
                new SnackbarPackage(),
                new RNDeviceInfo(),
                new PhotoViewPackage(),
                new LinearGradientPackage(),
                new VectorIconsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}
