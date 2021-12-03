package com.arkhamcards;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;
import android.content.Context;

import java.util.List;

import androidx.annotation.Nullable;


public class MainApplication extends NavigationApplication {

  @Override
  public void onCreate() {
    super.onCreate();
    // registerExternalComponent("RNNCustomComponent", new FragmentCreator());
  }

  private final ReactNativeHost mReactNativeHost =
    new NavigationReactNativeHost(this) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage();
      }

      @Override
      public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      public List<ReactPackage> getPackages() {
        return new PackageList(this).getPackages();
      }
    };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  protected void attachBaseContext(Context context) {
    super.attachBaseContext(context);
  }
}

