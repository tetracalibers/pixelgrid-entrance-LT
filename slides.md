---
theme: penguin
class: 'text-center'
lineNumbers: false
fonts:
  provider: 'none'
  sans: '木漏れ日ゴシック'
  serif: 'ほのか新丸ゴシック'
  mono: 'IBM Plex Mono'
drawings:
  persist: false
  syncAll: false
layout: intro
---

<style>
  .slidev-layout {
    font-family: '木漏れ日ゴシックP';
  }
  .slidev-layout h1, .slidev-layout h2, .slidev-layout h3, .slidev-layout h4, .slidev-layout.intro h1 {
    font-family: 'ほのか新丸ゴシック' !important;
  }
  .slidev-layout code {
    font-weight: 500;
    font-family: 'IBM Plex Mono';
  }
  .slidev-layout samp {
    font-family: 'IBM Plex Mono';
  }
</style>

# 自己紹介

---
layout: presenter
presenterImage: '/tomixy.jpg'
---

<style>
  div.flex.items-center {
    height: 100%;
  }
</style>

# tomixy（菅野 亜実）

## 2002年生まれ => 現在20歳

<!--
改めまして、菅野亜実と申します。

先月20歳になりました。

tomixyという名で高校一年の頃から創作・発信活動を行っており、当初は理系や医療系の図解教材をつくって公開していました。

当時作っていた教材はこんな感じです。
-->

---

# 教材制作（GeoGebra・LaTeX）

<div class="flex justify-evenly items-center">
  <div><img class='rounded-lg h-sm wa' src='/edu-chem-atom-count.jpg' /></div>
  <div><img class='rounded-lg h-sm wa' src='/edu-physics-moment-of-force.jpg' /></div>
  <div><img class='rounded-lg h-sm wa' src='/edu-chem-acid.png' /></div>
</div>

<!--
GeoGebraという数式でグラフを描くツールで図解を作成し、それを印刷して紙に切り貼りしていたのですが、だんだん面倒になってきまして、作業をデジタル化するためにLaTeXという組版ソフトを触り始めたのがコンピュータとの出会いです。

しかしLaTeXも結構面倒なので、いろいろと自動化マクロを組んでいるうちにいつの間にかプログラミングをバリバリやるようになっていました。

その後の高校生活はフリーランスでCMS開発を受託し、卒業後はECサイト開発プロジェクトに参入してバックエンド・フロントエンド両面のメイン実装を担っていました。

当時は休日に有志を集めてプログラミング勉強会を開催していまして、その活動が上司の目に留まり、未経験社員向けのHTML・CSSの研修の講師を生業としていた時期もあります。
-->

---

# カラオケ記録アプリ（React）

<div class='flex -mx-12 justify-evenly items-center'>
  <img class='rounded-lg h-sm wa' src='/singhis-table.jpg' />
  <img class='rounded-lg h-sm wa' src='/singhis_add.png' />
</div>

<!--
どうでもいい話になりますが、趣味はカラオケで、十八番はJUDY AND MARYです。

曲別にシャープやフラットを微調整する人間なので、iTunes APIと連携させた記録アプリを自作して、愛用しています。
-->

---

<style>
  .logo-group__label {
    font-size: 1.5rem;
  }
  .logo-group {
    width: 100%;
  }
  .tech-logo {
    width: 100px;
    height: 100px;
    display: inline-block;
    opacity: .8;
  }
</style>

# 最近よく触る技術

<ul class="list-none">
  <li class='flex items-center mt-4'>
    <div class='logo-group__label'>language</div>
    <div class='flex justify-evenly logo-group'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="tech-logo"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" class="tech-logo" />
    </div>
  </li>
  
  <li class='flex items-center mt-4'>
    <div class='logo-group__label'>backend</div>
    <div class='flex justify-evenly logo-group'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" class="tech-logo" />
    </div>
  </li>
  
  <li class='flex items-center mt-4'>
    <div class='logo-group__label'>frontend</div>
    <div class='flex justify-evenly logo-group'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg" class="tech-logo" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" class="tech-logo" />
    </div>
  </li>
