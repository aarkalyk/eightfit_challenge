# 8fit onboarding process

This project is a clone of an onboarding process of a popular fitness app **8fit**.

## Running

Install dependencies:

```
npm i
```

Start packager:

```
npm start
```

### iOS:

Run the app:

```
npm run ios
```

If you prefer Xcode rather than command line:

* open `./ios/eightfit.xcodeproj` in Xcode
* select a simulator or a device
* hit the Run button

### Android:

Have an Android emulator running (quickest way to get started), or a device connected

Run the app:

```
npm run android
```

## Thoughts on the task

I think the task went pretty good overall. Had a lot of fun working on it, especially on the animations. It was awesome to see how `android` app went from laggy to super smooth instantly after introducing `nativeDriver`😍 I never noticed it before. I've also created a couple of reusable components which I'm already planning to use in future projects. So I killed two 🐦 with one 🗿, and a lot of 🐞 along the way :) Although it looks pretty good, I think there's still room for improvement. For instance, `AgeEntry` and `HeightEntry` screens look suspiciously similar 🤔 I think they could share some more code between each other. Open to suggestions :)

##### Update 13.06.2018

Last night I felt an urge to refactor the code and I honestly could not resist it. Introduced eslint rules, created couple of HOC and utilized them in aforementioned `AgeEntry` and `HeightEntry`. They look a little better now :)
