import React from "react"

const Skill: React.FC = () => {
  return (
    <div className="pb-8">
      <div className="text-4xl">Skill</div>
      <div className="text-center pb-4">現在ホットな順に書いていきます</div>
      <div className="grid grid-cols-2 gap-4 pb-4">
        <div>
          <div className="text-3xl pb-2">TypeScript</div>
          <div>
            ここ1年くらいフロントエンド中心に書いています。React,Vueの経験がありますが最近よく書いているのはReactです。(ちなみにこのポートフォリオはGatsby.jsを用いて制作しています。)
            最近redux-toolkitを使ってみたのですが全部型で管理できていいですね。
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">Python</div>
          <div>
            3年くらい継続的に触っています。スクレイピングからデータ整形、簡易apiサーバー作成、深層学習(pytorch)など様々な経験があります。
            実験的コードを書くときはpythonを用いることが多いです。
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">C/C++</div>
          <div>
            実際に使ったのは2年ほどで競技プログラミング(AtcoderID:doradorasuki)やインターンでのQNX向けドライバ制作体験、OS自作本やCコンパイラ開発(途中)などに取り組みました。
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">C#</div>
          <div>
            4ヶ月ほど使いました。UnityにてARアプリケーションの開発を行い、学祭にて展示しました。
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skill