</ul>

<div class="text-center mt-12">このスライドは<samp>slidev</samp>製（<samp>Vue + Markdown</samp>）</div>

<!--
カラオケに行けない日は朝から晩までプログラミングをやっておりまして、メインはReactとNest.jsですが、作りたいもの次第でいろいろ触ります。
-->

---
layout: center
clicks: 4
---

<h1 class="text-center" v-if="$slidev.nav.clicks < 1">きっかけ</h1>

<template v-if="$slidev.nav.clicks === 1">
  <h2>「なぜわざわざHTMLを書く必要があるのか？</h2>
  <h2 class='mt-4 pl-8'>表示するだけならただのテキストでいいのでは？」</h2>
</template>

<template v-if="$slidev.nav.clicks > 1">
  <h2 class="text-center">Webの世界もバリアフリーでなければならない</h2>
  <div class="text-center mt-8">Webは今や「見る・触る・聞く」もの。どの手段で情報を得るかは人それぞれ。</div>
  <div class='text-center mt-8'>HTMLで見出し・段落の区切り・強調・ただの装飾などを区別しておけば、</div>
  <div class='text-center mt-4 mb-8'>ブラウザは見るユーザにも聞くユーザにも適切に伝えてくれる</div>
</template>

<h2 class="text-center" v-if="$slidev.nav.clicks > 2">Webの世界のバリアフリーを担保するにはHTMLだけでは不十分</h2>
<div class='text-center mt-8' v-if="$slidev.nav.clicks > 3">しかしそれを知る術が少ない</div>

<!--
こんな感じで、どちらかというとフルスタックまっしぐらだった私ですが、フロントエンドに情熱を置きたいと思ったきっかけは、HTML研修でこんな質問を受けたことでした。

（クリック）

「なぜわざわざHTMLを書く必要があるのか？表示するだけならただのテキストでいいんじゃないか？」と…

この質問に対し、私はこう答えました。

（クリック）

「見る、聞く、印刷する、など、様々な伝え方に対応するには、ブラウザが文脈を認識する必要がある」。

しかし、それって本当にHTMLだけで実現できるのか？とふと疑問に思いまして。

調べるうちに（クリック）WAI-ARIAという支援技術やスクリプトによるキーボード操作対応などといった手段を知りましたが、（クリック）何せ邦書が少なく、学ぶのには苦労を伴いました。
-->

---
layout: center
---

# hereafter = 教材開発 + フロントエンド開発

<!--
フロントエンドというユーザ体験に直結する分野で直接問題解決に携わるだけでなく、いつかその知見を教材制作にハイブリッドさせて、日本語で学ぶ術を増やしたいという思いを抱き、今ここにいます。

どうぞよろしくお願いいたします。
-->

---
layout: intro
---

# イメージでわかる<br />ページネーションAPI

<!--
フロントエンド開発では定番UIであるページネーションですが、バックエンドAPIの仕様によって実装方法が大きく変わるものでもあります。

今回は、各種ページネーションAPIを図解とGraphQLによるコードでイメージしながら、それぞれのトレードオフを探っていきたいと思います。
-->

---
layout: two-cols
---

<style>
  .get-target {
    color: #E3008C;
  }
  .col-left {
    margin-right: 2rem;
  }
</style>

# GraphQLとREST

<style>
  .language-json .token.boolean {
    color: cornflowerblue !important;
  }
  .language-json .token.property {
    color: pink !important;
  }
</style>

<samp>artistName</samp>と<samp>songName</samp>だけ欲しい…

|                                                    |                             |
| -------------------------------------------------- | --------------------------- |
| <samp>id</samp> | <samp>5</samp>|
| <samp class='get-target'>artistName</samp> | <samp class='get-target'>UNISON SQUARE GARDEN</samp> |
| <samp class='get-target'>songName</samp> | <samp class='get-target'>harmonized finale</samp> |
| <samp>jacketUrl</samp> | <samp>270311351_harmonized-finale.jpg</samp> |
| <samp>singKey</samp> | <samp>+5</samp> |
| <samp>rate</samp> | <samp>3</samp> |
| <samp>score</samp> | <samp>86</samp> |

