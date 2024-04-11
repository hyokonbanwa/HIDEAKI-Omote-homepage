---
title: 卒論の研究内容
authors: [omote]
tags: [research,卒論, Kosmos-2, VisualCommonsenseReasoning]
date: 2024-03-11T18:00
---



　卒論では**Kosmos-2**という既存のマルチモーダルモデル(MLLM)を使用して**Chain of thought**と**物体領域**によるマルチモーダルモデルによる説明性の実現を目指しました。

　マルチモーダルモデルを含むAIモデルにはなぜそのような出力をしたのかわからない**ブラックボックス性**の問題があります。しかし、最近自然言語処理分野でLLMに質問を入力した際、出力となる解答に加え解答に対する根拠となる思考過程を出力する**Chain of Thought（思考連鎖、CoT**)という研究が登場しました。私はこのCoTに着目しマルチモーダルモデルでの説明性の実現を卒業研究で目指しました。

　具体的には質問に対してテキストによる言語的説明だけでなく、物体領域による視覚的説明の両方を行えるモデルを構築しました。例えば下記の画像の左のようにAIモデルが画像に関する質問に答える際、言葉だけではどの人物を指しているかわかりません。
しかし、右のようにテキストに対応した領域をモデルが出力することで容易に人物を認識できるようになります。

![言語的説明+視覚的説明](./言語的説明+視覚的説明.png)


　下記画像のようにマルチモーダルモデルのKosmos-2に画像と質問文と解答選択肢と画像内の物体の領域を入力し、根拠テキストとそれに含まれる物体の領域と解答を出力させることで研究を実現しました。データセットは**Visual Commonsense Reasoning**という既存の領域付多選択式質問応答データセットを利用しました。
![VCR-CoTモデルへの入出力](./VCR-CoTモデルへの入出力.png)




<!-- export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_! -->
