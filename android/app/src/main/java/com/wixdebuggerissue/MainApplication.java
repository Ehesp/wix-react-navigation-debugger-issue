package com.wixdebuggerissue;

import android.app.Application;

import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
// import io.invertase.firebase.RNFirebasePackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

   @Override
   public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
   }

   @Override
   public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
        new VectorIconsPackage()
    );
   }

   @Override
   public void onCreate() {
     super.onCreate();
     SoLoader.init(this, /* native exopackage */ false);
   }
}