::right::

<h3 class="text-center">REST API Request</h3>

```url
https://ex.app/api/song?id=5
```

<h3 class="text-center mt-5">GraphQL Query</h3>

```graphql {0|2-5|3-4}
{
  song(id: 5) {
    artistName
    songName
  }
}
```

<h3 class="text-center mt-5">Response</h3>

```json {3-6|4-5}
{
  "data": {
    "song": {
      "artistName": "UNISON SQUARE GARDEN",
      "songName": "harmonized finale"
    }
  }
}
```

<!--
ページネーションのお話に入る前に、GraphQLとは何か？を簡単にまとめてみます。

GraphQLは、レスポンスのデータ構造を（クリック）そのまま指定するような記法でサーバーとのデータのやり取りを実現する、API構築技術です。

何が欲しいのかを明確に示してリクエストを送るGraphQLでは、
GraphQLサーバー側でデータ全体を返す処理を実装するだけで、（クリック）リクエスト通りの（クリック）部分取得が実現できます。

同じエンドポイントから必要なデータだけを好きな組み合わせで取得できる。

これはコンポーネント単位でのフロントエンド開発を行う上でも嬉しい仕様ではないでしょうか。
-->

---

<style>
  .pagination-gallery {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 0.5fr 0.5fr;
    align-items: center;
    justify-items: center;
  }
  .caption {
    font-size: 1rem;
  }
  .caption::before {
    content: '（';
  }
  .caption::after {
    content: '）'
  }
</style>

<h1 class='text-center'>さまざまなページネーション</h1>

<div class="pagination-gallery">
  <div>
    <h2>ページ送りUI<span class='caption'>Google</span></h2>
    <img src='/google-pagination.png' class='w-sm' />
  </div>
  <div>
    <h2>Load More<span class='caption'>Google</span></h2>
    <img src='/google-load-more.png' class='w-sm' />
  </div>
  <div>
    <h2>Prev & Next<span class='caption'>GitHub</span></h2>
    <img src='/github-prev-next.png' class='w-sm' />
  </div>
  <div class='w-sm'>
    <h2>無限スクロール<span class='caption'>Google</span></h2>
    <img src='/google-infinite-load.png' class='w-xs' />
  </div>
</div>

<!--
さて、ページネーションと言ってもさまざまですが、この中で最も定番と言えるのは、ページ番号リンクを列挙する形のページ送りUIかと思います。
-->

---
layout: two-cols
clicks: 1
---

<style>
  .with-icon {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
  }
  .merit {
    color: #F06292;
  }
  .demerit {
    color: #29B6F6;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
  }
  .usecase {
    color: #607D8B;
  }
  .summary {
    font-size: 1.25em;
    color: #607D8B;
  }
  .offset-pagination__ul {
    list-style: none !important;
  }
  .offset-pagination__img {
    width: 37rem;
    max-width: 37rem;
    margin-left: -8rem;
    margin-top: 13rem;
  }
</style>

# Offset Pagination

<div class='w-2xl pl-8'>
  <div class='summary'>読み飛ばす数（相対位置）で管理</div>
  <ul class="mt-4 offset-pagination__ul">
    <li>
      <div class='merit with-icon'>
        <icon-park-outline-good-two />
        <span>任意のページのデータを得るクエリ（エンドポイント）を把握できる</span>
      </div>
    </li>
    <li>
      <div class="demerit with-icon">
        <icon-park-outline-bad-two />
        <span>新たに追加されたデータがあればそのデータの個数分ずれる</span>
      </div>
    </li>
    <li>
      <div class="with-icon usecase">
        <heroicons-solid-arrow-right />
        <span>ページ送り（追加頻度が少なく、位置を覚えやすい場合）</span>
      </div>
    </li>
  </ul>
</div>

::right::

<img src='/offset-pagination-demerit-before.png' class='offset-pagination__img' v-if="$slidev.nav.clicks < 1" />

<img src='/offset-pagination-demerit_tsp.png' class='offset-pagination__img' v-if="$slidev.nav.clicks === 1" />

