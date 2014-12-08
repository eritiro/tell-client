read -p "Change config.xml and press Enter to continue"
cordova prepare --release
cordova compile --release
cd platforms/android/out
jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore tell-release.keystore Tell-release-unsigned.apk tell-release
rm Tell-release.apk 
zipalign -v 4 Tell-release-unsigned.apk Tell-release.apk

