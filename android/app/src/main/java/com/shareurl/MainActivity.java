package com.shareurl;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import android.os.Bundle;
import android.content.Intent;
import androidx.annotation.Nullable;


public class MainActivity extends ReactActivity {
  @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Intent intent = MainActivity.this.getIntent();
                Bundle bundle = new Bundle();
                bundle.putString("url", intent.getStringExtra(Intent.EXTRA_TEXT));
                bundle.putString("recentURL", intent.getStringExtra(Intent.EXTRA_SUBJECT));
                return bundle;
            }
        };
    }
      @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    setIntent(intent);
  }


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "shareURL";
  }


}