<!--
ページ送りを実現するAPIは、欲しいページに入るまでのデータの数だけ読み飛ばす方式で実装されます。

1ページにデータを2つずつ表示する場合、2ページ目を取得したい時はoffsetを2として、2つ読み飛ばして取得することになります。

しかし、次のページをリクエストするまでにデータが追加されると、（クリック）当初予想していたページ分割とはズレが生じてしまうのが難点です。
-->

---
clicks: 2
---

<style>
  .with-icon {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
  }
  .merit {
    color: #F06292;
  }
  .demerit {
    color: #29B6F6;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
  }
  .usecase {
    color: #607D8B;
  }
  .summary {
    font-size: 1.25em;
    color: #607D8B;
  }
  .meta {
    color: #7986CB;
  }
  .ballon {
    position: relative;
    display: inline-block;
    min-width: 120px;
    max-width: 100%;
    margin-left: calc(1.25rem * 7 * 0.5);
    background: #e0edff;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 2rem;
  }
  .ballon::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    border: 15px solid transparent;
    border-bottom: 15px solid #e0edff;
  }
  ul.list-none {
    list-style: none !important;
  }
</style>

# Cursor Pagination

<div class="pl-8 mt-4 mb-8">
  <div class='summary'>「このデータまでは読んだ」という一意な<samp>Cursor</samp>（絶対位置）を決め、</div>
  <div class='summary mt-4'>次のリクエストを決めるための<span class='meta'>メタ情報</span>を渡す</div>
  <ul class='mt-6 ballon meta'>
    <li v-click="1">どこからどこまで読んだか（<samp>startCursor</samp>と<samp>endCursor</samp>）</li>
    <li v-click="2">次のページはあるか（<samp>hasNextPage</samp>）</li>
    <li v-click="2">前のページはあるか（<samp>hasPreviousPage</samp>）</li>
  </ul>
  <ul class="mt-12 list-none">
    <li>
      <div class="merit with-icon">
        <icon-park-outline-good-two />
        <span>新たに追加されたデータがあっても正しく続きを取得できる</span>
      </div>
    </li>
    <li>
      <div class="demerit with-icon">
        <icon-park-outline-bad-two />
        <span>直前のページ、直後のページの情報しかわからない</span>
      </div>
    </li>
    <li>
      <div class="with-icon usecase">
        <heroicons-solid-arrow-right />
        <span>無限スクロール、Moreボタン（頻繁に追加され位置が変動する場合）</span>
      </div>
    </li>
  </ul>
</div>

<!--
そんな問題を回避するため、頻繁に投稿が行われるSNSなどでは、無限スクロールや「もっと見る」ボタンが導入されるようになりました。

このような、どんどん続きを読むタイプのページネーションは、「ここまで読んだ」という情報を、データの数ではなく各データ固有のcursorという識別子で表すことで、途中でデータが追加されても影響を受けないように実装されます。

そして、データと共に（クリック）cursor範囲や（クリック）前後のデータの有無を返すことで、続けて前後のページをリクエストすることを容易にします。
-->

---
layout: center
---

# RelayCursor式のResponse

<h2 class="text-center">~ Thinking in Graphs ~</h2>

<!--
GraphQLによるCursor式ページネーション実装として有名なのが、Relayスタイルと呼ばれるものです。

せっかくのGraphQL実装ということで、そのレスポンスデータを、グラフ、つまり点と線による関係図で見てみましょう。
-->

---
layout: two-cols
---

# edgesとpageInfo

<style>
  .slidev-layout h1 {
    margin-bottom: -2rem;
    width: 100%;
  }
  .relay-response-example {
    margin-top: -0.5rem;
    width: 21.5rem;
    right: -8rem;
    position: relative;
  }
  .edge-tree {
    width: 36rem;
    margin-top: 20%;
    margin-left: -12.5%;
  }
  .relay-response-example img,
  .edge-tree img {
    width: 100%;
  }
  .rounded-lg img {
    border-radius: 0.5rem;
  }
</style>

<div class="edge-tree"><img src='/relay-cursor-pagination-edge-tree.png' /></div>

