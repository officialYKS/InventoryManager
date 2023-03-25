# ReactNativeInitPJ

## iOSビルド前に行うコマンド
podインストール
```
cd ios
pod install
```


## iOSのデバッグビルドコマンド
- 本番環境(mainブランチ)
```
npx react-native run-ios --configuration Debug --scheme inventoryManager
```
- 開発結合/テスト環境(developブランチ)
```
npx react-native run-ios --configuration DevDebug --scheme inventoryManager-dev
```

- 機能開発環境(feature/~~ブランチ)
```
npx react-native run-ios --configuration FeatureDebug --scheme inventoryManager-feature
```