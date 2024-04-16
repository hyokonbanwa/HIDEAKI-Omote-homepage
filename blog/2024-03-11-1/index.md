---
slug: 5
title: Github Actionを使ってGithub Pagesの更新自動化
authors: [omote]
tags: [GithubPages, GithubActions, docusaurus]
date: 2024-03-10T15:00
---

このブログは**Github Actions**でプッシュするだけで変更が**Github Pages**に反映されます。
設定ファイルは[https://github.com/hyokonbanwa/HIDEAKI-Omote-homepage/blob/main/.github/workflows/deploy.yml](https://github.com/hyokonbanwa/HIDEAKI-Omote-homepage/blob/main/.github/workflows/deploy.yml)にあります。
GitHUb Pagesにデプロイする方式には
1. [peaceiris/actions-gh-pages](https://github.com/actions/upload-pages-artifact)というアクションを使用してビルド内容を自動的に作成されるgh-pagesブランチにプッシュして、gh-pagesブランチをGitHub Pagesで参照してデプロイする方式
2. [actions/upload-pages-artifact](https://github.com/actions/upload-pages-artifact)と[actions/deploy-pages](https://github.com/actions/deploy-pages)を利用し、直接GitHub Pagesにデプロイする方式  
 <!-- dummy comment line for breaking list -->  
があることが分かり、(1)は変更内容の反映が遅い(数分)なのに対して、(2)はアクションが完了したら即座に反映されるため(2)を採用しました。
また、(2)はリポジトリに余計なブランチを増やさないというメリットもありました。しかし、私自身GitHub ActionsやGitHub Pagesに対する理解が薄く、どのようにGitHub Pagesが変更を検知して反映しているのかわからないため今後も勉強していきたいと思います。