::right::

<style>
  .slidev-page-14 .slidev-code-wrapper {
    width: fit-content;
    margin-top: -2rem !important;
    margin-left: 6.5rem !important;
  }
  .language-json .token.boolean {
    color: cornflowerblue !important;
  }
  .language-json .token.property {
    color: pink !important;
  }
</style>

```json {all|7-10|6|5-11|4-19|20-25}
{
  "data": {
    "songsPage": {
      "edges": [
        {
          "cursor": "4",
          "node": {
            "artistName": "Whiteberry",
            "songName": "夏祭り"
          }
        },
        {
          "cursor": "5",
          "node": {
            "artistName": "UNISON SQUARE GARDEN",
            "songName": "harmonized finale"
          }
        }
      ],
      "pageInfo": {
        "startCursor": "4",
        "endCursor": "5",
        "hasNextPage": true,
        "hasPreviousPage": false
      }
    }
  }
}
```

<!--
グラフにおいて点はnode、結ぶ線はedgeと呼ばれ、Relay-styleページネーションの場合、nodeはデータストアにある一つのデータを表し、edgeは、データストアの特定の位置からデータを持ってくる、という操作を表しているようにも見えます。

そこで、（クリック）取り出したデータと（クリック）その位置情報であるcursorを（クリック）セットにしたものを、edgeという名前をつけて返します。

Relay-styleでは、（クリック）データのラッパーであるedgesと一緒に、（クリック）次のリクエストを決めるメタ情報をpageInfoとして返します。

そして、このpageInfoをもとに、次のリクエストをどう決めるのかがこのAPIの肝です。
-->

---
layout: center
---

# RelayCursor式のRequest

<dl class='text-center flex flex-col justify-center gap-4'>
  <div class='flex justify-evenly' v-click>
    <dt>取得開始場所</dt>
    <dd><samp>before | after</samp></dd>
  </div>
  <div class='flex justify-evenly' v-click>
    <dt>取得する数</dt>
    <dd><samp>first | last</samp></dd>
  </div>
</dl>

<!--
前後のページを得るには、（クリック）取得開始場所を指定するbeforeとafter、（クリック）取得する数を指定するfirstとlastという4つのパラメータを組み合わせてリクエストを作成します。
-->

---
clicks: 3
---

# get First Page

<style>
  .slidev-page-16 h1 {
    text-align: center;
  }
  .slidev-page-16 div.slidev-code-wrapper {
    width: 19rem;
    left: -2rem;
    top: 2rem;
  }
  .get-first-step {
    height: 300px;
    width: 42rem;
    position: relative;
    margin-top: -275px;
    margin-left: 19rem;
  }
</style>

```graphql {all|2}
{
  songsPage(first: 2) {
    edges {
      cursor
      node {
        artistName
        songName
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
```

<div class='get-first-step'>
  <div v-if="$slidev.nav.clicks < 2">
    <img src='/relay-cursor-pagination-get-first_step01.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 2">
    <img src='/relay-cursor-pagination-get-first_step02.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 3">
    <img src='/relay-cursor-pagination-get-first_step03.png' class='-ml-12' />
  </div>
</div>

<!--
まず、1ページ目を取得する場合は（クリック）firstのみを指定します。

afterやlastが指定されていないため、（クリック）データ全体の中から（クリック）firstの値分、前方のデータを取り出すことになります。
-->

---

<style>
  .slidev-page-17 h1, .slidev-page-17 h2 {
    text-align: center;
  }
  .slidev-page-17 div.slidev-code-wrapper {
    width: fit-content;
    left: -2rem;
    top: 2rem;
  }
  .get-next-page__step {
    height: 300px;
    width: 40rem;
    position: relative;
    margin-top: -275px;
    margin-left: 21rem;
  }
</style>

# get Next Page

## after === 直前のページのendCursor

```graphql {all|all|all|all|2}
{
  songsPage(first: 2, after: "cursor:2") {
    edges {
      cursor
      node {
        artistName
        songName
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
```

