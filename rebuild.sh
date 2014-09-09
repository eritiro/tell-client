rm platforms/android/project.properties
android update project --subprojects --path "platforms/android" --target android-19 --library "CordovaLib"
android update project --subprojects --path "platforms/android" --target android-19 --library "FacebookLib"
cd platforms/android/
ant clean
cd FacebookLib
ant clean
ant release
cd ../../../www
bower install
cd ..
cordova build android