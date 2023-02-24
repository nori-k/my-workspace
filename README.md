# MyWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## 動作手順

1. `git clone`して手元にこのリポジトリを置く
2. workspace の root で`npm install`する
3. `docker-compose up` して
   - user-service 用の DB を起動する
   - post-service 用の DB を起動する
4. `cd ./apps/user-service` して `npx prisma generate`,`npx prisma migrate dev`
5. `cd ./apps/post-service` して `npx prisma generate`,`npx prisma migrate dev`
6. DB が migrate してテーブルができていることを確認
7. `nx run-many --target=serve --all=true`で bff, user, post のサービスを起動する

## note

今回下記の対応はしていない

- fastify, mercurius 構成 => serve でうまく動かない症状が出たため
- 完全な CRUD 実装 => post-service のみ RESTAPI として CRUD が行える
- production に向けた deploy 用の設定 => sample なのでローカル開発できるところまで
- lint や test, tsconfig などの設定 => 取り合えずデフォルト設定

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