<div class='get-next-page__step'>
  <div v-if="$slidev.nav.clicks < 1">
    <img src='/relay-cursor-pagination-get-next_step01.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 1">
    <img src='/relay-cursor-pagination-get-next_step02.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 2">
    <img src='/relay-cursor-pagination-get-next_step03.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks > 2">
    <img src='/relay-cursor-pagination-get-next_step04.png' class='-ml-12' />
  </div>
</div>

<!--
次のページを取得する場合は、今のページの（クリック）最後のデータ（クリック）より後の、（クリック）最初の数件を取得したいため、（クリック）afterに直前のデータのcursorを指定します。
-->

---

<style>
  .slidev-page-18 h1, .slidev-page-18 h2 {
    text-align: center;
  }
  .slidev-page-18 div.slidev-code-wrapper {
    width: fit-content;
    left: -2rem;
    top: 2rem;
  }
  .get-prev-page__step {
    height: 300px;
    width: 40rem;
    position: relative;
    margin-top: -275px;
    margin-left: 21rem;
  }
</style>

# get Previous Page

## before === 直後のページのstartCursor

```graphql {all|all|all|all|2|all}
{
  songsPage(last: 2, before: "cursor:5") {
    edges {
      cursor
      node {
        artistName
        songName
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
```

<div class='get-prev-page__step'>
  <div v-if="$slidev.nav.clicks < 1">
    <img src='/relay-cursor-pagination-get-prev_step01.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 1">
    <img src='/relay-cursor-pagination-get-prev_step02.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks === 2">
    <img src='/relay-cursor-pagination-get-prev_step03.png' class='-ml-12' />
  </div>
  
  <div v-if="$slidev.nav.clicks > 2">
    <img src='/relay-cursor-pagination-get-prev_step04.png' class='-ml-12' />
  </div>
</div>

<!--
反対に、前のページを取得する場合は、今のページの（クリック）最初のデータ（クリック）より前の、（クリック）最後の数件を取得したいため、（クリック）beforeとlastを使うことになります。

（クリック）このような仕組みのため、cursor式のページネーションでは、直前のページと直後のページに移動する手段しか提供できません。

ここまで、詳しい実装コードの解説には及びませんでしたが、ざっくりとページネーションAPIのイメージをお伝えしました。
-->

---
layout: center
clicks: 1
---

<style>
  .mark {
    font-size: 1.5rem;
    background: linear-gradient(rgba(255, 255, 255, 0) 30%, #66ccff80 90%);
  }
  .font-serif {
    font-family: 'ほのか新丸ゴシック' !important;
  }
  .pagination-pattern {
    font-size: 0.8em;
    width: 100%;
    color: #607D8B;
    background-color: #66ccff30;
    padding: 1rem;
    border-radius: 2rem;
  }
  .right-side {
    width: 50%;
    margin-left: 50%;
  }
</style>

<h1 class='text-center'>Where Usability Comes From</h1>

<div 
  class="text-center flex flex-col gap-4" 
  v-if="$slidev.nav.clicks === 1"
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  :duration="100"
>
  <div class='font-serif'>ページネーションの場合は、</div>
  <div class='inline-flex gap-1 justify-center items-end font-serif'>
    <span class='mark'>リアルタイム性</span>
    <span>と</span>
    <span class='mark'>ユーザの動き</span>
    <span>が一つの鍵</span>
  </div>
  <ul class='list-none pagination-pattern text-left mt-4'>
    <li>
      <div>データの位置変動が低頻度 + ユーザが重要視するデータがある</div>
      <div class='right-side'>=> ページ送り（再検索しやすい）</div>
    </li>
    <li>
      <div>データの位置変動が高頻度 + 流し見中心</div>
      <div class='right-side'>=> スクロール（移動しやすい）</div>
    </li>
  </ul>
</div>

<!--
そのUIを採用することでどんな使いやすさが生まれるのか、（クリック）それはユーザ視点に立って判断する意識だけでは導き出せず、Webの仕組みへの理解が必要不可欠です。

そのための勉学だけでなく、こうして仕組みを視覚化して発信する活動も、積極的に続けていきたいと思います。
-->
