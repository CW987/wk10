Cameron

Initial Setup

https://reactnative.dev/docs/environment-setup

npx create-expo-app@latest

This console command is used to create the framework files, similarly to how vite did. Expo is essentially vite, with react native being the framework.

IOS simulator

Because Apple has locked down official IOS simulator support directly to mac OS, you cannot run an IOS simulator on windows. The only counter to this is to use your iPhone directly with expo go. However, due to Windows being Windows, it can't directly connect as the default connection type is lan.

npx expo start --tunnel

This command is used to start the client and server. On a mac, you can just use 'npx expo start' but on windows you have to add '--tunnel' to change the connection type from the default of lan to tunnel instead. I did add this to my package.json file, but it want to work still, so I'm having to ensure that it runs as a tunnel in the console instead.

https://stackoverflow.com/questions/64734935/how-do-you-set-default-connection-to-tunnel-with-expo

React native button

One of the other big issues was buttons. While other things such as divs are also replaced by <View> and <p> is replaced by <Text> in react native, buttons are a little tricker. The react native buttons don't work in the typical way that standard HTML buttons do. One big difference is that you use onPress instead of onClick, which kind of makes sense. What doesn't make sense is that you can't put <Text> elements inside it, so it's actually extremely F@8k!ng difficult to put text inside it and even more difficult to organise the text.

To counter this, we found Touchable Opacity, which basically works in the same way that standard HTML buttons do, except without the basic styling.

https://reactnative.dev/docs/button
https://reactnative.dev/docs/touchableopacity

Particle Effects

As part of improving the user experience, we decided adding particle effects would be nice. However, react native doesn't currently have any libraries that add particle effects. Trying out both of the below packages failed as they were both for previous versions of react native and didn't support the current version. So we would either have to go to a previous version of react native and lose some of our current features and have to redesign a large portion of the app 3 days in, or give up on this idea.

The other alternative was to use chatgpt to find a way to do this out of basic react native. Which I did. However, chatgpt is and always will be a terrible alternative. The code it popped out was understandably beyond me, with some of the parts such as image size, image source, speed, direction etc I could figure out, but I don't feel comfortable using code I don't understand. I was considering using it with the claim that it's basically an imported library. If it didn't come out with a big black box on the IOS version instead of the actual particle effects. So no particle effects for us!

https://www.npmjs.com/package/react-native-particles
https://github.com/flyskywhy/react-native-particles-bg
https://chatgpt.com/canvas/shared/67b5bb23a4408191a83f84a9e812aae7

---

Curtis

Initial set up
Requirements:

- Expo Go App on a physical device – ie. iPhone.
  o https://expo.dev/go
- Node.js
- Watchman
- For Mac Users: X Code and relevant iOS simulator package.
  o You don’t need to code in X Code (thankfully) but the simulator required it.
- Windows users: There is no iOS simulator support, if you have an iOS device there is a workaround using the app on the device but the settings in your test environment need to be changed so the app can find it, as the default connection is LAN.

1. Start set up with: npx create-expo-app@latest
   a. This console command is used to create the framework files, similarly to how Vite did. Expo is essentially Vite, with react native being the framework.
2. Verify that all the test environments work including on your phone. Run: npx expo start . You will need to append - - tunnel for the workaround on windows.
3. Once confirmed it is set up and working, run the reset that will put the sample code into a subfolder leaving you with clean working files: npm run reset-project
4. React Native does not directly manipulate the DOM like standard React, nor does it work with CSS and HTML. Everything is done in JavaScript / TypeScript. This changes things like <button> <p> <div>.
   a. <button> is now <TouchableOpacity> – works in the same was the HTML button just without any default styling.
   b. <div> is now <view>
   c. <p> is now <text>
5. Styling – Basic
   a. Text

React native button

One of the other big issues was buttons. While other things such as divs are also replaced by <View> and <p> is replaced by <Text> in react native, buttons are a little tricker. The react native buttons don't work in the typical way that standard HTML buttons do. One big difference is that you use onPress instead of onClick, which kind of makes sense. What doesn't make sense is that you can't put <Text> elements inside it, so it's actually extremely F@8k!ng difficult to put text inside it and even more difficult to organise the text.

To counter this, we found Touchable Opacity, which basically works in the same way that standard HTML buttons do, except without the basic styling.

https://reactnative.dev/docs/button
https://reactnative.dev/docs/touchableopacity

Particle Effects

As part of improving the user experience, we decided adding particle effects would be nice. However, react native doesn't currently have any libraries that add particle effects. Trying out both of the below packages failed as they were both for previous versions of react native and didn't support the current version. So we would either have to go to a previous version of react native and lose some of our current features and have to redesign a large portion of the app 3 days in, or give up on this idea.

The other alternative was to use chatgpt to find a way to do this out of basic react native. Which I did. However, chatgpt is and always will be a terrible alternative. The code it popped out was understandably beyond me, with some of the parts such as image size, image source, speed, direction etc I could figure out, but I don't feel comfortable using code I don't understand. I was considering using it with the claim that it's basically an imported library. If it didn't come out with a big black box on the IOS version instead of the actual particle effects. So no particle effects for us!

https://www.npmjs.com/package/react-native-particles
https://github.com/flyskywhy/react-native-particles-bg
https://chatgpt.com/canvas/shared/67b5bb23a4408191a83f84a9e812aae7

Resources
Expo Go app - https://expo.dev/go
Expo clear and reset (works only once) - https://docs.expo.dev/tutorial/create-your-first-app/#run-reset-project-script
React Native – setup environment and required files - https://reactnative.dev/docs/set-up-your-environment
Set default connection in Expo - https://stackoverflow.com/questions/64734935/how-do-you-set-default-connection-to-tunnel-with-expo
React Native Button - https://reactnative.dev/docs/button
React Native Touchable Opacity - https://reactnative.dev/docs/touchableopacity
NativeWind - https://www.nativewind.dev/
Simple React Native styling: https://medium.com/swlh/simple-styling-in-react-native-d44ddbd955e6
