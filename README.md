# コマンド

## migrationの作成と実行を同時に行う

```
npx prisma migrate dev 
```

「--name init」をつけるとmigrationのファイル名を「作成日時_指定したファイル名」とすることができる。

## migrationファイルの作成のみ

```
npx prisma migrate dev --create-only
```

作成したmigarationを適用する

```
npx prisma migrate dev
```

## フォーマット

```
npx prisma format
```

# ステージングおよび本番でのMigrate

```
npx prisma generate && npx prisma migrate deploy
```